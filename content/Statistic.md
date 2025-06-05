---
{"publish":true,"title":"Statistic","created":"2025-05-21T19:18:56","modified":"2025-06-03T15:51:27","cssclasses":"","state":"[[%wip]]","sup":["[[Statistics]]"],"aliases":null,"type":"note"}
---


# Statistic

A ==statistic== is some *measurement* taken directly from the sample.
Formally, a statistic is a [[Measurable]] function $T: \mathcal{X}\to \R^{k}$.
A statistic transforms the sample into some measurement of the sample.
Notably, a statistic acts on the sample, but not the underlying distribution. And usually we want to use the statistic to infer something about the underlying distribution.

- [@] For example, the sample average $T(X_{1},\dots,X_n) = \frac{1}{n}\sum_{i=1}^{n}X_{i}$, is a statistic, which approximates the [[Expectation\|Mean]] of the underlying distribution.

More generally, a statistic can be a measurable functional: $T : \mathcal{X}\to \mathcal{T}$, where $\mathcal{T}$ is some function space.

- [@] For example, the empirical CDF $T(X_{1},\dots,X_n) = \frac{1}{n}\sum_{i=1}^{n}\mathbb{1} \{ x \le  X_i \}$, is a statistic, which is a function on $\R$ and approximates the CDF of the underlying distribution.

## Statistic is Random

Being a function of random variables, a statistic is also a [[Random Variable]].
Thus, if a statistic is an estimator of some function on the underlying distribution, we can discuss its [[Convergence of Random Variables\|convergence properties]].

## Linear Statistic

A ==linear statistic== is a statistic that can be expressed as a linear combination of the sample observations.

Formally, a linear statistic can be written as:
$T(X_1, X_2, \ldots, X_n) = \sum_{i=1}^{n} a_i X_i$$
where $a_i$ are constants that do not depend on the sample values.

- [@] The sample mean $\bar{X} = \frac{1}{n}\sum_{i=1}^{n}X_{i}$ is a linear statistic where each $a_i = \frac{1}{n}$.
- [@] The sample variance $S^2 = \frac{1}{n-1}\sum_{i=1}^{n}(X_i - \bar{X})^2$ is not a linear statistic, as it involves squared terms.

Linear statistics have several desirable properties:

1. If the original random variables $X_i$ are normally distributed, then any linear statistic is also normally distributed.
2. The [[Expectation\|expected value]] of a linear statistic is a linear combination of the expected values of the individual observations:
   $\mathbb{E}[T(X_1, X_2, \ldots, X_n)] = \sum_{i=1}^{n} a_i \mathbb{E}[X_i]$$
3. For independent observations, the [[Variance]] of a linear statistic is:
   $\text{Var}[T(X_1, X_2, \ldots, X_n)] = \sum_{i=1}^{n} a_i^2 \text{Var}[X_i]$$

Linear statistics are particularly important in the context of the [[Gauss-Markov theorem]], which establishes that under certain conditions, linear estimators are optimal among the class of unbiased estimators.
