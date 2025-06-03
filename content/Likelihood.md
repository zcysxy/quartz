---
{"publish":true,"title":"Likelihood","created":"2022-05-18T16:26:34","modified":"2025-06-02T11:26:28","cssclasses":"","aliases":null,"type":"note","sup":["[[Probability Theory]]","[[Statistics]]"],"state":"done","related":["[[Maximum Likelihood Estimation]]"]}
---


# Likelihood

## Definition: Likelihood and Probability

Consider a [[Statistical Model\|Statistical Model]] parameterized by a parameter $\theta$ and an observation of samples $X \sim P_{\theta}$. We have, the **probability** of observing $X$ under parameter $\theta$ is $\Pr(X \mid \theta)$.
For the same value, we define it as the **likelihood** of the true parameter being $\theta$ given observation $X$:
$$
L(\theta \given X) = \Pr(X \given \theta).
$$
- [~] That is, the likelihood of a parameter is the probability of observing the data given that parameter. Note that the likelihood is a function of the parameter $\theta$.
 
For continuous [[Random Variable\|Random Variable]]s, sometimes (we will see later) it is more convenient to define the likelihood using the observation's [[Probability Density Function\|Probability Density Function]]:
$$
L(\theta \given X) = f(X\mid \theta ).
$$

If $\theta$ is the true value of the parameter, $\Pr(X\mid \theta)$ should be large. That's why we call $L$ the likelihood, and we usually want to [[Maximum Likelihood Estimation\|maximize the likelihood]]. Since mass-density transformation does not affect the maximization operation, the likelihood is usually defined using the density function.

## Log-Likelihood

For iid samples $\{ x_i \}$, the likelihood function is of the form $L(\theta) = \prod f(x_{i}\mid \theta)$. Thus, it is usually more convenient to deal with the log of the likelihood function, turning the product into a sum. Since the log function is monotonically increasing, this transformation again does not affect the maximization operation.

## Score Function

The derivation of the log-likelihood function is called the score function:
$$
s(\theta) = \frac{ \mathrm{d} }{ \mathrm{d}\theta  }  \log L(\theta)
.$$

## Sufficient Regularity Conditions
---
type: note
created: 2025-05-26T19:23:15
modified: 2025-06-02T20:39:00
---

- **Identifiability**: $f(x;\theta_1) \neq f(x;\theta_2) \iff \theta_1 \neq \theta_2$
- **Continuity**: the log-likelihood function $l$ is twice differentiable and $l'(\theta)=0$ has a unique solution that results in a max
- **Dominance**: there exists an integrable function $D(x)$ such that for any $\theta$, it holds that $|l(x;\theta)| < D(x)$
- The parameter space $\Theta$ is finite or an open interval; the true parameter $\theta ^{*}$ is not on the boundary of $\Theta$
- The support of the $f(x;\theta)$ does not depend on $\theta$
- The [[Fisher Information\|Fisher Information]] matrix is invertible in a neighborhood of $\theta ^{*}$


