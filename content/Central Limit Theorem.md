---
{"publish":true,"title":"Central Limit Theorem","created":"2022-11-04T12:18:06","modified":"2025-05-22T00:53:11","cssclasses":""}
---


# Central Limit Theorem

Let $\{ X _i \}_{i=1}^{n}$ be a set of i.i.d. [[Random Variable]]s with same [[Expectation\|Mean]] $\mu$ and [[Variance]] $\sigma^{2} < +\infty$. Denote $\overline{X} = \sum^{n}_{i=1}X _i /n$. Then
$$
\frac{\overline{X} - \mu}{\sigma / \sqrt{ n }} \overset{d}{\longrightarrow} Z \sim \mathcal{N}(0,1),
$$
where $d$ means **convergence in distribution**.

- [~] Also holds for multi-variate distributions: $\sqrt{ n }(\overline{X}-\mu)\overset{ d }{ \to }\mathcal{N}(0,\Sigma)$.

## Proof

If $X _i$ has [[Moment Generating Function\|MGF]], we can use MGF to prove the theorem. To be more general, we use [[Characteristic Function]]. WLOG, we can assume $\mu = 0, \sigma = 1$. Let $\phi(t)$ be the characteristic function of $X _i$. Then we have
$$
\phi(0) = 1, \quad \phi'(0) = i\mathbb{E}[X _i] = 0, \quad \phi''(0) = - \mathbb{E}[X _i^{2}] = -1.
$$

Therefore,
$$
\lim_{ t \to 0 } \frac{\phi(t) - \left( 1 - \frac{1}{2}t^{2} \right)}{t^{2}} = \lim_{ t \to \infty } \frac{1 - \frac{1}{2}t^{2} + o(t^{2}) - \left( 1 - \frac{1}{2}t^{2} \right)}{t^{2}} = 0.
$$

And the characteristic function of $\sqrt{ n }\overline{X}$ is
$$
\phi _{\overline{X}}(t) = \mathbb{E}[e^{it \sqrt{ n }\overline{X}}] = \prod_{i=1}^{n} \mathbb{E}[e^{it/\sqrt{ n } X _i}] = \phi\left( \frac{t}{\sqrt{ n }} \right)^{n}.
$$

Then we have
$$
\lim_{ n \to \infty } \left| \phi\left( \frac{t}{\sqrt{ n }} \right)^{n} - \left( 1 - \frac{t^{2}}{2n} \right)^{n} \right|  \le \lim_{ t \to \infty } n\left| \phi\left( \frac{t}{\sqrt{ n }} \right) - \left( 1 - \frac{t^{2}}{2n} \right) \right| = \lim_{ n \to \infty } t^{2} \cdot 0 = 0.
$$

Therefore,
$$
\lim_{ n \to \infty } \phi _{\overline{X}}(t) = \lim_{ n \to \infty } \left( 1 - \frac{t^{2}}{2n} \right)^{n} = e^{-\frac{1}{2}t^{2}},
$$

which is the CF of standard [[Normal Distribution]]. By the inverse property and [[Convergence of Random Variables#Convergence of Characteristic Functions]],
$$
\sqrt{ n }\overline{X} \overset{d}{\longrightarrow} Z \sim \mathcal{N}(0,1).
$$

## Sup-Norm Approximation Error: Berry-Essèen Theorem

Suppose $\mathbb{E}|X_1|^{3}<+\infty$. Then
$$
\sup_{t}\left| P(Z_n\le t)-\Phi(t) \right| \le \frac{33}{4}\frac{\mathbb{E}|X_1-\mu|^{3}}{\sqrt{n}\sigma ^{3}}.
$$
