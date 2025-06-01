---
{"publish":true,"created":"2022-05-28T03:34:21","modified":"2025-06-01T02:55:26","cssclasses":"","type":"note","aliases":null,"sup":["[[Machine Learning]]","[[Information Theory]]","[[Statistics]]","[[f-Divergence]]"],"state":"done"}
---


# KL Divergence

$$
D_{\mathrm{KL}}(P \| Q)=\mathbb{E}_{\mathrm{x} \sim P}[\log \frac{P(x)}{Q(x)}]=\mathbb{E}_{\mathrm{x} \sim P}[\log P(x)-\log Q(x)]
$$

> [!thm] Properties
>
> 1. Generally $D_{KL}(P||Q) \neq  D_{KL}(Q||P)$
> 2. $D_{KL} \geq 0$
> 3. $D_{KL}(P||Q) = 0 \Rightarrow P \doteq Q$
>
> > [!pf]-
> >
> > 1. Since $-\log$ is a convex function, by [[Jensen Inequality]] we have
> >
> > $$\begin{aligned}
> > D_{KL}(P||Q) &= \sum P(x)(-\log \frac{Q(x)}{P(x)})\\
> > &\geq -\log (\sum P(x)\frac{ Q(x)}{P(x)})\\
> > &= - \log 1\\
> > &=0
> \end{aligned}$$

KL divergence measures how two probability distributions are different from each other: the more similar two distributions are, the smaller their KL divergence is. For example, if two distributions' KL divergence is 0, iff they are almost everywhere the same. ^88c6e5

For discrete variables, KL divergence is the **extra amount of information** needed to send a message containing symbols drawn from probability distribution P, when we use a code that was designed to minimize the length of messages drawn from probability distribution Q; or conversely, is the **information gain** achieved if $P$ would be used instead of $Q$, which is currently used. ^103d70
