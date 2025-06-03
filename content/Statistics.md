---
{"publish":true,"title":"*Sufficient* of Statistics","created":"2023-10-17T21:41:50","modified":"2025-06-01T04:24:12","cssclasses":"","aliases":null,"type":"index","sup":null,"state":"[[%wip]]","banner":"https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20231017221426.png","banner_icon":"🔮","reference":"AOS"}
---


# *Sufficient* of Statistics

Statistics is a **problem-solving procedure**:

```mermaid
flowchart LR
subgraph AA["Data"]
    direction TB
    A1@{shape: braces, label: "distribution<br>dependence<br>..."}
end
subgraph BB["Method"]
    direction TB
    B1@{shape: braces, label: "algorithms<br>statistics<br>..."}
end
subgraph CC["Problem"]
    direction TB
    C1@{shape: braces, label: "output<br>metric<br>..."}
end
AA --- BB --- CC
```

- [c] Table. Statistics dictionary

| Statistics                      | **[[Machine Learning\|Machine Learning]]**            |
| ------------------------------- | ----------------------------------- |
| estimation                      | [[Machine Learning\|learning]]      |
| [[Regression\|regression]]                  | [[Supervised Learning\|supervised learning]]             |
| [[Clustering\|clustering]]                  | [[Unsupervised Learning\|unsupervised learning]]           |
| [[Hypothesis Testing\|hypothesis]] | [[Classification\|classification]]                  |
| covariates                      | features                            |
| coefficient                     | weight                              |
| predictor                       | input                               |
| response                        | output                              |
| intercept                       | bias                                |
| derived predictor               | [[Hidden Units\|hidden units]]                    |
| penalty function                | [[L2 Regularization\|weight decay]] |

## Basic Concepts

- [[Statistical Model\|Statistical Model]]
- [[Statistical Decision Theory\|Statistical Decision Theory]]
- [[f-Divergence\|f-Divergence]]
    - [[Total Variation Distance\|Total Variation Distance]]
    - [[KL Divergence\|KL Divergence]]

- Estimation
    - Point Estimation
        - [[Maximum Likelihood Estimation\|Maximum Likelihood Estimation]]
        - [[Method of Moments\|Method of Moments]]
        - [[Mean Squared Error\|Mean Squared Error]]
    - Interval Estimation: [[Confidence Interval\|Confidence Interval]]
    - Distributional Estimation: [[Bayes Estimator\|Bayes Estimator]]
- [[Hypothesis Testing\|Hypothesis Testing]]
    - [[Evaluating a Test\|Evaluating a Test]]
        - [[Bayes Optimal Test\|Bayes Optimal Test]]
        - [[Uniformly Most Powerful Test\|Uniformly Most Powerful Test]]
    - [[p-value\|p-value]]
    - [[Confidence Interval and Hypothesis Test Duality\|Confidence Interval and Hypothesis Test Duality]]
- [[Regression\|Regression]]
    - [[ANOVA\|ANOVA]]

## Advanced Topics

- [[Hardness of Simple Hypothesis Test Through Total Variation\|Hardness of Simple Hypothesis Test Through Total Variation]]
- [[Hardness of Estimation Through Testing\|Hardness of Estimation Through Testing]]

## Probability and Statistics

```mermaid
graph LR
A(Data generating process) --Probability--> B(Observed data)
B --Statistical inference--> A
```

[[Probability Theory\|Probability Theory]] answers the following question:

> [!qn] Given a data generating process, what are the properties of the outcomes?

While statistical inference answers the inverse problem:

> [!qn] Given the outcomes, what can we say about the process that generated the data?
