---
{"publish":true,"title":"Exponential Family","created":"2023-11-12T21:15:45","modified":"2024-12-10T01:14:08","cssclasses":"","aliases":null,"type":"note","sup":["[[Probability Theory]]"],"state":"[[%wip]]"}
---


# Exponential Family

A family of univariate [[Probability Density Function\|PDF]]/[[Probability Mass Function\|PMF]] is said to be **exponential** if it can be expressed as:
$$
f(x ; \theta)=c(\theta) h(x) e^{t(x) q(\theta)}
$$
where $c(\theta) \geq 0, h(x) \geq 0$.
A joint [[Probability Density Function\|PDF]] for a multivariate distribution is called exponential if
$$
f(x ; \theta)=c(\theta) h(\boldsymbol{x}) e^{\sum_{j=1}^k t_j(\boldsymbol{x}) q_j(\theta)}
$$
If $\theta\in\R^{k}$, such distribution is said to be in a $k$-parameter exponential family.

- $c(\theta)$ is the **normalizing constant**.
- $h(x)$ is the **base measure**.
- $\exp(q(\theta)^Tt(x))$ is the **exponential tilt** that up(down)-weights the base measure.
- $t(x)$ is a **sufficient statistic** w.r.t. the *natural* parameter space
  $$
  \Theta= \left\{  \theta:\int h(x)e^{q(\theta)^Tt(x)} \d x < \infty \right\}.
  $$

To verify if some family of distributions is of exponential type, we must be able to identify the functions $c(\theta), h(x), t(x)$ and $q(\theta)$.

Examples:

- [[Bernoulli Distribution]]: $f(x;p) = (1-p)e^{x \log \frac{p}{1-p}}$
- [[Binomial Distribution]]: $f(x;n,p) = {n \choose x}p^{x}(1-p)^{n-x}$
- [[Poisson Distribution]]: $p(n;\lambda) = e ^{-\lambda }(n!)^{-1}e^{n \log \lambda}$
- [[Normal Distribution]]: $(2\pi)^{-n /2} \sigma ^{-n}e^{n \mu^{2}}e^{-\left( \sum x _i^{2} - 2\left( \sum x_{i} \right)\mu \right) / \sigma^{2}}$
- [[Exponential Distribution]]

## MLE for Exponential Family

Due to exponential family's special form of the likelihood, the [[Maximum Likelihood Estimation\|MLE]] estimator of $\theta$ enjoys nice properties. Suppose $q(\theta)=\theta\in\R^{k}$.
We first note that the inverse normalizing constant is infinitely differentiable:
$$
\frac{ \partial ^{p} }{ \partial ^{j_{1}}\theta_{1} \dots \partial ^{j_{k}}\theta_{k} } \left( \frac{1}{c(\theta)} \right) =\int h(x)t_{1}^{j_{1}}(x) \dots t_{k}^{j_{k}}(x)e^{\theta^{T}t(x)} \d x,
$$
where $j_{i}\in\N$ and $p=\sum j_{i}$.
Therefore, the derivative of the log-likelihood $\operatorname{LL}(\theta \given x)$ is
$$
\begin{aligned}
\operatorname{LL}'(\theta) =& \frac{ \mathrm{d} }{ \mathrm{d}\theta } \left( \log \left(c(\theta)h(x)e^{\theta ^Tt(x)} \right) \right ) \\
=& \frac{c'(\theta)}{c(\theta)} + t(x) = -c(\theta)\frac{ \mathrm{d} }{ \mathrm{d}\theta }\left( \frac{1}{c(\theta)} \right)  + t(x)\\
=& t(x) - \int c(\theta)h(x)t(x)e^{\theta ^Tt(x)} \d x\\
=& t(x) - \mathbb{E}_{\theta}[t(X)].
\end{aligned}
$$
Then, the MLE estimator of $t$, which is the zero of the derivative, satisfies $\mathbb{E}_{\hat{\theta}_{\mathrm{MLE}}}t(X) = t(x)$, indicating that MLE is a [[Method of Moments\|moment estimator]].
