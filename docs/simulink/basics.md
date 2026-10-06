# Model Basics

Minimal conventions that keep models readable.

## Layout

- One subsystem per idea; keep blocks aligned left to right.
- Name every signal that crosses a subsystem boundary.
- Prefer vector signals over many scalar lines.

## Solver checklist

- [x] Fixed-step for code generation
- [ ] Variable-step for quick analysis
- [ ] Log only signals you need[^1]

[^1]: Logging everything slows simulation and clutters results. Add logging deliberately.

!!! note "Reference"
    Solver choice changes results. Note the solver in the model description — see [MATLAB Matrix Operations](../matlab/matrix-operations.md) for the analysis side.
