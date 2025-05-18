---
{"publish":true,"title":"*Almost All* of Probability","created":"2022-09-25T14:40:01","modified":"2025-05-18T16:03:58","cssclasses":""}
---


# Probability Theory

## Basic Concepts

- [[Probability Space\|Probability Space]]
    - [[Sigma Field\|Sigma Field]]
    - [[Measure\|Measure]]
        - [[Caratheodory's Extension\|Caratheodory's Extension]]
- [[Independence\|Independence]]
- [[Conditional Probability\|Conditional Probability]]
    - [[Law of Total Variance\|Law of Total Variance]]
    - [[Bayes' theorem\|Bayes' theorem]]
- [[Random Variable\|Random Variable]]
    - [[Cumulative Distribution Function\|CDF]], [[Probability Mass Function\|PMF]], [[Probability Density Function\|PDF]]
    - [[Expectation\|Mean]], [[Variance\|Variance]], [[Moment\|Moment]]
    - [[Moment Generating Function\|MGF]], [[Characteristic Function\|Characteristic Function]]
    - [*] [[Convergence of Random Variables\|Convergence of Random Variables]]
        - [[Law of Large Numbers\|Law of Large Numbers]]
        - [[Central Limit Theorem\|Central Limit Theorem]]
        - [[Chernoff Bound\|Chernoff Bound]]
- Multiple Random Variables
    - [[Joint Distribution\|Joint Distribution]]
    - [[Covariance\|Covariance]], [[Correlation\|Correlation]]
        - [[Cauchy-Schwartz Inequality\|Cauchy-Schwartz Inequality]]

## Advanced Notes

- [[Borel-Cantelli Lemma\|Borel-Cantelli Lemma]]
- [[Chebyshev Inequality\|Probability Inequalities]]
- [[Order Statistics\|Order Statistics]]
- [[Abstract Integration\|Abstract Integration]]
    - [[Fatou's Lemma\|Fatou's Lemma]]
    - [[Fubini's Theorem\|Fubini's Theorem]]

## Problems

- [[Pairwise Independence Is Not Mutual Independence\|Pairwise Independence Is Not Mutual Independence]]
- [[Covariance and Independence\|Covariance and Independence]]
- [[A Counting Problem\|A Counting Problem]]
- [[A Plausible Treatment Test\|A Plausible Treatment Test]]
- [[Matching Problem\|Matching Problem]]

## Common Distributions

| Distribution             | Notation                                | Parameters                                           |
| ------------------------ | --------------------------------------- | ---------------------------------------------------- |
| [[Uniform Distribution\|Uniform Distribution]] | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline

</div>




# Uniform Distribution

The uniform distribution over $[a,b]$ has

- Notation
    - $\mathcal{U}(a,b)$ - Parameters
    - $a,b\in\R$ - [[Cumulative Distribution Function\|CDF]]
    - $F(x) = \begin{cases}0,  \quad & x<a,\\ \frac{x-a}{b-a}, &a\le x\le b,\\ 1,  & x>b.\end{cases}$ - [[Probability Density Function\|PDF]]
    - $f(x) = \begin{cases} \frac{1}{b-a}, \quad & a\le x\le b,\\ 0, & \text{otherwise.}\end{cases}$ - [[Expectation\|Mean]]
    - $\frac{a+b}{2}$ - [[Variance\|Variance]]
    - $\frac{(b-a)^{2}}{12}$ - [[Moment Generating Function\|MGF]]
    - $\displaystyle \frac{e^{tb} - e^{ta}}{(b-a)t}$ 

</div></div>
 | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Uniform Distribution

The uniform distribution over $[a,b]$ has

- Notation
    - $\mathcal{U}(a,b)$ - Parameters
    - $a,b\in\R$ - [[Cumulative Distribution Function\|CDF]]
    - $F(x) = \begin{cases}0,  \quad & x<a,\\ \frac{x-a}{b-a}, &a\le x\le b,\\ 1,  & x>b.\end{cases}$ - [[Probability Density Function\|PDF]]
    - $f(x) = \begin{cases} \frac{1}{b-a}, \quad & a\le x\le b,\\ 0, & \text{otherwise.}\end{cases}$ - [[Expectation\|Mean]]
    - $\frac{a+b}{2}$ - [[Variance\|Variance]]
    - $\frac{(b-a)^{2}}{12}$ - [[Moment Generating Function\|MGF]]
    - $\displaystyle \frac{e^{tb} - e^{ta}}{(b-a)t}$ 

</div></div>
 |

```
| Distribution                          | Notation                                                | Parameters                                                  | CDF                                                        | PMF/PDF                                                    | Mean                                                        | Variance                                                   | MGF                                                     | CF                                                     |
| ------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------ |
| [[Uniform Distribution]]              | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline n-link naked

</div>




# Uniform Distribution

The uniform distribution over $[a,b]$ has

- Notation
    - $\mathcal{U}(a,b)$ - Parameters
    - $a,b\in\R$ - [[Cumulative Distribution Function|CDF]]
    - $F(x) = \begin{cases}0,  \quad & x<a,\\ \frac{x-a}{b-a}, &a\le x\le b,\\ 1,  & x>b.\end{cases}$ - [[Probability Density Function\|PDF]]
    - $f(x) = \begin{cases} \frac{1}{b-a}, \quad & a\le x\le b,\\ 0, & \text{otherwise.}\end{cases}$ - [[Expectation|Mean]]
    - $\frac{a+b}{2}$ - [[Variance]]
    - $\frac{(b-a)^{2}}{12}$ - [[Moment Generating Function|MGF]]
    - $\displaystyle \frac{e^{tb} - e^{ta}}{(b-a)t}$ 

</div></div>
    | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Uniform Distribution

The uniform distribution over $[a,b]$ has

- Notation
    - $\mathcal{U}(a,b)$ - Parameters
    - $a,b\in\R$ - [[Cumulative Distribution Function|CDF]]
    - $F(x) = \begin{cases}0,  \quad & x<a,\\ \frac{x-a}{b-a}, &a\le x\le b,\\ 1,  & x>b.\end{cases}$ - [[Probability Density Function\|PDF]]
    - $f(x) = \begin{cases} \frac{1}{b-a}, \quad & a\le x\le b,\\ 0, & \text{otherwise.}\end{cases}$ - [[Expectation|Mean]]
    - $\frac{a+b}{2}$ - [[Variance]]
    - $\frac{(b-a)^{2}}{12}$ - [[Moment Generating Function|MGF]]
    - $\displaystyle \frac{e^{tb} - e^{ta}}{(b-a)t}$ 

</div></div>
        | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline n-link naked

</div>




# Uniform Distribution

The uniform distribution over $[a,b]$ has

- Notation
    - $\mathcal{U}(a,b)$ - Parameters
    - $a,b\in\R$ - [[Cumulative Distribution Function|CDF]]
    - $F(x) = \begin{cases}0,  \quad & x<a,\\ \frac{x-a}{b-a}, &a\le x\le b,\\ 1,  & x>b.\end{cases}$ - [[Probability Density Function\|PDF]]
    - $f(x) = \begin{cases} \frac{1}{b-a}, \quad & a\le x\le b,\\ 0, & \text{otherwise.}\end{cases}$ - [[Expectation|Mean]]
    - $\frac{a+b}{2}$ - [[Variance]]
    - $\frac{(b-a)^{2}}{12}$ - [[Moment Generating Function|MGF]]
    - $\displaystyle \frac{e^{tb} - e^{ta}}{(b-a)t}$ 

</div></div>
        | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Uniform Distribution

The uniform distribution over $[a,b]$ has

- Notation
    - $\mathcal{U}(a,b)$ - Parameters
    - $a,b\in\R$ - [[Cumulative Distribution Function|CDF]]
    - $F(x) = \begin{cases}0,  \quad & x<a,\\ \frac{x-a}{b-a}, &a\le x\le b,\\ 1,  & x>b.\end{cases}$ - [[Probability Density Function\|PDF]]
    - $f(x) = \begin{cases} \frac{1}{b-a}, \quad & a\le x\le b,\\ 0, & \text{otherwise.}\end{cases}$ - [[Expectation|Mean]]
    - $\frac{a+b}{2}$ - [[Variance]]
    - $\frac{(b-a)^{2}}{12}$ - [[Moment Generating Function|MGF]]
    - $\displaystyle \frac{e^{tb} - e^{ta}}{(b-a)t}$ 

</div></div>
        | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# naked inline n-link

</div>




# Uniform Distribution

The uniform distribution over $[a,b]$ has

- Notation
    - $\mathcal{U}(a,b)$ - Parameters
    - $a,b\in\R$ - [[Cumulative Distribution Function|CDF]]
    - $F(x) = \begin{cases}0,  \quad & x<a,\\ \frac{x-a}{b-a}, &a\le x\le b,\\ 1,  & x>b.\end{cases}$ - [[Probability Density Function\|PDF]]
    - $f(x) = \begin{cases} \frac{1}{b-a}, \quad & a\le x\le b,\\ 0, & \text{otherwise.}\end{cases}$ - [[Expectation|Mean]]
    - $\frac{a+b}{2}$ - [[Variance]]
    - $\frac{(b-a)^{2}}{12}$ - [[Moment Generating Function|MGF]]
    - $\displaystyle \frac{e^{tb} - e^{ta}}{(b-a)t}$ 

</div></div>
        | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Uniform Distribution

The uniform distribution over $[a,b]$ has

- Notation
    - $\mathcal{U}(a,b)$ - Parameters
    - $a,b\in\R$ - [[Cumulative Distribution Function|CDF]]
    - $F(x) = \begin{cases}0,  \quad & x<a,\\ \frac{x-a}{b-a}, &a\le x\le b,\\ 1,  & x>b.\end{cases}$ - [[Probability Density Function\|PDF]]
    - $f(x) = \begin{cases} \frac{1}{b-a}, \quad & a\le x\le b,\\ 0, & \text{otherwise.}\end{cases}$ - [[Expectation|Mean]]
    - $\frac{a+b}{2}$ - [[Variance]]
    - $\frac{(b-a)^{2}}{12}$ - [[Moment Generating Function|MGF]]
    - $\displaystyle \frac{e^{tb} - e^{ta}}{(b-a)t}$ 

</div></div>
        | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Uniform Distribution

The uniform distribution over $[a,b]$ has

- Notation
    - $\mathcal{U}(a,b)$ - Parameters
    - $a,b\in\R$ - [[Cumulative Distribution Function|CDF]]
    - $F(x) = \begin{cases}0,  \quad & x<a,\\ \frac{x-a}{b-a}, &a\le x\le b,\\ 1,  & x>b.\end{cases}$ - [[Probability Density Function\|PDF]]
    - $f(x) = \begin{cases} \frac{1}{b-a}, \quad & a\le x\le b,\\ 0, & \text{otherwise.}\end{cases}$ - [[Expectation|Mean]]
    - $\frac{a+b}{2}$ - [[Variance]]
    - $\frac{(b-a)^{2}}{12}$ - [[Moment Generating Function|MGF]]
    - $\displaystyle \frac{e^{tb} - e^{ta}}{(b-a)t}$ 

</div></div>
     |                                                        |
| [[Bernoulli Distribution]]            | /                                                       | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Bernoulli Distribution

A [[Random Variable]] is of Bernoulli distribution if its range is $\{ 0,1 \}$.

- Parameters
    - $p\in[0,1]$ - [[Probability Mass Function|PMF]]
    - $p(n) = \begin{cases} p, \quad & n=1, ,\\ q\coloneqq 1-p, & n=0.\end{cases}$ - [[Cumulative Distribution Function|CDF]]
    - $F(x) = \begin{cases} 0, \quad & x<0,\\ q = 1-p, & 0\le x\le 1,\\ 1, & x >1. \end{cases}$ - [[Expectation|Mean]]
    - $p$ - [[Variance]]
    - $pq$ - [[Moment Generating Function|MGF]]
    - $q + pe^{t}$ 
## Properties

The sum of $n$ iid Bernoulli random variables follows a [[Binomial Distribution]].


</div></div>
      | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline n-link naked

</div>




# Bernoulli Distribution

A [[Random Variable]] is of Bernoulli distribution if its range is $\{ 0,1 \}$.

- Parameters
    - $p\in[0,1]$ - [[Probability Mass Function|PMF]]
    - $p(n) = \begin{cases} p, \quad & n=1, ,\\ q\coloneqq 1-p, & n=0.\end{cases}$ - [[Cumulative Distribution Function|CDF]]
    - $F(x) = \begin{cases} 0, \quad & x<0,\\ q = 1-p, & 0\le x\le 1,\\ 1, & x >1. \end{cases}$ - [[Expectation|Mean]]
    - $p$ - [[Variance]]
    - $pq$ - [[Moment Generating Function|MGF]]
    - $q + pe^{t}$ 
## Properties

The sum of $n$ iid Bernoulli random variables follows a [[Binomial Distribution]].


</div></div>
      | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Bernoulli Distribution

A [[Random Variable]] is of Bernoulli distribution if its range is $\{ 0,1 \}$.

- Parameters
    - $p\in[0,1]$ - [[Probability Mass Function|PMF]]
    - $p(n) = \begin{cases} p, \quad & n=1, ,\\ q\coloneqq 1-p, & n=0.\end{cases}$ - [[Cumulative Distribution Function|CDF]]
    - $F(x) = \begin{cases} 0, \quad & x<0,\\ q = 1-p, & 0\le x\le 1,\\ 1, & x >1. \end{cases}$ - [[Expectation|Mean]]
    - $p$ - [[Variance]]
    - $pq$ - [[Moment Generating Function|MGF]]
    - $q + pe^{t}$ 
## Properties

The sum of $n$ iid Bernoulli random variables follows a [[Binomial Distribution]].


</div></div>
      | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# naked inline n-link

</div>




# Bernoulli Distribution

A [[Random Variable]] is of Bernoulli distribution if its range is $\{ 0,1 \}$.

- Parameters
    - $p\in[0,1]$ - [[Probability Mass Function|PMF]]
    - $p(n) = \begin{cases} p, \quad & n=1, ,\\ q\coloneqq 1-p, & n=0.\end{cases}$ - [[Cumulative Distribution Function|CDF]]
    - $F(x) = \begin{cases} 0, \quad & x<0,\\ q = 1-p, & 0\le x\le 1,\\ 1, & x >1. \end{cases}$ - [[Expectation|Mean]]
    - $p$ - [[Variance]]
    - $pq$ - [[Moment Generating Function|MGF]]
    - $q + pe^{t}$ 
## Properties

The sum of $n$ iid Bernoulli random variables follows a [[Binomial Distribution]].


</div></div>
      | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Bernoulli Distribution

A [[Random Variable]] is of Bernoulli distribution if its range is $\{ 0,1 \}$.

- Parameters
    - $p\in[0,1]$ - [[Probability Mass Function|PMF]]
    - $p(n) = \begin{cases} p, \quad & n=1, ,\\ q\coloneqq 1-p, & n=0.\end{cases}$ - [[Cumulative Distribution Function|CDF]]
    - $F(x) = \begin{cases} 0, \quad & x<0,\\ q = 1-p, & 0\le x\le 1,\\ 1, & x >1. \end{cases}$ - [[Expectation|Mean]]
    - $p$ - [[Variance]]
    - $pq$ - [[Moment Generating Function|MGF]]
    - $q + pe^{t}$ 
## Properties

The sum of $n$ iid Bernoulli random variables follows a [[Binomial Distribution]].


</div></div>
      | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Bernoulli Distribution

A [[Random Variable]] is of Bernoulli distribution if its range is $\{ 0,1 \}$.

- Parameters
    - $p\in[0,1]$ - [[Probability Mass Function|PMF]]
    - $p(n) = \begin{cases} p, \quad & n=1, ,\\ q\coloneqq 1-p, & n=0.\end{cases}$ - [[Cumulative Distribution Function|CDF]]
    - $F(x) = \begin{cases} 0, \quad & x<0,\\ q = 1-p, & 0\le x\le 1,\\ 1, & x >1. \end{cases}$ - [[Expectation|Mean]]
    - $p$ - [[Variance]]
    - $pq$ - [[Moment Generating Function|MGF]]
    - $q + pe^{t}$ 
## Properties

The sum of $n$ iid Bernoulli random variables follows a [[Binomial Distribution]].


</div></div>
   |                                                        |
| [[Binomial Distribution]]             | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline n-link naked

</div>




# Binomial Distribution

A discrete [[Random Variable]] is of binomial distribution if its range is $\mathbb{N}$ and

- Notation
    - $B(n,p)$ - Parameters
    - $n \in \mathbb{N}, p\in[0,1]$ - [[Probability Mass Function|PMF]]
    - $p(k) = {n \choose k} p^{k}(1-p)^{n-k}$ - [[Expectation|Mean]]
    - $np$ - [[Variance]]
    - $npq$ - [[Moment Generating Function|MGF]]
    - $(q + pe^{t})^{n}$ 

</div></div>
   | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Binomial Distribution

A discrete [[Random Variable]] is of binomial distribution if its range is $\mathbb{N}$ and

- Notation
    - $B(n,p)$ - Parameters
    - $n \in \mathbb{N}, p\in[0,1]$ - [[Probability Mass Function|PMF]]
    - $p(k) = {n \choose k} p^{k}(1-p)^{n-k}$ - [[Expectation|Mean]]
    - $np$ - [[Variance]]
    - $npq$ - [[Moment Generating Function|MGF]]
    - $(q + pe^{t})^{n}$ 

</div></div>
       | /                                                          | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Binomial Distribution

A discrete [[Random Variable]] is of binomial distribution if its range is $\mathbb{N}$ and

- Notation
    - $B(n,p)$ - Parameters
    - $n \in \mathbb{N}, p\in[0,1]$ - [[Probability Mass Function|PMF]]
    - $p(k) = {n \choose k} p^{k}(1-p)^{n-k}$ - [[Expectation|Mean]]
    - $np$ - [[Variance]]
    - $npq$ - [[Moment Generating Function|MGF]]
    - $(q + pe^{t})^{n}$ 

</div></div>
       | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# naked inline n-link

</div>




# Binomial Distribution

A discrete [[Random Variable]] is of binomial distribution if its range is $\mathbb{N}$ and

- Notation
    - $B(n,p)$ - Parameters
    - $n \in \mathbb{N}, p\in[0,1]$ - [[Probability Mass Function|PMF]]
    - $p(k) = {n \choose k} p^{k}(1-p)^{n-k}$ - [[Expectation|Mean]]
    - $np$ - [[Variance]]
    - $npq$ - [[Moment Generating Function|MGF]]
    - $(q + pe^{t})^{n}$ 

</div></div>
       | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Binomial Distribution

A discrete [[Random Variable]] is of binomial distribution if its range is $\mathbb{N}$ and

- Notation
    - $B(n,p)$ - Parameters
    - $n \in \mathbb{N}, p\in[0,1]$ - [[Probability Mass Function|PMF]]
    - $p(k) = {n \choose k} p^{k}(1-p)^{n-k}$ - [[Expectation|Mean]]
    - $np$ - [[Variance]]
    - $npq$ - [[Moment Generating Function|MGF]]
    - $(q + pe^{t})^{n}$ 

</div></div>
       | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Binomial Distribution

A discrete [[Random Variable]] is of binomial distribution if its range is $\mathbb{N}$ and

- Notation
    - $B(n,p)$ - Parameters
    - $n \in \mathbb{N}, p\in[0,1]$ - [[Probability Mass Function|PMF]]
    - $p(k) = {n \choose k} p^{k}(1-p)^{n-k}$ - [[Expectation|Mean]]
    - $np$ - [[Variance]]
    - $npq$ - [[Moment Generating Function|MGF]]
    - $(q + pe^{t})^{n}$ 

</div></div>
    |                                                        |
| [[Poisson Distribution]]              | /                                                       | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Poisson Distribution

A discrete [[Random Variable]] is of Poisson distribution if its range is $\mathbb{N}_0$, and

- Parameters
    - $\lambda > 0$ - [[Probability Mass Function|PMF]]
    - $\displaystyle p(n) = e^{-\lambda} \frac{\lambda ^{n}}{n!}$     - The important part is $\lambda ^{n} / n!$; $e^{-\lambda}$ is just a constant to make if sum to 1
    - Remember it as the **expansion** of the exponential
- [[Expectation|Mean]]
    - $\lambda$ - [[Variance]]
    - $\lambda$ - [[Moment Generating Function|MGF]]
    - $\exp(\lambda(e^{t}-1))$ - [[Characteristic Function|CF]]
    - $\exp(\lambda(e^{it}-1))$ 
## Poisson Distribution as Approximation to Binomial Distribution

When $n$ is large and $p$ is small, Poisson distribution can be an approximation of a [[Binomial Distribution]]. This is because for $X\sim \operatorname{Binom}(n,p)$, we have
$
P(X = k) = {n \choose k} p^{k}(1-p)^{n-k} = \frac{n!}{k!(n-k)!}\left( \frac{np}{n} \right)^{k}\left( 1 - \frac{np}{n} \right)^{n}\left( 1 - p \right)^{-k}
$
When $n$ is large and $p$ is small, we have
$
\frac{n(n-1)\dots(n-k+1)}{n^{k}} \approx 1, \quad \left( 1 - \frac{np}{n} \right)^{n} \approx e^{-np}, \quad (1-p)^{-k} \approx 1.
$

Therefore, we have
$
P(X = k) \approx e^{-np} \frac{(np)^{k}}{k!},
$
i.e., $X \dot{\sim} \operatorname{Poisson}(np)$. Or, $\operatorname{Binom}(n,\lambda /n)\overset{ d }{ \longrightarrow } \operatorname{Poisson}(\lambda)$.

- [!] The Poisson approximation result can be shown to be valid under even more general conditions than those so far mentioned. For instance, suppose that n independent trials are to be performed, with the ith trial resulting in a success with probability $p_i, i = 1,...,n$. Then it can be shown that if n is large and each $p_i$ is small, then the number of successful trials is approximately Poisson distributed with mean equal to $\sum^n_{i=1}p_i$. In fact, this result will sometimes remain true even when the trials are not independent, provided that their dependence is “weak.” For instance, consider the following example.

## Splitting a Poisson Random Variable

Consider conducting $N \sim \operatorname{Poisson}(\lambda )$ trials. Let $X$ be the success count with a conditional distribution $X \given N = n \sim \operatorname{Binom}(n,p)$. Let $Y = N-X$.
We can show that $X$ and $Y$ are independent, and $X \sim \operatorname{Poisson}(\lambda p)$ and $Y \sim \operatorname{Poisson}(\lambda (1-p))$.

Since all r.v.s are discrete, we consider their PMFs. First, we have
$
p_{X,Y}(x,y) = p_{X,Y\given N}(x,y\given n=x+y) p_{N}(n=x+y) 
= \mathbb{1}\{ y=y \} p_{X\given N}(x| n=x+y)  p_{N}(n=x+y) 
= e^{-\lambda}\frac{\lambda^{x+y}}{(x+y)!} \cdot {x+y \choose x}p^{x}(1-p)^{y}.
$
Then, as $X$ is the marginal distribution of $X,N$, we have
$
p_{X}(x) = \sum_{n=0}^{\infty}p_{X,N}(x,n) = \sum_{n=0}^{\infty}p_{X\given N}(x\given n)p_{N}(n) = \sum_{n=x}^{\infty}{n \choose x}p^{x}(1-p)^{n-x}e^{-\lambda}\frac{\lambda^{n}}{n!}
= \frac{(p /(1-p))^{x}e^{-\lambda}}{x!} \sum_{n\ge x} \frac{(\lambda (1-p))^{n}}{(n-x)!}
= \frac{(\lambda p)^{x}e^{-\lambda}}{x!} \sum_{n=0}^{\infty} \frac{(\lambda (1-p))^{n}}{n!}
= \frac{(\lambda p)^{x}}{x!} e^{\lambda(1-p)-\lambda}
= e^{-\lambda p} \frac{(\lambda p)^{x}}{x!}.
$
By symmetry, $p_{Y}(y) = e^{-\lambda(1-p)}(\lambda(1-p)^{y}) / y!$.
Thus, $X \sim \operatorname{Poisson}(\lambda p)$ and $Y \sim \operatorname{Poisson}(\lambda (1-p))$, and,
$
p_{X}(x)p_{Y}(y) = e^{-\lambda} \frac{\lambda^{x+y}p^{x}(1-p)^{y}}{x!y!}  = p_{X,Y}(x,y),
$


</div></div>
        | /                                                          | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Poisson Distribution

A discrete [[Random Variable]] is of Poisson distribution if its range is $\mathbb{N}_0$, and

- Parameters
    - $\lambda > 0$ - [[Probability Mass Function|PMF]]
    - $\displaystyle p(n) = e^{-\lambda} \frac{\lambda ^{n}}{n!}$     - The important part is $\lambda ^{n} / n!$; $e^{-\lambda}$ is just a constant to make if sum to 1
    - Remember it as the **expansion** of the exponential
- [[Expectation|Mean]]
    - $\lambda$ - [[Variance]]
    - $\lambda$ - [[Moment Generating Function|MGF]]
    - $\exp(\lambda(e^{t}-1))$ - [[Characteristic Function|CF]]
    - $\exp(\lambda(e^{it}-1))$ 
## Poisson Distribution as Approximation to Binomial Distribution

When $n$ is large and $p$ is small, Poisson distribution can be an approximation of a [[Binomial Distribution]]. This is because for $X\sim \operatorname{Binom}(n,p)$, we have
$
P(X = k) = {n \choose k} p^{k}(1-p)^{n-k} = \frac{n!}{k!(n-k)!}\left( \frac{np}{n} \right)^{k}\left( 1 - \frac{np}{n} \right)^{n}\left( 1 - p \right)^{-k}
$
When $n$ is large and $p$ is small, we have
$
\frac{n(n-1)\dots(n-k+1)}{n^{k}} \approx 1, \quad \left( 1 - \frac{np}{n} \right)^{n} \approx e^{-np}, \quad (1-p)^{-k} \approx 1.
$

Therefore, we have
$
P(X = k) \approx e^{-np} \frac{(np)^{k}}{k!},
$
i.e., $X \dot{\sim} \operatorname{Poisson}(np)$. Or, $\operatorname{Binom}(n,\lambda /n)\overset{ d }{ \longrightarrow } \operatorname{Poisson}(\lambda)$.

- [!] The Poisson approximation result can be shown to be valid under even more general conditions than those so far mentioned. For instance, suppose that n independent trials are to be performed, with the ith trial resulting in a success with probability $p_i, i = 1,...,n$. Then it can be shown that if n is large and each $p_i$ is small, then the number of successful trials is approximately Poisson distributed with mean equal to $\sum^n_{i=1}p_i$. In fact, this result will sometimes remain true even when the trials are not independent, provided that their dependence is “weak.” For instance, consider the following example.

## Splitting a Poisson Random Variable

Consider conducting $N \sim \operatorname{Poisson}(\lambda )$ trials. Let $X$ be the success count with a conditional distribution $X \given N = n \sim \operatorname{Binom}(n,p)$. Let $Y = N-X$.
We can show that $X$ and $Y$ are independent, and $X \sim \operatorname{Poisson}(\lambda p)$ and $Y \sim \operatorname{Poisson}(\lambda (1-p))$.

Since all r.v.s are discrete, we consider their PMFs. First, we have
$
p_{X,Y}(x,y) = p_{X,Y\given N}(x,y\given n=x+y) p_{N}(n=x+y) 
= \mathbb{1}\{ y=y \} p_{X\given N}(x| n=x+y)  p_{N}(n=x+y) 
= e^{-\lambda}\frac{\lambda^{x+y}}{(x+y)!} \cdot {x+y \choose x}p^{x}(1-p)^{y}.
$
Then, as $X$ is the marginal distribution of $X,N$, we have
$
p_{X}(x) = \sum_{n=0}^{\infty}p_{X,N}(x,n) = \sum_{n=0}^{\infty}p_{X\given N}(x\given n)p_{N}(n) = \sum_{n=x}^{\infty}{n \choose x}p^{x}(1-p)^{n-x}e^{-\lambda}\frac{\lambda^{n}}{n!}
= \frac{(p /(1-p))^{x}e^{-\lambda}}{x!} \sum_{n\ge x} \frac{(\lambda (1-p))^{n}}{(n-x)!}
= \frac{(\lambda p)^{x}e^{-\lambda}}{x!} \sum_{n=0}^{\infty} \frac{(\lambda (1-p))^{n}}{n!}
= \frac{(\lambda p)^{x}}{x!} e^{\lambda(1-p)-\lambda}
= e^{-\lambda p} \frac{(\lambda p)^{x}}{x!}.
$
By symmetry, $p_{Y}(y) = e^{-\lambda(1-p)}(\lambda(1-p)^{y}) / y!$.
Thus, $X \sim \operatorname{Poisson}(\lambda p)$ and $Y \sim \operatorname{Poisson}(\lambda (1-p))$, and,
$
p_{X}(x)p_{Y}(y) = e^{-\lambda} \frac{\lambda^{x+y}p^{x}(1-p)^{y}}{x!y!}  = p_{X,Y}(x,y),
$


</div></div>
        | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# naked inline n-link

</div>




# Poisson Distribution

A discrete [[Random Variable]] is of Poisson distribution if its range is $\mathbb{N}_0$, and

- Parameters
    - $\lambda > 0$ - [[Probability Mass Function|PMF]]
    - $\displaystyle p(n) = e^{-\lambda} \frac{\lambda ^{n}}{n!}$     - The important part is $\lambda ^{n} / n!$; $e^{-\lambda}$ is just a constant to make if sum to 1
    - Remember it as the **expansion** of the exponential
- [[Expectation|Mean]]
    - $\lambda$ - [[Variance]]
    - $\lambda$ - [[Moment Generating Function|MGF]]
    - $\exp(\lambda(e^{t}-1))$ - [[Characteristic Function|CF]]
    - $\exp(\lambda(e^{it}-1))$ 
## Poisson Distribution as Approximation to Binomial Distribution

When $n$ is large and $p$ is small, Poisson distribution can be an approximation of a [[Binomial Distribution]]. This is because for $X\sim \operatorname{Binom}(n,p)$, we have
$
P(X = k) = {n \choose k} p^{k}(1-p)^{n-k} = \frac{n!}{k!(n-k)!}\left( \frac{np}{n} \right)^{k}\left( 1 - \frac{np}{n} \right)^{n}\left( 1 - p \right)^{-k}
$
When $n$ is large and $p$ is small, we have
$
\frac{n(n-1)\dots(n-k+1)}{n^{k}} \approx 1, \quad \left( 1 - \frac{np}{n} \right)^{n} \approx e^{-np}, \quad (1-p)^{-k} \approx 1.
$

Therefore, we have
$
P(X = k) \approx e^{-np} \frac{(np)^{k}}{k!},
$
i.e., $X \dot{\sim} \operatorname{Poisson}(np)$. Or, $\operatorname{Binom}(n,\lambda /n)\overset{ d }{ \longrightarrow } \operatorname{Poisson}(\lambda)$.

- [!] The Poisson approximation result can be shown to be valid under even more general conditions than those so far mentioned. For instance, suppose that n independent trials are to be performed, with the ith trial resulting in a success with probability $p_i, i = 1,...,n$. Then it can be shown that if n is large and each $p_i$ is small, then the number of successful trials is approximately Poisson distributed with mean equal to $\sum^n_{i=1}p_i$. In fact, this result will sometimes remain true even when the trials are not independent, provided that their dependence is “weak.” For instance, consider the following example.

## Splitting a Poisson Random Variable

Consider conducting $N \sim \operatorname{Poisson}(\lambda )$ trials. Let $X$ be the success count with a conditional distribution $X \given N = n \sim \operatorname{Binom}(n,p)$. Let $Y = N-X$.
We can show that $X$ and $Y$ are independent, and $X \sim \operatorname{Poisson}(\lambda p)$ and $Y \sim \operatorname{Poisson}(\lambda (1-p))$.

Since all r.v.s are discrete, we consider their PMFs. First, we have
$
p_{X,Y}(x,y) = p_{X,Y\given N}(x,y\given n=x+y) p_{N}(n=x+y) 
= \mathbb{1}\{ y=y \} p_{X\given N}(x| n=x+y)  p_{N}(n=x+y) 
= e^{-\lambda}\frac{\lambda^{x+y}}{(x+y)!} \cdot {x+y \choose x}p^{x}(1-p)^{y}.
$
Then, as $X$ is the marginal distribution of $X,N$, we have
$
p_{X}(x) = \sum_{n=0}^{\infty}p_{X,N}(x,n) = \sum_{n=0}^{\infty}p_{X\given N}(x\given n)p_{N}(n) = \sum_{n=x}^{\infty}{n \choose x}p^{x}(1-p)^{n-x}e^{-\lambda}\frac{\lambda^{n}}{n!}
= \frac{(p /(1-p))^{x}e^{-\lambda}}{x!} \sum_{n\ge x} \frac{(\lambda (1-p))^{n}}{(n-x)!}
= \frac{(\lambda p)^{x}e^{-\lambda}}{x!} \sum_{n=0}^{\infty} \frac{(\lambda (1-p))^{n}}{n!}
= \frac{(\lambda p)^{x}}{x!} e^{\lambda(1-p)-\lambda}
= e^{-\lambda p} \frac{(\lambda p)^{x}}{x!}.
$
By symmetry, $p_{Y}(y) = e^{-\lambda(1-p)}(\lambda(1-p)^{y}) / y!$.
Thus, $X \sim \operatorname{Poisson}(\lambda p)$ and $Y \sim \operatorname{Poisson}(\lambda (1-p))$, and,
$
p_{X}(x)p_{Y}(y) = e^{-\lambda} \frac{\lambda^{x+y}p^{x}(1-p)^{y}}{x!y!}  = p_{X,Y}(x,y),
$


</div></div>
        | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Poisson Distribution

A discrete [[Random Variable]] is of Poisson distribution if its range is $\mathbb{N}_0$, and

- Parameters
    - $\lambda > 0$ - [[Probability Mass Function|PMF]]
    - $\displaystyle p(n) = e^{-\lambda} \frac{\lambda ^{n}}{n!}$     - The important part is $\lambda ^{n} / n!$; $e^{-\lambda}$ is just a constant to make if sum to 1
    - Remember it as the **expansion** of the exponential
- [[Expectation|Mean]]
    - $\lambda$ - [[Variance]]
    - $\lambda$ - [[Moment Generating Function|MGF]]
    - $\exp(\lambda(e^{t}-1))$ - [[Characteristic Function|CF]]
    - $\exp(\lambda(e^{it}-1))$ 
## Poisson Distribution as Approximation to Binomial Distribution

When $n$ is large and $p$ is small, Poisson distribution can be an approximation of a [[Binomial Distribution]]. This is because for $X\sim \operatorname{Binom}(n,p)$, we have
$
P(X = k) = {n \choose k} p^{k}(1-p)^{n-k} = \frac{n!}{k!(n-k)!}\left( \frac{np}{n} \right)^{k}\left( 1 - \frac{np}{n} \right)^{n}\left( 1 - p \right)^{-k}
$
When $n$ is large and $p$ is small, we have
$
\frac{n(n-1)\dots(n-k+1)}{n^{k}} \approx 1, \quad \left( 1 - \frac{np}{n} \right)^{n} \approx e^{-np}, \quad (1-p)^{-k} \approx 1.
$

Therefore, we have
$
P(X = k) \approx e^{-np} \frac{(np)^{k}}{k!},
$
i.e., $X \dot{\sim} \operatorname{Poisson}(np)$. Or, $\operatorname{Binom}(n,\lambda /n)\overset{ d }{ \longrightarrow } \operatorname{Poisson}(\lambda)$.

- [!] The Poisson approximation result can be shown to be valid under even more general conditions than those so far mentioned. For instance, suppose that n independent trials are to be performed, with the ith trial resulting in a success with probability $p_i, i = 1,...,n$. Then it can be shown that if n is large and each $p_i$ is small, then the number of successful trials is approximately Poisson distributed with mean equal to $\sum^n_{i=1}p_i$. In fact, this result will sometimes remain true even when the trials are not independent, provided that their dependence is “weak.” For instance, consider the following example.

## Splitting a Poisson Random Variable

Consider conducting $N \sim \operatorname{Poisson}(\lambda )$ trials. Let $X$ be the success count with a conditional distribution $X \given N = n \sim \operatorname{Binom}(n,p)$. Let $Y = N-X$.
We can show that $X$ and $Y$ are independent, and $X \sim \operatorname{Poisson}(\lambda p)$ and $Y \sim \operatorname{Poisson}(\lambda (1-p))$.

Since all r.v.s are discrete, we consider their PMFs. First, we have
$
p_{X,Y}(x,y) = p_{X,Y\given N}(x,y\given n=x+y) p_{N}(n=x+y) 
= \mathbb{1}\{ y=y \} p_{X\given N}(x| n=x+y)  p_{N}(n=x+y) 
= e^{-\lambda}\frac{\lambda^{x+y}}{(x+y)!} \cdot {x+y \choose x}p^{x}(1-p)^{y}.
$
Then, as $X$ is the marginal distribution of $X,N$, we have
$
p_{X}(x) = \sum_{n=0}^{\infty}p_{X,N}(x,n) = \sum_{n=0}^{\infty}p_{X\given N}(x\given n)p_{N}(n) = \sum_{n=x}^{\infty}{n \choose x}p^{x}(1-p)^{n-x}e^{-\lambda}\frac{\lambda^{n}}{n!}
= \frac{(p /(1-p))^{x}e^{-\lambda}}{x!} \sum_{n\ge x} \frac{(\lambda (1-p))^{n}}{(n-x)!}
= \frac{(\lambda p)^{x}e^{-\lambda}}{x!} \sum_{n=0}^{\infty} \frac{(\lambda (1-p))^{n}}{n!}
= \frac{(\lambda p)^{x}}{x!} e^{\lambda(1-p)-\lambda}
= e^{-\lambda p} \frac{(\lambda p)^{x}}{x!}.
$
By symmetry, $p_{Y}(y) = e^{-\lambda(1-p)}(\lambda(1-p)^{y}) / y!$.
Thus, $X \sim \operatorname{Poisson}(\lambda p)$ and $Y \sim \operatorname{Poisson}(\lambda (1-p))$, and,
$
p_{X}(x)p_{Y}(y) = e^{-\lambda} \frac{\lambda^{x+y}p^{x}(1-p)^{y}}{x!y!}  = p_{X,Y}(x,y),
$


</div></div>
        | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Poisson Distribution

A discrete [[Random Variable]] is of Poisson distribution if its range is $\mathbb{N}_0$, and

- Parameters
    - $\lambda > 0$ - [[Probability Mass Function|PMF]]
    - $\displaystyle p(n) = e^{-\lambda} \frac{\lambda ^{n}}{n!}$     - The important part is $\lambda ^{n} / n!$; $e^{-\lambda}$ is just a constant to make if sum to 1
    - Remember it as the **expansion** of the exponential
- [[Expectation|Mean]]
    - $\lambda$ - [[Variance]]
    - $\lambda$ - [[Moment Generating Function|MGF]]
    - $\exp(\lambda(e^{t}-1))$ - [[Characteristic Function|CF]]
    - $\exp(\lambda(e^{it}-1))$ 
## Poisson Distribution as Approximation to Binomial Distribution

When $n$ is large and $p$ is small, Poisson distribution can be an approximation of a [[Binomial Distribution]]. This is because for $X\sim \operatorname{Binom}(n,p)$, we have
$
P(X = k) = {n \choose k} p^{k}(1-p)^{n-k} = \frac{n!}{k!(n-k)!}\left( \frac{np}{n} \right)^{k}\left( 1 - \frac{np}{n} \right)^{n}\left( 1 - p \right)^{-k}
$
When $n$ is large and $p$ is small, we have
$
\frac{n(n-1)\dots(n-k+1)}{n^{k}} \approx 1, \quad \left( 1 - \frac{np}{n} \right)^{n} \approx e^{-np}, \quad (1-p)^{-k} \approx 1.
$

Therefore, we have
$
P(X = k) \approx e^{-np} \frac{(np)^{k}}{k!},
$
i.e., $X \dot{\sim} \operatorname{Poisson}(np)$. Or, $\operatorname{Binom}(n,\lambda /n)\overset{ d }{ \longrightarrow } \operatorname{Poisson}(\lambda)$.

- [!] The Poisson approximation result can be shown to be valid under even more general conditions than those so far mentioned. For instance, suppose that n independent trials are to be performed, with the ith trial resulting in a success with probability $p_i, i = 1,...,n$. Then it can be shown that if n is large and each $p_i$ is small, then the number of successful trials is approximately Poisson distributed with mean equal to $\sum^n_{i=1}p_i$. In fact, this result will sometimes remain true even when the trials are not independent, provided that their dependence is “weak.” For instance, consider the following example.

## Splitting a Poisson Random Variable

Consider conducting $N \sim \operatorname{Poisson}(\lambda )$ trials. Let $X$ be the success count with a conditional distribution $X \given N = n \sim \operatorname{Binom}(n,p)$. Let $Y = N-X$.
We can show that $X$ and $Y$ are independent, and $X \sim \operatorname{Poisson}(\lambda p)$ and $Y \sim \operatorname{Poisson}(\lambda (1-p))$.

Since all r.v.s are discrete, we consider their PMFs. First, we have
$
p_{X,Y}(x,y) = p_{X,Y\given N}(x,y\given n=x+y) p_{N}(n=x+y) 
= \mathbb{1}\{ y=y \} p_{X\given N}(x| n=x+y)  p_{N}(n=x+y) 
= e^{-\lambda}\frac{\lambda^{x+y}}{(x+y)!} \cdot {x+y \choose x}p^{x}(1-p)^{y}.
$
Then, as $X$ is the marginal distribution of $X,N$, we have
$
p_{X}(x) = \sum_{n=0}^{\infty}p_{X,N}(x,n) = \sum_{n=0}^{\infty}p_{X\given N}(x\given n)p_{N}(n) = \sum_{n=x}^{\infty}{n \choose x}p^{x}(1-p)^{n-x}e^{-\lambda}\frac{\lambda^{n}}{n!}
= \frac{(p /(1-p))^{x}e^{-\lambda}}{x!} \sum_{n\ge x} \frac{(\lambda (1-p))^{n}}{(n-x)!}
= \frac{(\lambda p)^{x}e^{-\lambda}}{x!} \sum_{n=0}^{\infty} \frac{(\lambda (1-p))^{n}}{n!}
= \frac{(\lambda p)^{x}}{x!} e^{\lambda(1-p)-\lambda}
= e^{-\lambda p} \frac{(\lambda p)^{x}}{x!}.
$
By symmetry, $p_{Y}(y) = e^{-\lambda(1-p)}(\lambda(1-p)^{y}) / y!$.
Thus, $X \sim \operatorname{Poisson}(\lambda p)$ and $Y \sim \operatorname{Poisson}(\lambda (1-p))$, and,
$
p_{X}(x)p_{Y}(y) = e^{-\lambda} \frac{\lambda^{x+y}p^{x}(1-p)^{y}}{x!y!}  = p_{X,Y}(x,y),
$


</div></div>
     | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Poisson Distribution

A discrete [[Random Variable]] is of Poisson distribution if its range is $\mathbb{N}_0$, and

- Parameters
    - $\lambda > 0$ - [[Probability Mass Function|PMF]]
    - $\displaystyle p(n) = e^{-\lambda} \frac{\lambda ^{n}}{n!}$     - The important part is $\lambda ^{n} / n!$; $e^{-\lambda}$ is just a constant to make if sum to 1
    - Remember it as the **expansion** of the exponential
- [[Expectation|Mean]]
    - $\lambda$ - [[Variance]]
    - $\lambda$ - [[Moment Generating Function|MGF]]
    - $\exp(\lambda(e^{t}-1))$ - [[Characteristic Function|CF]]
    - $\exp(\lambda(e^{it}-1))$ 
## Poisson Distribution as Approximation to Binomial Distribution

When $n$ is large and $p$ is small, Poisson distribution can be an approximation of a [[Binomial Distribution]]. This is because for $X\sim \operatorname{Binom}(n,p)$, we have
$
P(X = k) = {n \choose k} p^{k}(1-p)^{n-k} = \frac{n!}{k!(n-k)!}\left( \frac{np}{n} \right)^{k}\left( 1 - \frac{np}{n} \right)^{n}\left( 1 - p \right)^{-k}
$
When $n$ is large and $p$ is small, we have
$
\frac{n(n-1)\dots(n-k+1)}{n^{k}} \approx 1, \quad \left( 1 - \frac{np}{n} \right)^{n} \approx e^{-np}, \quad (1-p)^{-k} \approx 1.
$

Therefore, we have
$
P(X = k) \approx e^{-np} \frac{(np)^{k}}{k!},
$
i.e., $X \dot{\sim} \operatorname{Poisson}(np)$. Or, $\operatorname{Binom}(n,\lambda /n)\overset{ d }{ \longrightarrow } \operatorname{Poisson}(\lambda)$.

- [!] The Poisson approximation result can be shown to be valid under even more general conditions than those so far mentioned. For instance, suppose that n independent trials are to be performed, with the ith trial resulting in a success with probability $p_i, i = 1,...,n$. Then it can be shown that if n is large and each $p_i$ is small, then the number of successful trials is approximately Poisson distributed with mean equal to $\sum^n_{i=1}p_i$. In fact, this result will sometimes remain true even when the trials are not independent, provided that their dependence is “weak.” For instance, consider the following example.

## Splitting a Poisson Random Variable

Consider conducting $N \sim \operatorname{Poisson}(\lambda )$ trials. Let $X$ be the success count with a conditional distribution $X \given N = n \sim \operatorname{Binom}(n,p)$. Let $Y = N-X$.
We can show that $X$ and $Y$ are independent, and $X \sim \operatorname{Poisson}(\lambda p)$ and $Y \sim \operatorname{Poisson}(\lambda (1-p))$.

Since all r.v.s are discrete, we consider their PMFs. First, we have
$
p_{X,Y}(x,y) = p_{X,Y\given N}(x,y\given n=x+y) p_{N}(n=x+y) 
= \mathbb{1}\{ y=y \} p_{X\given N}(x| n=x+y)  p_{N}(n=x+y) 
= e^{-\lambda}\frac{\lambda^{x+y}}{(x+y)!} \cdot {x+y \choose x}p^{x}(1-p)^{y}.
$
Then, as $X$ is the marginal distribution of $X,N$, we have
$
p_{X}(x) = \sum_{n=0}^{\infty}p_{X,N}(x,n) = \sum_{n=0}^{\infty}p_{X\given N}(x\given n)p_{N}(n) = \sum_{n=x}^{\infty}{n \choose x}p^{x}(1-p)^{n-x}e^{-\lambda}\frac{\lambda^{n}}{n!}
= \frac{(p /(1-p))^{x}e^{-\lambda}}{x!} \sum_{n\ge x} \frac{(\lambda (1-p))^{n}}{(n-x)!}
= \frac{(\lambda p)^{x}e^{-\lambda}}{x!} \sum_{n=0}^{\infty} \frac{(\lambda (1-p))^{n}}{n!}
= \frac{(\lambda p)^{x}}{x!} e^{\lambda(1-p)-\lambda}
= e^{-\lambda p} \frac{(\lambda p)^{x}}{x!}.
$
By symmetry, $p_{Y}(y) = e^{-\lambda(1-p)}(\lambda(1-p)^{y}) / y!$.
Thus, $X \sim \operatorname{Poisson}(\lambda p)$ and $Y \sim \operatorname{Poisson}(\lambda (1-p))$, and,
$
p_{X}(x)p_{Y}(y) = e^{-\lambda} \frac{\lambda^{x+y}p^{x}(1-p)^{y}}{x!y!}  = p_{X,Y}(x,y),
$


</div></div>
     |
| [[Exponential Distribution]]          | /                                                       | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Exponential Distribution

A continuous [[Random Variable]] is of exponential distribution if it has

- Parameters
    - $\lambda > 0$ - [[Probability Density Function\|PDF]]
    - $\displaystyle f(n) = \begin{cases} \lambda e^{-\lambda x}, \quad &x \ge 0,\\ 0, & x< 0 \end{cases}$     - The important part is $e^{-\lambda x}$; $\lambda$ is just a constant to make if integral to 1
- [[Cumulative Distribution Function|CDF]]
    - $1 - e^{-\lambda x}$ - [[Expectation|Mean]]
    - $\frac{1}{\lambda}$ - [[Variance]]
    - $\frac{1}{\lambda^{2}}$ - [[Moment Generating Function|MGF]]
    - $\lambda /(\lambda - t), \quad t < \lambda$ - [[Characteristic Function|CF]]
    - $\lambda /(\lambda - it)$ 
By the uniqueness of [[Moment Generating Function|MGF]], exponential distribution is [[Gamma Distribution]] with parameter $(1,\lambda)$.

## Exponential Distribution and Poisson Distribution

Exponential distribution and [[Poisson Distribution]] are similar in many ways. Actually, **the waiting times for poisson distribution is an exponential distribution with parameter lambda**. Actually, let $Y$ be the waiting time, let $\lambda$ be the average number of arrivals per time. For $t \ge 0$, let $X \sim \operatorname{Poisson}(\lambda t)$. We know that
$
P(Y > t) = P(X = 0) = e^{-\lambda t} \frac{(\lambda t)^{0}}{0!} = e^{-\lambda t}.
$

Then $P(Y \le t) = 1 - e^{-\lambda t}$, i.e., $Y \sim \exp(\lambda)$.

## Exponential Distribution and Geometric Distribution

Exponential distribution can be viewed as the "limit", or a continuous version, of a [[Geometric Distribution]]:
$
F_{\exp }(n \delta  ) = 1-e^{-\lambda n \delta  } = 1 - (e^{-\lambda \delta })^{n} = F_{\mathrm{geo}}(n),
$
where the geometric distribution has a parameter $q = e^{-\lambda\delta}$.
Intuitively, the exponential distribution corresponds to a limit of a situation where every $δ$ time units, we toss a coin whose success probability is $p = 1-e^{-\lambda\delta} \approx λδ$, and let $X$ be the time elapsed until the first success.

## Memoryless

We say a nonnegative [[Random Variable]] $X$ is memoryless, if for $n,k\ge{0}$
$
P(X \ge n+k | X \ge n) = P(X \ge k).
$

An exponential random variable is memoryless because
$
P(X \ge n+k | X\ge n) = \frac{e^{-\lambda(n+k)}}{e^{-\lambda n}} = e^{-\lambda k} = P(x \ge k).
$


</div></div>
    | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# n-link inline naked

</div>




# Exponential Distribution

A continuous [[Random Variable]] is of exponential distribution if it has

- Parameters
    - $\lambda > 0$ - [[Probability Density Function\|PDF]]
    - $\displaystyle f(n) = \begin{cases} \lambda e^{-\lambda x}, \quad &x \ge 0,\\ 0, & x< 0 \end{cases}$     - The important part is $e^{-\lambda x}$; $\lambda$ is just a constant to make if integral to 1
- [[Cumulative Distribution Function|CDF]]
    - $1 - e^{-\lambda x}$ - [[Expectation|Mean]]
    - $\frac{1}{\lambda}$ - [[Variance]]
    - $\frac{1}{\lambda^{2}}$ - [[Moment Generating Function|MGF]]
    - $\lambda /(\lambda - t), \quad t < \lambda$ - [[Characteristic Function|CF]]
    - $\lambda /(\lambda - it)$ 
By the uniqueness of [[Moment Generating Function|MGF]], exponential distribution is [[Gamma Distribution]] with parameter $(1,\lambda)$.

## Exponential Distribution and Poisson Distribution

Exponential distribution and [[Poisson Distribution]] are similar in many ways. Actually, **the waiting times for poisson distribution is an exponential distribution with parameter lambda**. Actually, let $Y$ be the waiting time, let $\lambda$ be the average number of arrivals per time. For $t \ge 0$, let $X \sim \operatorname{Poisson}(\lambda t)$. We know that
$
P(Y > t) = P(X = 0) = e^{-\lambda t} \frac{(\lambda t)^{0}}{0!} = e^{-\lambda t}.
$

Then $P(Y \le t) = 1 - e^{-\lambda t}$, i.e., $Y \sim \exp(\lambda)$.

## Exponential Distribution and Geometric Distribution

Exponential distribution can be viewed as the "limit", or a continuous version, of a [[Geometric Distribution]]:
$
F_{\exp }(n \delta  ) = 1-e^{-\lambda n \delta  } = 1 - (e^{-\lambda \delta })^{n} = F_{\mathrm{geo}}(n),
$
where the geometric distribution has a parameter $q = e^{-\lambda\delta}$.
Intuitively, the exponential distribution corresponds to a limit of a situation where every $δ$ time units, we toss a coin whose success probability is $p = 1-e^{-\lambda\delta} \approx λδ$, and let $X$ be the time elapsed until the first success.

## Memoryless

We say a nonnegative [[Random Variable]] $X$ is memoryless, if for $n,k\ge{0}$
$
P(X \ge n+k | X \ge n) = P(X \ge k).
$

An exponential random variable is memoryless because
$
P(X \ge n+k | X\ge n) = \frac{e^{-\lambda(n+k)}}{e^{-\lambda n}} = e^{-\lambda k} = P(x \ge k).
$


</div></div>
    | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Exponential Distribution

A continuous [[Random Variable]] is of exponential distribution if it has

- Parameters
    - $\lambda > 0$ - [[Probability Density Function\|PDF]]
    - $\displaystyle f(n) = \begin{cases} \lambda e^{-\lambda x}, \quad &x \ge 0,\\ 0, & x< 0 \end{cases}$     - The important part is $e^{-\lambda x}$; $\lambda$ is just a constant to make if integral to 1
- [[Cumulative Distribution Function|CDF]]
    - $1 - e^{-\lambda x}$ - [[Expectation|Mean]]
    - $\frac{1}{\lambda}$ - [[Variance]]
    - $\frac{1}{\lambda^{2}}$ - [[Moment Generating Function|MGF]]
    - $\lambda /(\lambda - t), \quad t < \lambda$ - [[Characteristic Function|CF]]
    - $\lambda /(\lambda - it)$ 
By the uniqueness of [[Moment Generating Function|MGF]], exponential distribution is [[Gamma Distribution]] with parameter $(1,\lambda)$.

## Exponential Distribution and Poisson Distribution

Exponential distribution and [[Poisson Distribution]] are similar in many ways. Actually, **the waiting times for poisson distribution is an exponential distribution with parameter lambda**. Actually, let $Y$ be the waiting time, let $\lambda$ be the average number of arrivals per time. For $t \ge 0$, let $X \sim \operatorname{Poisson}(\lambda t)$. We know that
$
P(Y > t) = P(X = 0) = e^{-\lambda t} \frac{(\lambda t)^{0}}{0!} = e^{-\lambda t}.
$

Then $P(Y \le t) = 1 - e^{-\lambda t}$, i.e., $Y \sim \exp(\lambda)$.

## Exponential Distribution and Geometric Distribution

Exponential distribution can be viewed as the "limit", or a continuous version, of a [[Geometric Distribution]]:
$
F_{\exp }(n \delta  ) = 1-e^{-\lambda n \delta  } = 1 - (e^{-\lambda \delta })^{n} = F_{\mathrm{geo}}(n),
$
where the geometric distribution has a parameter $q = e^{-\lambda\delta}$.
Intuitively, the exponential distribution corresponds to a limit of a situation where every $δ$ time units, we toss a coin whose success probability is $p = 1-e^{-\lambda\delta} \approx λδ$, and let $X$ be the time elapsed until the first success.

## Memoryless

We say a nonnegative [[Random Variable]] $X$ is memoryless, if for $n,k\ge{0}$
$
P(X \ge n+k | X \ge n) = P(X \ge k).
$

An exponential random variable is memoryless because
$
P(X \ge n+k | X\ge n) = \frac{e^{-\lambda(n+k)}}{e^{-\lambda n}} = e^{-\lambda k} = P(x \ge k).
$


</div></div>
    | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# naked inline n-link

</div>




# Exponential Distribution

A continuous [[Random Variable]] is of exponential distribution if it has

- Parameters
    - $\lambda > 0$ - [[Probability Density Function\|PDF]]
    - $\displaystyle f(n) = \begin{cases} \lambda e^{-\lambda x}, \quad &x \ge 0,\\ 0, & x< 0 \end{cases}$     - The important part is $e^{-\lambda x}$; $\lambda$ is just a constant to make if integral to 1
- [[Cumulative Distribution Function|CDF]]
    - $1 - e^{-\lambda x}$ - [[Expectation|Mean]]
    - $\frac{1}{\lambda}$ - [[Variance]]
    - $\frac{1}{\lambda^{2}}$ - [[Moment Generating Function|MGF]]
    - $\lambda /(\lambda - t), \quad t < \lambda$ - [[Characteristic Function|CF]]
    - $\lambda /(\lambda - it)$ 
By the uniqueness of [[Moment Generating Function|MGF]], exponential distribution is [[Gamma Distribution]] with parameter $(1,\lambda)$.

## Exponential Distribution and Poisson Distribution

Exponential distribution and [[Poisson Distribution]] are similar in many ways. Actually, **the waiting times for poisson distribution is an exponential distribution with parameter lambda**. Actually, let $Y$ be the waiting time, let $\lambda$ be the average number of arrivals per time. For $t \ge 0$, let $X \sim \operatorname{Poisson}(\lambda t)$. We know that
$
P(Y > t) = P(X = 0) = e^{-\lambda t} \frac{(\lambda t)^{0}}{0!} = e^{-\lambda t}.
$

Then $P(Y \le t) = 1 - e^{-\lambda t}$, i.e., $Y \sim \exp(\lambda)$.

## Exponential Distribution and Geometric Distribution

Exponential distribution can be viewed as the "limit", or a continuous version, of a [[Geometric Distribution]]:
$
F_{\exp }(n \delta  ) = 1-e^{-\lambda n \delta  } = 1 - (e^{-\lambda \delta })^{n} = F_{\mathrm{geo}}(n),
$
where the geometric distribution has a parameter $q = e^{-\lambda\delta}$.
Intuitively, the exponential distribution corresponds to a limit of a situation where every $δ$ time units, we toss a coin whose success probability is $p = 1-e^{-\lambda\delta} \approx λδ$, and let $X$ be the time elapsed until the first success.

## Memoryless

We say a nonnegative [[Random Variable]] $X$ is memoryless, if for $n,k\ge{0}$
$
P(X \ge n+k | X \ge n) = P(X \ge k).
$

An exponential random variable is memoryless because
$
P(X \ge n+k | X\ge n) = \frac{e^{-\lambda(n+k)}}{e^{-\lambda n}} = e^{-\lambda k} = P(x \ge k).
$


</div></div>
    | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Exponential Distribution

A continuous [[Random Variable]] is of exponential distribution if it has

- Parameters
    - $\lambda > 0$ - [[Probability Density Function\|PDF]]
    - $\displaystyle f(n) = \begin{cases} \lambda e^{-\lambda x}, \quad &x \ge 0,\\ 0, & x< 0 \end{cases}$     - The important part is $e^{-\lambda x}$; $\lambda$ is just a constant to make if integral to 1
- [[Cumulative Distribution Function|CDF]]
    - $1 - e^{-\lambda x}$ - [[Expectation|Mean]]
    - $\frac{1}{\lambda}$ - [[Variance]]
    - $\frac{1}{\lambda^{2}}$ - [[Moment Generating Function|MGF]]
    - $\lambda /(\lambda - t), \quad t < \lambda$ - [[Characteristic Function|CF]]
    - $\lambda /(\lambda - it)$ 
By the uniqueness of [[Moment Generating Function|MGF]], exponential distribution is [[Gamma Distribution]] with parameter $(1,\lambda)$.

## Exponential Distribution and Poisson Distribution

Exponential distribution and [[Poisson Distribution]] are similar in many ways. Actually, **the waiting times for poisson distribution is an exponential distribution with parameter lambda**. Actually, let $Y$ be the waiting time, let $\lambda$ be the average number of arrivals per time. For $t \ge 0$, let $X \sim \operatorname{Poisson}(\lambda t)$. We know that
$
P(Y > t) = P(X = 0) = e^{-\lambda t} \frac{(\lambda t)^{0}}{0!} = e^{-\lambda t}.
$

Then $P(Y \le t) = 1 - e^{-\lambda t}$, i.e., $Y \sim \exp(\lambda)$.

## Exponential Distribution and Geometric Distribution

Exponential distribution can be viewed as the "limit", or a continuous version, of a [[Geometric Distribution]]:
$
F_{\exp }(n \delta  ) = 1-e^{-\lambda n \delta  } = 1 - (e^{-\lambda \delta })^{n} = F_{\mathrm{geo}}(n),
$
where the geometric distribution has a parameter $q = e^{-\lambda\delta}$.
Intuitively, the exponential distribution corresponds to a limit of a situation where every $δ$ time units, we toss a coin whose success probability is $p = 1-e^{-\lambda\delta} \approx λδ$, and let $X$ be the time elapsed until the first success.

## Memoryless

We say a nonnegative [[Random Variable]] $X$ is memoryless, if for $n,k\ge{0}$
$
P(X \ge n+k | X \ge n) = P(X \ge k).
$

An exponential random variable is memoryless because
$
P(X \ge n+k | X\ge n) = \frac{e^{-\lambda(n+k)}}{e^{-\lambda n}} = e^{-\lambda k} = P(x \ge k).
$


</div></div>
    | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Exponential Distribution

A continuous [[Random Variable]] is of exponential distribution if it has

- Parameters
    - $\lambda > 0$ - [[Probability Density Function\|PDF]]
    - $\displaystyle f(n) = \begin{cases} \lambda e^{-\lambda x}, \quad &x \ge 0,\\ 0, & x< 0 \end{cases}$     - The important part is $e^{-\lambda x}$; $\lambda$ is just a constant to make if integral to 1
- [[Cumulative Distribution Function|CDF]]
    - $1 - e^{-\lambda x}$ - [[Expectation|Mean]]
    - $\frac{1}{\lambda}$ - [[Variance]]
    - $\frac{1}{\lambda^{2}}$ - [[Moment Generating Function|MGF]]
    - $\lambda /(\lambda - t), \quad t < \lambda$ - [[Characteristic Function|CF]]
    - $\lambda /(\lambda - it)$ 
By the uniqueness of [[Moment Generating Function|MGF]], exponential distribution is [[Gamma Distribution]] with parameter $(1,\lambda)$.

## Exponential Distribution and Poisson Distribution

Exponential distribution and [[Poisson Distribution]] are similar in many ways. Actually, **the waiting times for poisson distribution is an exponential distribution with parameter lambda**. Actually, let $Y$ be the waiting time, let $\lambda$ be the average number of arrivals per time. For $t \ge 0$, let $X \sim \operatorname{Poisson}(\lambda t)$. We know that
$
P(Y > t) = P(X = 0) = e^{-\lambda t} \frac{(\lambda t)^{0}}{0!} = e^{-\lambda t}.
$

Then $P(Y \le t) = 1 - e^{-\lambda t}$, i.e., $Y \sim \exp(\lambda)$.

## Exponential Distribution and Geometric Distribution

Exponential distribution can be viewed as the "limit", or a continuous version, of a [[Geometric Distribution]]:
$
F_{\exp }(n \delta  ) = 1-e^{-\lambda n \delta  } = 1 - (e^{-\lambda \delta })^{n} = F_{\mathrm{geo}}(n),
$
where the geometric distribution has a parameter $q = e^{-\lambda\delta}$.
Intuitively, the exponential distribution corresponds to a limit of a situation where every $δ$ time units, we toss a coin whose success probability is $p = 1-e^{-\lambda\delta} \approx λδ$, and let $X$ be the time elapsed until the first success.

## Memoryless

We say a nonnegative [[Random Variable]] $X$ is memoryless, if for $n,k\ge{0}$
$
P(X \ge n+k | X \ge n) = P(X \ge k).
$

An exponential random variable is memoryless because
$
P(X \ge n+k | X\ge n) = \frac{e^{-\lambda(n+k)}}{e^{-\lambda n}} = e^{-\lambda k} = P(x \ge k).
$


</div></div>
 | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Exponential Distribution

A continuous [[Random Variable]] is of exponential distribution if it has

- Parameters
    - $\lambda > 0$ - [[Probability Density Function\|PDF]]
    - $\displaystyle f(n) = \begin{cases} \lambda e^{-\lambda x}, \quad &x \ge 0,\\ 0, & x< 0 \end{cases}$     - The important part is $e^{-\lambda x}$; $\lambda$ is just a constant to make if integral to 1
- [[Cumulative Distribution Function|CDF]]
    - $1 - e^{-\lambda x}$ - [[Expectation|Mean]]
    - $\frac{1}{\lambda}$ - [[Variance]]
    - $\frac{1}{\lambda^{2}}$ - [[Moment Generating Function|MGF]]
    - $\lambda /(\lambda - t), \quad t < \lambda$ - [[Characteristic Function|CF]]
    - $\lambda /(\lambda - it)$ 
By the uniqueness of [[Moment Generating Function|MGF]], exponential distribution is [[Gamma Distribution]] with parameter $(1,\lambda)$.

## Exponential Distribution and Poisson Distribution

Exponential distribution and [[Poisson Distribution]] are similar in many ways. Actually, **the waiting times for poisson distribution is an exponential distribution with parameter lambda**. Actually, let $Y$ be the waiting time, let $\lambda$ be the average number of arrivals per time. For $t \ge 0$, let $X \sim \operatorname{Poisson}(\lambda t)$. We know that
$
P(Y > t) = P(X = 0) = e^{-\lambda t} \frac{(\lambda t)^{0}}{0!} = e^{-\lambda t}.
$

Then $P(Y \le t) = 1 - e^{-\lambda t}$, i.e., $Y \sim \exp(\lambda)$.

## Exponential Distribution and Geometric Distribution

Exponential distribution can be viewed as the "limit", or a continuous version, of a [[Geometric Distribution]]:
$
F_{\exp }(n \delta  ) = 1-e^{-\lambda n \delta  } = 1 - (e^{-\lambda \delta })^{n} = F_{\mathrm{geo}}(n),
$
where the geometric distribution has a parameter $q = e^{-\lambda\delta}$.
Intuitively, the exponential distribution corresponds to a limit of a situation where every $δ$ time units, we toss a coin whose success probability is $p = 1-e^{-\lambda\delta} \approx λδ$, and let $X$ be the time elapsed until the first success.

## Memoryless

We say a nonnegative [[Random Variable]] $X$ is memoryless, if for $n,k\ge{0}$
$
P(X \ge n+k | X \ge n) = P(X \ge k).
$

An exponential random variable is memoryless because
$
P(X \ge n+k | X\ge n) = \frac{e^{-\lambda(n+k)}}{e^{-\lambda n}} = e^{-\lambda k} = P(x \ge k).
$


</div></div>
 |
| [[Normal Distribution]]               | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline n-link naked

</div>




# Normal Distribution

A [[Random Variable]] is said to be normally distributed if it has

- Notation
    - $\mathcal{N}(\mu, \sigma^{2})$ - Parameters
    - $\mu\in\R, \sigma^{2}\in\R_{+}$ - [[Probability Density Function\|PDF]]
    - $\displaystyle f(x)=\frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^{2}}$     - $(2 \pi)^{-k / 2} |\boldsymbol{\Sigma}|^{-1 / 2} \exp \left(-\frac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^{\top} \boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})\right)$ for $k$-dimensional with PSD $\Sigma$
- [[Expectation|Mean]]
    - $\mu$ - [[Variance]]
    - $\sigma^{2}$ - [[Moment Generating Function|MGF]]
    - $e^{\mu t + \sigma^{2}t^{2} /2}$ - [[Characteristic Function|CF]]
    - $e^{it\mu - \sigma^{2}t^{2} /2}$ 
Because of the [[Central Limit Theorem]], in practice, many random phenomena obey, at least approximately, a normal probability distribution.

## Equivalent Definitions for Multivariate Normal Distribution

We can define a random vector to be (nondegenerate multivariate) normal if if has a PDF specified above.
1. Or, if it has the form:
$
X = DW + \mu,
$
for any matrix $D$ and vector $\mu$, where $W$ is a random vector whose components are independent standard normal random variables $\mathcal{N}(0,1)$.
2. Or, if for any real vector $a$, the random variable $a^{T}X$ is normal.

These two alternative definitions cover *degenerate* normal distribution, i.e., some components are constant/ the distribution is concentrated on a proper subspace of $\R^{k}$.

### Equivalence

#### First Alternative

By change of variables, we can see that the definition via PDF implies the first alternative definition. We now show that if $D$ is not singular, $X=DW+\mu$ is a nondegenerate normal r.v. with a PDF of the form above.
By the relationship of [[Derived Distribution]], we have
$
f_{X}(x) = f_{W}(D^{-1}x) \cdot | D^{-1}|.
$
Plugging in the PDF of standard normal distribution, we get
$
f_{X}(x) = (2\pi)^{-n /2}\exp \left( -\frac{1}{2} (x-\mu)^T D^{-T}D^{-1} (x-\mu) \right) \cdot \frac{1}{|D|}
= (2\pi)^{-n /2}|DD^T|^{-1 /2}\exp \left( -\frac{1}{2} (x-\mu)^T (DD^T)^{-1} (x-\mu) \right),
$
and $DD^T$ is the covariance of $X$.

#### Second Alternative

The relationship from the first alternative definition to the second is direct. Now suppose $a^TX$ is normal for any vector $a$.

> [!error] Wrong
> We inspect the [[Moment Generating Function|MGF]] of $X$:
> $
> M_{X}(s) = M_{s^TX}(1) = \exp(s^T\mathbb{E}[X] + s^T\Var(X)s/2),
> $
> where we use the fact that $s^TX$ is normal with mean $s^T\mathbb{E}X$ and variance $s^T\Var(X)s$. On the other hand, let $Y=\sqrt{ \Var(X) }W+\mathbb{E}[X]$, where $W$ is a standard normal random vector. Then, $Y$ ~~is multivariate normal and~~ has the same MGF as $X$. By the inversion theorem of MGF, $X$ and $Y$ have the same distribution.

- [!] The above proof is wrong, as we want to show $X=Y$ but not only $X\overset{ d }{ = }Y$.

To rigorously prove the equivalence, we consider two cases.

**Case I.** $V = D^{2} = \Cov(X,X) \succ 0$. Thus, $D$ is invertible and we let $W = D^{-1}(X-\mu)$. We want to show that $W$ is standard normal, and thus $X = DW +\mu$ satisfies the first alternative definition.
We first have $\mathbb{E}[W] = 0$ and $\Var(W) = D^{-1}\Var(X)D^{-T} = D^{-1}D^{2}D^{-1} = I$.
We then inspect the [[Moment Generating Function|MGF]] (transform) of $W$:
$
\begin{aligned}
M_{W}(s) =& \mathbb{E}[\exp(s^{T}W)] \\
=& \mathbb{E}[\exp(s^{T}W + \mu') \exp(-\mu')] && (\mu' = s^{T}D^{-1}\mu )\\
=& \exp(-\mu') \mathbb{E}[\exp(s'^{T}X)] && (s' = D^{-1}s)\\
=& \exp(-\mu')M_{s'^{T}X}(1) \\
=& \exp(-\mu')\exp(s'^{T}\mu + s'^{T}V s'/2) && (s'X \text{ is normal by Alt. Def. 2}) \\
=& \exp(-\mu')\exp(\mu' + s^{T}s/2) \\
=& \exp(s^{T}s/2),
\end{aligned}
$
which is the MGF of a standard normal random variable. Therefore, $W \sim \mathcal{N}(0,I)$.

**Case II.** $V$ is singular. Then, there exists a vector $a\ne 0$ such that $Va = 0$. For simplicity, suppose $\mu=0$. Note that
$
a^{T}Va = \mathbb{E}[(a^{T}X)^{2}] = 0.
$
Thus, $a^{T}X = 0$, indicating the linear dependence of $X$. WLOG, suppose $X = (Y;Z)\in\R^{k=d+(k-d)}$ and the first $0\le d<k$ components of $X$ are linearly independent and $Z = AY$ is a linear combination of $Y$. Since $X$ satisfies the second alternative definition, $Y$ also satisfies it. By the Case I, we know $Y=DW$ for some positive definite $D$ and standard normal $W$. Let $W'$ be another $k-d$-dimensional standard normal r.v. independent of $W$. Then, we can write
$
X = \begin{bmatrix} Y\\Z \end{bmatrix}
= \begin{bmatrix} D&0\\AD&0 \end{bmatrix}
 \begin{bmatrix} W\\W' \end{bmatrix}
.$

## Properties

- (**Affine transformation**). The [[Affine Transformation]] of a normal random variable $X$: $a + BX$ is also a normal random variable
    - As a special case, any sub-vector of a normal random vector is also normal
        - As a special case, any component of a normal random vector is also normal
    - If $X \sim \mathcal{N}(\mu,\Sigma)$, then $BX+a \sim \mathcal{N}(B\mu+a,B \Sigma B^{T})$
    - [&] The proof follows the alternative definition 1 above
- (**Independent Gaussians are jointly Gaussian**). The sum of independent normal random variables is also a normal random variable ^prop-ind-joint
    - [&] Prove this using the [[Moment Generating Function#Inversion Theorem]]
    - [!] Note that this is generally not true for dependent random variables
    - [!] More generally, if a random vector with normal components is not **jointly** normal, then its affine transformation is not necessarily normal! See also [[#Independence, Correlation, and Jointly Normal]]
- (**Sufficiency**) The mean and covariance of a multivariate normal distribution consist of a [[Sufficient Statistic]]. ^prop-suff
    - In other words, the distribution of a multivariate normal random vector is completely determined by its mean and covariance
    - [&] See [[#Sufficiency]] for proof
- (**Independent iff Uncorrelated**). For a multivariate normal random vector, its components are independent if and only if they are uncorrelated
    - [&] We can use the sufficiency property to prove this. For $X$ with uncorrelated components, we can construct $Y$ with independent components that have the same mean and variance. Then $X\overset{ d }{ = }Y$ and thus $X$ has independent components. See also [[#Independence, Correlation, and Jointly Normal]]
    - [&] For nondegenerate normal random vector, we can also factorize the PDF to show independence.
    - [!] The statement is not true for general [[Random Variable]]s for which the mean and variance are not sufficient; see [[#Independence, Correlation, and Jointly Normal]]
- Hence, if $X\sim \mathcal{N}(\mu,\sigma^{2})$, then $Z = (X - \mu) /\sigma$ is normal with mean 0 and variance 1; $Z$ is said to have a ==standard== or ==unit== normal distribution
    - We write the CDF of a standard normal distribution $\Phi$
- (**Symmetry**). $\Phi(-x) = 1 - \Phi(x)$
- Let $\R^{p} \ni X \sim \mathcal{N}(\mu,\Sigma)$; then, $(X-\mu)^{T} \Sigma ^{-1}(X-\mu) \sim \chi^{2}_{p}$ (see [[Chi-Square Distribution]])

### Proofs

#### Sufficiency

Note that [[Probability Density Function\|PDF]] or [[Cumulative Distribution Function|CDF]] completely determines the distribution of a random variable. Therefore, by the definition for nondegenerate multivariate normal distribution via PDF, we can see that the mean and covariance matrix are sufficient.

For general normal random vectors, we can seek help from the [[Moment Generating Function|MGF]]. Note that a MGF also completely determines a distribution.
We use the second alternative definition. For a random vector, its [[Moment Generating Function|MGF]] is the multivariate transform:
$
M_{X}(s) = \mathbb{E}[\exp(s^TX)] = M_{s^TX}(1) = \exp(s^T\mu + s^TVs/2),
$
where we use the definition that $s^TX$ is normal with mean $s^T\mu$ and variance $s^TVs$.
As we can see, the mean and variance are sufficient to determine the MGF, and thus the distribution.

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
> We use the second alternative definition above to prove this. Let $X=(X_{1},\dots,X_n)$ with normal components. Then, for any vector $a$, we have $a^{T}X = \sum_{i=1}^{n} a_{i}X_{i}$. Note that $a_iX _i$ are independent normal random variables, and thus their sum is normal by Property [[#^prop-ind-joint]], or the [[Moment Generating Function#Inversion Theorem]].
> By the alternative definition, $X$ is jointly normal.

> [!rmk] Joint normal with zero correlation implies independence.
>
> Suppose that the components of $X$ are uncorrelated, i.e., its covariance matrix is a diagonal. Consider another random vector $Y$ such that $Y_i\overset{ d }{ = }X_{i}$ and $Y_i$ are independent. By Property [[#^prop-ind-joint]], $Y$ is jointly normal.
> Since $X$ and $Y$ have the same mean and covariance, by Property [[#^prop-suff]], $X$ and $Y$ have the same distribution, and thus the components of $X$ are independent.

> [!rmk] Zero correlation does not imply independence for general random variables.
>
> For example, let $X \sim \mathrm{Unif}[-1,1]$ and $Y=X^{2}$. Certainly, $X$ and $Y$ are not independent, but they are uncorrelated:
> $
> \Cov(X,Y) = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y] = \mathbb{E}[X^{3}] - 0 = 0.
> $

## Sample Mean and Sample Variance

> [!thm]
>
> If $\{ X _i \}_{i=1}^{n}$ is a sample from a normal population having mean $\mu$ and variance $\sigma^{2}$, then $\overline{X}$ and $S^{2}$ are independent random variables,
> with $\overline{X} \sim \mathcal{N}(\mu,\sigma^{2} /n)$, and $\frac{n-1}{\sigma^{2}}S^{2} \sim \chi^{2}_{n-1}$.
> Then we have $\frac{\overline{X} - \mu}{S /\sqrt{n }} \sim t_{n-1}$.

- [!] This independence of $\overline{X}$ and $S^2$ is a unique property of the normal distribution.

## General Bivariate Normal Distribution

We skipped the introduction of standard bivariate normal random variable $(X,Y)\in\R^{2}$, as it is more convenient, and not conceptually harder, to directly deal with the general bivariate normal distribution.

Let $X$ and $Y$ be two random *vectors* with a joint normal distribution. That is
$
\begin{bmatrix} X \\ Y \end{bmatrix} \sim \mathcal{N}\left( \begin{bmatrix} \mu_{X} \\ \mu_{Y} \end{bmatrix}, \begin{bmatrix} \Sigma_{XX} & \Sigma_{XY} \\ \Sigma_{YX} & \Sigma_{YY} \end{bmatrix} \right).
$
Suppose $\Sigma_{YY} >0$ (PSD). We have

- $\mathbb{E}[X\given Y] = \mu_{X} + \Sigma_{XY}\Sigma_{YY}^{-1}(Y-\mu_{Y})$.
- $\tilde{X} \coloneqq X - \mathbb{E}[X\given Y]$ is independent of $Y$, and thus independent of any function of $Y$.
- $\Cov(\tilde{X}, \tilde{X}\given Y) = \Cov(\tilde{X},\tilde{X}) = \Sigma_{XX}-\Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX}$.

Before proving the above results, we recover the standard bivariate normal distribution from them. Let $\Sigma_{XX}=\sigma_{X}^{2}$, $\Sigma_{YY}=\sigma_{Y}^{2}$, $\Sigma_{XY}=\rho\sigma_{X}\sigma_{Y}$. Then, we have
$
\mathbb{E}[X\given Y] = \rho \frac{\sigma_{X}}{\sigma_{Y}}Y,
\quad
\Var(\tilde{X}) = \sigma_{X}^{2}(1-\rho^{2}).
$

### Proofs

WLOG, we assume $\mu_{X}=\mu_{Y}=0$ for simplicity.
Let $\hat{X} = \Sigma_{XY}\Sigma_{YY}^{-1}Y$. We have
$
\mathbb{E}[\hat{X}Y]
= \Sigma_{XY}\Sigma_{YY}^{-1} \mathbb{E}[YY] = \Sigma_{XY}
= \mathbb{E}[XY]
\implies \mathbb{E}[(X-\hat{X})Y] = 0.
$
Note that $(X-\hat{X},Y)$ is a linear transformation of $(X,Y)$, and thus the above uncorrelatedness implies independence.
This also implies, for any function $g$:
$
\mathbb{E}[(X-\hat{X})g(Y)] = 0.
$
By the [[Conditional Probability#General Definition of Conditional Expectation]], the above condition says that
$
\mathbb{E}[X\given Y] = \hat{X}.
$

Finally, we compute $\Var(\tilde{X})$. Since $\mathbb{E}[X\given Y]$ is also a function of $Y$, it is independent of $\tilde{X}$. Thus, we have
$
\Var(\tilde{X})
= \mathbb{E}\left[ (X-\hat{X})(X-\hat{X})^{T} \right]
= \mathbb{E}\left[ (X-\hat{X})X^{T} \right]
= \Sigma_{XX} - \Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX}.
$


</div></div>
     | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Normal Distribution

A [[Random Variable]] is said to be normally distributed if it has

- Notation
    - $\mathcal{N}(\mu, \sigma^{2})$ - Parameters
    - $\mu\in\R, \sigma^{2}\in\R_{+}$ - [[Probability Density Function\|PDF]]
    - $\displaystyle f(x)=\frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^{2}}$     - $(2 \pi)^{-k / 2} |\boldsymbol{\Sigma}|^{-1 / 2} \exp \left(-\frac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^{\top} \boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})\right)$ for $k$-dimensional with PSD $\Sigma$
- [[Expectation|Mean]]
    - $\mu$ - [[Variance]]
    - $\sigma^{2}$ - [[Moment Generating Function|MGF]]
    - $e^{\mu t + \sigma^{2}t^{2} /2}$ - [[Characteristic Function|CF]]
    - $e^{it\mu - \sigma^{2}t^{2} /2}$ 
Because of the [[Central Limit Theorem]], in practice, many random phenomena obey, at least approximately, a normal probability distribution.

## Equivalent Definitions for Multivariate Normal Distribution

We can define a random vector to be (nondegenerate multivariate) normal if if has a PDF specified above.
1. Or, if it has the form:
$
X = DW + \mu,
$
for any matrix $D$ and vector $\mu$, where $W$ is a random vector whose components are independent standard normal random variables $\mathcal{N}(0,1)$.
2. Or, if for any real vector $a$, the random variable $a^{T}X$ is normal.

These two alternative definitions cover *degenerate* normal distribution, i.e., some components are constant/ the distribution is concentrated on a proper subspace of $\R^{k}$.

### Equivalence

#### First Alternative

By change of variables, we can see that the definition via PDF implies the first alternative definition. We now show that if $D$ is not singular, $X=DW+\mu$ is a nondegenerate normal r.v. with a PDF of the form above.
By the relationship of [[Derived Distribution]], we have
$
f_{X}(x) = f_{W}(D^{-1}x) \cdot | D^{-1}|.
$
Plugging in the PDF of standard normal distribution, we get
$
f_{X}(x) = (2\pi)^{-n /2}\exp \left( -\frac{1}{2} (x-\mu)^T D^{-T}D^{-1} (x-\mu) \right) \cdot \frac{1}{|D|}
= (2\pi)^{-n /2}|DD^T|^{-1 /2}\exp \left( -\frac{1}{2} (x-\mu)^T (DD^T)^{-1} (x-\mu) \right),
$
and $DD^T$ is the covariance of $X$.

#### Second Alternative

The relationship from the first alternative definition to the second is direct. Now suppose $a^TX$ is normal for any vector $a$.

> [!error] Wrong
> We inspect the [[Moment Generating Function|MGF]] of $X$:
> $
> M_{X}(s) = M_{s^TX}(1) = \exp(s^T\mathbb{E}[X] + s^T\Var(X)s/2),
> $
> where we use the fact that $s^TX$ is normal with mean $s^T\mathbb{E}X$ and variance $s^T\Var(X)s$. On the other hand, let $Y=\sqrt{ \Var(X) }W+\mathbb{E}[X]$, where $W$ is a standard normal random vector. Then, $Y$ ~~is multivariate normal and~~ has the same MGF as $X$. By the inversion theorem of MGF, $X$ and $Y$ have the same distribution.

- [!] The above proof is wrong, as we want to show $X=Y$ but not only $X\overset{ d }{ = }Y$.

To rigorously prove the equivalence, we consider two cases.

**Case I.** $V = D^{2} = \Cov(X,X) \succ 0$. Thus, $D$ is invertible and we let $W = D^{-1}(X-\mu)$. We want to show that $W$ is standard normal, and thus $X = DW +\mu$ satisfies the first alternative definition.
We first have $\mathbb{E}[W] = 0$ and $\Var(W) = D^{-1}\Var(X)D^{-T} = D^{-1}D^{2}D^{-1} = I$.
We then inspect the [[Moment Generating Function|MGF]] (transform) of $W$:
$
\begin{aligned}
M_{W}(s) =& \mathbb{E}[\exp(s^{T}W)] \\
=& \mathbb{E}[\exp(s^{T}W + \mu') \exp(-\mu')] && (\mu' = s^{T}D^{-1}\mu )\\
=& \exp(-\mu') \mathbb{E}[\exp(s'^{T}X)] && (s' = D^{-1}s)\\
=& \exp(-\mu')M_{s'^{T}X}(1) \\
=& \exp(-\mu')\exp(s'^{T}\mu + s'^{T}V s'/2) && (s'X \text{ is normal by Alt. Def. 2}) \\
=& \exp(-\mu')\exp(\mu' + s^{T}s/2) \\
=& \exp(s^{T}s/2),
\end{aligned}
$
which is the MGF of a standard normal random variable. Therefore, $W \sim \mathcal{N}(0,I)$.

**Case II.** $V$ is singular. Then, there exists a vector $a\ne 0$ such that $Va = 0$. For simplicity, suppose $\mu=0$. Note that
$
a^{T}Va = \mathbb{E}[(a^{T}X)^{2}] = 0.
$
Thus, $a^{T}X = 0$, indicating the linear dependence of $X$. WLOG, suppose $X = (Y;Z)\in\R^{k=d+(k-d)}$ and the first $0\le d<k$ components of $X$ are linearly independent and $Z = AY$ is a linear combination of $Y$. Since $X$ satisfies the second alternative definition, $Y$ also satisfies it. By the Case I, we know $Y=DW$ for some positive definite $D$ and standard normal $W$. Let $W'$ be another $k-d$-dimensional standard normal r.v. independent of $W$. Then, we can write
$
X = \begin{bmatrix} Y\\Z \end{bmatrix}
= \begin{bmatrix} D&0\\AD&0 \end{bmatrix}
 \begin{bmatrix} W\\W' \end{bmatrix}
.$

## Properties

- (**Affine transformation**). The [[Affine Transformation]] of a normal random variable $X$: $a + BX$ is also a normal random variable
    - As a special case, any sub-vector of a normal random vector is also normal
        - As a special case, any component of a normal random vector is also normal
    - If $X \sim \mathcal{N}(\mu,\Sigma)$, then $BX+a \sim \mathcal{N}(B\mu+a,B \Sigma B^{T})$
    - [&] The proof follows the alternative definition 1 above
- (**Independent Gaussians are jointly Gaussian**). The sum of independent normal random variables is also a normal random variable ^prop-ind-joint
    - [&] Prove this using the [[Moment Generating Function#Inversion Theorem]]
    - [!] Note that this is generally not true for dependent random variables
    - [!] More generally, if a random vector with normal components is not **jointly** normal, then its affine transformation is not necessarily normal! See also [[#Independence, Correlation, and Jointly Normal]]
- (**Sufficiency**) The mean and covariance of a multivariate normal distribution consist of a [[Sufficient Statistic]]. ^prop-suff
    - In other words, the distribution of a multivariate normal random vector is completely determined by its mean and covariance
    - [&] See [[#Sufficiency]] for proof
- (**Independent iff Uncorrelated**). For a multivariate normal random vector, its components are independent if and only if they are uncorrelated
    - [&] We can use the sufficiency property to prove this. For $X$ with uncorrelated components, we can construct $Y$ with independent components that have the same mean and variance. Then $X\overset{ d }{ = }Y$ and thus $X$ has independent components. See also [[#Independence, Correlation, and Jointly Normal]]
    - [&] For nondegenerate normal random vector, we can also factorize the PDF to show independence.
    - [!] The statement is not true for general [[Random Variable]]s for which the mean and variance are not sufficient; see [[#Independence, Correlation, and Jointly Normal]]
- Hence, if $X\sim \mathcal{N}(\mu,\sigma^{2})$, then $Z = (X - \mu) /\sigma$ is normal with mean 0 and variance 1; $Z$ is said to have a ==standard== or ==unit== normal distribution
    - We write the CDF of a standard normal distribution $\Phi$
- (**Symmetry**). $\Phi(-x) = 1 - \Phi(x)$
- Let $\R^{p} \ni X \sim \mathcal{N}(\mu,\Sigma)$; then, $(X-\mu)^{T} \Sigma ^{-1}(X-\mu) \sim \chi^{2}_{p}$ (see [[Chi-Square Distribution]])

### Proofs

#### Sufficiency

Note that [[Probability Density Function\|PDF]] or [[Cumulative Distribution Function|CDF]] completely determines the distribution of a random variable. Therefore, by the definition for nondegenerate multivariate normal distribution via PDF, we can see that the mean and covariance matrix are sufficient.

For general normal random vectors, we can seek help from the [[Moment Generating Function|MGF]]. Note that a MGF also completely determines a distribution.
We use the second alternative definition. For a random vector, its [[Moment Generating Function|MGF]] is the multivariate transform:
$
M_{X}(s) = \mathbb{E}[\exp(s^TX)] = M_{s^TX}(1) = \exp(s^T\mu + s^TVs/2),
$
where we use the definition that $s^TX$ is normal with mean $s^T\mu$ and variance $s^TVs$.
As we can see, the mean and variance are sufficient to determine the MGF, and thus the distribution.

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
> We use the second alternative definition above to prove this. Let $X=(X_{1},\dots,X_n)$ with normal components. Then, for any vector $a$, we have $a^{T}X = \sum_{i=1}^{n} a_{i}X_{i}$. Note that $a_iX _i$ are independent normal random variables, and thus their sum is normal by Property [[#^prop-ind-joint]], or the [[Moment Generating Function#Inversion Theorem]].
> By the alternative definition, $X$ is jointly normal.

> [!rmk] Joint normal with zero correlation implies independence.
>
> Suppose that the components of $X$ are uncorrelated, i.e., its covariance matrix is a diagonal. Consider another random vector $Y$ such that $Y_i\overset{ d }{ = }X_{i}$ and $Y_i$ are independent. By Property [[#^prop-ind-joint]], $Y$ is jointly normal.
> Since $X$ and $Y$ have the same mean and covariance, by Property [[#^prop-suff]], $X$ and $Y$ have the same distribution, and thus the components of $X$ are independent.

> [!rmk] Zero correlation does not imply independence for general random variables.
>
> For example, let $X \sim \mathrm{Unif}[-1,1]$ and $Y=X^{2}$. Certainly, $X$ and $Y$ are not independent, but they are uncorrelated:
> $
> \Cov(X,Y) = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y] = \mathbb{E}[X^{3}] - 0 = 0.
> $

## Sample Mean and Sample Variance

> [!thm]
>
> If $\{ X _i \}_{i=1}^{n}$ is a sample from a normal population having mean $\mu$ and variance $\sigma^{2}$, then $\overline{X}$ and $S^{2}$ are independent random variables,
> with $\overline{X} \sim \mathcal{N}(\mu,\sigma^{2} /n)$, and $\frac{n-1}{\sigma^{2}}S^{2} \sim \chi^{2}_{n-1}$.
> Then we have $\frac{\overline{X} - \mu}{S /\sqrt{n }} \sim t_{n-1}$.

- [!] This independence of $\overline{X}$ and $S^2$ is a unique property of the normal distribution.

## General Bivariate Normal Distribution

We skipped the introduction of standard bivariate normal random variable $(X,Y)\in\R^{2}$, as it is more convenient, and not conceptually harder, to directly deal with the general bivariate normal distribution.

Let $X$ and $Y$ be two random *vectors* with a joint normal distribution. That is
$
\begin{bmatrix} X \\ Y \end{bmatrix} \sim \mathcal{N}\left( \begin{bmatrix} \mu_{X} \\ \mu_{Y} \end{bmatrix}, \begin{bmatrix} \Sigma_{XX} & \Sigma_{XY} \\ \Sigma_{YX} & \Sigma_{YY} \end{bmatrix} \right).
$
Suppose $\Sigma_{YY} >0$ (PSD). We have

- $\mathbb{E}[X\given Y] = \mu_{X} + \Sigma_{XY}\Sigma_{YY}^{-1}(Y-\mu_{Y})$.
- $\tilde{X} \coloneqq X - \mathbb{E}[X\given Y]$ is independent of $Y$, and thus independent of any function of $Y$.
- $\Cov(\tilde{X}, \tilde{X}\given Y) = \Cov(\tilde{X},\tilde{X}) = \Sigma_{XX}-\Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX}$.

Before proving the above results, we recover the standard bivariate normal distribution from them. Let $\Sigma_{XX}=\sigma_{X}^{2}$, $\Sigma_{YY}=\sigma_{Y}^{2}$, $\Sigma_{XY}=\rho\sigma_{X}\sigma_{Y}$. Then, we have
$
\mathbb{E}[X\given Y] = \rho \frac{\sigma_{X}}{\sigma_{Y}}Y,
\quad
\Var(\tilde{X}) = \sigma_{X}^{2}(1-\rho^{2}).
$

### Proofs

WLOG, we assume $\mu_{X}=\mu_{Y}=0$ for simplicity.
Let $\hat{X} = \Sigma_{XY}\Sigma_{YY}^{-1}Y$. We have
$
\mathbb{E}[\hat{X}Y]
= \Sigma_{XY}\Sigma_{YY}^{-1} \mathbb{E}[YY] = \Sigma_{XY}
= \mathbb{E}[XY]
\implies \mathbb{E}[(X-\hat{X})Y] = 0.
$
Note that $(X-\hat{X},Y)$ is a linear transformation of $(X,Y)$, and thus the above uncorrelatedness implies independence.
This also implies, for any function $g$:
$
\mathbb{E}[(X-\hat{X})g(Y)] = 0.
$
By the [[Conditional Probability#General Definition of Conditional Expectation]], the above condition says that
$
\mathbb{E}[X\given Y] = \hat{X}.
$

Finally, we compute $\Var(\tilde{X})$. Since $\mathbb{E}[X\given Y]$ is also a function of $Y$, it is independent of $\tilde{X}$. Thus, we have
$
\Var(\tilde{X})
= \mathbb{E}\left[ (X-\hat{X})(X-\hat{X})^{T} \right]
= \mathbb{E}\left[ (X-\hat{X})X^{T} \right]
= \Sigma_{XX} - \Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX}.
$


</div></div>
         | /                                                          | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Normal Distribution

A [[Random Variable]] is said to be normally distributed if it has

- Notation
    - $\mathcal{N}(\mu, \sigma^{2})$ - Parameters
    - $\mu\in\R, \sigma^{2}\in\R_{+}$ - [[Probability Density Function\|PDF]]
    - $\displaystyle f(x)=\frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^{2}}$     - $(2 \pi)^{-k / 2} |\boldsymbol{\Sigma}|^{-1 / 2} \exp \left(-\frac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^{\top} \boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})\right)$ for $k$-dimensional with PSD $\Sigma$
- [[Expectation|Mean]]
    - $\mu$ - [[Variance]]
    - $\sigma^{2}$ - [[Moment Generating Function|MGF]]
    - $e^{\mu t + \sigma^{2}t^{2} /2}$ - [[Characteristic Function|CF]]
    - $e^{it\mu - \sigma^{2}t^{2} /2}$ 
Because of the [[Central Limit Theorem]], in practice, many random phenomena obey, at least approximately, a normal probability distribution.

## Equivalent Definitions for Multivariate Normal Distribution

We can define a random vector to be (nondegenerate multivariate) normal if if has a PDF specified above.
1. Or, if it has the form:
$
X = DW + \mu,
$
for any matrix $D$ and vector $\mu$, where $W$ is a random vector whose components are independent standard normal random variables $\mathcal{N}(0,1)$.
2. Or, if for any real vector $a$, the random variable $a^{T}X$ is normal.

These two alternative definitions cover *degenerate* normal distribution, i.e., some components are constant/ the distribution is concentrated on a proper subspace of $\R^{k}$.

### Equivalence

#### First Alternative

By change of variables, we can see that the definition via PDF implies the first alternative definition. We now show that if $D$ is not singular, $X=DW+\mu$ is a nondegenerate normal r.v. with a PDF of the form above.
By the relationship of [[Derived Distribution]], we have
$
f_{X}(x) = f_{W}(D^{-1}x) \cdot | D^{-1}|.
$
Plugging in the PDF of standard normal distribution, we get
$
f_{X}(x) = (2\pi)^{-n /2}\exp \left( -\frac{1}{2} (x-\mu)^T D^{-T}D^{-1} (x-\mu) \right) \cdot \frac{1}{|D|}
= (2\pi)^{-n /2}|DD^T|^{-1 /2}\exp \left( -\frac{1}{2} (x-\mu)^T (DD^T)^{-1} (x-\mu) \right),
$
and $DD^T$ is the covariance of $X$.

#### Second Alternative

The relationship from the first alternative definition to the second is direct. Now suppose $a^TX$ is normal for any vector $a$.

> [!error] Wrong
> We inspect the [[Moment Generating Function|MGF]] of $X$:
> $
> M_{X}(s) = M_{s^TX}(1) = \exp(s^T\mathbb{E}[X] + s^T\Var(X)s/2),
> $
> where we use the fact that $s^TX$ is normal with mean $s^T\mathbb{E}X$ and variance $s^T\Var(X)s$. On the other hand, let $Y=\sqrt{ \Var(X) }W+\mathbb{E}[X]$, where $W$ is a standard normal random vector. Then, $Y$ ~~is multivariate normal and~~ has the same MGF as $X$. By the inversion theorem of MGF, $X$ and $Y$ have the same distribution.

- [!] The above proof is wrong, as we want to show $X=Y$ but not only $X\overset{ d }{ = }Y$.

To rigorously prove the equivalence, we consider two cases.

**Case I.** $V = D^{2} = \Cov(X,X) \succ 0$. Thus, $D$ is invertible and we let $W = D^{-1}(X-\mu)$. We want to show that $W$ is standard normal, and thus $X = DW +\mu$ satisfies the first alternative definition.
We first have $\mathbb{E}[W] = 0$ and $\Var(W) = D^{-1}\Var(X)D^{-T} = D^{-1}D^{2}D^{-1} = I$.
We then inspect the [[Moment Generating Function|MGF]] (transform) of $W$:
$
\begin{aligned}
M_{W}(s) =& \mathbb{E}[\exp(s^{T}W)] \\
=& \mathbb{E}[\exp(s^{T}W + \mu') \exp(-\mu')] && (\mu' = s^{T}D^{-1}\mu )\\
=& \exp(-\mu') \mathbb{E}[\exp(s'^{T}X)] && (s' = D^{-1}s)\\
=& \exp(-\mu')M_{s'^{T}X}(1) \\
=& \exp(-\mu')\exp(s'^{T}\mu + s'^{T}V s'/2) && (s'X \text{ is normal by Alt. Def. 2}) \\
=& \exp(-\mu')\exp(\mu' + s^{T}s/2) \\
=& \exp(s^{T}s/2),
\end{aligned}
$
which is the MGF of a standard normal random variable. Therefore, $W \sim \mathcal{N}(0,I)$.

**Case II.** $V$ is singular. Then, there exists a vector $a\ne 0$ such that $Va = 0$. For simplicity, suppose $\mu=0$. Note that
$
a^{T}Va = \mathbb{E}[(a^{T}X)^{2}] = 0.
$
Thus, $a^{T}X = 0$, indicating the linear dependence of $X$. WLOG, suppose $X = (Y;Z)\in\R^{k=d+(k-d)}$ and the first $0\le d<k$ components of $X$ are linearly independent and $Z = AY$ is a linear combination of $Y$. Since $X$ satisfies the second alternative definition, $Y$ also satisfies it. By the Case I, we know $Y=DW$ for some positive definite $D$ and standard normal $W$. Let $W'$ be another $k-d$-dimensional standard normal r.v. independent of $W$. Then, we can write
$
X = \begin{bmatrix} Y\\Z \end{bmatrix}
= \begin{bmatrix} D&0\\AD&0 \end{bmatrix}
 \begin{bmatrix} W\\W' \end{bmatrix}
.$

## Properties

- (**Affine transformation**). The [[Affine Transformation]] of a normal random variable $X$: $a + BX$ is also a normal random variable
    - As a special case, any sub-vector of a normal random vector is also normal
        - As a special case, any component of a normal random vector is also normal
    - If $X \sim \mathcal{N}(\mu,\Sigma)$, then $BX+a \sim \mathcal{N}(B\mu+a,B \Sigma B^{T})$
    - [&] The proof follows the alternative definition 1 above
- (**Independent Gaussians are jointly Gaussian**). The sum of independent normal random variables is also a normal random variable ^prop-ind-joint
    - [&] Prove this using the [[Moment Generating Function#Inversion Theorem]]
    - [!] Note that this is generally not true for dependent random variables
    - [!] More generally, if a random vector with normal components is not **jointly** normal, then its affine transformation is not necessarily normal! See also [[#Independence, Correlation, and Jointly Normal]]
- (**Sufficiency**) The mean and covariance of a multivariate normal distribution consist of a [[Sufficient Statistic]]. ^prop-suff
    - In other words, the distribution of a multivariate normal random vector is completely determined by its mean and covariance
    - [&] See [[#Sufficiency]] for proof
- (**Independent iff Uncorrelated**). For a multivariate normal random vector, its components are independent if and only if they are uncorrelated
    - [&] We can use the sufficiency property to prove this. For $X$ with uncorrelated components, we can construct $Y$ with independent components that have the same mean and variance. Then $X\overset{ d }{ = }Y$ and thus $X$ has independent components. See also [[#Independence, Correlation, and Jointly Normal]]
    - [&] For nondegenerate normal random vector, we can also factorize the PDF to show independence.
    - [!] The statement is not true for general [[Random Variable]]s for which the mean and variance are not sufficient; see [[#Independence, Correlation, and Jointly Normal]]
- Hence, if $X\sim \mathcal{N}(\mu,\sigma^{2})$, then $Z = (X - \mu) /\sigma$ is normal with mean 0 and variance 1; $Z$ is said to have a ==standard== or ==unit== normal distribution
    - We write the CDF of a standard normal distribution $\Phi$
- (**Symmetry**). $\Phi(-x) = 1 - \Phi(x)$
- Let $\R^{p} \ni X \sim \mathcal{N}(\mu,\Sigma)$; then, $(X-\mu)^{T} \Sigma ^{-1}(X-\mu) \sim \chi^{2}_{p}$ (see [[Chi-Square Distribution]])

### Proofs

#### Sufficiency

Note that [[Probability Density Function\|PDF]] or [[Cumulative Distribution Function|CDF]] completely determines the distribution of a random variable. Therefore, by the definition for nondegenerate multivariate normal distribution via PDF, we can see that the mean and covariance matrix are sufficient.

For general normal random vectors, we can seek help from the [[Moment Generating Function|MGF]]. Note that a MGF also completely determines a distribution.
We use the second alternative definition. For a random vector, its [[Moment Generating Function|MGF]] is the multivariate transform:
$
M_{X}(s) = \mathbb{E}[\exp(s^TX)] = M_{s^TX}(1) = \exp(s^T\mu + s^TVs/2),
$
where we use the definition that $s^TX$ is normal with mean $s^T\mu$ and variance $s^TVs$.
As we can see, the mean and variance are sufficient to determine the MGF, and thus the distribution.

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
> We use the second alternative definition above to prove this. Let $X=(X_{1},\dots,X_n)$ with normal components. Then, for any vector $a$, we have $a^{T}X = \sum_{i=1}^{n} a_{i}X_{i}$. Note that $a_iX _i$ are independent normal random variables, and thus their sum is normal by Property [[#^prop-ind-joint]], or the [[Moment Generating Function#Inversion Theorem]].
> By the alternative definition, $X$ is jointly normal.

> [!rmk] Joint normal with zero correlation implies independence.
>
> Suppose that the components of $X$ are uncorrelated, i.e., its covariance matrix is a diagonal. Consider another random vector $Y$ such that $Y_i\overset{ d }{ = }X_{i}$ and $Y_i$ are independent. By Property [[#^prop-ind-joint]], $Y$ is jointly normal.
> Since $X$ and $Y$ have the same mean and covariance, by Property [[#^prop-suff]], $X$ and $Y$ have the same distribution, and thus the components of $X$ are independent.

> [!rmk] Zero correlation does not imply independence for general random variables.
>
> For example, let $X \sim \mathrm{Unif}[-1,1]$ and $Y=X^{2}$. Certainly, $X$ and $Y$ are not independent, but they are uncorrelated:
> $
> \Cov(X,Y) = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y] = \mathbb{E}[X^{3}] - 0 = 0.
> $

## Sample Mean and Sample Variance

> [!thm]
>
> If $\{ X _i \}_{i=1}^{n}$ is a sample from a normal population having mean $\mu$ and variance $\sigma^{2}$, then $\overline{X}$ and $S^{2}$ are independent random variables,
> with $\overline{X} \sim \mathcal{N}(\mu,\sigma^{2} /n)$, and $\frac{n-1}{\sigma^{2}}S^{2} \sim \chi^{2}_{n-1}$.
> Then we have $\frac{\overline{X} - \mu}{S /\sqrt{n }} \sim t_{n-1}$.

- [!] This independence of $\overline{X}$ and $S^2$ is a unique property of the normal distribution.

## General Bivariate Normal Distribution

We skipped the introduction of standard bivariate normal random variable $(X,Y)\in\R^{2}$, as it is more convenient, and not conceptually harder, to directly deal with the general bivariate normal distribution.

Let $X$ and $Y$ be two random *vectors* with a joint normal distribution. That is
$
\begin{bmatrix} X \\ Y \end{bmatrix} \sim \mathcal{N}\left( \begin{bmatrix} \mu_{X} \\ \mu_{Y} \end{bmatrix}, \begin{bmatrix} \Sigma_{XX} & \Sigma_{XY} \\ \Sigma_{YX} & \Sigma_{YY} \end{bmatrix} \right).
$
Suppose $\Sigma_{YY} >0$ (PSD). We have

- $\mathbb{E}[X\given Y] = \mu_{X} + \Sigma_{XY}\Sigma_{YY}^{-1}(Y-\mu_{Y})$.
- $\tilde{X} \coloneqq X - \mathbb{E}[X\given Y]$ is independent of $Y$, and thus independent of any function of $Y$.
- $\Cov(\tilde{X}, \tilde{X}\given Y) = \Cov(\tilde{X},\tilde{X}) = \Sigma_{XX}-\Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX}$.

Before proving the above results, we recover the standard bivariate normal distribution from them. Let $\Sigma_{XX}=\sigma_{X}^{2}$, $\Sigma_{YY}=\sigma_{Y}^{2}$, $\Sigma_{XY}=\rho\sigma_{X}\sigma_{Y}$. Then, we have
$
\mathbb{E}[X\given Y] = \rho \frac{\sigma_{X}}{\sigma_{Y}}Y,
\quad
\Var(\tilde{X}) = \sigma_{X}^{2}(1-\rho^{2}).
$

### Proofs

WLOG, we assume $\mu_{X}=\mu_{Y}=0$ for simplicity.
Let $\hat{X} = \Sigma_{XY}\Sigma_{YY}^{-1}Y$. We have
$
\mathbb{E}[\hat{X}Y]
= \Sigma_{XY}\Sigma_{YY}^{-1} \mathbb{E}[YY] = \Sigma_{XY}
= \mathbb{E}[XY]
\implies \mathbb{E}[(X-\hat{X})Y] = 0.
$
Note that $(X-\hat{X},Y)$ is a linear transformation of $(X,Y)$, and thus the above uncorrelatedness implies independence.
This also implies, for any function $g$:
$
\mathbb{E}[(X-\hat{X})g(Y)] = 0.
$
By the [[Conditional Probability#General Definition of Conditional Expectation]], the above condition says that
$
\mathbb{E}[X\given Y] = \hat{X}.
$

Finally, we compute $\Var(\tilde{X})$. Since $\mathbb{E}[X\given Y]$ is also a function of $Y$, it is independent of $\tilde{X}$. Thus, we have
$
\Var(\tilde{X})
= \mathbb{E}\left[ (X-\hat{X})(X-\hat{X})^{T} \right]
= \mathbb{E}\left[ (X-\hat{X})X^{T} \right]
= \Sigma_{XX} - \Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX}.
$


</div></div>
         | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# naked inline n-link

</div>




# Normal Distribution

A [[Random Variable]] is said to be normally distributed if it has

- Notation
    - $\mathcal{N}(\mu, \sigma^{2})$ - Parameters
    - $\mu\in\R, \sigma^{2}\in\R_{+}$ - [[Probability Density Function\|PDF]]
    - $\displaystyle f(x)=\frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^{2}}$     - $(2 \pi)^{-k / 2} |\boldsymbol{\Sigma}|^{-1 / 2} \exp \left(-\frac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^{\top} \boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})\right)$ for $k$-dimensional with PSD $\Sigma$
- [[Expectation|Mean]]
    - $\mu$ - [[Variance]]
    - $\sigma^{2}$ - [[Moment Generating Function|MGF]]
    - $e^{\mu t + \sigma^{2}t^{2} /2}$ - [[Characteristic Function|CF]]
    - $e^{it\mu - \sigma^{2}t^{2} /2}$ 
Because of the [[Central Limit Theorem]], in practice, many random phenomena obey, at least approximately, a normal probability distribution.

## Equivalent Definitions for Multivariate Normal Distribution

We can define a random vector to be (nondegenerate multivariate) normal if if has a PDF specified above.
1. Or, if it has the form:
$
X = DW + \mu,
$
for any matrix $D$ and vector $\mu$, where $W$ is a random vector whose components are independent standard normal random variables $\mathcal{N}(0,1)$.
2. Or, if for any real vector $a$, the random variable $a^{T}X$ is normal.

These two alternative definitions cover *degenerate* normal distribution, i.e., some components are constant/ the distribution is concentrated on a proper subspace of $\R^{k}$.

### Equivalence

#### First Alternative

By change of variables, we can see that the definition via PDF implies the first alternative definition. We now show that if $D$ is not singular, $X=DW+\mu$ is a nondegenerate normal r.v. with a PDF of the form above.
By the relationship of [[Derived Distribution]], we have
$
f_{X}(x) = f_{W}(D^{-1}x) \cdot | D^{-1}|.
$
Plugging in the PDF of standard normal distribution, we get
$
f_{X}(x) = (2\pi)^{-n /2}\exp \left( -\frac{1}{2} (x-\mu)^T D^{-T}D^{-1} (x-\mu) \right) \cdot \frac{1}{|D|}
= (2\pi)^{-n /2}|DD^T|^{-1 /2}\exp \left( -\frac{1}{2} (x-\mu)^T (DD^T)^{-1} (x-\mu) \right),
$
and $DD^T$ is the covariance of $X$.

#### Second Alternative

The relationship from the first alternative definition to the second is direct. Now suppose $a^TX$ is normal for any vector $a$.

> [!error] Wrong
> We inspect the [[Moment Generating Function|MGF]] of $X$:
> $
> M_{X}(s) = M_{s^TX}(1) = \exp(s^T\mathbb{E}[X] + s^T\Var(X)s/2),
> $
> where we use the fact that $s^TX$ is normal with mean $s^T\mathbb{E}X$ and variance $s^T\Var(X)s$. On the other hand, let $Y=\sqrt{ \Var(X) }W+\mathbb{E}[X]$, where $W$ is a standard normal random vector. Then, $Y$ ~~is multivariate normal and~~ has the same MGF as $X$. By the inversion theorem of MGF, $X$ and $Y$ have the same distribution.

- [!] The above proof is wrong, as we want to show $X=Y$ but not only $X\overset{ d }{ = }Y$.

To rigorously prove the equivalence, we consider two cases.

**Case I.** $V = D^{2} = \Cov(X,X) \succ 0$. Thus, $D$ is invertible and we let $W = D^{-1}(X-\mu)$. We want to show that $W$ is standard normal, and thus $X = DW +\mu$ satisfies the first alternative definition.
We first have $\mathbb{E}[W] = 0$ and $\Var(W) = D^{-1}\Var(X)D^{-T} = D^{-1}D^{2}D^{-1} = I$.
We then inspect the [[Moment Generating Function|MGF]] (transform) of $W$:
$
\begin{aligned}
M_{W}(s) =& \mathbb{E}[\exp(s^{T}W)] \\
=& \mathbb{E}[\exp(s^{T}W + \mu') \exp(-\mu')] && (\mu' = s^{T}D^{-1}\mu )\\
=& \exp(-\mu') \mathbb{E}[\exp(s'^{T}X)] && (s' = D^{-1}s)\\
=& \exp(-\mu')M_{s'^{T}X}(1) \\
=& \exp(-\mu')\exp(s'^{T}\mu + s'^{T}V s'/2) && (s'X \text{ is normal by Alt. Def. 2}) \\
=& \exp(-\mu')\exp(\mu' + s^{T}s/2) \\
=& \exp(s^{T}s/2),
\end{aligned}
$
which is the MGF of a standard normal random variable. Therefore, $W \sim \mathcal{N}(0,I)$.

**Case II.** $V$ is singular. Then, there exists a vector $a\ne 0$ such that $Va = 0$. For simplicity, suppose $\mu=0$. Note that
$
a^{T}Va = \mathbb{E}[(a^{T}X)^{2}] = 0.
$
Thus, $a^{T}X = 0$, indicating the linear dependence of $X$. WLOG, suppose $X = (Y;Z)\in\R^{k=d+(k-d)}$ and the first $0\le d<k$ components of $X$ are linearly independent and $Z = AY$ is a linear combination of $Y$. Since $X$ satisfies the second alternative definition, $Y$ also satisfies it. By the Case I, we know $Y=DW$ for some positive definite $D$ and standard normal $W$. Let $W'$ be another $k-d$-dimensional standard normal r.v. independent of $W$. Then, we can write
$
X = \begin{bmatrix} Y\\Z \end{bmatrix}
= \begin{bmatrix} D&0\\AD&0 \end{bmatrix}
 \begin{bmatrix} W\\W' \end{bmatrix}
.$

## Properties

- (**Affine transformation**). The [[Affine Transformation]] of a normal random variable $X$: $a + BX$ is also a normal random variable
    - As a special case, any sub-vector of a normal random vector is also normal
        - As a special case, any component of a normal random vector is also normal
    - If $X \sim \mathcal{N}(\mu,\Sigma)$, then $BX+a \sim \mathcal{N}(B\mu+a,B \Sigma B^{T})$
    - [&] The proof follows the alternative definition 1 above
- (**Independent Gaussians are jointly Gaussian**). The sum of independent normal random variables is also a normal random variable ^prop-ind-joint
    - [&] Prove this using the [[Moment Generating Function#Inversion Theorem]]
    - [!] Note that this is generally not true for dependent random variables
    - [!] More generally, if a random vector with normal components is not **jointly** normal, then its affine transformation is not necessarily normal! See also [[#Independence, Correlation, and Jointly Normal]]
- (**Sufficiency**) The mean and covariance of a multivariate normal distribution consist of a [[Sufficient Statistic]]. ^prop-suff
    - In other words, the distribution of a multivariate normal random vector is completely determined by its mean and covariance
    - [&] See [[#Sufficiency]] for proof
- (**Independent iff Uncorrelated**). For a multivariate normal random vector, its components are independent if and only if they are uncorrelated
    - [&] We can use the sufficiency property to prove this. For $X$ with uncorrelated components, we can construct $Y$ with independent components that have the same mean and variance. Then $X\overset{ d }{ = }Y$ and thus $X$ has independent components. See also [[#Independence, Correlation, and Jointly Normal]]
    - [&] For nondegenerate normal random vector, we can also factorize the PDF to show independence.
    - [!] The statement is not true for general [[Random Variable]]s for which the mean and variance are not sufficient; see [[#Independence, Correlation, and Jointly Normal]]
- Hence, if $X\sim \mathcal{N}(\mu,\sigma^{2})$, then $Z = (X - \mu) /\sigma$ is normal with mean 0 and variance 1; $Z$ is said to have a ==standard== or ==unit== normal distribution
    - We write the CDF of a standard normal distribution $\Phi$
- (**Symmetry**). $\Phi(-x) = 1 - \Phi(x)$
- Let $\R^{p} \ni X \sim \mathcal{N}(\mu,\Sigma)$; then, $(X-\mu)^{T} \Sigma ^{-1}(X-\mu) \sim \chi^{2}_{p}$ (see [[Chi-Square Distribution]])

### Proofs

#### Sufficiency

Note that [[Probability Density Function\|PDF]] or [[Cumulative Distribution Function|CDF]] completely determines the distribution of a random variable. Therefore, by the definition for nondegenerate multivariate normal distribution via PDF, we can see that the mean and covariance matrix are sufficient.

For general normal random vectors, we can seek help from the [[Moment Generating Function|MGF]]. Note that a MGF also completely determines a distribution.
We use the second alternative definition. For a random vector, its [[Moment Generating Function|MGF]] is the multivariate transform:
$
M_{X}(s) = \mathbb{E}[\exp(s^TX)] = M_{s^TX}(1) = \exp(s^T\mu + s^TVs/2),
$
where we use the definition that $s^TX$ is normal with mean $s^T\mu$ and variance $s^TVs$.
As we can see, the mean and variance are sufficient to determine the MGF, and thus the distribution.

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
> We use the second alternative definition above to prove this. Let $X=(X_{1},\dots,X_n)$ with normal components. Then, for any vector $a$, we have $a^{T}X = \sum_{i=1}^{n} a_{i}X_{i}$. Note that $a_iX _i$ are independent normal random variables, and thus their sum is normal by Property [[#^prop-ind-joint]], or the [[Moment Generating Function#Inversion Theorem]].
> By the alternative definition, $X$ is jointly normal.

> [!rmk] Joint normal with zero correlation implies independence.
>
> Suppose that the components of $X$ are uncorrelated, i.e., its covariance matrix is a diagonal. Consider another random vector $Y$ such that $Y_i\overset{ d }{ = }X_{i}$ and $Y_i$ are independent. By Property [[#^prop-ind-joint]], $Y$ is jointly normal.
> Since $X$ and $Y$ have the same mean and covariance, by Property [[#^prop-suff]], $X$ and $Y$ have the same distribution, and thus the components of $X$ are independent.

> [!rmk] Zero correlation does not imply independence for general random variables.
>
> For example, let $X \sim \mathrm{Unif}[-1,1]$ and $Y=X^{2}$. Certainly, $X$ and $Y$ are not independent, but they are uncorrelated:
> $
> \Cov(X,Y) = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y] = \mathbb{E}[X^{3}] - 0 = 0.
> $

## Sample Mean and Sample Variance

> [!thm]
>
> If $\{ X _i \}_{i=1}^{n}$ is a sample from a normal population having mean $\mu$ and variance $\sigma^{2}$, then $\overline{X}$ and $S^{2}$ are independent random variables,
> with $\overline{X} \sim \mathcal{N}(\mu,\sigma^{2} /n)$, and $\frac{n-1}{\sigma^{2}}S^{2} \sim \chi^{2}_{n-1}$.
> Then we have $\frac{\overline{X} - \mu}{S /\sqrt{n }} \sim t_{n-1}$.

- [!] This independence of $\overline{X}$ and $S^2$ is a unique property of the normal distribution.

## General Bivariate Normal Distribution

We skipped the introduction of standard bivariate normal random variable $(X,Y)\in\R^{2}$, as it is more convenient, and not conceptually harder, to directly deal with the general bivariate normal distribution.

Let $X$ and $Y$ be two random *vectors* with a joint normal distribution. That is
$
\begin{bmatrix} X \\ Y \end{bmatrix} \sim \mathcal{N}\left( \begin{bmatrix} \mu_{X} \\ \mu_{Y} \end{bmatrix}, \begin{bmatrix} \Sigma_{XX} & \Sigma_{XY} \\ \Sigma_{YX} & \Sigma_{YY} \end{bmatrix} \right).
$
Suppose $\Sigma_{YY} >0$ (PSD). We have

- $\mathbb{E}[X\given Y] = \mu_{X} + \Sigma_{XY}\Sigma_{YY}^{-1}(Y-\mu_{Y})$.
- $\tilde{X} \coloneqq X - \mathbb{E}[X\given Y]$ is independent of $Y$, and thus independent of any function of $Y$.
- $\Cov(\tilde{X}, \tilde{X}\given Y) = \Cov(\tilde{X},\tilde{X}) = \Sigma_{XX}-\Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX}$.

Before proving the above results, we recover the standard bivariate normal distribution from them. Let $\Sigma_{XX}=\sigma_{X}^{2}$, $\Sigma_{YY}=\sigma_{Y}^{2}$, $\Sigma_{XY}=\rho\sigma_{X}\sigma_{Y}$. Then, we have
$
\mathbb{E}[X\given Y] = \rho \frac{\sigma_{X}}{\sigma_{Y}}Y,
\quad
\Var(\tilde{X}) = \sigma_{X}^{2}(1-\rho^{2}).
$

### Proofs

WLOG, we assume $\mu_{X}=\mu_{Y}=0$ for simplicity.
Let $\hat{X} = \Sigma_{XY}\Sigma_{YY}^{-1}Y$. We have
$
\mathbb{E}[\hat{X}Y]
= \Sigma_{XY}\Sigma_{YY}^{-1} \mathbb{E}[YY] = \Sigma_{XY}
= \mathbb{E}[XY]
\implies \mathbb{E}[(X-\hat{X})Y] = 0.
$
Note that $(X-\hat{X},Y)$ is a linear transformation of $(X,Y)$, and thus the above uncorrelatedness implies independence.
This also implies, for any function $g$:
$
\mathbb{E}[(X-\hat{X})g(Y)] = 0.
$
By the [[Conditional Probability#General Definition of Conditional Expectation]], the above condition says that
$
\mathbb{E}[X\given Y] = \hat{X}.
$

Finally, we compute $\Var(\tilde{X})$. Since $\mathbb{E}[X\given Y]$ is also a function of $Y$, it is independent of $\tilde{X}$. Thus, we have
$
\Var(\tilde{X})
= \mathbb{E}\left[ (X-\hat{X})(X-\hat{X})^{T} \right]
= \mathbb{E}\left[ (X-\hat{X})X^{T} \right]
= \Sigma_{XX} - \Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX}.
$


</div></div>
         | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Normal Distribution

A [[Random Variable]] is said to be normally distributed if it has

- Notation
    - $\mathcal{N}(\mu, \sigma^{2})$ - Parameters
    - $\mu\in\R, \sigma^{2}\in\R_{+}$ - [[Probability Density Function\|PDF]]
    - $\displaystyle f(x)=\frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^{2}}$     - $(2 \pi)^{-k / 2} |\boldsymbol{\Sigma}|^{-1 / 2} \exp \left(-\frac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^{\top} \boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})\right)$ for $k$-dimensional with PSD $\Sigma$
- [[Expectation|Mean]]
    - $\mu$ - [[Variance]]
    - $\sigma^{2}$ - [[Moment Generating Function|MGF]]
    - $e^{\mu t + \sigma^{2}t^{2} /2}$ - [[Characteristic Function|CF]]
    - $e^{it\mu - \sigma^{2}t^{2} /2}$ 
Because of the [[Central Limit Theorem]], in practice, many random phenomena obey, at least approximately, a normal probability distribution.

## Equivalent Definitions for Multivariate Normal Distribution

We can define a random vector to be (nondegenerate multivariate) normal if if has a PDF specified above.
1. Or, if it has the form:
$
X = DW + \mu,
$
for any matrix $D$ and vector $\mu$, where $W$ is a random vector whose components are independent standard normal random variables $\mathcal{N}(0,1)$.
2. Or, if for any real vector $a$, the random variable $a^{T}X$ is normal.

These two alternative definitions cover *degenerate* normal distribution, i.e., some components are constant/ the distribution is concentrated on a proper subspace of $\R^{k}$.

### Equivalence

#### First Alternative

By change of variables, we can see that the definition via PDF implies the first alternative definition. We now show that if $D$ is not singular, $X=DW+\mu$ is a nondegenerate normal r.v. with a PDF of the form above.
By the relationship of [[Derived Distribution]], we have
$
f_{X}(x) = f_{W}(D^{-1}x) \cdot | D^{-1}|.
$
Plugging in the PDF of standard normal distribution, we get
$
f_{X}(x) = (2\pi)^{-n /2}\exp \left( -\frac{1}{2} (x-\mu)^T D^{-T}D^{-1} (x-\mu) \right) \cdot \frac{1}{|D|}
= (2\pi)^{-n /2}|DD^T|^{-1 /2}\exp \left( -\frac{1}{2} (x-\mu)^T (DD^T)^{-1} (x-\mu) \right),
$
and $DD^T$ is the covariance of $X$.

#### Second Alternative

The relationship from the first alternative definition to the second is direct. Now suppose $a^TX$ is normal for any vector $a$.

> [!error] Wrong
> We inspect the [[Moment Generating Function|MGF]] of $X$:
> $
> M_{X}(s) = M_{s^TX}(1) = \exp(s^T\mathbb{E}[X] + s^T\Var(X)s/2),
> $
> where we use the fact that $s^TX$ is normal with mean $s^T\mathbb{E}X$ and variance $s^T\Var(X)s$. On the other hand, let $Y=\sqrt{ \Var(X) }W+\mathbb{E}[X]$, where $W$ is a standard normal random vector. Then, $Y$ ~~is multivariate normal and~~ has the same MGF as $X$. By the inversion theorem of MGF, $X$ and $Y$ have the same distribution.

- [!] The above proof is wrong, as we want to show $X=Y$ but not only $X\overset{ d }{ = }Y$.

To rigorously prove the equivalence, we consider two cases.

**Case I.** $V = D^{2} = \Cov(X,X) \succ 0$. Thus, $D$ is invertible and we let $W = D^{-1}(X-\mu)$. We want to show that $W$ is standard normal, and thus $X = DW +\mu$ satisfies the first alternative definition.
We first have $\mathbb{E}[W] = 0$ and $\Var(W) = D^{-1}\Var(X)D^{-T} = D^{-1}D^{2}D^{-1} = I$.
We then inspect the [[Moment Generating Function|MGF]] (transform) of $W$:
$
\begin{aligned}
M_{W}(s) =& \mathbb{E}[\exp(s^{T}W)] \\
=& \mathbb{E}[\exp(s^{T}W + \mu') \exp(-\mu')] && (\mu' = s^{T}D^{-1}\mu )\\
=& \exp(-\mu') \mathbb{E}[\exp(s'^{T}X)] && (s' = D^{-1}s)\\
=& \exp(-\mu')M_{s'^{T}X}(1) \\
=& \exp(-\mu')\exp(s'^{T}\mu + s'^{T}V s'/2) && (s'X \text{ is normal by Alt. Def. 2}) \\
=& \exp(-\mu')\exp(\mu' + s^{T}s/2) \\
=& \exp(s^{T}s/2),
\end{aligned}
$
which is the MGF of a standard normal random variable. Therefore, $W \sim \mathcal{N}(0,I)$.

**Case II.** $V$ is singular. Then, there exists a vector $a\ne 0$ such that $Va = 0$. For simplicity, suppose $\mu=0$. Note that
$
a^{T}Va = \mathbb{E}[(a^{T}X)^{2}] = 0.
$
Thus, $a^{T}X = 0$, indicating the linear dependence of $X$. WLOG, suppose $X = (Y;Z)\in\R^{k=d+(k-d)}$ and the first $0\le d<k$ components of $X$ are linearly independent and $Z = AY$ is a linear combination of $Y$. Since $X$ satisfies the second alternative definition, $Y$ also satisfies it. By the Case I, we know $Y=DW$ for some positive definite $D$ and standard normal $W$. Let $W'$ be another $k-d$-dimensional standard normal r.v. independent of $W$. Then, we can write
$
X = \begin{bmatrix} Y\\Z \end{bmatrix}
= \begin{bmatrix} D&0\\AD&0 \end{bmatrix}
 \begin{bmatrix} W\\W' \end{bmatrix}
.$

## Properties

- (**Affine transformation**). The [[Affine Transformation]] of a normal random variable $X$: $a + BX$ is also a normal random variable
    - As a special case, any sub-vector of a normal random vector is also normal
        - As a special case, any component of a normal random vector is also normal
    - If $X \sim \mathcal{N}(\mu,\Sigma)$, then $BX+a \sim \mathcal{N}(B\mu+a,B \Sigma B^{T})$
    - [&] The proof follows the alternative definition 1 above
- (**Independent Gaussians are jointly Gaussian**). The sum of independent normal random variables is also a normal random variable ^prop-ind-joint
    - [&] Prove this using the [[Moment Generating Function#Inversion Theorem]]
    - [!] Note that this is generally not true for dependent random variables
    - [!] More generally, if a random vector with normal components is not **jointly** normal, then its affine transformation is not necessarily normal! See also [[#Independence, Correlation, and Jointly Normal]]
- (**Sufficiency**) The mean and covariance of a multivariate normal distribution consist of a [[Sufficient Statistic]]. ^prop-suff
    - In other words, the distribution of a multivariate normal random vector is completely determined by its mean and covariance
    - [&] See [[#Sufficiency]] for proof
- (**Independent iff Uncorrelated**). For a multivariate normal random vector, its components are independent if and only if they are uncorrelated
    - [&] We can use the sufficiency property to prove this. For $X$ with uncorrelated components, we can construct $Y$ with independent components that have the same mean and variance. Then $X\overset{ d }{ = }Y$ and thus $X$ has independent components. See also [[#Independence, Correlation, and Jointly Normal]]
    - [&] For nondegenerate normal random vector, we can also factorize the PDF to show independence.
    - [!] The statement is not true for general [[Random Variable]]s for which the mean and variance are not sufficient; see [[#Independence, Correlation, and Jointly Normal]]
- Hence, if $X\sim \mathcal{N}(\mu,\sigma^{2})$, then $Z = (X - \mu) /\sigma$ is normal with mean 0 and variance 1; $Z$ is said to have a ==standard== or ==unit== normal distribution
    - We write the CDF of a standard normal distribution $\Phi$
- (**Symmetry**). $\Phi(-x) = 1 - \Phi(x)$
- Let $\R^{p} \ni X \sim \mathcal{N}(\mu,\Sigma)$; then, $(X-\mu)^{T} \Sigma ^{-1}(X-\mu) \sim \chi^{2}_{p}$ (see [[Chi-Square Distribution]])

### Proofs

#### Sufficiency

Note that [[Probability Density Function\|PDF]] or [[Cumulative Distribution Function|CDF]] completely determines the distribution of a random variable. Therefore, by the definition for nondegenerate multivariate normal distribution via PDF, we can see that the mean and covariance matrix are sufficient.

For general normal random vectors, we can seek help from the [[Moment Generating Function|MGF]]. Note that a MGF also completely determines a distribution.
We use the second alternative definition. For a random vector, its [[Moment Generating Function|MGF]] is the multivariate transform:
$
M_{X}(s) = \mathbb{E}[\exp(s^TX)] = M_{s^TX}(1) = \exp(s^T\mu + s^TVs/2),
$
where we use the definition that $s^TX$ is normal with mean $s^T\mu$ and variance $s^TVs$.
As we can see, the mean and variance are sufficient to determine the MGF, and thus the distribution.

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
> We use the second alternative definition above to prove this. Let $X=(X_{1},\dots,X_n)$ with normal components. Then, for any vector $a$, we have $a^{T}X = \sum_{i=1}^{n} a_{i}X_{i}$. Note that $a_iX _i$ are independent normal random variables, and thus their sum is normal by Property [[#^prop-ind-joint]], or the [[Moment Generating Function#Inversion Theorem]].
> By the alternative definition, $X$ is jointly normal.

> [!rmk] Joint normal with zero correlation implies independence.
>
> Suppose that the components of $X$ are uncorrelated, i.e., its covariance matrix is a diagonal. Consider another random vector $Y$ such that $Y_i\overset{ d }{ = }X_{i}$ and $Y_i$ are independent. By Property [[#^prop-ind-joint]], $Y$ is jointly normal.
> Since $X$ and $Y$ have the same mean and covariance, by Property [[#^prop-suff]], $X$ and $Y$ have the same distribution, and thus the components of $X$ are independent.

> [!rmk] Zero correlation does not imply independence for general random variables.
>
> For example, let $X \sim \mathrm{Unif}[-1,1]$ and $Y=X^{2}$. Certainly, $X$ and $Y$ are not independent, but they are uncorrelated:
> $
> \Cov(X,Y) = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y] = \mathbb{E}[X^{3}] - 0 = 0.
> $

## Sample Mean and Sample Variance

> [!thm]
>
> If $\{ X _i \}_{i=1}^{n}$ is a sample from a normal population having mean $\mu$ and variance $\sigma^{2}$, then $\overline{X}$ and $S^{2}$ are independent random variables,
> with $\overline{X} \sim \mathcal{N}(\mu,\sigma^{2} /n)$, and $\frac{n-1}{\sigma^{2}}S^{2} \sim \chi^{2}_{n-1}$.
> Then we have $\frac{\overline{X} - \mu}{S /\sqrt{n }} \sim t_{n-1}$.

- [!] This independence of $\overline{X}$ and $S^2$ is a unique property of the normal distribution.

## General Bivariate Normal Distribution

We skipped the introduction of standard bivariate normal random variable $(X,Y)\in\R^{2}$, as it is more convenient, and not conceptually harder, to directly deal with the general bivariate normal distribution.

Let $X$ and $Y$ be two random *vectors* with a joint normal distribution. That is
$
\begin{bmatrix} X \\ Y \end{bmatrix} \sim \mathcal{N}\left( \begin{bmatrix} \mu_{X} \\ \mu_{Y} \end{bmatrix}, \begin{bmatrix} \Sigma_{XX} & \Sigma_{XY} \\ \Sigma_{YX} & \Sigma_{YY} \end{bmatrix} \right).
$
Suppose $\Sigma_{YY} >0$ (PSD). We have

- $\mathbb{E}[X\given Y] = \mu_{X} + \Sigma_{XY}\Sigma_{YY}^{-1}(Y-\mu_{Y})$.
- $\tilde{X} \coloneqq X - \mathbb{E}[X\given Y]$ is independent of $Y$, and thus independent of any function of $Y$.
- $\Cov(\tilde{X}, \tilde{X}\given Y) = \Cov(\tilde{X},\tilde{X}) = \Sigma_{XX}-\Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX}$.

Before proving the above results, we recover the standard bivariate normal distribution from them. Let $\Sigma_{XX}=\sigma_{X}^{2}$, $\Sigma_{YY}=\sigma_{Y}^{2}$, $\Sigma_{XY}=\rho\sigma_{X}\sigma_{Y}$. Then, we have
$
\mathbb{E}[X\given Y] = \rho \frac{\sigma_{X}}{\sigma_{Y}}Y,
\quad
\Var(\tilde{X}) = \sigma_{X}^{2}(1-\rho^{2}).
$

### Proofs

WLOG, we assume $\mu_{X}=\mu_{Y}=0$ for simplicity.
Let $\hat{X} = \Sigma_{XY}\Sigma_{YY}^{-1}Y$. We have
$
\mathbb{E}[\hat{X}Y]
= \Sigma_{XY}\Sigma_{YY}^{-1} \mathbb{E}[YY] = \Sigma_{XY}
= \mathbb{E}[XY]
\implies \mathbb{E}[(X-\hat{X})Y] = 0.
$
Note that $(X-\hat{X},Y)$ is a linear transformation of $(X,Y)$, and thus the above uncorrelatedness implies independence.
This also implies, for any function $g$:
$
\mathbb{E}[(X-\hat{X})g(Y)] = 0.
$
By the [[Conditional Probability#General Definition of Conditional Expectation]], the above condition says that
$
\mathbb{E}[X\given Y] = \hat{X}.
$

Finally, we compute $\Var(\tilde{X})$. Since $\mathbb{E}[X\given Y]$ is also a function of $Y$, it is independent of $\tilde{X}$. Thus, we have
$
\Var(\tilde{X})
= \mathbb{E}\left[ (X-\hat{X})(X-\hat{X})^{T} \right]
= \mathbb{E}\left[ (X-\hat{X})X^{T} \right]
= \Sigma_{XX} - \Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX}.
$


</div></div>
         | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Normal Distribution

A [[Random Variable]] is said to be normally distributed if it has

- Notation
    - $\mathcal{N}(\mu, \sigma^{2})$ - Parameters
    - $\mu\in\R, \sigma^{2}\in\R_{+}$ - [[Probability Density Function\|PDF]]
    - $\displaystyle f(x)=\frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^{2}}$     - $(2 \pi)^{-k / 2} |\boldsymbol{\Sigma}|^{-1 / 2} \exp \left(-\frac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^{\top} \boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})\right)$ for $k$-dimensional with PSD $\Sigma$
- [[Expectation|Mean]]
    - $\mu$ - [[Variance]]
    - $\sigma^{2}$ - [[Moment Generating Function|MGF]]
    - $e^{\mu t + \sigma^{2}t^{2} /2}$ - [[Characteristic Function|CF]]
    - $e^{it\mu - \sigma^{2}t^{2} /2}$ 
Because of the [[Central Limit Theorem]], in practice, many random phenomena obey, at least approximately, a normal probability distribution.

## Equivalent Definitions for Multivariate Normal Distribution

We can define a random vector to be (nondegenerate multivariate) normal if if has a PDF specified above.
1. Or, if it has the form:
$
X = DW + \mu,
$
for any matrix $D$ and vector $\mu$, where $W$ is a random vector whose components are independent standard normal random variables $\mathcal{N}(0,1)$.
2. Or, if for any real vector $a$, the random variable $a^{T}X$ is normal.

These two alternative definitions cover *degenerate* normal distribution, i.e., some components are constant/ the distribution is concentrated on a proper subspace of $\R^{k}$.

### Equivalence

#### First Alternative

By change of variables, we can see that the definition via PDF implies the first alternative definition. We now show that if $D$ is not singular, $X=DW+\mu$ is a nondegenerate normal r.v. with a PDF of the form above.
By the relationship of [[Derived Distribution]], we have
$
f_{X}(x) = f_{W}(D^{-1}x) \cdot | D^{-1}|.
$
Plugging in the PDF of standard normal distribution, we get
$
f_{X}(x) = (2\pi)^{-n /2}\exp \left( -\frac{1}{2} (x-\mu)^T D^{-T}D^{-1} (x-\mu) \right) \cdot \frac{1}{|D|}
= (2\pi)^{-n /2}|DD^T|^{-1 /2}\exp \left( -\frac{1}{2} (x-\mu)^T (DD^T)^{-1} (x-\mu) \right),
$
and $DD^T$ is the covariance of $X$.

#### Second Alternative

The relationship from the first alternative definition to the second is direct. Now suppose $a^TX$ is normal for any vector $a$.

> [!error] Wrong
> We inspect the [[Moment Generating Function|MGF]] of $X$:
> $
> M_{X}(s) = M_{s^TX}(1) = \exp(s^T\mathbb{E}[X] + s^T\Var(X)s/2),
> $
> where we use the fact that $s^TX$ is normal with mean $s^T\mathbb{E}X$ and variance $s^T\Var(X)s$. On the other hand, let $Y=\sqrt{ \Var(X) }W+\mathbb{E}[X]$, where $W$ is a standard normal random vector. Then, $Y$ ~~is multivariate normal and~~ has the same MGF as $X$. By the inversion theorem of MGF, $X$ and $Y$ have the same distribution.

- [!] The above proof is wrong, as we want to show $X=Y$ but not only $X\overset{ d }{ = }Y$.

To rigorously prove the equivalence, we consider two cases.

**Case I.** $V = D^{2} = \Cov(X,X) \succ 0$. Thus, $D$ is invertible and we let $W = D^{-1}(X-\mu)$. We want to show that $W$ is standard normal, and thus $X = DW +\mu$ satisfies the first alternative definition.
We first have $\mathbb{E}[W] = 0$ and $\Var(W) = D^{-1}\Var(X)D^{-T} = D^{-1}D^{2}D^{-1} = I$.
We then inspect the [[Moment Generating Function|MGF]] (transform) of $W$:
$
\begin{aligned}
M_{W}(s) =& \mathbb{E}[\exp(s^{T}W)] \\
=& \mathbb{E}[\exp(s^{T}W + \mu') \exp(-\mu')] && (\mu' = s^{T}D^{-1}\mu )\\
=& \exp(-\mu') \mathbb{E}[\exp(s'^{T}X)] && (s' = D^{-1}s)\\
=& \exp(-\mu')M_{s'^{T}X}(1) \\
=& \exp(-\mu')\exp(s'^{T}\mu + s'^{T}V s'/2) && (s'X \text{ is normal by Alt. Def. 2}) \\
=& \exp(-\mu')\exp(\mu' + s^{T}s/2) \\
=& \exp(s^{T}s/2),
\end{aligned}
$
which is the MGF of a standard normal random variable. Therefore, $W \sim \mathcal{N}(0,I)$.

**Case II.** $V$ is singular. Then, there exists a vector $a\ne 0$ such that $Va = 0$. For simplicity, suppose $\mu=0$. Note that
$
a^{T}Va = \mathbb{E}[(a^{T}X)^{2}] = 0.
$
Thus, $a^{T}X = 0$, indicating the linear dependence of $X$. WLOG, suppose $X = (Y;Z)\in\R^{k=d+(k-d)}$ and the first $0\le d<k$ components of $X$ are linearly independent and $Z = AY$ is a linear combination of $Y$. Since $X$ satisfies the second alternative definition, $Y$ also satisfies it. By the Case I, we know $Y=DW$ for some positive definite $D$ and standard normal $W$. Let $W'$ be another $k-d$-dimensional standard normal r.v. independent of $W$. Then, we can write
$
X = \begin{bmatrix} Y\\Z \end{bmatrix}
= \begin{bmatrix} D&0\\AD&0 \end{bmatrix}
 \begin{bmatrix} W\\W' \end{bmatrix}
.$

## Properties

- (**Affine transformation**). The [[Affine Transformation]] of a normal random variable $X$: $a + BX$ is also a normal random variable
    - As a special case, any sub-vector of a normal random vector is also normal
        - As a special case, any component of a normal random vector is also normal
    - If $X \sim \mathcal{N}(\mu,\Sigma)$, then $BX+a \sim \mathcal{N}(B\mu+a,B \Sigma B^{T})$
    - [&] The proof follows the alternative definition 1 above
- (**Independent Gaussians are jointly Gaussian**). The sum of independent normal random variables is also a normal random variable ^prop-ind-joint
    - [&] Prove this using the [[Moment Generating Function#Inversion Theorem]]
    - [!] Note that this is generally not true for dependent random variables
    - [!] More generally, if a random vector with normal components is not **jointly** normal, then its affine transformation is not necessarily normal! See also [[#Independence, Correlation, and Jointly Normal]]
- (**Sufficiency**) The mean and covariance of a multivariate normal distribution consist of a [[Sufficient Statistic]]. ^prop-suff
    - In other words, the distribution of a multivariate normal random vector is completely determined by its mean and covariance
    - [&] See [[#Sufficiency]] for proof
- (**Independent iff Uncorrelated**). For a multivariate normal random vector, its components are independent if and only if they are uncorrelated
    - [&] We can use the sufficiency property to prove this. For $X$ with uncorrelated components, we can construct $Y$ with independent components that have the same mean and variance. Then $X\overset{ d }{ = }Y$ and thus $X$ has independent components. See also [[#Independence, Correlation, and Jointly Normal]]
    - [&] For nondegenerate normal random vector, we can also factorize the PDF to show independence.
    - [!] The statement is not true for general [[Random Variable]]s for which the mean and variance are not sufficient; see [[#Independence, Correlation, and Jointly Normal]]
- Hence, if $X\sim \mathcal{N}(\mu,\sigma^{2})$, then $Z = (X - \mu) /\sigma$ is normal with mean 0 and variance 1; $Z$ is said to have a ==standard== or ==unit== normal distribution
    - We write the CDF of a standard normal distribution $\Phi$
- (**Symmetry**). $\Phi(-x) = 1 - \Phi(x)$
- Let $\R^{p} \ni X \sim \mathcal{N}(\mu,\Sigma)$; then, $(X-\mu)^{T} \Sigma ^{-1}(X-\mu) \sim \chi^{2}_{p}$ (see [[Chi-Square Distribution]])

### Proofs

#### Sufficiency

Note that [[Probability Density Function\|PDF]] or [[Cumulative Distribution Function|CDF]] completely determines the distribution of a random variable. Therefore, by the definition for nondegenerate multivariate normal distribution via PDF, we can see that the mean and covariance matrix are sufficient.

For general normal random vectors, we can seek help from the [[Moment Generating Function|MGF]]. Note that a MGF also completely determines a distribution.
We use the second alternative definition. For a random vector, its [[Moment Generating Function|MGF]] is the multivariate transform:
$
M_{X}(s) = \mathbb{E}[\exp(s^TX)] = M_{s^TX}(1) = \exp(s^T\mu + s^TVs/2),
$
where we use the definition that $s^TX$ is normal with mean $s^T\mu$ and variance $s^TVs$.
As we can see, the mean and variance are sufficient to determine the MGF, and thus the distribution.

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
> We use the second alternative definition above to prove this. Let $X=(X_{1},\dots,X_n)$ with normal components. Then, for any vector $a$, we have $a^{T}X = \sum_{i=1}^{n} a_{i}X_{i}$. Note that $a_iX _i$ are independent normal random variables, and thus their sum is normal by Property [[#^prop-ind-joint]], or the [[Moment Generating Function#Inversion Theorem]].
> By the alternative definition, $X$ is jointly normal.

> [!rmk] Joint normal with zero correlation implies independence.
>
> Suppose that the components of $X$ are uncorrelated, i.e., its covariance matrix is a diagonal. Consider another random vector $Y$ such that $Y_i\overset{ d }{ = }X_{i}$ and $Y_i$ are independent. By Property [[#^prop-ind-joint]], $Y$ is jointly normal.
> Since $X$ and $Y$ have the same mean and covariance, by Property [[#^prop-suff]], $X$ and $Y$ have the same distribution, and thus the components of $X$ are independent.

> [!rmk] Zero correlation does not imply independence for general random variables.
>
> For example, let $X \sim \mathrm{Unif}[-1,1]$ and $Y=X^{2}$. Certainly, $X$ and $Y$ are not independent, but they are uncorrelated:
> $
> \Cov(X,Y) = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y] = \mathbb{E}[X^{3}] - 0 = 0.
> $

## Sample Mean and Sample Variance

> [!thm]
>
> If $\{ X _i \}_{i=1}^{n}$ is a sample from a normal population having mean $\mu$ and variance $\sigma^{2}$, then $\overline{X}$ and $S^{2}$ are independent random variables,
> with $\overline{X} \sim \mathcal{N}(\mu,\sigma^{2} /n)$, and $\frac{n-1}{\sigma^{2}}S^{2} \sim \chi^{2}_{n-1}$.
> Then we have $\frac{\overline{X} - \mu}{S /\sqrt{n }} \sim t_{n-1}$.

- [!] This independence of $\overline{X}$ and $S^2$ is a unique property of the normal distribution.

## General Bivariate Normal Distribution

We skipped the introduction of standard bivariate normal random variable $(X,Y)\in\R^{2}$, as it is more convenient, and not conceptually harder, to directly deal with the general bivariate normal distribution.

Let $X$ and $Y$ be two random *vectors* with a joint normal distribution. That is
$
\begin{bmatrix} X \\ Y \end{bmatrix} \sim \mathcal{N}\left( \begin{bmatrix} \mu_{X} \\ \mu_{Y} \end{bmatrix}, \begin{bmatrix} \Sigma_{XX} & \Sigma_{XY} \\ \Sigma_{YX} & \Sigma_{YY} \end{bmatrix} \right).
$
Suppose $\Sigma_{YY} >0$ (PSD). We have

- $\mathbb{E}[X\given Y] = \mu_{X} + \Sigma_{XY}\Sigma_{YY}^{-1}(Y-\mu_{Y})$.
- $\tilde{X} \coloneqq X - \mathbb{E}[X\given Y]$ is independent of $Y$, and thus independent of any function of $Y$.
- $\Cov(\tilde{X}, \tilde{X}\given Y) = \Cov(\tilde{X},\tilde{X}) = \Sigma_{XX}-\Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX}$.

Before proving the above results, we recover the standard bivariate normal distribution from them. Let $\Sigma_{XX}=\sigma_{X}^{2}$, $\Sigma_{YY}=\sigma_{Y}^{2}$, $\Sigma_{XY}=\rho\sigma_{X}\sigma_{Y}$. Then, we have
$
\mathbb{E}[X\given Y] = \rho \frac{\sigma_{X}}{\sigma_{Y}}Y,
\quad
\Var(\tilde{X}) = \sigma_{X}^{2}(1-\rho^{2}).
$

### Proofs

WLOG, we assume $\mu_{X}=\mu_{Y}=0$ for simplicity.
Let $\hat{X} = \Sigma_{XY}\Sigma_{YY}^{-1}Y$. We have
$
\mathbb{E}[\hat{X}Y]
= \Sigma_{XY}\Sigma_{YY}^{-1} \mathbb{E}[YY] = \Sigma_{XY}
= \mathbb{E}[XY]
\implies \mathbb{E}[(X-\hat{X})Y] = 0.
$
Note that $(X-\hat{X},Y)$ is a linear transformation of $(X,Y)$, and thus the above uncorrelatedness implies independence.
This also implies, for any function $g$:
$
\mathbb{E}[(X-\hat{X})g(Y)] = 0.
$
By the [[Conditional Probability#General Definition of Conditional Expectation]], the above condition says that
$
\mathbb{E}[X\given Y] = \hat{X}.
$

Finally, we compute $\Var(\tilde{X})$. Since $\mathbb{E}[X\given Y]$ is also a function of $Y$, it is independent of $\tilde{X}$. Thus, we have
$
\Var(\tilde{X})
= \mathbb{E}\left[ (X-\hat{X})(X-\hat{X})^{T} \right]
= \mathbb{E}\left[ (X-\hat{X})X^{T} \right]
= \Sigma_{XX} - \Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX}.
$


</div></div>
      | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Normal Distribution

A [[Random Variable]] is said to be normally distributed if it has

- Notation
    - $\mathcal{N}(\mu, \sigma^{2})$ - Parameters
    - $\mu\in\R, \sigma^{2}\in\R_{+}$ - [[Probability Density Function\|PDF]]
    - $\displaystyle f(x)=\frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^{2}}$     - $(2 \pi)^{-k / 2} |\boldsymbol{\Sigma}|^{-1 / 2} \exp \left(-\frac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^{\top} \boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})\right)$ for $k$-dimensional with PSD $\Sigma$
- [[Expectation|Mean]]
    - $\mu$ - [[Variance]]
    - $\sigma^{2}$ - [[Moment Generating Function|MGF]]
    - $e^{\mu t + \sigma^{2}t^{2} /2}$ - [[Characteristic Function|CF]]
    - $e^{it\mu - \sigma^{2}t^{2} /2}$ 
Because of the [[Central Limit Theorem]], in practice, many random phenomena obey, at least approximately, a normal probability distribution.

## Equivalent Definitions for Multivariate Normal Distribution

We can define a random vector to be (nondegenerate multivariate) normal if if has a PDF specified above.
1. Or, if it has the form:
$
X = DW + \mu,
$
for any matrix $D$ and vector $\mu$, where $W$ is a random vector whose components are independent standard normal random variables $\mathcal{N}(0,1)$.
2. Or, if for any real vector $a$, the random variable $a^{T}X$ is normal.

These two alternative definitions cover *degenerate* normal distribution, i.e., some components are constant/ the distribution is concentrated on a proper subspace of $\R^{k}$.

### Equivalence

#### First Alternative

By change of variables, we can see that the definition via PDF implies the first alternative definition. We now show that if $D$ is not singular, $X=DW+\mu$ is a nondegenerate normal r.v. with a PDF of the form above.
By the relationship of [[Derived Distribution]], we have
$
f_{X}(x) = f_{W}(D^{-1}x) \cdot | D^{-1}|.
$
Plugging in the PDF of standard normal distribution, we get
$
f_{X}(x) = (2\pi)^{-n /2}\exp \left( -\frac{1}{2} (x-\mu)^T D^{-T}D^{-1} (x-\mu) \right) \cdot \frac{1}{|D|}
= (2\pi)^{-n /2}|DD^T|^{-1 /2}\exp \left( -\frac{1}{2} (x-\mu)^T (DD^T)^{-1} (x-\mu) \right),
$
and $DD^T$ is the covariance of $X$.

#### Second Alternative

The relationship from the first alternative definition to the second is direct. Now suppose $a^TX$ is normal for any vector $a$.

> [!error] Wrong
> We inspect the [[Moment Generating Function|MGF]] of $X$:
> $
> M_{X}(s) = M_{s^TX}(1) = \exp(s^T\mathbb{E}[X] + s^T\Var(X)s/2),
> $
> where we use the fact that $s^TX$ is normal with mean $s^T\mathbb{E}X$ and variance $s^T\Var(X)s$. On the other hand, let $Y=\sqrt{ \Var(X) }W+\mathbb{E}[X]$, where $W$ is a standard normal random vector. Then, $Y$ ~~is multivariate normal and~~ has the same MGF as $X$. By the inversion theorem of MGF, $X$ and $Y$ have the same distribution.

- [!] The above proof is wrong, as we want to show $X=Y$ but not only $X\overset{ d }{ = }Y$.

To rigorously prove the equivalence, we consider two cases.

**Case I.** $V = D^{2} = \Cov(X,X) \succ 0$. Thus, $D$ is invertible and we let $W = D^{-1}(X-\mu)$. We want to show that $W$ is standard normal, and thus $X = DW +\mu$ satisfies the first alternative definition.
We first have $\mathbb{E}[W] = 0$ and $\Var(W) = D^{-1}\Var(X)D^{-T} = D^{-1}D^{2}D^{-1} = I$.
We then inspect the [[Moment Generating Function|MGF]] (transform) of $W$:
$
\begin{aligned}
M_{W}(s) =& \mathbb{E}[\exp(s^{T}W)] \\
=& \mathbb{E}[\exp(s^{T}W + \mu') \exp(-\mu')] && (\mu' = s^{T}D^{-1}\mu )\\
=& \exp(-\mu') \mathbb{E}[\exp(s'^{T}X)] && (s' = D^{-1}s)\\
=& \exp(-\mu')M_{s'^{T}X}(1) \\
=& \exp(-\mu')\exp(s'^{T}\mu + s'^{T}V s'/2) && (s'X \text{ is normal by Alt. Def. 2}) \\
=& \exp(-\mu')\exp(\mu' + s^{T}s/2) \\
=& \exp(s^{T}s/2),
\end{aligned}
$
which is the MGF of a standard normal random variable. Therefore, $W \sim \mathcal{N}(0,I)$.

**Case II.** $V$ is singular. Then, there exists a vector $a\ne 0$ such that $Va = 0$. For simplicity, suppose $\mu=0$. Note that
$
a^{T}Va = \mathbb{E}[(a^{T}X)^{2}] = 0.
$
Thus, $a^{T}X = 0$, indicating the linear dependence of $X$. WLOG, suppose $X = (Y;Z)\in\R^{k=d+(k-d)}$ and the first $0\le d<k$ components of $X$ are linearly independent and $Z = AY$ is a linear combination of $Y$. Since $X$ satisfies the second alternative definition, $Y$ also satisfies it. By the Case I, we know $Y=DW$ for some positive definite $D$ and standard normal $W$. Let $W'$ be another $k-d$-dimensional standard normal r.v. independent of $W$. Then, we can write
$
X = \begin{bmatrix} Y\\Z \end{bmatrix}
= \begin{bmatrix} D&0\\AD&0 \end{bmatrix}
 \begin{bmatrix} W\\W' \end{bmatrix}
.$

## Properties

- (**Affine transformation**). The [[Affine Transformation]] of a normal random variable $X$: $a + BX$ is also a normal random variable
    - As a special case, any sub-vector of a normal random vector is also normal
        - As a special case, any component of a normal random vector is also normal
    - If $X \sim \mathcal{N}(\mu,\Sigma)$, then $BX+a \sim \mathcal{N}(B\mu+a,B \Sigma B^{T})$
    - [&] The proof follows the alternative definition 1 above
- (**Independent Gaussians are jointly Gaussian**). The sum of independent normal random variables is also a normal random variable ^prop-ind-joint
    - [&] Prove this using the [[Moment Generating Function#Inversion Theorem]]
    - [!] Note that this is generally not true for dependent random variables
    - [!] More generally, if a random vector with normal components is not **jointly** normal, then its affine transformation is not necessarily normal! See also [[#Independence, Correlation, and Jointly Normal]]
- (**Sufficiency**) The mean and covariance of a multivariate normal distribution consist of a [[Sufficient Statistic]]. ^prop-suff
    - In other words, the distribution of a multivariate normal random vector is completely determined by its mean and covariance
    - [&] See [[#Sufficiency]] for proof
- (**Independent iff Uncorrelated**). For a multivariate normal random vector, its components are independent if and only if they are uncorrelated
    - [&] We can use the sufficiency property to prove this. For $X$ with uncorrelated components, we can construct $Y$ with independent components that have the same mean and variance. Then $X\overset{ d }{ = }Y$ and thus $X$ has independent components. See also [[#Independence, Correlation, and Jointly Normal]]
    - [&] For nondegenerate normal random vector, we can also factorize the PDF to show independence.
    - [!] The statement is not true for general [[Random Variable]]s for which the mean and variance are not sufficient; see [[#Independence, Correlation, and Jointly Normal]]
- Hence, if $X\sim \mathcal{N}(\mu,\sigma^{2})$, then $Z = (X - \mu) /\sigma$ is normal with mean 0 and variance 1; $Z$ is said to have a ==standard== or ==unit== normal distribution
    - We write the CDF of a standard normal distribution $\Phi$
- (**Symmetry**). $\Phi(-x) = 1 - \Phi(x)$
- Let $\R^{p} \ni X \sim \mathcal{N}(\mu,\Sigma)$; then, $(X-\mu)^{T} \Sigma ^{-1}(X-\mu) \sim \chi^{2}_{p}$ (see [[Chi-Square Distribution]])

### Proofs

#### Sufficiency

Note that [[Probability Density Function\|PDF]] or [[Cumulative Distribution Function|CDF]] completely determines the distribution of a random variable. Therefore, by the definition for nondegenerate multivariate normal distribution via PDF, we can see that the mean and covariance matrix are sufficient.

For general normal random vectors, we can seek help from the [[Moment Generating Function|MGF]]. Note that a MGF also completely determines a distribution.
We use the second alternative definition. For a random vector, its [[Moment Generating Function|MGF]] is the multivariate transform:
$
M_{X}(s) = \mathbb{E}[\exp(s^TX)] = M_{s^TX}(1) = \exp(s^T\mu + s^TVs/2),
$
where we use the definition that $s^TX$ is normal with mean $s^T\mu$ and variance $s^TVs$.
As we can see, the mean and variance are sufficient to determine the MGF, and thus the distribution.

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
> We use the second alternative definition above to prove this. Let $X=(X_{1},\dots,X_n)$ with normal components. Then, for any vector $a$, we have $a^{T}X = \sum_{i=1}^{n} a_{i}X_{i}$. Note that $a_iX _i$ are independent normal random variables, and thus their sum is normal by Property [[#^prop-ind-joint]], or the [[Moment Generating Function#Inversion Theorem]].
> By the alternative definition, $X$ is jointly normal.

> [!rmk] Joint normal with zero correlation implies independence.
>
> Suppose that the components of $X$ are uncorrelated, i.e., its covariance matrix is a diagonal. Consider another random vector $Y$ such that $Y_i\overset{ d }{ = }X_{i}$ and $Y_i$ are independent. By Property [[#^prop-ind-joint]], $Y$ is jointly normal.
> Since $X$ and $Y$ have the same mean and covariance, by Property [[#^prop-suff]], $X$ and $Y$ have the same distribution, and thus the components of $X$ are independent.

> [!rmk] Zero correlation does not imply independence for general random variables.
>
> For example, let $X \sim \mathrm{Unif}[-1,1]$ and $Y=X^{2}$. Certainly, $X$ and $Y$ are not independent, but they are uncorrelated:
> $
> \Cov(X,Y) = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y] = \mathbb{E}[X^{3}] - 0 = 0.
> $

## Sample Mean and Sample Variance

> [!thm]
>
> If $\{ X _i \}_{i=1}^{n}$ is a sample from a normal population having mean $\mu$ and variance $\sigma^{2}$, then $\overline{X}$ and $S^{2}$ are independent random variables,
> with $\overline{X} \sim \mathcal{N}(\mu,\sigma^{2} /n)$, and $\frac{n-1}{\sigma^{2}}S^{2} \sim \chi^{2}_{n-1}$.
> Then we have $\frac{\overline{X} - \mu}{S /\sqrt{n }} \sim t_{n-1}$.

- [!] This independence of $\overline{X}$ and $S^2$ is a unique property of the normal distribution.

## General Bivariate Normal Distribution

We skipped the introduction of standard bivariate normal random variable $(X,Y)\in\R^{2}$, as it is more convenient, and not conceptually harder, to directly deal with the general bivariate normal distribution.

Let $X$ and $Y$ be two random *vectors* with a joint normal distribution. That is
$
\begin{bmatrix} X \\ Y \end{bmatrix} \sim \mathcal{N}\left( \begin{bmatrix} \mu_{X} \\ \mu_{Y} \end{bmatrix}, \begin{bmatrix} \Sigma_{XX} & \Sigma_{XY} \\ \Sigma_{YX} & \Sigma_{YY} \end{bmatrix} \right).
$
Suppose $\Sigma_{YY} >0$ (PSD). We have

- $\mathbb{E}[X\given Y] = \mu_{X} + \Sigma_{XY}\Sigma_{YY}^{-1}(Y-\mu_{Y})$.
- $\tilde{X} \coloneqq X - \mathbb{E}[X\given Y]$ is independent of $Y$, and thus independent of any function of $Y$.
- $\Cov(\tilde{X}, \tilde{X}\given Y) = \Cov(\tilde{X},\tilde{X}) = \Sigma_{XX}-\Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX}$.

Before proving the above results, we recover the standard bivariate normal distribution from them. Let $\Sigma_{XX}=\sigma_{X}^{2}$, $\Sigma_{YY}=\sigma_{Y}^{2}$, $\Sigma_{XY}=\rho\sigma_{X}\sigma_{Y}$. Then, we have
$
\mathbb{E}[X\given Y] = \rho \frac{\sigma_{X}}{\sigma_{Y}}Y,
\quad
\Var(\tilde{X}) = \sigma_{X}^{2}(1-\rho^{2}).
$

### Proofs

WLOG, we assume $\mu_{X}=\mu_{Y}=0$ for simplicity.
Let $\hat{X} = \Sigma_{XY}\Sigma_{YY}^{-1}Y$. We have
$
\mathbb{E}[\hat{X}Y]
= \Sigma_{XY}\Sigma_{YY}^{-1} \mathbb{E}[YY] = \Sigma_{XY}
= \mathbb{E}[XY]
\implies \mathbb{E}[(X-\hat{X})Y] = 0.
$
Note that $(X-\hat{X},Y)$ is a linear transformation of $(X,Y)$, and thus the above uncorrelatedness implies independence.
This also implies, for any function $g$:
$
\mathbb{E}[(X-\hat{X})g(Y)] = 0.
$
By the [[Conditional Probability#General Definition of Conditional Expectation]], the above condition says that
$
\mathbb{E}[X\given Y] = \hat{X}.
$

Finally, we compute $\Var(\tilde{X})$. Since $\mathbb{E}[X\given Y]$ is also a function of $Y$, it is independent of $\tilde{X}$. Thus, we have
$
\Var(\tilde{X})
= \mathbb{E}\left[ (X-\hat{X})(X-\hat{X})^{T} \right]
= \mathbb{E}\left[ (X-\hat{X})X^{T} \right]
= \Sigma_{XX} - \Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX}.
$


</div></div>
      |
| [[Gamma Distribution]]                | /                                                       | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Gamma Distribution

A continuous [[Random Variable]] is of gamma distribution if

- Parameters
    - $\alpha, \lambda >0$ - [[Probability Density Function\|PDF]]
    - $f(x)=\begin{cases} \frac{\lambda e^{-\lambda x}(\lambda x)^{\alpha -1}}{\Gamma(\alpha)},\quad & x \ge 0,\\0,& x<0 \end{cases}$     - where $\Gamma$ is the [[Gamma Function]]
        - $\Gamma(\alpha) = \int _{0}^{\infty} e^{-y}y^{\alpha-1} \, dy$
        - $\Gamma(1) = 1$
        - $\Gamma(\alpha) = (\alpha-1)\Gamma(\alpha-1)$
        - $\Gamma(n) = (n-1)!$
- [[Expectation|Mean]]
    - $\alpha /\lambda$ - [[Variance]]
    - $\alpha /\lambda^{2}$ - [[Moment Generating Function|MGF]]
    - $\left( \frac{\lambda}{\lambda - t} \right)^{\alpha},\quad t <\lambda$ 

</div></div>
          | /                                                          | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Gamma Distribution

A continuous [[Random Variable]] is of gamma distribution if

- Parameters
    - $\alpha, \lambda >0$ - [[Probability Density Function\|PDF]]
    - $f(x)=\begin{cases} \frac{\lambda e^{-\lambda x}(\lambda x)^{\alpha -1}}{\Gamma(\alpha)},\quad & x \ge 0,\\0,& x<0 \end{cases}$     - where $\Gamma$ is the [[Gamma Function]]
        - $\Gamma(\alpha) = \int _{0}^{\infty} e^{-y}y^{\alpha-1} \, dy$
        - $\Gamma(1) = 1$
        - $\Gamma(\alpha) = (\alpha-1)\Gamma(\alpha-1)$
        - $\Gamma(n) = (n-1)!$
- [[Expectation|Mean]]
    - $\alpha /\lambda$ - [[Variance]]
    - $\alpha /\lambda^{2}$ - [[Moment Generating Function|MGF]]
    - $\left( \frac{\lambda}{\lambda - t} \right)^{\alpha},\quad t <\lambda$ 

</div></div>
          | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# naked inline n-link

</div>




# Gamma Distribution

A continuous [[Random Variable]] is of gamma distribution if

- Parameters
    - $\alpha, \lambda >0$ - [[Probability Density Function\|PDF]]
    - $f(x)=\begin{cases} \frac{\lambda e^{-\lambda x}(\lambda x)^{\alpha -1}}{\Gamma(\alpha)},\quad & x \ge 0,\\0,& x<0 \end{cases}$     - where $\Gamma$ is the [[Gamma Function]]
        - $\Gamma(\alpha) = \int _{0}^{\infty} e^{-y}y^{\alpha-1} \, dy$
        - $\Gamma(1) = 1$
        - $\Gamma(\alpha) = (\alpha-1)\Gamma(\alpha-1)$
        - $\Gamma(n) = (n-1)!$
- [[Expectation|Mean]]
    - $\alpha /\lambda$ - [[Variance]]
    - $\alpha /\lambda^{2}$ - [[Moment Generating Function|MGF]]
    - $\left( \frac{\lambda}{\lambda - t} \right)^{\alpha},\quad t <\lambda$ 

</div></div>
          | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Gamma Distribution

A continuous [[Random Variable]] is of gamma distribution if

- Parameters
    - $\alpha, \lambda >0$ - [[Probability Density Function\|PDF]]
    - $f(x)=\begin{cases} \frac{\lambda e^{-\lambda x}(\lambda x)^{\alpha -1}}{\Gamma(\alpha)},\quad & x \ge 0,\\0,& x<0 \end{cases}$     - where $\Gamma$ is the [[Gamma Function]]
        - $\Gamma(\alpha) = \int _{0}^{\infty} e^{-y}y^{\alpha-1} \, dy$
        - $\Gamma(1) = 1$
        - $\Gamma(\alpha) = (\alpha-1)\Gamma(\alpha-1)$
        - $\Gamma(n) = (n-1)!$
- [[Expectation|Mean]]
    - $\alpha /\lambda$ - [[Variance]]
    - $\alpha /\lambda^{2}$ - [[Moment Generating Function|MGF]]
    - $\left( \frac{\lambda}{\lambda - t} \right)^{\alpha},\quad t <\lambda$ 

</div></div>
          | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Gamma Distribution

A continuous [[Random Variable]] is of gamma distribution if

- Parameters
    - $\alpha, \lambda >0$ - [[Probability Density Function|PDF]]
    - $f(x)=\begin{cases} \frac{\lambda e^{-\lambda x}(\lambda x)^{\alpha -1}}{\Gamma(\alpha)},\quad & x \ge 0,\\0,& x<0 \end{cases}$     - where $\Gamma$ is the [[Gamma Function]]
        - $\Gamma(\alpha) = \int _{0}^{\infty} e^{-y}y^{\alpha-1} \, dy$
        - $\Gamma(1) = 1$
        - $\Gamma(\alpha) = (\alpha-1)\Gamma(\alpha-1)$
        - $\Gamma(n) = (n-1)!$
- [[Expectation|Mean]]
    - $\alpha /\lambda$ - [[Variance]]
    - $\alpha /\lambda^{2}$ - [[Moment Generating Function|MGF]]
    - $\left( \frac{\lambda}{\lambda - t} \right)^{\alpha},\quad t <\lambda$ 

</div></div>
       |                                                        |
| [[Beta Distribution]]                 | /                                                       | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Beta Distribution

A continuous [[Random Variable]] with range $[0,1]$ is of beta distribution if

- Parameters
    - $a,b >0$ - [[Probability Density Function|PDF]]
    - $f(x)=\frac{\Gamma(a+b)}{\Gamma(a) \Gamma(b)} x^{a-1}(1-x)^{b-1}$     - where $\Gamma$ is the [[Gamma Function]]
- [[Expectation|Mean]]
    - $\frac{a}{a+b}$ - [[Variance]]
    - $\frac{ab}{(a+b)^2(a+b+1)}$ - [[Moment Generating Function|MGF]]
    - $\frac{\Gamma(a+b)}{\Gamma(a) \Gamma(b)} \int_{0}^{1} x^{a-1}(1-x)^{b-1} e^{tx} \mathrm{d} x$ 
## Properties

- [[Uniform Distribution]] is a special case of beta distribution with $a=b=1$.
- **Beta-Binomial model**:Given a prior $\operatorname{Beta}(a,b)$, the posterior distribution of $p$ given $n$ Bernoulli trials with $k$ successes is $\operatorname{Beta}(a+k, b+n-k)$.


</div></div>
           | /                                                          | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Beta Distribution

A continuous [[Random Variable]] with range $[0,1]$ is of beta distribution if

- Parameters
    - $a,b >0$ - [[Probability Density Function|PDF]]
    - $f(x)=\frac{\Gamma(a+b)}{\Gamma(a) \Gamma(b)} x^{a-1}(1-x)^{b-1}$     - where $\Gamma$ is the [[Gamma Function]]
- [[Expectation|Mean]]
    - $\frac{a}{a+b}$ - [[Variance]]
    - $\frac{ab}{(a+b)^2(a+b+1)}$ - [[Moment Generating Function|MGF]]
    - $\frac{\Gamma(a+b)}{\Gamma(a) \Gamma(b)} \int_{0}^{1} x^{a-1}(1-x)^{b-1} e^{tx} \mathrm{d} x$ 
## Properties

- [[Uniform Distribution]] is a special case of beta distribution with $a=b=1$.
- **Beta-Binomial model**:Given a prior $\operatorname{Beta}(a,b)$, the posterior distribution of $p$ given $n$ Bernoulli trials with $k$ successes is $\operatorname{Beta}(a+k, b+n-k)$.


</div></div>
           | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# naked inline n-link

</div>




# Beta Distribution

A continuous [[Random Variable]] with range $[0,1]$ is of beta distribution if

- Parameters
    - $a,b >0$ - [[Probability Density Function|PDF]]
    - $f(x)=\frac{\Gamma(a+b)}{\Gamma(a) \Gamma(b)} x^{a-1}(1-x)^{b-1}$     - where $\Gamma$ is the [[Gamma Function]]
- [[Expectation|Mean]]
    - $\frac{a}{a+b}$ - [[Variance]]
    - $\frac{ab}{(a+b)^2(a+b+1)}$ - [[Moment Generating Function|MGF]]
    - $\frac{\Gamma(a+b)}{\Gamma(a) \Gamma(b)} \int_{0}^{1} x^{a-1}(1-x)^{b-1} e^{tx} \mathrm{d} x$ 
## Properties

- [[Uniform Distribution]] is a special case of beta distribution with $a=b=1$.
- **Beta-Binomial model**:Given a prior $\operatorname{Beta}(a,b)$, the posterior distribution of $p$ given $n$ Bernoulli trials with $k$ successes is $\operatorname{Beta}(a+k, b+n-k)$.


</div></div>
           | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Beta Distribution

A continuous [[Random Variable]] with range $[0,1]$ is of beta distribution if

- Parameters
    - $a,b >0$ - [[Probability Density Function|PDF]]
    - $f(x)=\frac{\Gamma(a+b)}{\Gamma(a) \Gamma(b)} x^{a-1}(1-x)^{b-1}$     - where $\Gamma$ is the [[Gamma Function]]
- [[Expectation|Mean]]
    - $\frac{a}{a+b}$ - [[Variance]]
    - $\frac{ab}{(a+b)^2(a+b+1)}$ - [[Moment Generating Function|MGF]]
    - $\frac{\Gamma(a+b)}{\Gamma(a) \Gamma(b)} \int_{0}^{1} x^{a-1}(1-x)^{b-1} e^{tx} \mathrm{d} x$ 
## Properties

- [[Uniform Distribution]] is a special case of beta distribution with $a=b=1$.
- **Beta-Binomial model**:Given a prior $\operatorname{Beta}(a,b)$, the posterior distribution of $p$ given $n$ Bernoulli trials with $k$ successes is $\operatorname{Beta}(a+k, b+n-k)$.


</div></div>
           | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Beta Distribution

A continuous [[Random Variable]] with range $[0,1]$ is of beta distribution if

- Parameters
    - $a,b >0$ - [[Probability Density Function|PDF]]
    - $f(x)=\frac{\Gamma(a+b)}{\Gamma(a) \Gamma(b)} x^{a-1}(1-x)^{b-1}$     - where $\Gamma$ is the [[Gamma Function]]
- [[Expectation|Mean]]
    - $\frac{a}{a+b}$ - [[Variance]]
    - $\frac{ab}{(a+b)^2(a+b+1)}$ - [[Moment Generating Function|MGF]]
    - $\frac{\Gamma(a+b)}{\Gamma(a) \Gamma(b)} \int_{0}^{1} x^{a-1}(1-x)^{b-1} e^{tx} \mathrm{d} x$ 
## Properties

- [[Uniform Distribution]] is a special case of beta distribution with $a=b=1$.
- **Beta-Binomial model**:Given a prior $\operatorname{Beta}(a,b)$, the posterior distribution of $p$ given $n$ Bernoulli trials with $k$ successes is $\operatorname{Beta}(a+k, b+n-k)$.


</div></div>
        |                                                        |
| [[Chi-Square Distribution]]           | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline n-link naked

</div>




# Chi-Square Distribution

![pdf|300](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Chi-square_pdf.svg/642px-Chi-square_pdf.svg.png)

If $Z_1,\dots,Z_n$ are IID standard [[Normal Distribution|normal random variables]], then
$
X = \sum^{n}_{i=1} Z_{i}^{2}
$
is said to have a **chi-square** distribution with $n$ degrees of freedom.

By the uniqueness of [[Moment Generating Function|MGF]], chi-square distribution with $n$ degrees of freedom is [[Gamma Distribution]] with parameter $(n/2,1/2)$.

- Notation
    - $\chi _{n}^{2}$ - Parameters
    - $n$ - [[Moment Generating Function|MGF]]
    - $(1-2t)^{-n/2}$ - [[Probability Density Function|PDF]]
    - $\displaystyle f(x) = \frac{e^{-x/2}(x/2)^{n /2 -1}}{2\Gamma(n /2)}, \quad x\ge 0$ - [[Expectation|Mean]]
    - $n$ - [[Variance]]
    - $2n$ 

</div></div>
 | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Chi-Square Distribution

![pdf|300](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Chi-square_pdf.svg/642px-Chi-square_pdf.svg.png)

If $Z_1,\dots,Z_n$ are IID standard [[Normal Distribution|normal random variables]], then
$
X = \sum^{n}_{i=1} Z_{i}^{2}
$
is said to have a **chi-square** distribution with $n$ degrees of freedom.

By the uniqueness of [[Moment Generating Function|MGF]], chi-square distribution with $n$ degrees of freedom is [[Gamma Distribution]] with parameter $(n/2,1/2)$.

- Notation
    - $\chi _{n}^{2}$ - Parameters
    - $n$ - [[Moment Generating Function|MGF]]
    - $(1-2t)^{-n/2}$ - [[Probability Density Function|PDF]]
    - $\displaystyle f(x) = \frac{e^{-x/2}(x/2)^{n /2 -1}}{2\Gamma(n /2)}, \quad x\ge 0$ - [[Expectation|Mean]]
    - $n$ - [[Variance]]
    - $2n$ 

</div></div>
     | /                                                          | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Chi-Square Distribution

![pdf|300](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Chi-square_pdf.svg/642px-Chi-square_pdf.svg.png)

If $Z_1,\dots,Z_n$ are IID standard [[Normal Distribution|normal random variables]], then
$
X = \sum^{n}_{i=1} Z_{i}^{2}
$
is said to have a **chi-square** distribution with $n$ degrees of freedom.

By the uniqueness of [[Moment Generating Function|MGF]], chi-square distribution with $n$ degrees of freedom is [[Gamma Distribution]] with parameter $(n/2,1/2)$.

- Notation
    - $\chi _{n}^{2}$ - Parameters
    - $n$ - [[Moment Generating Function|MGF]]
    - $(1-2t)^{-n/2}$ - [[Probability Density Function|PDF]]
    - $\displaystyle f(x) = \frac{e^{-x/2}(x/2)^{n /2 -1}}{2\Gamma(n /2)}, \quad x\ge 0$ - [[Expectation|Mean]]
    - $n$ - [[Variance]]
    - $2n$ 

</div></div>
     | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# naked inline n-link

</div>




# Chi-Square Distribution

![pdf|300](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Chi-square_pdf.svg/642px-Chi-square_pdf.svg.png)

If $Z_1,\dots,Z_n$ are IID standard [[Normal Distribution|normal random variables]], then
$
X = \sum^{n}_{i=1} Z_{i}^{2}
$
is said to have a **chi-square** distribution with $n$ degrees of freedom.

By the uniqueness of [[Moment Generating Function|MGF]], chi-square distribution with $n$ degrees of freedom is [[Gamma Distribution]] with parameter $(n/2,1/2)$.

- Notation
    - $\chi _{n}^{2}$ - Parameters
    - $n$ - [[Moment Generating Function|MGF]]
    - $(1-2t)^{-n/2}$ - [[Probability Density Function|PDF]]
    - $\displaystyle f(x) = \frac{e^{-x/2}(x/2)^{n /2 -1}}{2\Gamma(n /2)}, \quad x\ge 0$ - [[Expectation|Mean]]
    - $n$ - [[Variance]]
    - $2n$ 

</div></div>
     | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Chi-Square Distribution

![pdf|300](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Chi-square_pdf.svg/642px-Chi-square_pdf.svg.png)

If $Z_1,\dots,Z_n$ are IID standard [[Normal Distribution|normal random variables]], then
$
X = \sum^{n}_{i=1} Z_{i}^{2}
$
is said to have a **chi-square** distribution with $n$ degrees of freedom.

By the uniqueness of [[Moment Generating Function|MGF]], chi-square distribution with $n$ degrees of freedom is [[Gamma Distribution]] with parameter $(n/2,1/2)$.

- Notation
    - $\chi _{n}^{2}$ - Parameters
    - $n$ - [[Moment Generating Function|MGF]]
    - $(1-2t)^{-n/2}$ - [[Probability Density Function|PDF]]
    - $\displaystyle f(x) = \frac{e^{-x/2}(x/2)^{n /2 -1}}{2\Gamma(n /2)}, \quad x\ge 0$ - [[Expectation|Mean]]
    - $n$ - [[Variance]]
    - $2n$ 

</div></div>
     | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Chi-Square Distribution

![pdf|300](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Chi-square_pdf.svg/642px-Chi-square_pdf.svg.png)

If $Z_1,\dots,Z_n$ are IID standard [[Normal Distribution|normal random variables]], then
$
X = \sum^{n}_{i=1} Z_{i}^{2}
$
is said to have a **chi-square** distribution with $n$ degrees of freedom.

By the uniqueness of [[Moment Generating Function|MGF]], chi-square distribution with $n$ degrees of freedom is [[Gamma Distribution]] with parameter $(n/2,1/2)$.

- Notation
    - $\chi _{n}^{2}$ - Parameters
    - $n$ - [[Moment Generating Function|MGF]]
    - $(1-2t)^{-n/2}$ - [[Probability Density Function|PDF]]
    - $\displaystyle f(x) = \frac{e^{-x/2}(x/2)^{n /2 -1}}{2\Gamma(n /2)}, \quad x\ge 0$ - [[Expectation|Mean]]
    - $n$ - [[Variance]]
    - $2n$ 

</div></div>
  |                                                        |
| [[Wishart Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |
| [[t Distribution]]                    | /                                                       | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# t-Distribution

![pdf|300](https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Student_t_pdf.svg/650px-Student_t_pdf.svg.png)

While we can show that the sample [[Variance]] of [[Normal Distribution]] samples is of [[Chi-Square Distribution]], it is convenient to define the distribution for the following [[Random Variable]]
$
T_n = \frac{Z}{\sqrt{ \chi _{n}^{2} /n }},
$
where $Z \sim \mathcal{N}(0,1)$. $T_n$ is said to have a **t-distribution** with $n$ degrees of freedom.

By the [[Law of Large Numbers]], for large $n$, $T_n \approx Z \sim \mathcal{N}(0,1)$ (but always with larger [[Variance]]).

- Parameter
    - $n \in \mathbb{N}$ - [[Expectation|Mean]]
    - 0 - [[Variance]]

- $\frac{n}{n-2}$ - [[Probability Density Function|PDF]]
    - $\displaystyle\frac{\Gamma \left(\frac{n+1}{2} \right)} {\sqrt{n\pi}\,\Gamma \left(\frac{n}{2} \right)} \left(1+\frac{x^2}{n} \right)^{-\frac{n+1}{2}}$ - [[Moment Generating Function|MGF]]
    - *Undefined* 
## Examples

## Normal Distribution with Unknown Variance

Suppose $\{ X_{i}\sim \mathcal{N}(\mu,\sigma^{2}) \}$, then
$
\frac{\overline{X} - \mu}{s / \sqrt{ n }} \sim t _{n-1},
$
where $s$ is the [[Variance#Sample Variance]].

## Difference of Normal Distributions

Let $\{ X_{i}\sim \mathcal{N}(\mu_{1}, \sigma^{2}) \}_{i=1}^{n}$ and $\{X_j \sim \mathcal{N}(\mu_{2},\sigma^{2}) \}_{j=1}^{m}$. Then
$
\frac{(\overline{x}-\overline{y}) - (\mu_{1}-\mu_{2})}{s_{p} \sqrt{ \frac{1}{m}+\frac{1}{n} }} \sim t _{m+n-2},
$
where
$
s_{p} = \sqrt{ \frac{(m-1)s^{2}_{x}+(n-1)s^{2}_{y}}{m+n-2}}.
$


</div></div>
              | /                                                          | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# t-Distribution

![pdf|300](https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Student_t_pdf.svg/650px-Student_t_pdf.svg.png)

While we can show that the sample [[Variance]] of [[Normal Distribution]] samples is of [[Chi-Square Distribution]], it is convenient to define the distribution for the following [[Random Variable]]
$
T_n = \frac{Z}{\sqrt{ \chi _{n}^{2} /n }},
$
where $Z \sim \mathcal{N}(0,1)$. $T_n$ is said to have a **t-distribution** with $n$ degrees of freedom.

By the [[Law of Large Numbers]], for large $n$, $T_n \approx Z \sim \mathcal{N}(0,1)$ (but always with larger [[Variance]]).

- Parameter
    - $n \in \mathbb{N}$ - [[Expectation|Mean]]
    - 0 - [[Variance]]

- $\frac{n}{n-2}$ - [[Probability Density Function|PDF]]
    - $\displaystyle\frac{\Gamma \left(\frac{n+1}{2} \right)} {\sqrt{n\pi}\,\Gamma \left(\frac{n}{2} \right)} \left(1+\frac{x^2}{n} \right)^{-\frac{n+1}{2}}$ - [[Moment Generating Function|MGF]]
    - *Undefined* 
## Examples

## Normal Distribution with Unknown Variance

Suppose $\{ X_{i}\sim \mathcal{N}(\mu,\sigma^{2}) \}$, then
$
\frac{\overline{X} - \mu}{s / \sqrt{ n }} \sim t _{n-1},
$
where $s$ is the [[Variance#Sample Variance]].

## Difference of Normal Distributions

Let $\{ X_{i}\sim \mathcal{N}(\mu_{1}, \sigma^{2}) \}_{i=1}^{n}$ and $\{X_j \sim \mathcal{N}(\mu_{2},\sigma^{2}) \}_{j=1}^{m}$. Then
$
\frac{(\overline{x}-\overline{y}) - (\mu_{1}-\mu_{2})}{s_{p} \sqrt{ \frac{1}{m}+\frac{1}{n} }} \sim t _{m+n-2},
$
where
$
s_{p} = \sqrt{ \frac{(m-1)s^{2}_{x}+(n-1)s^{2}_{y}}{m+n-2}}.
$


</div></div>
              | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# naked inline n-link

</div>




# t-Distribution

![pdf|300](https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Student_t_pdf.svg/650px-Student_t_pdf.svg.png)

While we can show that the sample [[Variance]] of [[Normal Distribution]] samples is of [[Chi-Square Distribution]], it is convenient to define the distribution for the following [[Random Variable]]
$
T_n = \frac{Z}{\sqrt{ \chi _{n}^{2} /n }},
$
where $Z \sim \mathcal{N}(0,1)$. $T_n$ is said to have a **t-distribution** with $n$ degrees of freedom.

By the [[Law of Large Numbers]], for large $n$, $T_n \approx Z \sim \mathcal{N}(0,1)$ (but always with larger [[Variance]]).

- Parameter
    - $n \in \mathbb{N}$ - [[Expectation|Mean]]
    - 0 - [[Variance]]

- $\frac{n}{n-2}$ - [[Probability Density Function|PDF]]
    - $\displaystyle\frac{\Gamma \left(\frac{n+1}{2} \right)} {\sqrt{n\pi}\,\Gamma \left(\frac{n}{2} \right)} \left(1+\frac{x^2}{n} \right)^{-\frac{n+1}{2}}$ - [[Moment Generating Function|MGF]]
    - *Undefined* 
## Examples

## Normal Distribution with Unknown Variance

Suppose $\{ X_{i}\sim \mathcal{N}(\mu,\sigma^{2}) \}$, then
$
\frac{\overline{X} - \mu}{s / \sqrt{ n }} \sim t _{n-1},
$
where $s$ is the [[Variance#Sample Variance]].

## Difference of Normal Distributions

Let $\{ X_{i}\sim \mathcal{N}(\mu_{1}, \sigma^{2}) \}_{i=1}^{n}$ and $\{X_j \sim \mathcal{N}(\mu_{2},\sigma^{2}) \}_{j=1}^{m}$. Then
$
\frac{(\overline{x}-\overline{y}) - (\mu_{1}-\mu_{2})}{s_{p} \sqrt{ \frac{1}{m}+\frac{1}{n} }} \sim t _{m+n-2},
$
where
$
s_{p} = \sqrt{ \frac{(m-1)s^{2}_{x}+(n-1)s^{2}_{y}}{m+n-2}}.
$


</div></div>
              | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# t-Distribution

![pdf|300](https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Student_t_pdf.svg/650px-Student_t_pdf.svg.png)

While we can show that the sample [[Variance]] of [[Normal Distribution]] samples is of [[Chi-Square Distribution]], it is convenient to define the distribution for the following [[Random Variable]]
$
T_n = \frac{Z}{\sqrt{ \chi _{n}^{2} /n }},
$
where $Z \sim \mathcal{N}(0,1)$. $T_n$ is said to have a **t-distribution** with $n$ degrees of freedom.

By the [[Law of Large Numbers]], for large $n$, $T_n \approx Z \sim \mathcal{N}(0,1)$ (but always with larger [[Variance]]).

- Parameter
    - $n \in \mathbb{N}$ - [[Expectation|Mean]]
    - 0 - [[Variance]]

- $\frac{n}{n-2}$ - [[Probability Density Function|PDF]]
    - $\displaystyle\frac{\Gamma \left(\frac{n+1}{2} \right)} {\sqrt{n\pi}\,\Gamma \left(\frac{n}{2} \right)} \left(1+\frac{x^2}{n} \right)^{-\frac{n+1}{2}}$ - [[Moment Generating Function|MGF]]
    - *Undefined* 
## Examples

## Normal Distribution with Unknown Variance

Suppose $\{ X_{i}\sim \mathcal{N}(\mu,\sigma^{2}) \}$, then
$
\frac{\overline{X} - \mu}{s / \sqrt{ n }} \sim t _{n-1},
$
where $s$ is the [[Variance#Sample Variance]].

## Difference of Normal Distributions

Let $\{ X_{i}\sim \mathcal{N}(\mu_{1}, \sigma^{2}) \}_{i=1}^{n}$ and $\{X_j \sim \mathcal{N}(\mu_{2},\sigma^{2}) \}_{j=1}^{m}$. Then
$
\frac{(\overline{x}-\overline{y}) - (\mu_{1}-\mu_{2})}{s_{p} \sqrt{ \frac{1}{m}+\frac{1}{n} }} \sim t _{m+n-2},
$
where
$
s_{p} = \sqrt{ \frac{(m-1)s^{2}_{x}+(n-1)s^{2}_{y}}{m+n-2}}.
$


</div></div>
              | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# t-Distribution

![pdf|300](https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Student_t_pdf.svg/650px-Student_t_pdf.svg.png)

While we can show that the sample [[Variance]] of [[Normal Distribution]] samples is of [[Chi-Square Distribution]], it is convenient to define the distribution for the following [[Random Variable]]
$
T_n = \frac{Z}{\sqrt{ \chi _{n}^{2} /n }},
$
where $Z \sim \mathcal{N}(0,1)$. $T_n$ is said to have a **t-distribution** with $n$ degrees of freedom.

By the [[Law of Large Numbers]], for large $n$, $T_n \approx Z \sim \mathcal{N}(0,1)$ (but always with larger [[Variance]]).

- Parameter
    - $n \in \mathbb{N}$ - [[Expectation|Mean]]
    - 0 - [[Variance]]

- $\frac{n}{n-2}$ - [[Probability Density Function|PDF]]
    - $\displaystyle\frac{\Gamma \left(\frac{n+1}{2} \right)} {\sqrt{n\pi}\,\Gamma \left(\frac{n}{2} \right)} \left(1+\frac{x^2}{n} \right)^{-\frac{n+1}{2}}$ - [[Moment Generating Function|MGF]]
    - *Undefined* 
## Examples

## Normal Distribution with Unknown Variance

Suppose $\{ X_{i}\sim \mathcal{N}(\mu,\sigma^{2}) \}$, then
$
\frac{\overline{X} - \mu}{s / \sqrt{ n }} \sim t _{n-1},
$
where $s$ is the [[Variance#Sample Variance]].

## Difference of Normal Distributions

Let $\{ X_{i}\sim \mathcal{N}(\mu_{1}, \sigma^{2}) \}_{i=1}^{n}$ and $\{X_j \sim \mathcal{N}(\mu_{2},\sigma^{2}) \}_{j=1}^{m}$. Then
$
\frac{(\overline{x}-\overline{y}) - (\mu_{1}-\mu_{2})}{s_{p} \sqrt{ \frac{1}{m}+\frac{1}{n} }} \sim t _{m+n-2},
$
where
$
s_{p} = \sqrt{ \frac{(m-1)s^{2}_{x}+(n-1)s^{2}_{y}}{m+n-2}}.
$


</div></div>
           |                                                        |
| [[F Distribution]]                    | /                                                       | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# F Distribution

![pdf](https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/F-distribution_pdf.svg/650px-F-distribution_pdf.svg.png)

The random variable defined by
$
F_{n,m} = \frac{\chi _{n}^{2}/n}{\chi _{m}^{2}/m}
$
is said to have an **F-distribution** with $n,m$ degrees of freedom.

- Parameters
    - $n,m \in \mathbb{N}$ - [[Expectation|Mean]]
    - $m/(m-2)$ - [[Variance]]
    - $\displaystyle \frac{2m^{2}(m+n -2)}{n(m-2)^{2}(m-4)}$ - [[Moment Generating Function|MGF]]
    - *Undefined* 

</div></div>
              | /                                                          | /                                                          | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# naked inline n-link

</div>




# F Distribution

![pdf](https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/F-distribution_pdf.svg/650px-F-distribution_pdf.svg.png)

The random variable defined by
$
F_{n,m} = \frac{\chi _{n}^{2}/n}{\chi _{m}^{2}/m}
$
is said to have an **F-distribution** with $n,m$ degrees of freedom.

- Parameters
    - $n,m \in \mathbb{N}$ - [[Expectation|Mean]]
    - $m/(m-2)$ - [[Variance]]
    - $\displaystyle \frac{2m^{2}(m+n -2)}{n(m-2)^{2}(m-4)}$ - [[Moment Generating Function|MGF]]
    - *Undefined* 

</div></div>
              | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# F Distribution

![pdf](https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/F-distribution_pdf.svg/650px-F-distribution_pdf.svg.png)

The random variable defined by
$
F_{n,m} = \frac{\chi _{n}^{2}/n}{\chi _{m}^{2}/m}
$
is said to have an **F-distribution** with $n,m$ degrees of freedom.

- Parameters
    - $n,m \in \mathbb{N}$ - [[Expectation|Mean]]
    - $m/(m-2)$ - [[Variance]]
    - $\displaystyle \frac{2m^{2}(m+n -2)}{n(m-2)^{2}(m-4)}$ - [[Moment Generating Function|MGF]]
    - *Undefined* 

</div></div>
              | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# F Distribution

![pdf](https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/F-distribution_pdf.svg/650px-F-distribution_pdf.svg.png)

The random variable defined by
$
F_{n,m} = \frac{\chi _{n}^{2}/n}{\chi _{m}^{2}/m}
$
is said to have an **F-distribution** with $n,m$ degrees of freedom.

- Parameters
    - $n,m \in \mathbb{N}$ - [[Expectation|Mean]]
    - $m/(m-2)$ - [[Variance]]
    - $\displaystyle \frac{2m^{2}(m+n -2)}{n(m-2)^{2}(m-4)}$ - [[Moment Generating Function|MGF]]
    - *Undefined* 

</div></div>
           |                                                        |
| [[Geometric Distribution]]            | /                                                       | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Geometric Distribution

For a [[Bernoulli Trial]], let $X$ be the number of tests when we first meet 1. Then $X$ is said to have a **geometric distribution**.
Another definition lets $X$ be the number of failures before the first success, then the PMF is $pq^{n}$.

- Parameter
    - $p\in [0,1]$ - [[Cumulative Distribution Function|CDF]]
    - $F(n) = 1 - q^{n}$ - [[Probability Mass Function|PMF]]
    - $p(n) = pq^{n-1}$ - [[Expectation|Mean]]
    - $1 /p$ - [[Variance]]
    - $q /p^{2}$ - [[Moment Generating Function|MGF]]
    - $\frac{pe^{t}}{1-qe^{t}}$, $e^{t}< 1 /q$ 
## Memoryless

An geometric random variable is memoryless:
$
P(X \ge n+k | X> n) = \frac{q^{n+k-1}}{q^{n}} = q^{k-1} = P(x \ge k).
$
This gives an alternative method to calculate the expectation of geometric distribution using [[Conditional Probability#Conditional Expectation]].
For the mean, we have
$
\mathbb{E}[X] = \mathbb{E}[X\given X =1 ]P(X=1) + \mathbb{E}[X\given X >1 ]P(X>1) = 1 \cdot p + \left( 1 + \mathbb{E}[X] \right) \cdot q,
$
which implies $\mathbb{E}[X] = (p+q)/p = 1 /p$.
Similarly, for the second moment, we have
$
\mathbb{E}[X^{2}] = 1\cdot p + (\mathbb{E}[(X+1)^{2}])\cdot q,
$
which implies $\mathbb{E}[X^{2}] = (2-p) /p^{2}$.


</div></div>
      | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Geometric Distribution

For a [[Bernoulli Trial]], let $X$ be the number of tests when we first meet 1. Then $X$ is said to have a **geometric distribution**.
Another definition lets $X$ be the number of failures before the first success, then the PMF is $pq^{n}$.

- Parameter
    - $p\in [0,1]$ - [[Cumulative Distribution Function|CDF]]
    - $F(n) = 1 - q^{n}$ - [[Probability Mass Function|PMF]]
    - $p(n) = pq^{n-1}$ - [[Expectation|Mean]]
    - $1 /p$ - [[Variance]]
    - $q /p^{2}$ - [[Moment Generating Function|MGF]]
    - $\frac{pe^{t}}{1-qe^{t}}$, $e^{t}< 1 /q$ 
## Memoryless

An geometric random variable is memoryless:
$
P(X \ge n+k | X> n) = \frac{q^{n+k-1}}{q^{n}} = q^{k-1} = P(x \ge k).
$
This gives an alternative method to calculate the expectation of geometric distribution using [[Conditional Probability#Conditional Expectation]].
For the mean, we have
$
\mathbb{E}[X] = \mathbb{E}[X\given X =1 ]P(X=1) + \mathbb{E}[X\given X >1 ]P(X>1) = 1 \cdot p + \left( 1 + \mathbb{E}[X] \right) \cdot q,
$
which implies $\mathbb{E}[X] = (p+q)/p = 1 /p$.
Similarly, for the second moment, we have
$
\mathbb{E}[X^{2}] = 1\cdot p + (\mathbb{E}[(X+1)^{2}])\cdot q,
$
which implies $\mathbb{E}[X^{2}] = (2-p) /p^{2}$.


</div></div>
      | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Geometric Distribution

For a [[Bernoulli Trial]], let $X$ be the number of tests when we first meet 1. Then $X$ is said to have a **geometric distribution**.
Another definition lets $X$ be the number of failures before the first success, then the PMF is $pq^{n}$.

- Parameter
    - $p\in [0,1]$ - [[Cumulative Distribution Function|CDF]]
    - $F(n) = 1 - q^{n}$ - [[Probability Mass Function|PMF]]
    - $p(n) = pq^{n-1}$ - [[Expectation|Mean]]
    - $1 /p$ - [[Variance]]
    - $q /p^{2}$ - [[Moment Generating Function|MGF]]
    - $\frac{pe^{t}}{1-qe^{t}}$, $e^{t}< 1 /q$ 
## Memoryless

An geometric random variable is memoryless:
$
P(X \ge n+k | X> n) = \frac{q^{n+k-1}}{q^{n}} = q^{k-1} = P(x \ge k).
$
This gives an alternative method to calculate the expectation of geometric distribution using [[Conditional Probability#Conditional Expectation]].
For the mean, we have
$
\mathbb{E}[X] = \mathbb{E}[X\given X =1 ]P(X=1) + \mathbb{E}[X\given X >1 ]P(X>1) = 1 \cdot p + \left( 1 + \mathbb{E}[X] \right) \cdot q,
$
which implies $\mathbb{E}[X] = (p+q)/p = 1 /p$.
Similarly, for the second moment, we have
$
\mathbb{E}[X^{2}] = 1\cdot p + (\mathbb{E}[(X+1)^{2}])\cdot q,
$
which implies $\mathbb{E}[X^{2}] = (2-p) /p^{2}$.


</div></div>
      | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# naked inline n-link

</div>




# Geometric Distribution

For a [[Bernoulli Trial]], let $X$ be the number of tests when we first meet 1. Then $X$ is said to have a **geometric distribution**.
Another definition lets $X$ be the number of failures before the first success, then the PMF is $pq^{n}$.

- Parameter
    - $p\in [0,1]$ - [[Cumulative Distribution Function|CDF]]
    - $F(n) = 1 - q^{n}$ - [[Probability Mass Function|PMF]]
    - $p(n) = pq^{n-1}$ - [[Expectation|Mean]]
    - $1 /p$ - [[Variance]]
    - $q /p^{2}$ - [[Moment Generating Function|MGF]]
    - $\frac{pe^{t}}{1-qe^{t}}$, $e^{t}< 1 /q$ 
## Memoryless

An geometric random variable is memoryless:
$
P(X \ge n+k | X> n) = \frac{q^{n+k-1}}{q^{n}} = q^{k-1} = P(x \ge k).
$
This gives an alternative method to calculate the expectation of geometric distribution using [[Conditional Probability#Conditional Expectation]].
For the mean, we have
$
\mathbb{E}[X] = \mathbb{E}[X\given X =1 ]P(X=1) + \mathbb{E}[X\given X >1 ]P(X>1) = 1 \cdot p + \left( 1 + \mathbb{E}[X] \right) \cdot q,
$
which implies $\mathbb{E}[X] = (p+q)/p = 1 /p$.
Similarly, for the second moment, we have
$
\mathbb{E}[X^{2}] = 1\cdot p + (\mathbb{E}[(X+1)^{2}])\cdot q,
$
which implies $\mathbb{E}[X^{2}] = (2-p) /p^{2}$.


</div></div>
      | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Geometric Distribution

For a [[Bernoulli Trial]], let $X$ be the number of tests when we first meet 1. Then $X$ is said to have a **geometric distribution**.
Another definition lets $X$ be the number of failures before the first success, then the PMF is $pq^{n}$.

- Parameter
    - $p\in [0,1]$ - [[Cumulative Distribution Function|CDF]]
    - $F(n) = 1 - q^{n}$ - [[Probability Mass Function|PMF]]
    - $p(n) = pq^{n-1}$ - [[Expectation|Mean]]
    - $1 /p$ - [[Variance]]
    - $q /p^{2}$ - [[Moment Generating Function|MGF]]
    - $\frac{pe^{t}}{1-qe^{t}}$, $e^{t}< 1 /q$ 
## Memoryless

An geometric random variable is memoryless:
$
P(X \ge n+k | X> n) = \frac{q^{n+k-1}}{q^{n}} = q^{k-1} = P(x \ge k).
$
This gives an alternative method to calculate the expectation of geometric distribution using [[Conditional Probability#Conditional Expectation]].
For the mean, we have
$
\mathbb{E}[X] = \mathbb{E}[X\given X =1 ]P(X=1) + \mathbb{E}[X\given X >1 ]P(X>1) = 1 \cdot p + \left( 1 + \mathbb{E}[X] \right) \cdot q,
$
which implies $\mathbb{E}[X] = (p+q)/p = 1 /p$.
Similarly, for the second moment, we have
$
\mathbb{E}[X^{2}] = 1\cdot p + (\mathbb{E}[(X+1)^{2}])\cdot q,
$
which implies $\mathbb{E}[X^{2}] = (2-p) /p^{2}$.


</div></div>
      | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Geometric Distribution

For a [[Bernoulli Trial]], let $X$ be the number of tests when we first meet 1. Then $X$ is said to have a **geometric distribution**.
Another definition lets $X$ be the number of failures before the first success, then the PMF is $pq^{n}$.

- Parameter
    - $p\in [0,1]$ - [[Cumulative Distribution Function|CDF]]
    - $F(n) = 1 - q^{n}$ - [[Probability Mass Function|PMF]]
    - $p(n) = pq^{n-1}$ - [[Expectation|Mean]]
    - $1 /p$ - [[Variance]]
    - $q /p^{2}$ - [[Moment Generating Function|MGF]]
    - $\frac{pe^{t}}{1-qe^{t}}$, $e^{t}< 1 /q$ 
## Memoryless

An geometric random variable is memoryless:
$
P(X \ge n+k | X> n) = \frac{q^{n+k-1}}{q^{n}} = q^{k-1} = P(x \ge k).
$
This gives an alternative method to calculate the expectation of geometric distribution using [[Conditional Probability#Conditional Expectation]].
For the mean, we have
$
\mathbb{E}[X] = \mathbb{E}[X\given X =1 ]P(X=1) + \mathbb{E}[X\given X >1 ]P(X>1) = 1 \cdot p + \left( 1 + \mathbb{E}[X] \right) \cdot q,
$
which implies $\mathbb{E}[X] = (p+q)/p = 1 /p$.
Similarly, for the second moment, we have
$
\mathbb{E}[X^{2}] = 1\cdot p + (\mathbb{E}[(X+1)^{2}])\cdot q,
$
which implies $\mathbb{E}[X^{2}] = (2-p) /p^{2}$.


</div></div>
   |                                                        |
| [[Hypergeometric Distribution]]       | /                                                       | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Hypergeometric Distribution

Consider a pool of $N$ machines which contains $M$ defect machines. Now $n$ machines are randomly selected, let $X$ be the number of defect machines selected. Then $X$ is said to have a **hypergeometric distribution**.

- Parameters
    - $N\in \mathbb{N}, M,n\in [N]$ - [[Probability Mass Function|PMF]]
    - $\displaystyle p(k) = \frac{{M \choose k}{N-M \choose n-k}}{{N \choose k}}$ - [[Expectation|Mean]]
    - $\frac{nM}{N}$ - [[Variance]]
    - $\displaystyle\frac{nM(N-n)(N-M)}{N^{2}(N-1)}$ 

</div></div>
 | /                                                          | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Hypergeometric Distribution

Consider a pool of $N$ machines which contains $M$ defect machines. Now $n$ machines are randomly selected, let $X$ be the number of defect machines selected. Then $X$ is said to have a **hypergeometric distribution**.

- Parameters
    - $N\in \mathbb{N}, M,n\in [N]$ - [[Probability Mass Function|PMF]]
    - $\displaystyle p(k) = \frac{{M \choose k}{N-M \choose n-k}}{{N \choose k}}$ - [[Expectation|Mean]]
    - $\frac{nM}{N}$ - [[Variance]]
    - $\displaystyle\frac{nM(N-n)(N-M)}{N^{2}(N-1)}$ 

</div></div>
 | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# naked inline n-link

</div>




# Hypergeometric Distribution

Consider a pool of $N$ machines which contains $M$ defect machines. Now $n$ machines are randomly selected, let $X$ be the number of defect machines selected. Then $X$ is said to have a **hypergeometric distribution**.

- Parameters
    - $N\in \mathbb{N}, M,n\in [N]$ - [[Probability Mass Function|PMF]]
    - $\displaystyle p(k) = \frac{{M \choose k}{N-M \choose n-k}}{{N \choose k}}$ - [[Expectation|Mean]]
    - $\frac{nM}{N}$ - [[Variance]]
    - $\displaystyle\frac{nM(N-n)(N-M)}{N^{2}(N-1)}$ 

</div></div>
 | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Hypergeometric Distribution

Consider a pool of $N$ machines which contains $M$ defect machines. Now $n$ machines are randomly selected, let $X$ be the number of defect machines selected. Then $X$ is said to have a **hypergeometric distribution**.

- Parameters
    - $N\in \mathbb{N}, M,n\in [N]$ - [[Probability Mass Function|PMF]]
    - $\displaystyle p(k) = \frac{{M \choose k}{N-M \choose n-k}}{{N \choose k}}$ - [[Expectation|Mean]]
    - $\frac{nM}{N}$ - [[Variance]]
    - $\displaystyle\frac{nM(N-n)(N-M)}{N^{2}(N-1)}$ 

</div></div>
 | /                                                       |                                                        |
| [[Cauchy Distribution]]               | /                                                       | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Cauchy Distribution

- Parameter
    - $a$ - [[Cumulative Distribution Function|CDF]]
    - $\frac{1}{\pi}\left(\arctan \frac{x}{a} +\frac{\pi}{2}  \right)$ - [[Probability Density Function|PDF]]
    - $\frac{1}{\pi}\frac{a}{x^{2} + a ^{2}}$ - [[Expectation|Mean]]
    - Doesn't exist - [[Variance]]
    - Doesn't exist - [[Moment Generating Function|MGF]]
    - Doesn't exist - [[Characteristic Function]]
    - $e^{-a|t|}$

## Characteristic Function

The [[Characteristic Function]] of a Cauchy [[Random Variable]] is
$
\phi(t) = \int _{\R} e^{ixt} \frac{a}{\pi} \frac{1}{x^{2} + a^{2}} \, dx.
$

From [[Residue Theorem]], we know that
$
\phi(t) = 2\pi i \frac{a}{\pi} \frac{e^{ix|t|}}{ \frac{ \mathrm{d} }{ \mathrm{d}x } x^{2} + a^{2}}\Big|_{x = ai} = e^{-a|t|}.
$
Note that we need different semi-circle contour for $t \lessgtr 0$.

## Problem

Consider $P(0,a) \in \R^{2}$. A line passing $P$ has the angle with the y-axis $\theta \sim \mathcal{U}\left( -\frac{\pi}{2}, \frac{\pi}{2} \right)$. Let $X$ be the intersection of the line with x-axis. Then the distribution of $X$ is Cauchy distribution with parameter $a$.

## Reproducibility and Sample Mean

Just like [[Moment Generating Function|MGF]], a [[Characteristic Function|CF]] uniquely determine a distribution.
Let $\{ X _i \}_{i=1}^{n}$ be a set of Cauchy random variables with parameter $\{ a_i \}$. Then we have
$
\mathbb{E}\left[ e^{it\sum_{i=1}^{n}X _i} \right] = \prod_{i=1}^{n}\mathbb{E}[e^{itX _i}] = \prod^{n}_{i=1} e^{-a_i|t|} = e^{-\left( \sum^{n}_{i=1}a_i \right)|t|}.
$
Thus, $\sum^{n}_{i=1}X _i$ is also a Cauchy random variable, with parameter $\sum^{n}_{i=1}a_i$.

The sample mean r.v. of $\{ X _i \}$ is $\overline{X} = \frac{\sum^{n}_{i=1}X _i}{n}$. And we have
$
\mathbb{E}[e^{it \overline{X}}] = \prod_{i=1}^{n}\mathbb{E}[e^{itX _i /n}] = \prod^{n}_{i=1} e^{-a_i|t /n|} = e^{-\left( \sum^{n}_{i=1}a_i \right)/n|t|}.
$
Thus, $\overline{X}$ is also a Cauchy random variable, with parameter $\sum^{n}_{i=1}a_i /n$. Specifically, when $a_i$ are the same, then $\overline{X}         | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Cauchy Distribution

- Parameter
    - $a$ - [[Cumulative Distribution Function|CDF]]
    - $\frac{1}{\pi}\left(\arctan \frac{x}{a} +\frac{\pi}{2}  \right)$ - [[Probability Density Function|PDF]]
    - $\frac{1}{\pi}\frac{a}{x^{2} + a ^{2}}$ - [[Expectation|Mean]]
    - Doesn't exist - [[Variance]]
    - Doesn't exist - [[Moment Generating Function|MGF]]
    - Doesn't exist - [[Characteristic Function]]
    - $e^{-a|t|}$

## Characteristic Function

The [[Characteristic Function]] of a Cauchy [[Random Variable]] is
$
\phi(t) = \int _{\R} e^{ixt} \frac{a}{\pi} \frac{1}{x^{2} + a^{2}} \, dx.
$

From [[Residue Theorem]], we know that
$
\phi(t) = 2\pi i \frac{a}{\pi} \frac{e^{ix|t|}}{ \frac{ \mathrm{d} }{ \mathrm{d}x } x^{2} + a^{2}}\Big|_{x = ai} = e^{-a|t|}.
$
Note that we need different semi-circle contour for $t \lessgtr 0$.

## Problem

Consider $P(0,a) \in \R^{2}$. A line passing $P$ has the angle with the y-axis $\theta \sim \mathcal{U}\left( -\frac{\pi}{2}, \frac{\pi}{2} \right)$. Let $X$ be the intersection of the line with x-axis. Then the distribution of $X$ is Cauchy distribution with parameter $a$.

## Reproducibility and Sample Mean

Just like [[Moment Generating Function|MGF]], a [[Characteristic Function|CF]] uniquely determine a distribution.
Let $\{ X _i \}_{i=1}^{n}$ be a set of Cauchy random variables with parameter $\{ a_i \}$. Then we have
$
\mathbb{E}\left[ e^{it\sum_{i=1}^{n}X _i} \right] = \prod_{i=1}^{n}\mathbb{E}[e^{itX _i}] = \prod^{n}_{i=1} e^{-a_i|t|} = e^{-\left( \sum^{n}_{i=1}a_i \right)|t|}.
$
Thus, $\sum^{n}_{i=1}X _i$ is also a Cauchy random variable, with parameter $\sum^{n}_{i=1}a_i$.

The sample mean r.v. of $\{ X _i \}$ is $\overline{X} = \frac{\sum^{n}_{i=1}X _i}{n}$. And we have
$
\mathbb{E}[e^{it \overline{X}}] = \prod_{i=1}^{n}\mathbb{E}[e^{itX _i /n}] = \prod^{n}_{i=1} e^{-a_i|t /n|} = e^{-\left( \sum^{n}_{i=1}a_i \right)/n|t|}.
$
Thus, $\overline{X}$ is also a Cauchy random variable, with parameter $\sum^{n}_{i=1}a_i /n$. Specifically, when $a_i$ are the same, then $\overline{X}         | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Cauchy Distribution

- Parameter
    - $a$ - [[Cumulative Distribution Function|CDF]]
    - $\frac{1}{\pi}\left(\arctan \frac{x}{a} +\frac{\pi}{2}  \right)$ - [[Probability Density Function|PDF]]
    - $\frac{1}{\pi}\frac{a}{x^{2} + a ^{2}}$ - [[Expectation|Mean]]
    - Doesn't exist - [[Variance]]
    - Doesn't exist - [[Moment Generating Function|MGF]]
    - Doesn't exist - [[Characteristic Function]]
    - $e^{-a|t|}$

## Characteristic Function

The [[Characteristic Function]] of a Cauchy [[Random Variable]] is
$
\phi(t) = \int _{\R} e^{ixt} \frac{a}{\pi} \frac{1}{x^{2} + a^{2}} \, dx.
$

From [[Residue Theorem]], we know that
$
\phi(t) = 2\pi i \frac{a}{\pi} \frac{e^{ix|t|}}{ \frac{ \mathrm{d} }{ \mathrm{d}x } x^{2} + a^{2}}\Big|_{x = ai} = e^{-a|t|}.
$
Note that we need different semi-circle contour for $t \lessgtr 0$.

## Problem

Consider $P(0,a) \in \R^{2}$. A line passing $P$ has the angle with the y-axis $\theta \sim \mathcal{U}\left( -\frac{\pi}{2}, \frac{\pi}{2} \right)$. Let $X$ be the intersection of the line with x-axis. Then the distribution of $X$ is Cauchy distribution with parameter $a$.

## Reproducibility and Sample Mean

Just like [[Moment Generating Function|MGF]], a [[Characteristic Function|CF]] uniquely determine a distribution.
Let $\{ X _i \}_{i=1}^{n}$ be a set of Cauchy random variables with parameter $\{ a_i \}$. Then we have
$
\mathbb{E}\left[ e^{it\sum_{i=1}^{n}X _i} \right] = \prod_{i=1}^{n}\mathbb{E}[e^{itX _i}] = \prod^{n}_{i=1} e^{-a_i|t|} = e^{-\left( \sum^{n}_{i=1}a_i \right)|t|}.
$
Thus, $\sum^{n}_{i=1}X _i$ is also a Cauchy random variable, with parameter $\sum^{n}_{i=1}a_i$.

The sample mean r.v. of $\{ X _i \}$ is $\overline{X} = \frac{\sum^{n}_{i=1}X _i}{n}$. And we have
$
\mathbb{E}[e^{it \overline{X}}] = \prod_{i=1}^{n}\mathbb{E}[e^{itX _i /n}] = \prod^{n}_{i=1} e^{-a_i|t /n|} = e^{-\left( \sum^{n}_{i=1}a_i \right)/n|t|}.
$
Thus, $\overline{X}$ is also a Cauchy random variable, with parameter $\sum^{n}_{i=1}a_i /n$. Specifically, when $a_i$ are the same, then $\overline{X}         | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# naked inline n-link

</div>




# Cauchy Distribution

- Parameter
    - $a$ - [[Cumulative Distribution Function|CDF]]
    - $\frac{1}{\pi}\left(\arctan \frac{x}{a} +\frac{\pi}{2}  \right)$ - [[Probability Density Function|PDF]]
    - $\frac{1}{\pi}\frac{a}{x^{2} + a ^{2}}$ - [[Expectation|Mean]]
    - Doesn't exist - [[Variance]]
    - Doesn't exist - [[Moment Generating Function|MGF]]
    - Doesn't exist - [[Characteristic Function]]
    - $e^{-a|t|}$

## Characteristic Function

The [[Characteristic Function]] of a Cauchy [[Random Variable]] is
$
\phi(t) = \int _{\R} e^{ixt} \frac{a}{\pi} \frac{1}{x^{2} + a^{2}} \, dx.
$

From [[Residue Theorem]], we know that
$
\phi(t) = 2\pi i \frac{a}{\pi} \frac{e^{ix|t|}}{ \frac{ \mathrm{d} }{ \mathrm{d}x } x^{2} + a^{2}}\Big|_{x = ai} = e^{-a|t|}.
$
Note that we need different semi-circle contour for $t \lessgtr 0$.

## Problem

Consider $P(0,a) \in \R^{2}$. A line passing $P$ has the angle with the y-axis $\theta \sim \mathcal{U}\left( -\frac{\pi}{2}, \frac{\pi}{2} \right)$. Let $X$ be the intersection of the line with x-axis. Then the distribution of $X$ is Cauchy distribution with parameter $a$.

## Reproducibility and Sample Mean

Just like [[Moment Generating Function|MGF]], a [[Characteristic Function|CF]] uniquely determine a distribution.
Let $\{ X _i \}_{i=1}^{n}$ be a set of Cauchy random variables with parameter $\{ a_i \}$. Then we have
$
\mathbb{E}\left[ e^{it\sum_{i=1}^{n}X _i} \right] = \prod_{i=1}^{n}\mathbb{E}[e^{itX _i}] = \prod^{n}_{i=1} e^{-a_i|t|} = e^{-\left( \sum^{n}_{i=1}a_i \right)|t|}.
$
Thus, $\sum^{n}_{i=1}X _i$ is also a Cauchy random variable, with parameter $\sum^{n}_{i=1}a_i$.

The sample mean r.v. of $\{ X _i \}$ is $\overline{X} = \frac{\sum^{n}_{i=1}X _i}{n}$. And we have
$
\mathbb{E}[e^{it \overline{X}}] = \prod_{i=1}^{n}\mathbb{E}[e^{itX _i /n}] = \prod^{n}_{i=1} e^{-a_i|t /n|} = e^{-\left( \sum^{n}_{i=1}a_i \right)/n|t|}.
$
Thus, $\overline{X}$ is also a Cauchy random variable, with parameter $\sum^{n}_{i=1}a_i /n$. Specifically, when $a_i$ are the same, then $\overline{X}         | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Cauchy Distribution

- Parameter
    - $a$ - [[Cumulative Distribution Function|CDF]]
    - $\frac{1}{\pi}\left(\arctan \frac{x}{a} +\frac{\pi}{2}  \right)$ - [[Probability Density Function|PDF]]
    - $\frac{1}{\pi}\frac{a}{x^{2} + a ^{2}}$ - [[Expectation|Mean]]
    - Doesn't exist - [[Variance]]
    - Doesn't exist - [[Moment Generating Function|MGF]]
    - Doesn't exist - [[Characteristic Function]]
    - $e^{-a|t|}$

## Characteristic Function

The [[Characteristic Function]] of a Cauchy [[Random Variable]] is
$
\phi(t) = \int _{\R} e^{ixt} \frac{a}{\pi} \frac{1}{x^{2} + a^{2}} \, dx.
$

From [[Residue Theorem]], we know that
$
\phi(t) = 2\pi i \frac{a}{\pi} \frac{e^{ix|t|}}{ \frac{ \mathrm{d} }{ \mathrm{d}x } x^{2} + a^{2}}\Big|_{x = ai} = e^{-a|t|}.
$
Note that we need different semi-circle contour for $t \lessgtr 0$.

## Problem

Consider $P(0,a) \in \R^{2}$. A line passing $P$ has the angle with the y-axis $\theta \sim \mathcal{U}\left( -\frac{\pi}{2}, \frac{\pi}{2} \right)$. Let $X$ be the intersection of the line with x-axis. Then the distribution of $X$ is Cauchy distribution with parameter $a$.

## Reproducibility and Sample Mean

Just like [[Moment Generating Function|MGF]], a [[Characteristic Function|CF]] uniquely determine a distribution.
Let $\{ X _i \}_{i=1}^{n}$ be a set of Cauchy random variables with parameter $\{ a_i \}$. Then we have
$
\mathbb{E}\left[ e^{it\sum_{i=1}^{n}X _i} \right] = \prod_{i=1}^{n}\mathbb{E}[e^{itX _i}] = \prod^{n}_{i=1} e^{-a_i|t|} = e^{-\left( \sum^{n}_{i=1}a_i \right)|t|}.
$
Thus, $\sum^{n}_{i=1}X _i$ is also a Cauchy random variable, with parameter $\sum^{n}_{i=1}a_i$.

The sample mean r.v. of $\{ X _i \}$ is $\overline{X} = \frac{\sum^{n}_{i=1}X _i}{n}$. And we have
$
\mathbb{E}[e^{it \overline{X}}] = \prod_{i=1}^{n}\mathbb{E}[e^{itX _i /n}] = \prod^{n}_{i=1} e^{-a_i|t /n|} = e^{-\left( \sum^{n}_{i=1}a_i \right)/n|t|}.
$
Thus, $\overline{X}$ is also a Cauchy random variable, with parameter $\sum^{n}_{i=1}a_i /n$. Specifically, when $a_i$ are the same, then $\overline{X}         | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Cauchy Distribution

- Parameter
    - $a$ - [[Cumulative Distribution Function|CDF]]
    - $\frac{1}{\pi}\left(\arctan \frac{x}{a} +\frac{\pi}{2}  \right)$ - [[Probability Density Function|PDF]]
    - $\frac{1}{\pi}\frac{a}{x^{2} + a ^{2}}$ - [[Expectation|Mean]]
    - Doesn't exist - [[Variance]]
    - Doesn't exist - [[Moment Generating Function|MGF]]
    - Doesn't exist - [[Characteristic Function]]
    - $e^{-a|t|}$

## Characteristic Function

The [[Characteristic Function]] of a Cauchy [[Random Variable]] is
$
\phi(t) = \int _{\R} e^{ixt} \frac{a}{\pi} \frac{1}{x^{2} + a^{2}} \, dx.
$

From [[Residue Theorem]], we know that
$
\phi(t) = 2\pi i \frac{a}{\pi} \frac{e^{ix|t|}}{ \frac{ \mathrm{d} }{ \mathrm{d}x } x^{2} + a^{2}}\Big|_{x = ai} = e^{-a|t|}.
$
Note that we need different semi-circle contour for $t \lessgtr 0$.

## Problem

Consider $P(0,a) \in \R^{2}$. A line passing $P$ has the angle with the y-axis $\theta \sim \mathcal{U}\left( -\frac{\pi}{2}, \frac{\pi}{2} \right)$. Let $X$ be the intersection of the line with x-axis. Then the distribution of $X$ is Cauchy distribution with parameter $a$.

## Reproducibility and Sample Mean

Just like [[Moment Generating Function|MGF]], a [[Characteristic Function|CF]] uniquely determine a distribution.
Let $\{ X _i \}_{i=1}^{n}$ be a set of Cauchy random variables with parameter $\{ a_i \}$. Then we have
$
\mathbb{E}\left[ e^{it\sum_{i=1}^{n}X _i} \right] = \prod_{i=1}^{n}\mathbb{E}[e^{itX _i}] = \prod^{n}_{i=1} e^{-a_i|t|} = e^{-\left( \sum^{n}_{i=1}a_i \right)|t|}.
$
Thus, $\sum^{n}_{i=1}X _i$ is also a Cauchy random variable, with parameter $\sum^{n}_{i=1}a_i$.

The sample mean r.v. of $\{ X _i \}$ is $\overline{X} = \frac{\sum^{n}_{i=1}X _i}{n}$. And we have
$
\mathbb{E}[e^{it \overline{X}}] = \prod_{i=1}^{n}\mathbb{E}[e^{itX _i /n}] = \prod^{n}_{i=1} e^{-a_i|t /n|} = e^{-\left( \sum^{n}_{i=1}a_i \right)/n|t|}.
$
Thus, $\overline{X}$ is also a Cauchy random variable, with parameter $\sum^{n}_{i=1}a_i /n$. Specifically, when $a_i$ are the same, then $\overline{X}      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Power Law Distribution

A [[Random Variable]] is of power law distribution if its range is $\mathbb{N}$ (discrete) or $[c,\infty)$ (continuous) and

- Parameters
    - Discrete: $\alpha\in\R_{++}$     - Continuous: $\alpha, c\in\R_{++}$, $\beta=c^{\alpha}$ ^para-cont
- [[Cumulative Distribution Function|CDF]]
    - Discrete: $P(X\ge k) = 1 /k^{\alpha}$
        - $F(k)=1-1 /(k+1)^{\alpha }$     - Continuous: $P(X > x) = \beta /x^{\alpha}$ for $x\ge c>0$
        - $F(x) = 1 - c^{\alpha} /x^{\alpha}$ for $x\ge c$ ^cdf-cont
- [[Probability Mass Function|PMF]]
    - $p(k) = 1 /k^{\alpha} - 1 /(k+1)^{\alpha}$ - [[Probability Density Function|PDF]]
    - $f(x) = \alpha c^{\alpha} /x^{\alpha+1}$ ^pdf-cont
- [[Expectation|Mean]]
    - Discrete: $\sum_{k=1}^{\infty}1/k^{\alpha}$     - Continuous: $\frac{\alpha}{\alpha-1}$ ^mean-cont
- [[Variance]]
    - Discrete: $\sum_{k=1}^{\infty} 2k^{1-\alpha} - k^{-\alpha} - \left( \sum_{k=1}^{\infty}k^{-\alpha} \right)^{2}$     - Continuous: $\frac{\alpha}{(\alpha-1)^{2}(\alpha-2)}$ ^var-cont
- [[Moment Generating Function|MGF]]
    - Discrete: $1 + (e^{t}-1) \sum_{k=0}^{\infty}e^{tk}(k+1)^{-\alpha}$ 
Note that when $α$ is small, the "tail" $P(X ≥ k)$ of the distribution decays slowly (slower than an exponential) as $k$ increases, and in some sense such a distribution has "heavy tails".


</div></div>
      | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Power Law Distribution

A [[Random Variable]] is of power law distribution if its range is $\mathbb{N}$ (discrete) or $[c,\infty)$ (continuous) and

- Parameters
    - Discrete: $\alpha\in\R_{++}$     - Continuous: $\alpha, c\in\R_{++}$, $\beta=c^{\alpha}$ ^para-cont
- [[Cumulative Distribution Function|CDF]]
    - Discrete: $P(X\ge k) = 1 /k^{\alpha}$
        - $F(k)=1-1 /(k+1)^{\alpha }$     - Continuous: $P(X > x) = \beta /x^{\alpha}$ for $x\ge c>0$
        - $F(x) = 1 - c^{\alpha} /x^{\alpha}$ for $x\ge c$ ^cdf-cont
- [[Probability Mass Function|PMF]]
    - $p(k) = 1 /k^{\alpha} - 1 /(k+1)^{\alpha}$ - [[Probability Density Function|PDF]]
    - $f(x) = \alpha c^{\alpha} /x^{\alpha+1}$ ^pdf-cont
- [[Expectation|Mean]]
    - Discrete: $\sum_{k=1}^{\infty}1/k^{\alpha}$     - Continuous: $\frac{\alpha}{\alpha-1}$ ^mean-cont
- [[Variance]]
    - Discrete: $\sum_{k=1}^{\infty} 2k^{1-\alpha} - k^{-\alpha} - \left( \sum_{k=1}^{\infty}k^{-\alpha} \right)^{2}$     - Continuous: $\frac{\alpha}{(\alpha-1)^{2}(\alpha-2)}$ ^var-cont
- [[Moment Generating Function|MGF]]
    - Discrete: $1 + (e^{t}-1) \sum_{k=0}^{\infty}e^{tk}(k+1)^{-\alpha}$ 
Note that when $α$ is small, the "tail" $P(X ≥ k)$ of the distribution decays slowly (slower than an exponential) as $k$ increases, and in some sense such a distribution has "heavy tails".


</div></div>
      | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Power Law Distribution

A [[Random Variable]] is of power law distribution if its range is $\mathbb{N}$ (discrete) or $[c,\infty)$ (continuous) and

- Parameters
    - Discrete: $\alpha\in\R_{++}$     - Continuous: $\alpha, c\in\R_{++}$, $\beta=c^{\alpha}$ ^para-cont
- [[Cumulative Distribution Function|CDF]]
    - Discrete: $P(X\ge k) = 1 /k^{\alpha}$
        - $F(k)=1-1 /(k+1)^{\alpha }$     - Continuous: $P(X > x) = \beta /x^{\alpha}$ for $x\ge c>0$
        - $F(x) = 1 - c^{\alpha} /x^{\alpha}$ for $x\ge c$ ^cdf-cont
- [[Probability Mass Function|PMF]]
    - $p(k) = 1 /k^{\alpha} - 1 /(k+1)^{\alpha}$ - [[Probability Density Function|PDF]]
    - $f(x) = \alpha c^{\alpha} /x^{\alpha+1}$ ^pdf-cont
- [[Expectation|Mean]]
    - Discrete: $\sum_{k=1}^{\infty}1/k^{\alpha}$     - Continuous: $\frac{\alpha}{\alpha-1}$ ^mean-cont
- [[Variance]]
    - Discrete: $\sum_{k=1}^{\infty} 2k^{1-\alpha} - k^{-\alpha} - \left( \sum_{k=1}^{\infty}k^{-\alpha} \right)^{2}$     - Continuous: $\frac{\alpha}{(\alpha-1)^{2}(\alpha-2)}$ ^var-cont
- [[Moment Generating Function|MGF]]
    - Discrete: $1 + (e^{t}-1) \sum_{k=0}^{\infty}e^{tk}(k+1)^{-\alpha}$ 
Note that when $α$ is small, the "tail" $P(X ≥ k)$ of the distribution decays slowly (slower than an exponential) as $k$ increases, and in some sense such a distribution has "heavy tails".


</div></div>
      | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# naked inline n-link

</div>




# Power Law Distribution

A [[Random Variable]] is of power law distribution if its range is $\mathbb{N}$ (discrete) or $[c,\infty)$ (continuous) and

- Parameters
    - Discrete: $\alpha\in\R_{++}$     - Continuous: $\alpha, c\in\R_{++}$, $\beta=c^{\alpha}$ ^para-cont
- [[Cumulative Distribution Function|CDF]]
    - Discrete: $P(X\ge k) = 1 /k^{\alpha}$
        - $F(k)=1-1 /(k+1)^{\alpha }$     - Continuous: $P(X > x) = \beta /x^{\alpha}$ for $x\ge c>0$
        - $F(x) = 1 - c^{\alpha} /x^{\alpha}$ for $x\ge c$ ^cdf-cont
- [[Probability Mass Function|PMF]]
    - $p(k) = 1 /k^{\alpha} - 1 /(k+1)^{\alpha}$ - [[Probability Density Function|PDF]]
    - $f(x) = \alpha c^{\alpha} /x^{\alpha+1}$ ^pdf-cont
- [[Expectation|Mean]]
    - Discrete: $\sum_{k=1}^{\infty}1/k^{\alpha}$     - Continuous: $\frac{\alpha}{\alpha-1}$ ^mean-cont
- [[Variance]]
    - Discrete: $\sum_{k=1}^{\infty} 2k^{1-\alpha} - k^{-\alpha} - \left( \sum_{k=1}^{\infty}k^{-\alpha} \right)^{2}$     - Continuous: $\frac{\alpha}{(\alpha-1)^{2}(\alpha-2)}$ ^var-cont
- [[Moment Generating Function|MGF]]
    - Discrete: $1 + (e^{t}-1) \sum_{k=0}^{\infty}e^{tk}(k+1)^{-\alpha}$ 
Note that when $α$ is small, the "tail" $P(X ≥ k)$ of the distribution decays slowly (slower than an exponential) as $k$ increases, and in some sense such a distribution has "heavy tails".


</div></div>
      | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Power Law Distribution

A [[Random Variable]] is of power law distribution if its range is $\mathbb{N}$ (discrete) or $[c,\infty)$ (continuous) and

- Parameters
    - Discrete: $\alpha\in\R_{++}$     - Continuous: $\alpha, c\in\R_{++}$, $\beta=c^{\alpha}$ ^para-cont
- [[Cumulative Distribution Function|CDF]]
    - Discrete: $P(X\ge k) = 1 /k^{\alpha}$
        - $F(k)=1-1 /(k+1)^{\alpha }$     - Continuous: $P(X > x) = \beta /x^{\alpha}$ for $x\ge c>0$
        - $F(x) = 1 - c^{\alpha} /x^{\alpha}$ for $x\ge c$ ^cdf-cont
- [[Probability Mass Function|PMF]]
    - $p(k) = 1 /k^{\alpha} - 1 /(k+1)^{\alpha}$ - [[Probability Density Function|PDF]]
    - $f(x) = \alpha c^{\alpha} /x^{\alpha+1}$ ^pdf-cont
- [[Expectation|Mean]]
    - Discrete: $\sum_{k=1}^{\infty}1/k^{\alpha}$     - Continuous: $\frac{\alpha}{\alpha-1}$ ^mean-cont
- [[Variance]]
    - Discrete: $\sum_{k=1}^{\infty} 2k^{1-\alpha} - k^{-\alpha} - \left( \sum_{k=1}^{\infty}k^{-\alpha} \right)^{2}$     - Continuous: $\frac{\alpha}{(\alpha-1)^{2}(\alpha-2)}$ ^var-cont
- [[Moment Generating Function|MGF]]
    - Discrete: $1 + (e^{t}-1) \sum_{k=0}^{\infty}e^{tk}(k+1)^{-\alpha}$ 
Note that when $α$ is small, the "tail" $P(X ≥ k)$ of the distribution decays slowly (slower than an exponential) as $k$ increases, and in some sense such a distribution has "heavy tails".


</div></div>
      | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Power Law Distribution

A [[Random Variable]] is of power law distribution if its range is $\mathbb{N}$ (discrete) or $[c,\infty)$ (continuous) and

- Parameters
    - Discrete: $\alpha\in\R_{++}$     - Continuous: $\alpha, c\in\R_{++}$, $\beta=c^{\alpha}$ ^para-cont
- [[Cumulative Distribution Function|CDF]]
    - Discrete: $P(X\ge k) = 1 /k^{\alpha}$
        - $F(k)=1-1 /(k+1)^{\alpha }$     - Continuous: $P(X > x) = \beta /x^{\alpha}$ for $x\ge c>0$
        - $F(x) = 1 - c^{\alpha} /x^{\alpha}$ for $x\ge c$ ^cdf-cont
- [[Probability Mass Function|PMF]]
    - $p(k) = 1 /k^{\alpha} - 1 /(k+1)^{\alpha}$ - [[Probability Density Function|PDF]]
    - $f(x) = \alpha c^{\alpha} /x^{\alpha+1}$ ^pdf-cont
- [[Expectation|Mean]]
    - Discrete: $\sum_{k=1}^{\infty}1/k^{\alpha}$     - Continuous: $\frac{\alpha}{\alpha-1}$ ^mean-cont
- [[Variance]]
    - Discrete: $\sum_{k=1}^{\infty} 2k^{1-\alpha} - k^{-\alpha} - \left( \sum_{k=1}^{\infty}k^{-\alpha} \right)^{2}$     - Continuous: $\frac{\alpha}{(\alpha-1)^{2}(\alpha-2)}$ ^var-cont
- [[Moment Generating Function|MGF]]
    - Discrete: $1 + (e^{t}-1) \sum_{k=0}^{\infty}e^{tk}(k+1)^{-\alpha}$ 
Note that when $α$ is small, the "tail" $P(X ≥ k)$ of the distribution decays slowly (slower than an exponential) as $k$ increases, and in some sense such a distribution has "heavy tails".


</div></div>
   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Power Law Distribution

A [[Random Variable]] is of power law distribution if its range is $\mathbb{N}$ (discrete) or $[c,\infty)$ (continuous) and

- Parameters
    - Discrete: $\alpha\in\R_{++}$     - Continuous: $\alpha, c\in\R_{++}$, $\beta=c^{\alpha}$ ^para-cont
- [[Cumulative Distribution Function|CDF]]
    - Discrete: $P(X\ge k) = 1 /k^{\alpha}$
        - $F(k)=1-1 /(k+1)^{\alpha }$     - Continuous: $P(X > x) = \beta /x^{\alpha}$ for $x\ge c>0$
        - $F(x) = 1 - c^{\alpha} /x^{\alpha}$ for $x\ge c$ ^cdf-cont
- [[Probability Mass Function|PMF]]
    - $p(k) = 1 /k^{\alpha} - 1 /(k+1)^{\alpha}$ - [[Probability Density Function|PDF]]
    - $f(x) = \alpha c^{\alpha} /x^{\alpha+1}$ ^pdf-cont
- [[Expectation|Mean]]
    - Discrete: $\sum_{k=1}^{\infty}1/k^{\alpha}$     - Continuous: $\frac{\alpha}{\alpha-1}$ ^mean-cont
- [[Variance]]
    - Discrete: $\sum_{k=1}^{\infty} 2k^{1-\alpha} - k^{-\alpha} - \left( \sum_{k=1}^{\infty}k^{-\alpha} \right)^{2}$     - Continuous: $\frac{\alpha}{(\alpha-1)^{2}(\alpha-2)}$ ^var-cont
- [[Moment Generating Function|MGF]]
    - Discrete: $1 + (e^{t}-1) \sum_{k=0}^{\infty}e^{tk}(k+1)^{-\alpha}$ 
Note that when $α$ is small, the "tail" $P(X ≥ k)$ of the distribution decays slowly (slower than an exponential) as $k$ increases, and in some sense such a distribution has "heavy tails".


</div></div>
 | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Power Law Distribution

A [[Random Variable]] is of power law distribution if its range is $\mathbb{N}$ (discrete) or $[c,\infty)$ (continuous) and

- Parameters
    - Discrete: $\alpha\in\R_{++}$     - Continuous: $\alpha, c\in\R_{++}$, $\beta=c^{\alpha}$ ^para-cont
- [[Cumulative Distribution Function|CDF]]
    - Discrete: $P(X\ge k) = 1 /k^{\alpha}$
        - $F(k)=1-1 /(k+1)^{\alpha }$     - Continuous: $P(X > x) = \beta /x^{\alpha}$ for $x\ge c>0$
        - $F(x) = 1 - c^{\alpha} /x^{\alpha}$ for $x\ge c$ ^cdf-cont
- [[Probability Mass Function|PMF]]
    - $p(k) = 1 /k^{\alpha} - 1 /(k+1)^{\alpha}$ - [[Probability Density Function|PDF]]
    - $f(x) = \alpha c^{\alpha} /x^{\alpha+1}$ ^pdf-cont
- [[Expectation|Mean]]
    - Discrete: $\sum_{k=1}^{\infty}1/k^{\alpha}$     - Continuous: $\frac{\alpha}{\alpha-1}$ ^mean-cont
- [[Variance]]
    - Discrete: $\sum_{k=1}^{\infty} 2k^{1-\alpha} - k^{-\alpha} - \left( \sum_{k=1}^{\infty}k^{-\alpha} \right)^{2}$     - Continuous: $\frac{\alpha}{(\alpha-1)^{2}(\alpha-2)}$ ^var-cont
- [[Moment Generating Function|MGF]]
    - Discrete: $1 + (e^{t}-1) \sum_{k=0}^{\infty}e^{tk}(k+1)^{-\alpha}$ 
Note that when $α$ is small, the "tail" $P(X ≥ k)$ of the distribution decays slowly (slower than an exponential) as $k$ increases, and in some sense such a distribution has "heavy tails".


</div></div>
 | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Power Law Distribution

A [[Random Variable]] is of power law distribution if its range is $\mathbb{N}$ (discrete) or $[c,\infty)$ (continuous) and

- Parameters
    - Discrete: $\alpha\in\R_{++}$     - Continuous: $\alpha, c\in\R_{++}$, $\beta=c^{\alpha}$ ^para-cont
- [[Cumulative Distribution Function|CDF]]
    - Discrete: $P(X\ge k) = 1 /k^{\alpha}$
        - $F(k)=1-1 /(k+1)^{\alpha }$     - Continuous: $P(X > x) = \beta /x^{\alpha}$ for $x\ge c>0$
        - $F(x) = 1 - c^{\alpha} /x^{\alpha}$ for $x\ge c$ ^cdf-cont
- [[Probability Mass Function|PMF]]
    - $p(k) = 1 /k^{\alpha} - 1 /(k+1)^{\alpha}$ - [[Probability Density Function|PDF]]
    - $f(x) = \alpha c^{\alpha} /x^{\alpha+1}$ ^pdf-cont
- [[Expectation|Mean]]
    - Discrete: $\sum_{k=1}^{\infty}1/k^{\alpha}$     - Continuous: $\frac{\alpha}{\alpha-1}$ ^mean-cont
- [[Variance]]
    - Discrete: $\sum_{k=1}^{\infty} 2k^{1-\alpha} - k^{-\alpha} - \left( \sum_{k=1}^{\infty}k^{-\alpha} \right)^{2}$     - Continuous: $\frac{\alpha}{(\alpha-1)^{2}(\alpha-2)}$ ^var-cont
- [[Moment Generating Function|MGF]]
    - Discrete: $1 + (e^{t}-1) \sum_{k=0}^{\infty}e^{tk}(k+1)^{-\alpha}$ 
Note that when $α$ is small, the "tail" $P(X ≥ k)$ of the distribution decays slowly (slower than an exponential) as $k$ increases, and in some sense such a distribution has "heavy tails".


</div></div>
 | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# naked inline n-link

</div>




# Power Law Distribution

A [[Random Variable]] is of power law distribution if its range is $\mathbb{N}$ (discrete) or $[c,\infty)$ (continuous) and

- Parameters
    - Discrete: $\alpha\in\R_{++}$     - Continuous: $\alpha, c\in\R_{++}$, $\beta=c^{\alpha}$ ^para-cont
- [[Cumulative Distribution Function|CDF]]
    - Discrete: $P(X\ge k) = 1 /k^{\alpha}$
        - $F(k)=1-1 /(k+1)^{\alpha }$     - Continuous: $P(X > x) = \beta /x^{\alpha}$ for $x\ge c>0$
        - $F(x) = 1 - c^{\alpha} /x^{\alpha}$ for $x\ge c$ ^cdf-cont
- [[Probability Mass Function|PMF]]
    - $p(k) = 1 /k^{\alpha} - 1 /(k+1)^{\alpha}$ - [[Probability Density Function|PDF]]
    - $f(x) = \alpha c^{\alpha} /x^{\alpha+1}$ ^pdf-cont
- [[Expectation|Mean]]
    - Discrete: $\sum_{k=1}^{\infty}1/k^{\alpha}$     - Continuous: $\frac{\alpha}{\alpha-1}$ ^mean-cont
- [[Variance]]
    - Discrete: $\sum_{k=1}^{\infty} 2k^{1-\alpha} - k^{-\alpha} - \left( \sum_{k=1}^{\infty}k^{-\alpha} \right)^{2}$     - Continuous: $\frac{\alpha}{(\alpha-1)^{2}(\alpha-2)}$ ^var-cont
- [[Moment Generating Function|MGF]]
    - Discrete: $1 + (e^{t}-1) \sum_{k=0}^{\infty}e^{tk}(k+1)^{-\alpha}$ 
Note that when $α$ is small, the "tail" $P(X ≥ k)$ of the distribution decays slowly (slower than an exponential) as $k$ increases, and in some sense such a distribution has "heavy tails".


</div></div>
 | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Power Law Distribution

A [[Random Variable]] is of power law distribution if its range is $\mathbb{N}$ (discrete) or $[c,\infty)$ (continuous) and

- Parameters
    - Discrete: $\alpha\in\R_{++}$     - Continuous: $\alpha, c\in\R_{++}$, $\beta=c^{\alpha}$ ^para-cont
- [[Cumulative Distribution Function|CDF]]
    - Discrete: $P(X\ge k) = 1 /k^{\alpha}$
        - $F(k)=1-1 /(k+1)^{\alpha }$     - Continuous: $P(X > x) = \beta /x^{\alpha}$ for $x\ge c>0$
        - $F(x) = 1 - c^{\alpha} /x^{\alpha}$ for $x\ge c$ ^cdf-cont
- [[Probability Mass Function|PMF]]
    - $p(k) = 1 /k^{\alpha} - 1 /(k+1)^{\alpha}$ - [[Probability Density Function|PDF]]
    - $f(x) = \alpha c^{\alpha} /x^{\alpha+1}$ ^pdf-cont
- [[Expectation|Mean]]
    - Discrete: $\sum_{k=1}^{\infty}1/k^{\alpha}$     - Continuous: $\frac{\alpha}{\alpha-1}$ ^mean-cont
- [[Variance]]
    - Discrete: $\sum_{k=1}^{\infty} 2k^{1-\alpha} - k^{-\alpha} - \left( \sum_{k=1}^{\infty}k^{-\alpha} \right)^{2}$     - Continuous: $\frac{\alpha}{(\alpha-1)^{2}(\alpha-2)}$ ^var-cont
- [[Moment Generating Function|MGF]]
    - Discrete: $1 + (e^{t}-1) \sum_{k=0}^{\infty}e^{tk}(k+1)^{-\alpha}$ 
Note that when $α$ is small, the "tail" $P(X ≥ k)$ of the distribution decays slowly (slower than an exponential) as $k$ increases, and in some sense such a distribution has "heavy tails".


</div></div>
 | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Dirac Distribution

A Dirac (or degenerate) distribution on a [[Probability Space]] with support only on a lower-dimensional manifold, which could be a point.
Usually, we consider $\Omega\subset\mathbb{R}$ and the support is a point.

- Notation
    - $\delta_{x_0}$ - Parameter
    - $x_0\in\mathbb{R}$ - [[Probability Mass Function|PMF]]
    - $p(x)=\delta(x-x_0)$         - $\delta$ is the Dirac delta function, which is 0-valued everywhere except 0, yet integrates to 1.
        - By defining $p(x)$ to be $\delta$ shifted by $-x_0$ we obtain an infinitely narrow and infinitely high peak of probability mass where $x=x_0$.
- [[Cumulative Distribution Function|CDF]]
    - $F(x) = \mathbb{1}\left\{ x\ge x_0 \right\}$ - [[Expectation|Mean]]
    - $x_0$ - [[Variance]]
    - $0$ - [[Moment Generating Function|MGF]]
    - $e^{x_0t}$ 

</div></div>
      | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Dirac Distribution

A Dirac (or degenerate) distribution on a [[Probability Space]] with support only on a lower-dimensional manifold, which could be a point.
Usually, we consider $\Omega\subset\mathbb{R}$ and the support is a point.

- Notation
    - $\delta_{x_0}$ - Parameter
    - $x_0\in\mathbb{R}$ - [[Probability Mass Function|PMF]]
    - $p(x)=\delta(x-x_0)$         - $\delta$ is the Dirac delta function, which is 0-valued everywhere except 0, yet integrates to 1.
        - By defining $p(x)$ to be $\delta$ shifted by $-x_0$ we obtain an infinitely narrow and infinitely high peak of probability mass where $x=x_0$.
- [[Cumulative Distribution Function|CDF]]
    - $F(x) = \mathbb{1}\left\{ x\ge x_0 \right\}$ - [[Expectation|Mean]]
    - $x_0$ - [[Variance]]
    - $0$ - [[Moment Generating Function|MGF]]
    - $e^{x_0t}$ 

</div></div>
          | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline n-link naked

</div>




# Dirac Distribution

A Dirac (or degenerate) distribution on a [[Probability Space]] with support only on a lower-dimensional manifold, which could be a point.
Usually, we consider $\Omega\subset\mathbb{R}$ and the support is a point.

- Notation
    - $\delta_{x_0}$ - Parameter
    - $x_0\in\mathbb{R}$ - [[Probability Mass Function|PMF]]
    - $p(x)=\delta(x-x_0)$         - $\delta$ is the Dirac delta function, which is 0-valued everywhere except 0, yet integrates to 1.
        - By defining $p(x)$ to be $\delta$ shifted by $-x_0$ we obtain an infinitely narrow and infinitely high peak of probability mass where $x=x_0$.
- [[Cumulative Distribution Function|CDF]]
    - $F(x) = \mathbb{1}\left\{ x\ge x_0 \right\}$ - [[Expectation|Mean]]
    - $x_0$ - [[Variance]]
    - $0$ - [[Moment Generating Function|MGF]]
    - $e^{x_0t}$ 

</div></div>
          | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link n-l2

</div>




# Dirac Distribution

A Dirac (or degenerate) distribution on a [[Probability Space]] with support only on a lower-dimensional manifold, which could be a point.
Usually, we consider $\Omega\subset\mathbb{R}$ and the support is a point.

- Notation
    - $\delta_{x_0}$ - Parameter
    - $x_0\in\mathbb{R}$ - [[Probability Mass Function|PMF]]
    - $p(x)=\delta(x-x_0)$         - $\delta$ is the Dirac delta function, which is 0-valued everywhere except 0, yet integrates to 1.
        - By defining $p(x)$ to be $\delta$ shifted by $-x_0$ we obtain an infinitely narrow and infinitely high peak of probability mass where $x=x_0$.
- [[Cumulative Distribution Function|CDF]]
    - $F(x) = \mathbb{1}\left\{ x\ge x_0 \right\}$ - [[Expectation|Mean]]
    - $x_0$ - [[Variance]]
    - $0$ - [[Moment Generating Function|MGF]]
    - $e^{x_0t}$ 

</div></div>
    | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# naked inline n-link

</div>




# Dirac Distribution

A Dirac (or degenerate) distribution on a [[Probability Space]] with support only on a lower-dimensional manifold, which could be a point.
Usually, we consider $\Omega\subset\mathbb{R}$ and the support is a point.

- Notation
    - $\delta_{x_0}$ - Parameter
    - $x_0\in\mathbb{R}$ - [[Probability Mass Function|PMF]]
    - $p(x)=\delta(x-x_0)$         - $\delta$ is the Dirac delta function, which is 0-valued everywhere except 0, yet integrates to 1.
        - By defining $p(x)$ to be $\delta$ shifted by $-x_0$ we obtain an infinitely narrow and infinitely high peak of probability mass where $x=x_0$.
- [[Cumulative Distribution Function|CDF]]
    - $F(x) = \mathbb{1}\left\{ x\ge x_0 \right\}$ - [[Expectation|Mean]]
    - $x_0$ - [[Variance]]
    - $0$ - [[Moment Generating Function|MGF]]
    - $e^{x_0t}$ 

</div></div>
          | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Dirac Distribution

A Dirac (or degenerate) distribution on a [[Probability Space]] with support only on a lower-dimensional manifold, which could be a point.
Usually, we consider $\Omega\subset\mathbb{R}$ and the support is a point.

- Notation
    - $\delta_{x_0}$ - Parameter
    - $x_0\in\mathbb{R}$ - [[Probability Mass Function|PMF]]
    - $p(x)=\delta(x-x_0)$         - $\delta$ is the Dirac delta function, which is 0-valued everywhere except 0, yet integrates to 1.
        - By defining $p(x)$ to be $\delta$ shifted by $-x_0$ we obtain an infinitely narrow and infinitely high peak of probability mass where $x=x_0$.
- [[Cumulative Distribution Function|CDF]]
    - $F(x) = \mathbb{1}\left\{ x\ge x_0 \right\}$ - [[Expectation|Mean]]
    - $x_0$ - [[Variance]]
    - $0$ - [[Moment Generating Function|MGF]]
    - $e^{x_0t}$ 

</div></div>
          | 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# inline naked n-link

</div>




# Dirac Distribution

A Dirac (or degenerate) distribution on a [[Probability Space]] with support only on a lower-dimensional manifold, which could be a point.
Usually, we consider $\Omega\subset\mathbb{R}$ and the support is a point.

- Notation
    - $\delta_{x_0}$ - Parameter
    - $x_0\in\mathbb{R}$ - [[Probability Mass Function|PMF]]
    - $p(x)=\delta(x-x_0)$         - $\delta$ is the Dirac delta function, which is 0-valued everywhere except 0, yet integrates to 1.
        - By defining $p(x)$ to be $\delta$ shifted by $-x_0$ we obtain an infinitely narrow and infinitely high peak of probability mass where $x=x_0$.
- [[Cumulative Distribution Function|CDF]]
    - $F(x) = \mathbb{1}\left\{ x\ge x_0 \right\}$ - [[Expectation|Mean]]
    - $x_0$ - [[Variance]]
    - $0$ - [[Moment Generating Function|MGF]]
    - $e^{x_0t}$ 

</div></div>
       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution\|Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution\|Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is
$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.


</div></div>
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```
