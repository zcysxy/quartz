import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: false,
  showComma: false,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

			if (fileData.frontmatter?.sup) {
				segments.push(<a class="meta-sup" title="parent note" href={fileData.frontmatter.supslug}>{fileData.frontmatter.sup}</a>)
			}

      if (fileData.dates?.created) {
        segments.push(<span class="meta-created" title="created time"><Date date={fileData.dates.created} locale={cfg.locale} /></span>)
      }
      if (fileData.dates?.modified) {
        segments.push(<span class="meta-modified" title="modified time"><Date date={fileData.dates.modified} locale={cfg.locale} /></span>)
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>{displayedTime}</span>)
      }

			// Other metadata segments can be added here
			if (fileData.frontmatter?.state) {
				segments.push(<span class="meta-status" title="note status">{fileData.frontmatter.state}</span>)
			}

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
