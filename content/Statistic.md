---
{"publish":true,"title":"Statistic","created":"2025-05-21T19:18:56","modified":"2025-05-24T23:56:44","cssclasses":"","state":"[[%wip]]","sup":["[[Statistics]]"],"aliases":null,"type":"note"}
---


# Statistic

A ==statistic== is some *measurement* taken directly from the sample.
Formally, a statistic is a [[Measurable\|Measurable]] function $T: \mathcal{X}\to \R^{k}$.
A statistic transforms the sample into some measurement of the sample.
Notably, a statistic acts on the sample, but not the underlying distribution. And usually we want to use the statistic to infer something about the underlying distribution.

- [@] For example, the sample average $T(X_{1},\dots,X_n) = \frac{1}{n}\sum_{i=1}^{n}X_{i}$, is a statistic, which approximates the [[Expectation\|Mean]] of the underlying distribution.

More generally, a statistic can be a measurable functional: $T : \mathcal{X}\to \mathcal{T}$, where $\mathcal{T}$ is some function space.

- [@] For example, the empirical CDF $T(X_{1},\dots,X_n) = \frac{1}{n}\sum_{i=1}^{n}\mathbb{1} \{ x \le  X_i \}$, is a statistic, which is a function on $\R$ and approximates the CDF of the underlying distribution.

## Statistic is Random

Being a function of random variables, a statistic is also a [[Random Variable\|random variable]].
Thus, if a statistic is an estimator of some function on the underlying distribution, we can discuss its [[Convergence of Random Variables\|convergence properties]].

## Linear Statistic
