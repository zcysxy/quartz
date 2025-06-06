// import rehypeImageCaption from "rehype-image-caption"
import { QuartzTransformerPlugin } from "../types"
import type { ElementContent } from "hast"
import { isElement } from "hast-util-is-element"
import { visit } from "unist-util-visit"

const isImage = (node: ElementContent): boolean => {
    try {
        if (node.type === "mdxJsxFlowElement" && ["astro-image", "img"].includes(node.name ?? "")) {
            return true;
        }
        return isElement(node, "img");
    } catch {
        return false;
    }
};

export const FigureCaptions: QuartzTransformerPlugin = () => {
  return {
    name: "FigureCaptions",
    htmlPlugins() {
      // return [[rehypeImageCaption]]
	  return [
			() => {
				return (tree, _) => {
					visit(tree, "element", (node) => {
						const [firstChild] = node.children;
						if (!firstChild) return;
						if (!(node.tagName === "p" && isImage(firstChild))) return;

						let caption: string | undefined;
						// If the image has a title
						if (firstChild.properties?.title) {
						caption = firstChild.properties.title;
						} else if (firstChild.properties?.alt) {
						caption = firstChild.properties.alt;
						} else {
						return;
						}

						node.tagName = "figure";
						node.children = [
							firstChild,
							{
								type: "element",
								tagName: "figcaption",
								properties: {},
								children: [
									{
										type: "text",
										value: caption as string
									}
								],
							},
						];
					});
				}
			}
	  ]
	}
  }
}

