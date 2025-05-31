---
{"publish":true,"title":"*Sufficient* of Statistics","created":"2023-10-17T21:41:50","modified":"2025-05-24T19:41:24","cssclasses":""}
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

| Statistics                      | **[[Machine Learning]]**            |
| ------------------------------- | ----------------------------------- |
| estimation                      | [[Machine Learning\|learning]]      |
| [[Regression]]                  | [[Supervised Learning]]             |
| [[Clustering]]                  | [[Unsupervised Learning]]           |
| [[Hypothesis Testing\|hypothesis]] | [[Classification]]                  |
| covariates                      | features                            |
| coefficient                     | weight                              |
| predictor                       | input                               |
| response                        | output                              |
| intercept                       | bias                                |
| derived predictor               | [[Hidden Units]]                    |
| penalty function                | [[L2 Regularization\|weight decay]] |

## Basic Concepts

- [[Statistical Model]]
- [[Statistical Decision Theory]]

- Estimation
    - Concepts
        - [[Likelihood]]
        - [[Confidence Interval]]
    - Methods
        - [[Maximum Likelihood Estimation]]
        - [[Method of Moments]]
        - [[Mean Squared Error]]
- [[Hypothesis Testing]]
- [[Regression]]
- [[Variance]]
    - [[ANOVA]]

## Probability and Statistics

```mermaid
graph LR
A(Data generating process) --Probability--> B(Observed data)
B --Statistical inference--> A
```

[[Probability Theory]] answers the following question:

> [!qn] Given a data generating process, what are the properties of the outcomes?

While statistical inference answers the inverse problem:

> [!qn] Given the outcomes, what can we say about the process that generated the data?
