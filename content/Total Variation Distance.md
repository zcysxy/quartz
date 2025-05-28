---
{"publish":true,"created":"2022-05-28T03:34:22","modified":"2025-05-27T23:01:34","cssclasses":""}
---


# Total Variation Distance

The total variation distance between two probability measures $P$ and $Q$ on a [[Sigma Field\|sigma-algebra]] $\mathcal{F}$ of subsets of the sample space $\Omega$  is defined via
$$\TV (P,Q)=\sup _{A\in {\mathcal {F}}}\left|P(A)-Q(A)\right|$$
Informally, this is the largest possible difference between the probabilities that the two probability distributions can assign to the same event.

One direct implication from the definition is that if two distributions have disjoint support, i.e., $m(\operatorname{supp}(P)\cap \operatorname{supp}(Q))=0$, where $m$ is the uniform measure on the sigma field, then their TV distance is 1.
For example, the TV distance between a discrete and a continuous distribution is 1, because on the common sample space, the support of the discrete distribution has measure 0.

> [!rmk]
> The TV distance is not **tensorizable**:
> $$\TV(P_1 \otimes P_2, Q_1 \otimes Q_2) \not\gtreqless \TV(P_1, Q_1) \cdot \TV(P_2, Q_2)$$

## L1 Norm

> [!thm]
> The TV distance is equivalent to the [[L1 Regularization\|L1 norm]].
> $$\TV(p,q) = \frac{1}{2}\| p-q \| _{1}.$$

*Proof*. Let $B = \{p \ge q\}$. Note that
$$
\begin{aligned}
\int_\Omega \def\abs#1{\left|#1\right|}\abs{p-q}\, d\nu &= \int_B (p - q) \, d\nu + \int_{\Omega \setminus B} (q- p)\, d\nu\\ &\le 2 \sup_A \abs{\int_A (p-q) \, d\nu}\\
&= 2\TV(p,q).
\end{aligned}
$$
On the other side, note first that
$$
\int_\Omega (p-q) \,d\nu = P(\Omega) - Q(\Omega) = 0
$$
and hence
$$
\int_B (p-q) \, d\nu = \int_{\Omega \setminus B} (q-p) \, d\nu
$$
Now for any $A \in \mathcal F$, we have 
$$
\begin{aligned}
\abs{\int_A (p-q)\, d\nu} &= \max\left\{\int_A (p-q)\, d\nu, \int_A (q-p)\, d\nu\right\}\\
&\le\max\left\{ \int_{A\cap B} (p-q)\, d\nu, \int_{A \cap (\Omega \setminus B)} (q-p)\, d\nu\right\}\\
&\le \max\left\{ \int_{B} (p-q)\, d\nu, \int_{\Omega \setminus B} (q-p)\, d\nu\right\}\\
&= \int_B (p-q)\, d\nu\\
&= \frac 12 \int_\Omega \abs{p-q}\,d\nu
\end{aligned}
$$
Taking the supremum over $A \in \mathcal F$, gives
$$
\sup_A \abs{\int_A (p-q)\, d\nu} \le \frac 12 \int_\Omega \abs{p-q}\, d\nu
$$ which is the other needed inequality.
