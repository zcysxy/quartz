---
{"publish":true,"title":"Fisher Information","created":"2023-10-15T23:48:38","modified":"2023-10-19T19:50:10","cssclasses":"","aliases":null,"type":"note","sup":["[[Statistics]]"],"state":"done"}
---


# Fisher Information

Fisher information is a concept in statistics that measures the amount of information that a random variable carries about an unknown parameter.
Fisher information of a parameter is the variance of the [[Likelihood#Score Function]]:
$$
I(\theta) = \mathbb{E}\left[\left(\frac{\partial}{\partial \theta} \log f(X ; \theta)\right)^{2}\right]
.$$

Notice that the expectation of the score function is always zero:
$$
\mathbb{E}\left[\frac{\partial}{\partial \theta} \log f(X ; \theta)\right]
= \int \frac{\frac{\partial}{\partial \theta}f(x ; \theta)}{ f(x ; \theta) } f(x ; \theta)\mathrm{d} x
= \frac{\partial}{\partial \theta} \int f(x ; \theta)  \mathrm{d} x
= \frac{\partial}{\partial \theta} 1 = 0
.$$

Similarly, under certain regularity conditions, we can show that
$$
I(\theta) = - \mathbb{E}\left[ \frac{\partial^2}{\partial \theta^2} \log f(X ; \theta) \right]
,$$
because
$$
\begin{aligned}
\frac{\partial^2}{\partial \theta^2} \log f(X ; \theta)
&= \frac{\frac{\partial^2}{\partial \theta^2} f(X ; \theta)}{f(X ; \theta)}-\left(\frac{\frac{\partial}{\partial \theta} f(X ; \theta)}{f(X ; \theta)}\right)^2\\
&= \frac{\frac{\partial^2}{\partial \theta^2} f(X ; \theta)}{f(X ; \theta)}-\left(\frac{\partial}{\partial \theta} \log f(X ; \theta)\right)^2
,\end{aligned}
$$
and the expectation of the first term is zero.

## Fisher Information Matrix

The Fisher information matrix is the [[Covariance]] matrix of the score function:
$$
I(\theta) = \mathbb{E}\left[s(\theta) s(\theta)^{T}\right]
,$$
where $s(\theta)$ is the [[Likelihood#Score Function]].
