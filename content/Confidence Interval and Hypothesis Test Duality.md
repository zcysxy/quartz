---
{"publish":true,"title":"Confidence Interval and Hypothesis Test Duality","created":"2025-05-27T14:51:17","modified":"2025-05-29T17:25:33","cssclasses":""}
---


# Confidence Interval and Hypothesis Test Duality

Beyond both being [[Statistical Decision Theory\|statistical decision-making]] procedures, confidence intervals and hypothesis tests have a stronger connection.
The one direction of the duality is easy: given a confidence interval $C(X)$ for the parameter, we can construct a hypothesis test $\psi(X) = \mathbb{1}\{ \theta_{0} \not\in C(X) \}$. Essentially, the confidence region corresponds to the rejection region of the hypothesis test.

For the other direction, we consider a *family* of tests $\{ \psi _{\theta_{0}} \}_{\theta_{0}\in\Theta}$, each of which rejects the null hypothesis $H_0: \theta = \theta_{0}$ with probability $\alpha$. That is, the family of tests test against all possible values of the parameter $\theta$.
Then, we can construct a confidence interval
$$
C(X) = \{ \theta: \psi _{\theta}(X) = 0 \}.
$$
Recall the definition of the level of a [[Hypothesis Testing]]. We have
$$
P(C(X)\not\ni \theta ) = P_{\theta }(\psi _{\theta}(X) = 1) \le \alpha,
$$
indicating that $C(X)$ is indeed a $(1-\alpha )$ level confidence interval.
In other words, to build a $(1-\alpha)$ level CI, we collect all parameters that are *consistent enough* with the data, i.e., those that do not reject of the simple null hypothesis at level $\alpha$.

## Algorithm for HT to CI

We give an example algorithm for constructing CI through HT.
Our goal is to construct a CI with *balanced coverage*: $P(\theta> \sup C(X)) \approx  P(\theta < \inf C(X))$.

> [!algorithm]
> - Input: level $\alpha$
> - For $\tilde{\theta}\in\Theta$:
>     - Generate a $\alpha /2$-test $\psi ^{\uparrow}_{\tilde{\theta}}$ on HT $\Theta_{0}=\{ \tilde{\theta} \}$ against $\Theta_{1} = \{ \theta > \tilde{\theta} \}$.
>     - Generate a $\alpha /2$-test $\psi ^{\downarrow}_{\tilde{\theta}}$ on HT $\Theta_{0}=\{ \tilde{\theta} \}$ against $\Theta_{1} = \{ \theta < \tilde{\theta} \}$.
> - Return: $C(X) = \{ \tilde{\theta}\in\Theta : \psi ^{\uparrow}_{\tilde{\theta}}(X) = \psi ^{\downarrow}_{\tilde{\theta}}(X) = 0 \}$

One can check that the above method returns a finite-sample valid CI.
