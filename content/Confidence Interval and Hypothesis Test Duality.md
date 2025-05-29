---
{"publish":true,"title":"Confidence Interval and Hypothesis Test Duality","created":"2025-05-27T14:51:17","modified":"2025-05-29T03:24:50","cssclasses":""}
---


# Confidence Interval and Hypothesis Test Duality

Beyond both being [[Statistical Decision Theory\|statistical decision-making]] procedures, confidence intervals and hypothesis tests have a stronger connection.
The one direction of the duality is easy: given a confidence interval $C(X)$ for the parameter, we can construct a hypothesis test $\psi(X) = \mathbb{1}\{ \theta_{0} \not\in C(X) \}$. Essentially, the confidence region corresponds to the rejection region of the hypothesis test.

For the other direction, we consider a *family* of tests $\{ \psi _{\theta_{0}} \}_{\theta_{0}\in\Theta}$, each of which rejects the null hypothesis $H_0: \theta = \theta_{0}$ with probability $\alpha$. That is, the family of tests test against all possible values of the parameter $\theta$.
Then, we can construct a confidence interval
$$
C(X) = \{ \theta: \psi _{\theta}(X) = 0 \}.
$$
Recall the definition of the level of a [[Hypothesis Testing\|Hypothesis Testing]]. We have
$$
P(C(X)\not\ni \theta ) = P_{\theta }(\psi _{\theta}(X) = 1) \le \alpha,
$$
indicating that $C(X)$ is indeed a $(1-\alpha )$ level confidence interval.
