---
{"publish":true,"title":"Hypothesis Testing","created":"2022-12-07T20:11:12","modified":"2025-05-27T15:55:55","cssclasses":""}
---


# Hypothesis Testing

Hypothesis testing (HT) is a classical [[Statistical Decision Theory\|statistical decision-making]] problem, and can be extended to more general binary statistical decision-making problems. Given sample $X$, we need to make a decision $A(X)$ such that $A(X) \approx \mathbb{1}_{H_{1}}$, where $H_{1}$ is the alternative hypothesis.
In the context of HT, the statistical procedure $A$ is often called a **test**, and denoted as $\psi(X)$. A test is a [[Statistic\|Statistic]].

Formally, given a [[Statistical Model\|Statistical Model]] $\{ P_{\theta} \}_{\theta\in\Theta }$, we want to test the following hypotheses:
$$
\begin{cases}
H_{0}: \theta \in \Theta _{0}, & \text{(null hypothesis)}\\
H_{1}: \theta \in \Theta_{1}, & \text{(alternative hypothesis)}
\end{cases}
$$
where $\Theta_{0}$ and $\Theta_{1}$ are disjoint subsets of $\Theta$.

## Basic Concepts

- Asymmetry in $H_{0}$ and $H_{1}$: the data is is only used to try to disprove $H_{0}$. The result of a HT is either **reject** or **fail to reject** the null hypothesis $H_{0}$. ^d85be2
- If $\Theta_{0} \cup \Theta_{1} = \Theta$, then we say we test $H_{0}$ against $H_{1}$. In this case, rejection of $H_{0}$ implies acceptance of $H_{1}$.
- Failing to reject $H_{0}$ never implies acceptance of $H_{0}$, but only that we do not have enough evidence to reject it.
- When $\Theta_{0}$ and $\Theta_{1}$ are singletons, we call it a ==simple-simple== HT. Otherwise, we call it a ==composite== HT.
- Suppose $\Theta_{0} = \{ \theta_{0} \}$ and $\theta_{0}\in\R$. Then the HT is ==two-sided== if $H_{1} : \theta\ne\theta_{0}$, or is ==one-sided== if $H_{1} : \theta < \theta_{0}$ or $H_{1} : \theta > \theta_{0}$.
- We have two basic metrics for HT:
    - ==Type I error== a.k.a ==false positive rate== is the probability of rejecting $H_{0}$ when it is true: $P_{\theta_{0}}(\psi (X)=1)$.
    - ==Type II error== a.k.a ==false negative rate== is the probability of failing to reject $H_{0}$ when it is false: $P_{\theta_{1}}(\psi (X)=0)$.
    - More generally, Type I and II errors are functions indexed by the test $\psi$, defined as
        $$
        \begin{cases}
        \alpha _{\psi} &: \Theta_{0}\to \R, & \theta_{0} \mapsto P_{\theta_{0}}(\psi (X)=1), & \text{(Type I error)}\\
        \beta _{\psi} &: \Theta_{1}\to \R, &\theta_{1} \mapsto P_{\theta_{1}}(\psi (X)=0), & \text{(Type II error)}
        \end{cases}
        $$
- Minimizing false negative gives the *objective* of the test, called the ==power== of the test:
  $$
  \pi _{\psi} = \inf_{\theta_{1}\in\Theta_{1}}(1-\beta _{\psi}(\theta_{1})).
  $$
    - [~] The power can be remembered as the power of rejecting null.
- A test has (<span style="color:skyblue">asymptotic</span>) ==level== $\alpha$ if its worst Type I error is at most $\alpha$:
  $$
  {\color{\skyblue}\lim_{ n \to \infty } }\sup_{\theta_{0}\in\Theta_{0}}\alpha _{\psi}(\theta_{0})\le \alpha.
  $$

## Test Statistic and Rejection Region

For a hypothesis and sample $\{ x_{i} \}$, we construct a **rejection region** of the following form:
$$
\mathrm{RR} = \{ x_{1},\dots,x_n \mid t \ge c \},
$$
where $t$ is called the ==test statistic==, and $c$ is called the ==critical value==.
If $\{ x_{i} \} \in \mathrm{RR}$ , we **reject** the hypothesis.

See [[Hypothesis Testing#CLT Test Statistic\|#CLT Test Statistic]] for an example of a test statistic.

### Rejection Region by Confidence Interval

There is a [[Confidence Interval and Hypothesis Test Duality\|duality between confidence interval and hypothesis tests]].
Suppose we have a level $(1-\alpha)$ [[Confidence Interval\|Confidence Interval]] for $\theta$ given by $[l(\boldsymbol{x}), u(\boldsymbol{x})]$. Then the rule "reject $\mathrm{H}_0: \theta=\theta_{0}$ if $\theta_0 \notin[l(\boldsymbol{x}), u(\boldsymbol{x})]$" has a significance level $\alpha$:
$$
P_{\theta_{0}}(\psi(X)=1) = P_{\theta_{0}}\left( [l(X),u(X)]\not\ni\theta_{0}  \right) = \alpha.
$$
Therefore, a rejection region can be constructed by the complement of the confidence interval.
See [[Confidence Interval and Hypothesis Test Duality\|Confidence Interval and Hypothesis Test Duality]] for constructing CIs from HTs.

### Rejection Region by Likelihood Ratio

## Rejection Region

We can also construct a rejection region using the [[Likelihood\|likelihood]] ratio:
$
\Lambda(\boldsymbol{x}) = \frac{\sup_{\theta \in \Theta_0} L(\theta \mid \boldsymbol{x})}{\sup_{\theta \in \Theta} L(\theta \mid \boldsymbol{x})}
= \frac{L(\hat{\theta}_{0} )}{L(\hat{\theta}_{\mathrm{MLE}})}
,$
where $\Theta_0$ is the null hypothesis parameter space.
Then, the rejection region is given by
$
\mathrm{RR} = \{ \boldsymbol{x} \mid \Lambda(\boldsymbol{x}) \le k \}
,$
where $k$ is chosen such that the test has a significance level $\alpha$.

This method is called the ==likelihood ratio test==.


## CLT Test Statistic

Similar to [[Confidence Interval#CLT CI\|Confidence Interval#CLT CI]], [[Central Limit Theorem\|CLT]] is also often used to construct a test statistic, and then the [[Hypothesis Testing#p-value\|#p-value]], especially for HTs about the mean.

- [*] Recall that a test statistic, or the HT itself, is to disprove null. Thus, a test statistic is often constructed as a function of $\theta_{0}$.
Suppose we want to test the null about mean $H_{0}: \theta=\theta_{0}$. Assuming null, CLT gives
$$
\frac{\theta- \theta_{0}}{\operatorname{SE}(\theta )} \overset{d}{\longrightarrow} \mathcal{N}(0,1).
$$

- [*] Different from the [[Confidence Interval#Wald CI\|Plug-in CI]], we do not need to estimate the standard error using estimated $\theta$. Instead, we use the known $\theta_{0}$ to calculate the standard error.

More concretely, suppose the sample is $n$ iid Bernoulli r.v.s. Then the test statistic is
$$
T_n = \sqrt{ n } \frac{\overline{X} - \theta_{0}}{\sqrt{ \theta_{0}(1-\theta_{0}) }}.
$$
And the rejection region for a $\alpha$-level test is
$$
\mathrm{RR} = \begin{cases}
T_n \ge z_{1-\alpha} \text{ (right-tail test)},\\
T_n \le z_{\alpha} \text{ (left-tail test)},\\
|T_n| \ge z_{\alpha /2} \text{ (two-sided test)},
\end{cases}
$$
where $z_{\beta}$ is the $\beta$-quantile of the standard normal distribution.

## p-value

**p-value** is the probability of obtaining a real-valued **test statistic** *at least as* extreme as the one actually obtained under the **null hypothesis**.

In other words, (asymptotic) p-value of a test is the smallest (asymptotic) level $\alpha$ at which the test rejects $H_{0}$.

Consider an observed test-statistic $t$ from unknown distribution $T$. Then the p-value $p$ is what the prior probability would be of observing a test-statistic value at least as "extreme" as $t$ if null hypothesis $H_{0}$ were true. That is:

- $p=\Pr(T≥t|H_0)$ for a one-sided right-tail test,
- $p=\Pr(T≤t|H_0)$ for a one-sided left-tail test,
- $p=2\min\{\Pr(T\geq t\mid H_{0}),\Pr(T\leq t\mid H_{0})$ for a two-sided test.
    - If the distribution of $T$ is symmetric about zero, then $p=\Pr(|T|\geq |t|\mid H_{0})$

> [!ex] [[Hypothesis Testing#CLT Test Statistic\|#CLT Test Statistic]]
>
> $$
> p = 
> \begin{cases}
> \Pr\left(T_{n}\geq t\right) & \text{(right-tail test)}\\
> \Pr\left(T_{n}\leq t\right) & \text{(left-tail test)}\\
> \Pr\left(\left|T_{n}\right|\geq |t|\right) & \text{(two-sided test)}
> \end{cases}
> $$
> where $t$ is the observed test statistic.

- [!] Since the test statistic is random, p-value is also random.

> [!thm] Fundamental rule of statistics
> $$\text{Reject } \mathrm{H}_{0} \iff  p\text{-value} < \alpha$$

In other words, an almost impossible event ($p<\alpha$) happens given H0, thus it is rejected.

- [~] The smaller the p-value, the more confidently one can reject $H_{0}$, because the event is too unlikely to happen under null.

## Role of Alternative

Recall that - Asymmetry in $H_{0}$ and $H_{1}$: the data is is only used to try to disprove $H_{0}$. The result of a HT is either **reject** or **fail to reject** the null hypothesis $H_{0}$. 
Also notice that in the calculation of the test statistic, critical value, and p-value, we only need the null hypothesis $H_{0}$. This brings up the question:

> [!qn] what is the role of the alternative hypothesis $H_{1}$?

We first remark that we do not expect the alternative to have the same critical role as the null, due to the asymmetry. However, the alternative do have two important implications:

- The alternative shapes the belief about the complement of the null. Specifically, the set pair $(\Theta_{0},\Theta_{1})$ forms a *model assumption*, meaning that we believe the true parameter is either in $\Theta_{0}$ or $\Theta_{1}$. Under this belief, when rejecting $H_{0}$, we implicitly accept $H_{1}$.
- The alternative dictates the direction of extremeness. When calculating the rejection region or p-value, it's important to know what counts as an *extreme* event under the null. The alternative dictates the direction, i.e., right-tail, left-tail, or two-sided.
    - [@] For example, suppose $H_{0}: \text{mean} = \mu_{0}$ and $H_{1} : \text{mean} = \mu_{1}$. Then, if $\mu_{1} > \mu_{0}$, it is extreme(ly unlikely the null is true) when we observe a large sample mean; on the other hand, if $\mu_{1} < \mu_{0}$, a small sample mean is extreme under the null.
