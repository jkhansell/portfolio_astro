---
title: "Robust Neural Architecture Search"
description: "Investigating safety bounds and adversarially robust objective functions for automated deep neural network design."
category: "Research"
tags: ["PyTorch", "AutoML"]
slug: "robust-nas"
---

## Theoretical Foundations & Safety Bounds

Traditional Neural Architecture Search (NAS) frameworks focus almost exclusively on maximizing empirical risk validation performance across standard testing data pools:

$$
\min_{\alpha \in \mathcal{A}} \mathcal{L}_{\text{val}}(w^*(\alpha), \alpha)
$$