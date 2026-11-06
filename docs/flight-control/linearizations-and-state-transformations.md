# Useful Linearizations and State Transformations

## State Transformation
Consider a linear state space model

$$
 \begin{array}{l}
\dot{\boldsymbol{x}}( t) =\boldsymbol{A}\cdot \boldsymbol{x}( t) +\boldsymbol{B}\cdot \boldsymbol{u}( t)\\
\boldsymbol{y}( t) =\boldsymbol{C}\cdot \boldsymbol{x}( t) +\boldsymbol{D}\cdot \boldsymbol{u}( t)
\end{array}
$$

We want to use a new state vector defined as

$$
\bar{\boldsymbol{x}}( t) =\boldsymbol{T}\cdot \boldsymbol{x}( t)
$$

where $\boldsymbol{T}$ is square and invertible. The time notation is henceforth dropped for simplicity. Taking the derivative of the previous expression

$$
\begin{array}{l}
\dot{\bar{\boldsymbol{x}}}=\boldsymbol{T}\cdot \dot{\boldsymbol{x}}\\
\dot{\bar{\boldsymbol{x}}}=\boldsymbol{T}\cdot ( \boldsymbol{A}\cdot \boldsymbol{x}+\boldsymbol{B}\cdot \boldsymbol{u})\\
\dot{\bar{\boldsymbol{x}}}=\boldsymbol{T}\cdot ( \boldsymbol{A}\cdot \boldsymbol{T}^{-1} \cdot \bar{\boldsymbol{x}}+\boldsymbol{B}\cdot \boldsymbol{u})\\
\dot{\bar{\boldsymbol{x}}}=\boldsymbol{T}\cdot   \boldsymbol{A}\cdot \boldsymbol{T}^{-1} \cdot \bar{\boldsymbol{x}}+ \boldsymbol{T}\cdot \boldsymbol{B}\cdot \boldsymbol{u}\\
\end{array}
$$

Therefore, with the output equation, it is obtained

$$
\begin{array}{l}
\dot{\bar{\boldsymbol{x}}}=\boldsymbol{T}\cdot   \boldsymbol{A}\cdot \boldsymbol{T}^{-1} \cdot \bar{\boldsymbol{x}}+ \boldsymbol{T}\cdot \boldsymbol{B}\cdot \boldsymbol{u}\\
\boldsymbol{y}            =\boldsymbol{C}\cdot \boldsymbol{T}^{-1} \cdot \bar{\boldsymbol{x}}+ \boldsymbol{D}\cdot \boldsymbol{u}\\
\end{array}
$$

## Linearization