---
{"publish":true,"title":"M-Estimator","created":"2025-06-04T01:17:30","modified":"2025-06-06T04:11:58","cssclasses":"","state":"[[%wip]]","sup":["[[Estimation]]"],"alias":null,"type":"note","related":["[[Maximum Likelihood Estimation]]"]}
---


# M-Estimator

For an [[Estimation]] task, one can have different objectives (or metrics). For example, [[Maximum Likelihood Estimation\|MLE]] maximizes the likelihood of the estimator, [[Mean Squared Error\|Least Squares]] minimizes its squared error, and [[Ridge Regression]] minimizes the squared error with a penalty term.

M-estimators generalize the above ideas by using a general objective function
$$
m: \Theta \times \mathcal{X} \to \overline{\R}, (\theta,x)\mapsto m_{\theta}(x).
$$
Then, we can define the empirical error: $M_{n}(\theta)\coloneqq \hat{\mathbb{E}}_{n}m_{\theta }(X) = \frac{1}{n}\sum_{i=1}^{n}m_{\theta}(x_{i})$. And an ==M-Estimator== minimizes the empirical error:
$$
\hat{\theta} = \argmin_{\theta\in\Theta} M_{n}(\theta).
$$

- [~] We can see that M-estimators and [[Empirical Risk Minimization]] have the same formulation, one in the context of [[Estimation]] and the other in the context of [[Prediction]]/[[Supervised Learning]].

## Examples

## Properties

In this section, we denote
$$
\theta ^{*} = \argmin_{\theta\in\Theta} M(\theta).
$$

### Consistency

By [[Law of Large Numbers\|LLN]], we know that
$$
M_n \overset{ P/\text{a.s.} }{ \to } M.
$$
We wonder under what conditions the following is also true
$$
\hat{\theta} \coloneqq \argmin_{\theta\in\Theta} M_n(\theta) \overset{ P }{ \to } \argmin_{\theta\in\Theta} M(\theta) \eqqcolon \theta ^{*}.
$$

### Asymptotic Normality

## Z-Estimator

M-estimators further give rise to [[Z-Estimator]]s. In many ways, Z-estimators are further generalizations of M-estimators and [[Method of Moments\|Moment Estimator]]s, because they solve the **zero** point of a system. When the $m$ function is differentiable, the zero point of its gradient equates to the M-Estimator. Z-estimators also generalize moment estimators, which solve the zero point of the moment equations.
