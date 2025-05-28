---
{"publish":true,"created":"2022-05-28T03:34:22","modified":"2025-05-27T22:33:59","cssclasses":""}
---


# Total Variation Distance

The total variation distance between two probability measures $P$ and $Q$ on a [[Sigma Field\|sigma-algebra]] $\mathcal{F}$ of subsets of the sample space $\Omega$  is defined via
$$\delta (P,Q)=\sup _{A\in {\mathcal {F}}}\left|P(A)-Q(A)\right|$$

Informally, this is the largest possible difference between the probabilities that the two probability distributions can assign to the same event.

## L1 Norm

The TV distance is equivalent to the [[L1 Regularization\|L1 norm]].

> [!thm] $$\delta(p,q) = \frac{1}{2}\| p-q \| _{1}.$$

Let $B = \{p \ge q\}$. Note that
$$\begin{aligned}
\int_\Omega \def\abs#1{\left|#1\right|}\abs{p-q}\, d\nu &= \int_B (p - q) \, d\nu + \int_{\Omega \setminus B} (q- p)\, d\nu\\ &\le 2 \sup_A \abs{\int_A (p-q) \, d\nu}\\
&= 2\delta(p,q).
\end{aligned}$$
On the other side, note first that
$$
\int_\Omega (p-q) \,d\nu = P(\Omega) - Q(\Omega) = 0
$$
and hence
$$ \int_B (p-q) \, d\nu = \int_{\Omega \setminus B} (q-p) \, d\nu $$
Now for any $A \in \mathcal F$, we have 
$$\begin{aligned}
\abs{\int_A (p-q)\, d\nu} &= \max\left\{\int_A (p-q)\, d\nu, \int_A (q-p)\, d\nu\right\}\\
&\le\max\left\{ \int_{A\cap B} (p-q)\, d\nu, \int_{A \cap (\Omega \setminus B)} (q-p)\, d\nu\right\}\\
&\le \max\left\{ \int_{B} (p-q)\, d\nu, \int_{\Omega \setminus B} (q-p)\, d\nu\right\}\\
&= \int_B (p-q)\, d\nu\\
&= \frac 12 \int_\Omega \abs{p-q}\,d\nu
\end{aligned}$$
Taking the supremum over $A \in \mathcal F$, gives
$$
\sup_A \abs{\int_A (p-q)\, d\nu} \le \frac 12 \int_\Omega \abs{p-q}\, d\nu
$$ which is the other needed inequality.
