---
{"publish":true,"created":"2023-08-02T18:42:38","modified":"2025-06-02T22:11:36","cssclasses":"","type":"note","sup":["[[Machine Learning]]","[[Statistics]]"],"state":"done"}
---


# Estimation



Types of estimation:

* [[Estimation#Point Estimation\|#Point Estimation]]
* [[Confidence Interval\|Confidence Interval]]/Region
* [[Bayes Estimator\|Bayes Estimator]]

Methods for estimation:

* [[Method of Moments\|Method of Moments]]
* [[Maximum Likelihood Estimation\|Maximum Likelihood Estimation]]
* [[Mean Squared Error\|Least Squares]]
* [[M-Estimator\|M-Estimator]]
 
> [!rmk] Comparison of Estimation Methods  
> * For quadratic risks, [[Maximum Likelihood Estimation\|MLE]] is more accurate in general
> * [[Maximum Likelihood Estimation\|MLE]] still gives good results even for misspecified models, while [[Method of Moments\|Method of Moments]] is more sensitive to model misspecification.
> * Sometimes [[Maximum Likelihood Estimation\|MLE]] can be computationally intractable, and [[Method of Moments\|Method of Moments]] is easier with only polynomial equations.

This note focuses on point estimation.

## Point Estimation

A **==point estimator/statistic==** is just a "prediction" of some quantity of interest based on some data points. The quantity of interest can be a single parameter, a vector of parameters, or even a whole function.

By convention, a point estimate of $\theta$ is denoted by $\hat{\theta}$. And it's of the following form:
$$\hat{\theta}_m = g(x^{(1)},\dots,x^{(m)})$$

Where $x^{(i)}$ are data points and $g$ can be any valid function, thus the range of $g$ is the same as the set of allowable values of $\theta$.

Besides parameters, we can also predict functions directly, and such point estimations are called **==function estimations==**. The function estimator $\hat{f}$ is simply a point estimator in function space.

## Bias

The bias of an estimator is

$$\operatorname{bias}(\hat{\theta}_m) = \mathbb{E}(\hat{\theta}_m) - \theta$$

where the expectation is over the **real** data (seen as samples from a random variable) and $\theta$ is the true underlying value of $\boldsymbol{\theta}$ used to define the data generating distribution.

* An estimator $\hat{\theta}_{m}$ is said to be ==unbiased== if $\operatorname{bias}(\hat{\theta}_m)=0,$ which implies that $\mathbb{E}(\hat{\theta}_m)=\theta$
* An estimator $\hat{\theta}_m$ is said to be ==asymptotically unbiased== if $\lim_{m \to \infty} \operatorname{bias}(\hat{\theta}_m)=0$

### Example 1 - Bernoulli Distribution

Consider a set of samples $\{x^{(1)}, \dots, x^{(m)}\}$ that are i.i.d. $\sim B(\theta)$. A common estimator for the $\theta$ parameter of this distribution is the mean of the training samples

$$\hat{\theta}_{m}=\frac{1}{m} \sum_{i=1}^{m} x^{(i)}$$

The bias of this estimator is

$$
\begin{aligned}
\operatorname{bias}(\hat{\theta}_{m}) &=\mathbb{E}[\hat{\theta}_{m}]-\theta \\
&=\mathbb{E}[\frac{1}{m} \sum_{i=1}^{m} x^{(i)}]-\theta \\
&=\frac{1}{m} \sum_{i=1}^{m} \mathbb{E}[x^{(i)}]-\theta \\
&= \frac{1}{m} m \theta - \theta \\
&= 0
\end{aligned}
$$

Thus the mean estimator is unbiased.

### Example 2 - Sample Variance & Unbiased Sample Variance

We compare two different estimators of the variance parameter $σ^2$ of a **Gaussian distribution**.

### Sample Variance

$$\hat{\sigma}^2_m = \frac{1}{m}\sum_{i=1}^m(x^{(i)} - \hat{\mu}_m)^2 $$

where $\hat{\mu}_m$ is the sample mean. Then the bias of the variance estimator is

$$\begin{aligned}
\mathbb{E}[\hat{\sigma}_m^2] &= \frac{1}{m}\sum \mathbb{E}[(x^{(i)} - \mu + \mu - \hat{\mu}_m)^2]\\
&= \sigma^2 - \frac{1}{m} \left(2\mathbb{E}[(\mu - \hat{\mu}_m)(\sum x^{(i)} - m\mu)]\right) + \mathbb{E}[(\mu-\hat{\mu}_m)^2]\\
&= \sigma^2 - \operatorname{Var}(\hat{\mu}_m)
\end{aligned}$$

Here from the i.i.d condition we have

$$\begin{aligned}
    \operatorname{Var}(\hat{\mu}_m) &= \mu^2 - 2\mu\mathbb{E}[\hat{\mu}_m] + \frac{1}{m}\mathbb{E}[(x^{(1)})^2] + \frac{m-1}{m}\mu^2\\
    &= \frac{1}{m}(\mathbb{E}[(x^{(1)})^2] - \mu^2)\\
    &= \frac{\sigma^2}{m}
\end{aligned}$$

Thus we get

$$\mathbb{E}[\hat{\sigma}_m] = \frac{m-1}{m}\sigma^2$$

So the bias of sample variance estimator is $-\frac{1}{m}\sigma^2$, hence it is a **biased estimator**

### Unbiased Sample Variance

$$
\tilde{\sigma}^2_m = \frac{1}{m-1}\sum_{i=1}^m(x^{(i)} - \hat{\mu}_m)^2 = \frac{m}{m-1}\hat{\sigma}^2_m
$$

From the calculation above, we know that unbiased sample variance estimator $\tilde{\sigma}^2_m$ is **unbiased**.

## Variance & Standard Error

The variance of an estimator is simply the variance

$$\operatorname{Var}(\hat{\theta})$$

where the random variable is the **training set**.

And the **==standard error==** is defined as

$$\operatorname{SE}(\hat{\theta}) = \sqrt{\operatorname{Var}(\hat{\theta})}$$

> [!rmk] Unbiasedness has no Constancy
> 
> * Neither the square root of the sample variance nor the square root of the unbiased estimator of the variance provide an unbiased estimate of the standard error
>     * Both approaches tend to **underestimate** the true standard error, but are still used in practice.
>     * The square root of the **unbiased estimator of the variance** is less of an underestimate. For large $m$, the approximation is quite reasonable
> * In general, the unbiasedness is not preserved under the transformation
> 

### The Standard Error of the Mean

By convention, use $\hat{\mu}$ to denote the mean of the data, from the calculation in [example 2](#example-2---sample-variance--unbiased-sample-variance) we have

$$\operatorname{SE}(\hat{\mu}) = \frac{\sigma}{\sqrt{m}}$$

where $\sigma$ is the **true** standard variance of the data, and $m$ is the number of data points.

> [!ex]
> 
> The standard error of the mean is very useful in machine learning experiments. We often estimate the **generalization error** by computing the sample mean of the error on the test set. The number of examples in the test set determines the accuracy of this estimate. Taking advantage of the [[Central Limit Theorem\|Central Limit Theorem]], which tells us that the mean will be approximately distributed with a normal distribution, we can use the standard error to compute the probability that the true expectation falls in any chosen interval. For example, the 95% [[Confidence Interval\|confidence interval]] centered on the mean $\hat{\mu}_m$ is
> $$(\hat{\mu}_m − 1.96\operatorname{SE}(\hat{\mu}_m), \hat{\mu}_m + 1.96\operatorname{SE}(\hat{\mu}_m))$$
> under the normal distribution with mean $\hat{\mu}_m$ and variance $\operatorname{SE}(\hat{\mu}_m)^2$. In machine learning experiments, it is common to say that algorithm *A* is better than algorithm *B* if the upper bound of the 95% confidence interval for the error of algorithm *A* is less than the lower bound of the 95% confidence interval for the error of algorithm *B*.

## Trade-off Between Bias and Variance

Bias and variance measure two different sources of error in an estimator. Two common ways to negotiate the trade-off between two:

* [[Cross-Validation\|Cross-Validation]]
* [[Mean Squared Error\|Mean Squared Error]]

Here is an illustration of the relationship between bias, variance, [[Overfitting and Underfitting\|Overfitting and Underfitting]]

!["20210414231119"|500](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20210414231119.png)

## Consistency

We wish that as the number of data in our dataset increases, our point estimates converge [[Convergence of Random Variables#Convergence in Probability\|in probability]] to the true value. This condition is called ==consistency==:
$$\hat{\theta}_m \overset{P}{\longrightarrow} \theta$$

$$\text{Consistency} \begin{aligned}\Longrightarrow\\[-2ex] \not\Longleftarrow\end{aligned} \text{Asymptotic Unbiasedness}$$

> [!thm]
> 
> If $\operatorname{bias}(\hat{\theta}_{n})\to 0$ and $\operatorname{SE}(\hat{\theta}_{n})\to 0$, then $\hat{\theta}_{n}$ is a consistant estimator.

The above can be proved using [[Chebyshev Inequality\|Chebyshev Inequality]] or the [[Convergence of Random Variables#Relation between Convergence Modes\|Convergence of Random Variables#Relation between Convergence Modes]].

## Risk

As seen in previous sections, we can have different measures of the performance of an estimator. ==Risk== is is a more general measure. Given a ==loss function== $L: \Theta \times\Theta \to \R_{\ge 0}$. The risk is defined as the expected loss:
$$
R(\hat{\theta},\theta ) = \mathbb{E}_{X \sim P_{\theta }} \left[ L( \hat{\theta}_{X},\theta  ) \right].
$$

- [@] For example, [[Mean Squared Error\|Mean Squared Error]] is the quadratic risk using a quadratic loss function $L(\hat{\theta},\theta) = (\hat{\theta} - \theta)^2$.
