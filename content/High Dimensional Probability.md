<div class="embed">---
{"publish":true,"title":"High Dimensional Probability","created":"2023-05-09T19:38:43","modified":"2025-06-04T02:18:27","cssclasses":"","aliases":null,"type":"note","banner":"https://lh3.googleusercontent.com/Rs2iZI77DywOVUtFprm9d5SQqAy-76Q4stgKQ0xS5XO0oqcMfvXUvtoYbRi8txBI26i1L7-4alpYn0CXdnPUyEfaWtriHcNN1lTfZpY=s2500","banner_icon":"🤹","sup":["[[Probability Theory]]","[[Stochastic Process]]","[[Math]]"],"state":"[[%wip]]"}
---


# High-Dimensional Probability

High-dimensional probability theory studies a high-dim random vector $X\in\R^{n}$ and its transformation (high-dim functions). Without any additional structure, there is nothing special about this random vector. In high-dim probability, we always assume $X$ has **independent** (or **weakly** dependent) coordinates, i.e., $X = (X_{1},\dots,X_{n})$ where $X_{i}$ are independent random variables.
Suppose $X_i$ are iid, the very first result we have is regarding its variance:
$$
\Var(X) = \Cov(X_{1},\dots,X_n) = n\Var(X_{1}).
$$
Such a factorization into the dimension $n$ and one-dim property is called ==tensorization==, a key technique in high-dimensional probability.



**Applications**:

- [[Statistical Learning]]
- Compressed sensing
- random matrices
    - covariance matrix
    - random graphs
- Sampling
- Optimal transport
- Gaussian approximation

## Concentration of Measure

Consider the simplest form: $f(x_{1},\dots,x_n) = \frac{1}{n}\sum_{i=1}^{n}x_i$. If $\{ X_{i} \}_{i=1}^{\infty}$ is IID and has a finite mean, by the strong [[Central Limit Theorem]], we know $f(X) \overset{a.s.}{\to} \mathbb{E}[X_{1}]$. We ask

> [!qn]
> 1. How about general functions?
> 2. How fast is this convergence? (non-asymptotic)

> [!thm] Informal Principle
> If $X = \{ X_i \}_{i=1}^{n}$ is IID, then $f(X) \approx  \mathbb{E}f(X)$ provided that $f$ is "smooth" enough, i.e., $f$ does not depend too heavily on any of its coordinates.

- [[Chebyshev Inequality]]
- [[Hoeffding's Inequality]]
    - [[Azuma]]
- [[Poincare Inequality]]
- [[Chernoff Bound]]
- [[Sobolev Inequality]]
- [[Transportation Inequality]]

## Suprema of Stochastic Processes

> [!qn]
> How large is $\mathbb{E}f(X)$?

> [!ex]
> - L2 error: $\| X - \hat{X} \|_{2} = \sup_{v\in S^{d-1}}\left|\left< v, (X-\hat{X})v \right>\right|$.
> - Convex conjugate: $f^{*}(x)=\sup_{y\in\R^{n}}\{ \left< y,x \right> - f(y) \}$

> [!thm] Informal Principle
If $t\mapsto Y_{t}$ is "smooth", then $\mathbb{E}[\sup_{t\in T}Y_t]$  can be controlled by the complexity of $T$.
</div>