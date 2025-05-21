---
{"publish":true,"title":"Gaussian Properties","created":"2025-05-20T18:58:54","modified":"2025-05-20T22:51:33","cssclasses":""}
---


# Gaussian Properties

A real-valued random variable (r.v.) is called a normal/Gaussian r.v. if it admits the following probability density function (PDF):

<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



    - $\displaystyle f(x)=\frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^{2}}$ 

</div></div>

Generally, a vector-valued r.v. is normal/Gaussian if it has PDF:

<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



    - $(2 \pi)^{-k / 2} |\boldsymbol{\Sigma}|^{-1 / 2} \exp \left(-\frac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^{\top} \boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})\right)$ for $k$-dimensional with PSD $\Sigma$ 

</div></div>


Normal r.v.s have many nice properties, each of which gives a partial answer to why they are so common in nature.

## Parametrized Model

A ==parametrized model== is a family of probability distributions with its elements completely determined by a finite number of parameters.
Normal distribution is a parametrized model with two parameters: mean $\mu$ and variance $\sigma^2$.
In other words, once we know the values of $\mu$ and $\sigma^2$, we know everything about the normal distribution.

The parameterization has many implications in [[Statistics\|Statistics]]. For example, suppose the variance $\sigma^{2}$ is known, and we want to do some statistical inference on a normal distribution with i.i.d samples $\{ X_i \}_{i=1}^{n}$. Then, the sample mean $\overline{X} \coloneqq \frac{1}{n}\sum_{i=1}^{n}X_{i}$ is a **[[Sufficient Statistic\|sufficient statistic]]** for the distribution.
That is, we can *compress* the data from an $n$-dimensional vector to a real number, without losing any information about the distribution.

## Affine Transformation Invariance

Any [[Affine Transformation\|Affine Transformation]] of a normal r.v. is also normal. Specifically,

<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline

</div>


    - If $X \sim \mathcal{N}(\mu,\Sigma)$, then $BX+a \sim \mathcal{N}(B\mu+a,B \Sigma B^{T})$ 

</div></div>



<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



    - As a special case, any sub-vector of a normal random vector is also normal 

</div></div>


The affine transformation invariance is central to normal distribution. Actually, normal distribution can be defined through affine transformation.
We have the following two alternative definitions:


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



1. Or, if it has the form:
$
X = DW + \mu,
$
for any matrix $D$ and vector $\mu$, where $W$ is a random vector whose components are independent standard normal random variables $\mathcal{N}(0,1)$. 

</div></div>


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



2. Or, if for any real vector $a$, the random variable $a^{T}X$ is normal. 

</div></div>


## Symmetry

Normal distribution is symmetric around its mean $\mu$, meaning that $X-\mu$ and $-(X-\mu)$ has the same distribution for any normal r.v. $X \sim \mathcal{N}(\mu,\sigma^{2})$.

Graphically, the PDF of a normal r.v. is of a bell shape, symmetric around the mean $\mu$.
Formally, we denote the CDF of standard normal r.v. $X$ as $\Phi$; then,
$$
\Phi(-x) = 1 - \Phi(x), \quad \forall x\in\R.
$$
For a general normal r.v. $X \sim \mathcal{N}(\mu,\sigma^{2})$, we know its CDF $F$ satisfies $F(x) = \Phi\left(\frac{x-\mu}{\sigma}\right)$, because
$$
P(X \le x) = P\left( \frac{X-\mu}{\sigma} \le \frac{x-\mu}{\sigma} \right) = P\left( Z \le \frac{x-\mu}{\sigma} \right)  = \Phi\left( \frac{x-\mu}{\sigma} \right) ,
$$
where $Z \sim \mathcal{N}(0,1)$ is a standard normal r.v. Therefore, we have
$$
F(\mu-x) = 1 - F(x+\mu).
$$

We often rely on the above transformation to reduce a general normal r.v. to a standard normal r.v. for the ease of analysis.

## Tail Bound

"Tail" refers to the area under the PDF curve that is far away from the mean. The tail of a standard normal r.v. is given by Mill's inequality:
$$
\frac{\exp(-t^{2} /2)}{\sqrt{ 2\pi }} \cdot \left(   \frac{1}{t} - \frac{1}{t^{3}}\right) \le P(Z \ge t) \le \frac{\exp(-t^{2} /2)}{\sqrt{ 2\pi }} \cdot \frac{1}{t}, \quad \forall t > 0,
$$
which implies
$$
P(|Z|\ge t) \asymp t^{-1}\exp(-t^{2} /2).
$$

## Independence, Correlation, and Jointly Normal


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# n-h

</div>


## Independence, Correlation, and Jointly Normal

> [!rmk] Normal components does not imply jointly normal.
>
> It is not true that if $X$ and $Y$ are both normal, then the joint distribution of $(X,Y)$ is normal.
> For example, let $X \sim \mathcal{N}(0,1)$ and $Y=(2B-1)X$, where $B \sim \operatorname{Bern}(0.5)$, i.e., $Y=\pm X$ with equal probability.
> Then, it is easy to verify that $\Phi$ is also the CDF of $Y$, and thus $Y \sim \mathcal{N}(0,1)$.
> However, if $(X,Y)$ is jointly normal, we would have $(1,1)(X,Y)^T=X+Y$ is normal, which is not true because $X+Y=2BX$.

> [!rmk] Independent normal components implies jointly normal.
>
> The above statement becomes true once we impose the independence condition.
> We use the second alternative definition above to prove this. Let $X=(X_{1},\dots,X_n)$ with normal components. Then, for any vector $a$, we have $a^{T}X = \sum_{i=1}^{n} a_{i}X_{i}$. Note that $a_iX _i$ are independent normal random variables, and thus their sum is normal by Property [[Gaussian Properties#^prop-ind-joint\|#^prop-ind-joint]], or the [[Moment Generating Function#Inversion Theorem\|Moment Generating Function#Inversion Theorem]].
> By the alternative definition, $X$ is jointly normal.

> [!rmk] Joint normal with zero correlation implies independence.
>
> Suppose that the components of $X$ are uncorrelated, i.e., its covariance matrix is a diagonal. Consider another random vector $Y$ such that $Y_i\overset{ d }{ = }X_{i}$ and $Y_i$ are independent. By Property [[Gaussian Properties#^prop-ind-joint\|#^prop-ind-joint]], $Y$ is jointly normal.
> Since $X$ and $Y$ have the same mean and covariance, by Property [[Gaussian Properties#^prop-suff\|#^prop-suff]], $X$ and $Y$ have the same distribution, and thus the components of $X$ are independent.

> [!rmk] Zero correlation does not imply independence for general random variables.
>
> For example, let $X \sim \mathrm{Unif}[-1,1]$ and $Y=X^{2}$. Certainly, $X$ and $Y$ are not independent, but they are uncorrelated:
> $
> \Cov(X,Y) = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y] = \mathbb{E}[X^{3}] - 0 = 0.
> $


</div></div>


## Moments

Then central moments of normal distribution have a nice closed form:
$$
\mathbb{E}\left[ (X-\mu)^{p} \right] = \begin{cases}
0 & \text{if } p \text{ is odd} \\
\sigma ^{p}(p-1)!! & \text{if } p \text{ is even}
\end{cases}
$$
So do its central absolute moments:
$$
\mathbb{E}\left[ (X-\mu)^{p} \right] =\sigma ^{p}(p-1)!!\cdot \begin{cases}
\sqrt{ 2 / \pi } & \text{if } p \text{ is odd} \\
 1 & \text{if } p \text{ is even}
\end{cases}
= \sigma ^{p} \frac{2^{p /2}\Gamma((p+1)/2)}{\sqrt{ \pi }}
$$
