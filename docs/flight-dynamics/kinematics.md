# Kinematics

Relative motion of frames and points on a rigid body, using the conventions of [Notation](../notation/index.md).

## Angular Rates Between Frames

### Earth's Rotation

The Earth-Centered Earth-Fixed frame rotates with respect to the ECI frame about the Earth's rotation axis at

$$\omega_E \approx \frac{360}{24} \ \text{deg/hour} = 7.2722 \times 10^{-5}\ \text{rad/s}$$

with components

$$(\boldsymbol{\omega}^{IE})_E = \begin{bmatrix} 0 \\ 0 \\ \omega_E \end{bmatrix}, \qquad (\boldsymbol{\omega}^{IE})_O = \boldsymbol{M}_{OE} \cdot (\boldsymbol{\omega}^{IE})_E = \omega_E \cdot \begin{bmatrix} \cos\phi \\ 0 \\ -\sin\phi \end{bmatrix}$$

!!! note ECEF and ECI angular rate
    $(\boldsymbol{\omega}^{IE})_E = [0,\, 0,\, \omega_E]^T$, since the ECEF $z$-axis coincides with the rotation axis.

!!! note "Non-rotating earth simplification"
    $\boldsymbol{\omega}^{IE} = \boldsymbol{0}$

### NED with respect to ECEF

The NED frame changes orientation as latitude and longitude change:

$$(\boldsymbol{\omega}^{EO})_O = \begin{bmatrix} \dot{\lambda}\cdot\cos\phi \\ -\dot{\phi} \\ -\dot{\lambda}\cdot\sin\phi \end{bmatrix}$$

!!! note NED transport rate
    The transport rate ensures that the NED system retains its defined orientation as defined in [Reference Frames](../coordinate-systems/reference-frames.md).

!!! note "Flat earth simplification"
    $\boldsymbol{\omega}^{EO} = \boldsymbol{0}$

### Body frame with respect to NED

$$\left( \boldsymbol{\omega} ^{OB}\right)_{B} =\begin{bmatrix}p\\q\\r\end{bmatrix}$$


### Composition

Angular rates add across intermediate frames:

$$\boldsymbol{\omega}^{AC} = \boldsymbol{\omega}^{AB} + \boldsymbol{\omega}^{BC}$$

so the body-frame angular rate with respect to the inertial frame is

$$\boldsymbol{\omega}^{IB} = \boldsymbol{\omega}^{IE} + \boldsymbol{\omega}^{EO} + \boldsymbol{\omega}^{OB}$$

!!! note "Flat and non-rotating earth"
    $\boldsymbol{\omega}^{IE} = \boldsymbol{0}, \ \boldsymbol{\omega}^{EO} = \boldsymbol{0}, \qquad \boldsymbol{\omega}^{IB} = \boldsymbol{\omega}^{EB} = \boldsymbol{\omega}^{OB}$

## Differentiation of Vectors

The time derivative of a vector depends on the frame in which it is observed. For a vector $\boldsymbol{v}$ and two frames $A$ and $B$:

$$
(\boldsymbol{r})_A = \boldsymbol{M}_{AB}\cdot(\boldsymbol{r})_B
$$

$$
\left(\frac{d}{dt}\right)^A (\boldsymbol{r})_A = \left(\frac{d}{dt}\right)^A [\boldsymbol{M}_{AB} \cdot (\boldsymbol{r})_B]
$$

$$
(\dot{\boldsymbol{r}})_A^A = \dot{\boldsymbol{M}}_{AB}^A \cdot (\boldsymbol{r})_B + \boldsymbol{M}_{AB} \cdot (\dot{\boldsymbol{r}})_B^B
$$

$$
\boldsymbol{M}_{BA}\cdot(\dot{\boldsymbol{r}})_A^A = \boldsymbol{M}_{BA} \cdot \dot{\boldsymbol{M}}_{AB}^A \cdot (\boldsymbol{r})_B + \underbrace{\boldsymbol{M}_{BA} \cdot \boldsymbol{M}_{AB}}_{\boldsymbol{I}} \cdot (\dot{\boldsymbol{r}})_B^B
$$

$$
(\dot{\boldsymbol{r}})_B^A = \underbrace{[\boldsymbol{M}_{BA} \cdot \dot{\boldsymbol{M}}_{AB}^A]}_{(\boldsymbol{\Omega}^{AB})} (\boldsymbol{r})_B + (\dot{\boldsymbol{r}})_B^B
$$

where

$$
(\boldsymbol{\Omega}^{AB})_{BB} = 
\begin{pmatrix}
0 & -\omega_z^{AB} & \omega_y^{AB} \\
\omega_z^{AB} & 0 & -\omega_x^{AB} \\
-\omega_y^{AB} & \omega_x^{AB} & 0
\end{pmatrix}
$$

$$
(\boldsymbol{\Omega}^{AB})_{BB} \cdot (\boldsymbol{r})_B = 
\begin{bmatrix}
0 & -\omega_z^{AB} & \omega_y^{AB} \\
\omega_z^{AB} & 0 & -\omega_x^{AB} \\
-\omega_y^{AB} & \omega_x^{AB} & 0
\end{bmatrix}_{BB}
\cdot
\begin{bmatrix}
r_x \\
r_y \\
r_z
\end{bmatrix}_B
=
\begin{bmatrix}
\omega_y^{AB} \cdot r_z - \omega_z^{AB} \cdot r_y \\
\omega_z^{AB} \cdot r_x - \omega_x^{AB} \cdot r_z \\
\omega_x^{AB} \cdot r_y - \omega_y^{AB} \cdot r_x
\end{bmatrix}_B
$$

$$
(\boldsymbol{\omega}^{AB})_B \times (\boldsymbol{r})_B = 
\begin{bmatrix}
\omega_x^{AB} \\
\omega_y^{AB} \\
\omega_z^{AB}
\end{bmatrix}_B
\times
\begin{bmatrix}
r_x \\
r_y \\
r_z
\end{bmatrix}_B
=
\begin{bmatrix}
\omega_y^{AB} \cdot r_z - \omega_z^{AB} \cdot r_y \\
\omega_z^{AB} \cdot r_x - \omega_x^{AB} \cdot r_z \\
\omega_x^{AB} \cdot r_y - \omega_y^{AB} \cdot r_x
\end{bmatrix}_B
$$

Therefore

$$
\left(\frac{d}{dt}\right)^A (\boldsymbol{r}^G)_B = (\dot{\boldsymbol{r}}^G)_B^A = (\dot{\boldsymbol{r}}^G)_B^B + (\boldsymbol{\omega}^{AB})_B \times (\boldsymbol{r}^G)_B 
$$

## Absolute Velocity of a Point on the Rigid Body

Let $R$ be the reference point (body-frame origin) and $P$ an arbitrary point fixed to the body:

$$\boldsymbol{r}^{P} = \boldsymbol{r}^{R} + \boldsymbol{r}^{RP}$$

Differentiating with respect to the inertial frame, and noting that $\boldsymbol{r}^{RP}$ is constant in the body frame:

$$(\boldsymbol{V}^{P})^{I} = (\boldsymbol{V}^{R})^{I} + \boldsymbol{\omega}^{IB} \times \boldsymbol{r}^{RP}$$


## Absolute Inertial Acceleration of a Point on the Rigid Body


