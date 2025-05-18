---
{"publish":true,"title":"*Almost All* of Probability","created":"2022-09-25T14:40:01","modified":"2025-05-18T17:23:34","cssclasses":""}
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

| Distribution                          | Notation                       | Parameters                                            | CDF                                                                                             | PMF/PDF                                                                                                                                                 | Mean                                        | Variance                                                                                                        | MGF                                                                                           | CF                               |
| ------------------------------------- | ------------------------------ | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------- |
| [[Uniform Distribution\|Uniform Distribution]]              | $\mathcal{U}(a,b)$             | $a,b\in\R$                                            | $F(x) = \begin{cases}0,  \quad & x<a,\\ \frac{x-a}{b-a}, &a\le x\le b,\\ 1,  & x>b.\end{cases}$ | $f(x) = \begin{cases} \frac{1}{b-a}, \quad & a\le x\le b,\\ 0, & \text{otherwise.}\end{cases}$                                                          | $\frac{a+b}{2}$                             | $\frac{(b-a)^{2}}{12}$                                                                                          | $\displaystyle \frac{e^{tb} - e^{ta}}{(b-a)t}$                                                |                                  |
| [[Bernoulli Distribution\|Bernoulli Distribution]]            | /                              | $p\in[0,1]$                                           | $F(x) = \begin{cases} 0, \quad & x<0,\\ q = 1-p, & 0\le x\le 1,\\ 1, & x >1. \end{cases}$       | $p(n) = \begin{cases} p, \quad & n=1, ,\\ q\coloneqq 1-p, & n=0.\end{cases}$                                                                            | $p$                                         | $pq$                                                                                                            | $q + pe^{t}$                                                                                  |                                  |
| [[Binomial Distribution\|Binomial Distribution]]             | $B(n,p)$                       | $n \in \mathbb{N}, p\in[0,1]$                         | /                                                                                               | $p(k) = {n \choose k} p^{k}(1-p)^{n-k}$                                                                                                                 | $np$                                        | $npq$                                                                                                           | $(q + pe^{t})^{n}$                                                                            |                                  |
| [[Poisson Distribution\|Poisson Distribution]]              | /                              | $\lambda > 0$                                         | /                                                                                               | $\displaystyle p(n) = e^{-\lambda} \frac{\lambda ^{n}}{n!}$                                                                                             | $\lambda$                                   | $\lambda$                                                                                                       | $\exp(\lambda(e^{t}-1))$                                                                      | $\exp(\lambda(e^{it}-1))$        |
| [[Exponential Distribution\|Exponential Distribution]]          | /                              | $\lambda > 0$                                         | $1 - e^{-\lambda x}$                                                                            | $\displaystyle f(n) = \begin{cases} \lambda e^{-\lambda x}, \quad &x \ge 0,\\ 0, & x< 0 \end{cases}$                                                    | $\frac{1}{\lambda}$                         | $\frac{1}{\lambda^{2}}$                                                                                         | $\lambda /(\lambda - t), \quad t < \lambda$                                                   | $\lambda /(\lambda - it)$        |
| [[Normal Distribution\|Normal Distribution]]               | $\mathcal{N}(\mu, \sigma^{2})$ | $\mu\in\R, \sigma^{2}\in\R_{+}$                       | /                                                                                               | $\displaystyle f(x)=\frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^{2}}$                                                | $\mu$                                       | $\sigma^{2}$                                                                                                    | $e^{\mu t + \sigma^{2}t^{2} /2}$                                                              | $e^{it\mu - \sigma^{2}t^{2} /2}$ |
| [[Gamma Distribution\|Gamma Distribution]]                | /                              | $\alpha, \lambda >0$                                  | /                                                                                               | $f(x)=\begin{cases} \frac{\lambda e^{-\lambda x}(\lambda x)^{\alpha -1}}{\Gamma(\alpha)},\quad & x \ge 0,\\0,& x<0 \end{cases}$                         | $\alpha /\lambda$                           | $\alpha /\lambda^{2}$                                                                                           | $\left( \frac{\lambda}{\lambda - t} \right)^{\alpha},\quad t <\lambda$                        |                                  |
| [[Beta Distribution\|Beta Distribution]]                 | /                              | $a,b >0$                                              | /                                                                                               | $f(x)=\frac{\Gamma(a+b)}{\Gamma(a) \Gamma(b)} x^{a-1}(1-x)^{b-1}$                                                                                       | $\frac{a}{a+b}$                             | $\frac{ab}{(a+b)^2(a+b+1)}$                                                                                     | $\frac{\Gamma(a+b)}{\Gamma(a) \Gamma(b)} \int_{0}^{1} x^{a-1}(1-x)^{b-1} e^{tx} \mathrm{d} x$ |                                  |
| [[Chi-Square Distribution\|Chi-Square Distribution]]           | $\chi _{n}^{2}$                | $n$                                                   | /                                                                                               | $\displaystyle f(x) = \frac{e^{-x/2}(x/2)^{n /2 -1}}{2\Gamma(n /2)}, \quad x\ge 0$                                                                      | $n$                                         | $2n$                                                                                                            | $(1-2t)^{-n/2}$                                                                               |                                  |
| [[Wishart Distribution\|Wishart Distribution]]              |                                |                                                       |                                                                                                 |                                                                                                                                                         |                                             |                                                                                                                 |                                                                                               |                                  |
| [[t Distribution\|t Distribution]]                    | /                              | $n \in \mathbb{N}$                                    | /                                                                                               | $\displaystyle\frac{\Gamma \left(\frac{n+1}{2} \right)} {\sqrt{n\pi}\,\Gamma \left(\frac{n}{2} \right)} \left(1+\frac{x^2}{n} \right)^{-\frac{n+1}{2}}$ | 0                                           | $\frac{n}{n-2}$                                                                                                 | *Undefined*                                                                                   |                                  |
| [[F Distribution\|F Distribution]]                    | /                              | $n,m \in \mathbb{N}$                                  | /                                                                                               | /                                                                                                                                                       | $m/(m-2)$                                   | $\displaystyle \frac{2m^{2}(m+n -2)}{n(m-2)^{2}(m-4)}$                                                          | *Undefined*                                                                                   |                                  |
| [[Geometric Distribution\|Geometric Distribution]]            | /                              | $p\in [0,1]$                                          | $F(n) = 1 - q^{n}$                                                                              | $p(n) = pq^{n-1}$                                                                                                                                       | $1 /p$                                      | $q /p^{2}$                                                                                                      | $\frac{pe^{t}}{1-qe^{t}}$, $e^{t}< 1 /q$                                                      |                                  |
| [[Hypergeometric Distribution\|Hypergeometric Distribution]]       | /                              | $N\in \mathbb{N}, M,n\in [N]$                         | /                                                                                               | $\displaystyle p(k) = \frac{{M \choose k}{N-M \choose n-k}}{{N \choose k}}$                                                                             | $\frac{nM}{N}$                              | $\displaystyle\frac{nM(N-n)(N-M)}{N^{2}(N-1)}$                                                                  | /                                                                                             |                                  |
| [[Cauchy Distribution\|Cauchy Distribution]]               | /                              | $a$                                                   | $\frac{1}{\pi}\left(\arctan \frac{x}{a} +\frac{\pi}{2}  \right)$                                | $\frac{1}{\pi}\frac{a}{x^{2} + a ^{2}}$                                                                                                                 | Doesn't exist                               | Doesn't exist                                                                                                   | Doesn't exist                                                                                 |                                  |
| Discrete [[Power Law Distribution\|Power Law Distribution]]   | /                              | Discrete: $\alpha\in\R_{++}$                          | $F(k)=1-1 /(k+1)^{\alpha }$                                                                     | $p(k) = 1 /k^{\alpha} - 1 /(k+1)^{\alpha}$                                                                                                              | Discrete: $\sum_{k=1}^{\infty}1/k^{\alpha}$ | Discrete: $\sum_{k=1}^{\infty} 2k^{1-\alpha} - k^{-\alpha} - \left( \sum_{k=1}^{\infty}k^{-\alpha} \right)^{2}$ | Discrete: $1 + (e^{t}-1) \sum_{k=0}^{\infty}e^{tk}(k+1)^{-\alpha}$                            |                                  |
| Continuous [[Power Law Distribution\|Power Law Distribution]] | /                              | Continuous: $\alpha, c\in\R_{++}$, $\beta=c^{\alpha}$ | $F(x) = 1 - c^{\alpha} /x^{\alpha}$ for $x\ge c$                                                | $f(x) = \alpha c^{\alpha} /x^{\alpha+1}$                                                                                                                | Continuous: $\frac{\alpha}{\alpha-1}$       | Continuous: $\frac{\alpha}{(\alpha-1)^{2}(\alpha-2)}$                                                           | /                                                                                             |                                  |
| [[Dirac Distribution\|Dirac Distribution]]                | $\delta_{x_0}$                 | $x_0\in\mathbb{R}$                                    | $F(x) = \mathbb{1}\left\{ x\ge x_0 \right\}$                                                    | $p(x)=\delta(x-x_0)$                                                                                                                                    | $x_0$                                       | $0$                                                                                                             | $e^{x_0t}$                                                                                    |                                  |
| [[Laplace Distribution\|Laplace Distribution]]              |                                |                                                       |                                                                                                 |                                                                                                                                                         |                                             |                                                                                                                 |                                                                                               |                                  |


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
         | ![[Cauchy Distribution#^cdf\|inline naked n-link]]         | ![[Cauchy Distribution#^pdf\|inline naked n-link]]         | ![[Cauchy Distribution#^mean\|naked inline n-link]]         | ![[Cauchy Distribution#^var\|inline naked n-link]]         | ![[Cauchy Distribution#^mgf\|inline naked n-link]]      |                                                        |
| Discrete [[Power Law Distribution]]   | /                                                       | ![[Power Law Distribution#^para\|inline naked n-link]]      | ![[Power Law Distribution#^cdf\|inline naked n-link]]      | ![[Power Law Distribution#^pdf\|inline naked n-link]]      | ![[Power Law Distribution#^mean\|naked inline n-link]]      | ![[Power Law Distribution#^var\|inline naked n-link]]      | ![[Power Law Distribution#^mgf\|inline naked n-link]]   |                                                        |
| Continuous [[Power Law Distribution]] | /                                                       | ![[Power Law Distribution#^para-cont\|inline naked n-link]] | ![[Power Law Distribution#^cdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^pdf-cont\|inline naked n-link]] | ![[Power Law Distribution#^mean-cont\|naked inline n-link]] | ![[Power Law Distribution#^var-cont\|inline naked n-link]] | /                                                       |                                                        |
| [[Dirac Distribution]]                | ![[Dirac Distribution#^nota\|inline naked n-link]]      | ![[Dirac Distribution#^para\|inline naked n-link]]          | ![[Dirac Distribution#^cdf\|inline n-link naked]]          | ![[Dirac Distribution#^pdf\|inline naked n-link n-l2 ]]    | ![[Dirac Distribution#^mean\|naked inline n-link]]          | ![[Dirac Distribution#^var\|inline naked n-link]]          | ![[Dirac Distribution#^mgf\|inline naked n-link]]       |                                                        |
| [[Laplace Distribution]]              |                                                         |                                                             |                                                            |                                                            |                                                             |                                                            |                                                         |                                                        |

```

%%
