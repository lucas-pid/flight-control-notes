# Matrix Operations

Basic matrix patterns. See also [PID Controller](../flight-control/pid-controller.md) for a control example and [Git Useful Commands](../git/useful-commands.md) for versioning these scripts.

## Creating matrices

```matlab
A = [1 2; 3 4];
B = inv(A);
x = A \ [5; 6];   % preferred over inv(A)*b
```

## Indexing

```matlab
A(1, :)      % first row
A(:, end)    % last column
A(A > 2)     % logical indexing
```

## Useful functions

| Function | Purpose |
|----------|---------|
| `eye(n)` | Identity matrix |
| `zeros(m, n)` | Zero matrix |
| `inv(A)` | Inverse (avoid in solvers, use `\`) |
| `eig(A)` | Eigenvalues/vectors |

!!! tip "Prefer backslash over inverse"
    `x = A \ b` is faster and more numerically stable than `x = inv(A) * b`.

## Small equation

The lift coefficient is $C_L = \frac{L}{qS}$.

$$
C_L = \frac{L}{\frac{1}{2}\rho V^2 S}
$$
