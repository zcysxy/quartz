---
{"publish":true,"title":"f-Divergence","created":"2023-05-09T21:45:32","modified":"2025-06-01T03:40:16","cssclasses":""}
---


# f-Divergence

For two distributions $P$ and $Q$ such that $Q>0$ whenever $P>0$, and a convex real function $f$ on $[0,+\infty)$ with $f(1) = 0$ and $f(0) = \lim_{ t \to 0+ }f(t)$, we can define
$$
D_{f}(P\|Q) = \int f\left( \frac{\d P(x)}{\d Q(x)} \right)\d  Q(x) \, \d x = \mathbb{E}_{q} f(p/q),
$$
where the second equality holds when $p$ and $q$ are densities of $P$ and $Q$ respectively. $D_{f}(P\| Q)$ is called the ==f-divergence== between $P$ and $Q$.

## Examples

- Letting $f(x) = 1 /2|x-1|$ gives the [[Total Variation Distance]]
- Letting $f(x) = x \log x$ gives the [[KL Divergence]]
- Letting $f(x) = 1 /2(\sqrt{ t }-1)^{2}$ gives the squared [[Hellinger Distance]]
- Letting $f(x) = (x-1)^{2}$ gives the chi-square divergence

## Properties
