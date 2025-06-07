---
{"publish":true,"title":"MLE of Exponential Family","created":"2025-06-06T01:37:43","modified":"2025-06-06T02:01:40","cssclasses":"","state":"done","sup":["[[Maximum Likelihood Estimation]]"],"alias":null,"type":"note","related":["[[Method of Moments]]"]}
---


# MLE of Exponential Family

For the [[Exponential Family]], the [[Maximum Likelihood Estimation\|MLE]] coincides with the [[Method of Moments\|Moment Estimator]] w.r.t. the exponent statistic $t(x)$. Suppose the density $p_{\theta}$ has the following form
$$
f(x ; \theta)=c(\theta) h(x) e^{\theta ^Tt(x)}
$$
Denote the log-likelihood $\ell(\theta) = \log f(x;\theta)$. Then we have
$$
\ell'(\theta) = \frac{ \partial  }{ \partial \theta } (\log c(\theta) + \log h(x) + t(x)
= \frac{c'(\theta)}{c(\theta)} + t(x).
$$
Note that
$$
\begin{aligned}
\frac{c'(\theta)}{c(\theta )} =& -c(\theta ) \frac{ \partial  }{ \partial \theta } \left( \frac{1}{c(\theta)} \right) \\
=& -c(\theta) \frac{ \partial  }{ \partial \theta } \left( \int h(x)e^{\theta ^Tt(x)}\d x \right)\\
=& -c(\theta )\int h(x)t(x) e^{\theta ^Tt(x)} \d x \\
=& - \int t(x) f(x;\theta )\d x \\
=& - \mathbb{E}_{\theta}t(X).
\end{aligned}
$$
Thus, we get
$$
\frac{1}{n}\sum_{i=1}^{n}\ell'(\theta) = \hat{\mathbb{E}}_{n}t(X) - \mathbb{E}_{\theta}t(X).
$$
Setting the above to zero gives the MLE, which is also the [[Method of Moments#General MM Estimator]] w.r.t. $t(x)$. As a result, the asymptotic normality property of both MLE and MM applies.
