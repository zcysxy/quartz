---
{"publish":true,"created":"2022-05-28T03:34:22","modified":"2025-05-27T23:42:11","cssclasses":""}
---


# Total Variation Distance

The total variation distance between two probability measures $P$ and $Q$ on a [[Sigma Field\|sigma-algebra]] $\mathcal{F}$ of subsets of the sample space $\Omega$  is defined via
$$\TV (P,Q)=\sup _{A\in {\mathcal {F}}}\left|P(A)-Q(A)\right|$$
Informally, this is the largest possible difference between the probabilities that the two probability distributions can assign to the same event.

One direct implication from the definition is that if two distributions have disjoint support, i.e., $\nu(\operatorname{supp}(P)\cap \operatorname{supp}(Q))=0$, where $m$ is the measure on the sigma field, then their TV distance is 1.
For example, the TV distance between a discrete and a continuous distribution is 1, because on the common sample space, the support of the discrete distribution has measure 0.

> [!rmk]
> TV distance does not **tensorize**:
>
> $$
> \TV(P_1 \otimes P_2, Q_1 \otimes Q_2) \not\lesssim \TV(P_1, Q_1) + \TV(P_2, Q_2).
> $$
> In other words, a property in one dimension does not hold in multiple dimensions.
> Specifically, suppose we have $n$ iid samples from $P_{\theta_{1}}$. We do not have relationship
> $$
> \TV(P_{\theta_{1}}^{n}, P_{\theta_{2}}^{n}) \le n\TV(P_{\theta_{1}}, P_{\theta_{2}}).
> $$
> Therefore, in practice, it's usually more convenient to calculate other distances that tensorize, such as the [[KL Divergence\|KL Divergence]], [[Wasserstein Distance\|Wasserstein Distance]], and [[Hellinger Distance\|Hellinger Distance]].

## L1 Norm

> [!thm]
> The TV distance is equivalent to the [[L1 Regularization\|L1 norm]].
> $$\TV(p,q) = \frac{1}{2}\| p-q \| _{1}.$$

### First Proof

Let $B = \{p \ge q\}$. Note that
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
$$ 
which is the other needed inequality.

### Second Proof

Again, let $B = \{p \ge q\}$. We know that $\int_{B} (p-q) \d \nu = \frac{1}{2}\int _{\Omega}|p-q|\d \nu$. Therefore, we only need to show $\sup_A \abs{\int_A (p-q) \d \nu} = \abs{\int_B (p-q) \d \nu} = \abs{\int _{B^{C}}(p-q)\d \nu} = \int_B (p-q) \d \nu$, where the last two equalities are known.

For any $A \not\in \{ B,B^{C} \}$, we suppose $P(A) \ge Q(A)$ WLOG. Then,
$$
(P(B) - Q(B)) - (P(A) - Q(A)) = \underbrace{ \int _{B\setminus A} (p-q)\d \nu }_{ \ge 0 } - \underbrace{ \int _{A\setminus B} (p-q)\d \nu }_{ \le 0 } > 0,
$$
where the strict inequality is because two equalties cannot hold at the same time, as $A\not\in \{ B,B^{C} \}$. Then,
$$
(P(B) - Q(B)) - (P(A) - Q(A)) = \abs{\int _{B} (p-q)\d \nu} - \abs{\int _{A} (p-q)\d \nu} > 0,
$$
which further implies
$$
A\not\in\arg\sup_A \abs{\int_A (p-q) \d \nu}.
$$
Thus, $B$ and $B^{C}$ are the sets that achieve the supremum.
