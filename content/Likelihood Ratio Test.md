---
{"publish":true,"title":"Likelihood Hypothesis Test","created":"2023-10-17T19:15:35","modified":"2025-05-31T19:25:24","cssclasses":""}
---


# Likelihood Hypothesis Test

## Rejection Region

We can also construct a rejection region using the [[Likelihood\|likelihood]] ratio:
$$
\Lambda(\boldsymbol{x}) = \frac{\sup_{\theta \in \Theta_0} L(\theta \mid \boldsymbol{x})}{\sup_{\theta \in \Theta} L(\theta \mid \boldsymbol{x})}
= \frac{L(\hat{\theta}_{0} )}{L(\hat{\theta}_{\mathrm{MLE}})},
$$
where $\Theta_0$ is the null hypothesis parameter space.
Then, the rejection region is given by
$$
\mathrm{RR} = \{ \boldsymbol{x} \mid \Lambda(\boldsymbol{x}) \le k \},
$$
where $k$ is chosen such that the test has a significance level $\alpha$.

This method is called the ==likelihood ratio test==.

## Asymptotic LRT

Under [[Fisher Information#Sufficient Regularity Conditions\|Fisher Information#Sufficient Regularity Conditions]], as $n → ∞$, we have
$$
− 2 \log \Lambda  (X) \eqqcolon G^{2} \overset{d}{\to} 𝜒^{2}_{k} ,
$$
where the degrees of freedom $k = \operatorname{dim}(\Theta ) – \operatorname{dim}(\Theta_0)$.

- [~] LRT is useful to find a convenient **test statistic**. For instance, we can transform the inequality $\Lambda \le$ into an inequality in $-2 \log \Lambda$, which is a convenient test statistic because of the theorem of asymptotic LRT.
