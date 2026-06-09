---
title: "PyExner: A Multi-GPU hydro-morphodynamics solver in JAX"
description: "PyExner is a high-performance numerical framework designed to solve the coupled Shallow Water–Exner (SWE–Exner) system, enabling the simultaneous simulation of water flow and riverbed evolution. By leveraging modern high-performance computing (HPC) ecosystems, the project bridges the gap between rapid scientific prototyping and production-grade execution on GPU supercomputers."
category: "Software"
tags: ["Environmental Modeling", "Renewable Energy", "JAX", "Computational Hydraulics", "Numerical Methods"]
featured: true
slug: "PyExner"
github: "https://github.com/jkhansell/PyExner"

---
<video
    src="/portfolio_astro/projects/PyExner/pyvista_dambreak.mp4"
    autoplay
    loop
    muted
    playsinline
    width="100%">
</video>

## Scientific Background
Most traditional flood models assume a static terrain. PyExner addresses this limitation by accounting for the two-way interaction between flow dynamics and sediment transport, where erosion and deposition processes actively reshape the landscape and alter hydraulic behavior.

### Governing Equations
The framework solves the two-dimensional SWE for hydrodynamics and the Exner equation for sediment conservation:

**Shallow Water Equations:**
$$
\frac{\partial U}{\partial t} + \nabla \cdot F(U) = S(U)
$$
where $U = [h, hu, hv]^T$ represents water depth and momentum components.

**Exner Equation:**
$$
\frac{\partial z_b}{\partial t} + \frac{1}{1-\xi} \nabla \cdot q_b = 0
$$

where $z_b$ is the bed elevation, $\xi$ is the sediment porosity, and $q_b$ is the sediment transport flux.


## Numerical Formulation
PyExner utilizes a finite-volume discretization on structured Cartesian grids, implementing a weakly coupled formulation to reduce computational complexity.

* **Hydrodynamics:** Solved via an entropy-corrected Roe approximate Riemann solver. Source-term projection techniques are employed to maintain stability during wet-dry transitions and over steep topography.
* **Morphodynamics:** The Exner update is formulated as a scalar Riemann problem, allowing for a sequential update that captures dominant wave interactions.
* **Stability:** Timestep restrictions are calculated using an Approximate Coupling Method (ACM), which derives limiting wave speeds from the exact eigenstructure of the coupled system.

&ensp;

## HPC Architecture

PyExner is built to scale from individual workstations to leadership-class supercomputers using a pure Python/JAX stack:

* **JAX:** Provides GPU acceleration and automatic differentiation via just-in-time (JIT) compilation and XLA kernel fusion.
* **MPI4JAX:** Enables distributed-memory parallelism, allowing the simulation to span multiple GPU nodes.
* **Domain Decomposition:** The domain is split using a 2D Cartesian MPI topology. Halo exchanges are performed using CUDA-aware MPI to facilitate direct peer-to-peer data transfers via interconnects like NVLink and InfiniBand.
* **Parallel I/O:** Utilizes PnetCDF for scalable data storage during large-scale simulations.

&ensp;

## Innovation and Research Impact

PyExner represents a shift in computational hydraulics, proving that high-level languages can achieve the same performance as traditional C++/Fortran/CUDA implementations while significantly increasing scientific productivity.

* **Differentiable Physics:** Because PyExner is built on JAX, it supports native automatic differentiation. This allows for the calculation of gradients of the final state with respect to input parameters, facilitating adjoint-based inverse modeling (e.g., calibrating Manning’s roughness or sediment transport coefficients).
* **AI-Ready Workflow:** The framework is uniquely positioned to integrate with scientific machine learning (SciML). Users can replace empirical closure laws with neural networks or train surrogate models directly within the differentiable simulation loop.
* **Flexibility for Method Development:** The framework is designed as an extensible testbed. Researchers can quickly swap out Riemann solvers, source-term approximations, or time-stepping schemes, making it ideal for testing new numerical methods in a performance-portable environment.


&ensp;

## Performance and Validation
The framework has been validated against both analytical solutions and complex experimental benchmarks, such as mobile-bed dam-break scenarios.

* **Accuracy:** Demonstrates first-order convergence and maintains mean free-surface errors below 10% in experimental tests.
* **Scalability:** Performance benchmarks conducted on the JUWELS Booster and ALCF Polaris systems show efficient scaling on up to 256 NVIDIA A100 GPUs, approaching theoretical communication limits.
* **Conclusion:** PyExner demonstrates that modern Python ecosystems can deliver both scientific productivity and large-scale performance, enabling rapid innovation in computational fluid dynamics and environmental modeling.