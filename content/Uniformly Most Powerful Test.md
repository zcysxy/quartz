---
{"publish":true,"title":"Uniformly Most Powerful Test","created":"2025-05-30T02:48:16","modified":"2025-05-31T20:32:34","cssclasses":""}
---


# Uniformly Most Powerful Test

The ==uniformly most powerful (UMP)== test maximizes the power of the test for all values of the alternative hypothesis, given a fixed significance level.
We start by defining the ==most powerful (MP)== test for a simple alternative hypothesis $\Theta_{1} = \{ \theta_{1} \}$. The MP test solves the following [[Constrained Optimization]] problem:
$$
\begin{aligned}
\sup_{A}\ &\  P_{\theta_{1}}(A(X)=1)\\
\text{s.t. }\ & \sup_{\theta_{0}\in\Theta_{0}} P_{\theta_{0}}(A(X)=1)\le \alpha.
\end{aligned}
$$

For a composite alternative hypothesis $\Theta_{1}$, we say a test is UMP, if it's MP for all $\theta_{1}\in\Theta_{1}$. Formally, we consider the space of all randomized test $A: \mathcal{X}\to [0,1]$. Then, $A^{(\mathrm{UMP})}$ is UMP of size $\alpha$ if
$$
\begin{aligned}
\mathbb{E}_{\theta_{1}}[A^{(\mathrm{UMP})}(X)] = \sup_{A: \mathcal{X} \to [0,1]} \ &\ \mathbb{E}_{\theta_{1}}[A(X)] &&\text{(maximize power)}\\
\text{s.t. } \quad& \sup_{\theta_{0}\in\Theta_{0}} \mathbb{E}_{\theta_{0}}[A(X)]\le \alpha &&\text{(size constraint)}\\
\forall \theta_{1}\in\Theta_{1}. &&& \text{(uniformity)}
\end{aligned}
$$

## Neyman-Pearson

For a simple-simple HT, the Neyman-Pearson lemma states that the (U)MP test is a [[Likelihood Ratio Test]] given by
$$
A^{(\mathrm{MP})} = A^{(\mathrm{NP})}(X) = \mathbb{1}\left\{ f_{1}(X) /f_{0}(X) > \lambda \right\},
$$
where
$$
P_{\theta_{0}}(f_{1}(X) / f_{0}(X) > \lambda ) = \alpha.
$$
Therefore, the (U)MP test for a simple-simple HT is also called the ==Neyman-Pearson optimal== test.
