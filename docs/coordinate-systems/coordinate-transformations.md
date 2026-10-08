# Coordinate Transformations
Rotations between the frames in [Reference Frames](reference-frames.md). 

## Basic Rotations

Convention: $\boldsymbol{v}_B = \boldsymbol{M}_{BA} \cdot \boldsymbol{v}_A$ maps coordinates from frame $A$ to frame $B$. All matrices are orthonormal, so the inverse mapping is is given by the transpose $\boldsymbol{M}_{BA} = \boldsymbol{M}_{AB}^T$.

The figure below shows a two-dimensional example on how to compute $\boldsymbol{M}_{BA}$ and $\boldsymbol{M}_{AB}$.

<figure>
  <object data="../../assets/images/frames_notes-basic_rotation.drawio.svg" type="image/svg+xml" style="max-width:100%;">ECI frame</object>
  <figcaption>Basic rotation in two dimensions</figcaption>
</figure>

In three-dimensions, the transformations are simply a series of successive right-handed single-axis rotations.

Rotation around $x$-axis

$$\boldsymbol{M}_{AB}=\begin{bmatrix}
1 & 0 & 0\\
0 & \cos \alpha  & \sin \alpha \\
0 & -\sin \alpha  & \cos \alpha 
\end{bmatrix}$$

Rotation around $y$-axis

$$\boldsymbol{M}_{AB}=\begin{bmatrix}
\cos \alpha  & 0 & -\sin \alpha \\
0 & 1 & 0\\
\sin \alpha  & 0 & \cos \alpha 
\end{bmatrix}$$

Rotation around $z$-axis

$$\boldsymbol{M}_{AB}=\begin{bmatrix}
\cos \alpha  & \sin \alpha  & 0\\
-\sin \alpha  & \cos \alpha  & 0\\
0 & 0 & 1
\end{bmatrix}$$

!!! note Rotations are NOT commutative
    Successive rotations around coordinate axis are not commutative. Therefore, the sequence of rotation matters.

## ECEF to NED

Rotation from ECEF ($E$) to NED ($O$) at geodetic latitude $\phi$ (WGS84) and longitude $\lambda$.

$$\boldsymbol{M}_{OE}=\begin{bmatrix}
-\sin \phi \cos \lambda  & -\sin \phi \sin \lambda  & \cos \phi \\
-\sin \lambda  & \cos \lambda  & 0\\
-\cos \phi \cos \lambda  & -\cos \phi \sin \lambda  & -\sin \phi 
\end{bmatrix}$$

## NED to Body frame

Yaw-pitch-roll sequence $\Psi \to \Theta \to \Phi$ (3-2-1)

$$\boldsymbol{M}_{BO} = \boldsymbol{M}_x(\Phi) \cdot \boldsymbol{M}_y(\Theta) \cdot \boldsymbol{M}_z(\Psi)$$

$$\boldsymbol{M}_{BO} =\begin{bmatrix}
1 & 0 & 0\\
0 & \cos \Phi  & \sin \Phi \\
0 & -\sin \Phi  & \cos \Phi 
\end{bmatrix}\cdot\begin{bmatrix}
\cos \Theta  & 0 & -\sin \Theta \\
0 & 1 & 0\\
\sin \Theta  & 0 & \cos \Theta 
\end{bmatrix}\cdot\begin{bmatrix}
\cos \Psi  & \sin \Psi  & 0\\
-\sin \Psi  & \cos \Psi  & 0\\
0 & 0 & 1
\end{bmatrix}$$

$$\boldsymbol{M}_{BO} =\begin{bmatrix}
\cos \Psi \cos \Theta  & \sin \Psi \cos \Theta  & -\sin \Theta \\
\cos \Psi \sin \Theta \sin \Phi -\sin \Psi \cos \Phi  & \sin \Psi \sin \Theta \sin \Phi +\cos \Psi \cos \Phi  & \cos \Theta \sin \Phi \\
\cos \Psi \sin \Theta \cos \Phi +\sin \Psi \sin \Phi  & \sin \Psi \sin \Theta \cos \Phi -\cos \Psi \sin \Phi  & \cos \Theta \cos \Phi 
\end{bmatrix}$$

## NED to Kinematic frame

Track angle $\chi_K$ followed by flight-path angle $\gamma_K$.

$$\boldsymbol{M}_{KO} = \boldsymbol{M}_y(\gamma_K) \cdot \boldsymbol{M}_z(\chi_K)$$

$$\boldsymbol{M}_{KO} =\begin{bmatrix}
\cos \gamma _{K} & 0 & -\sin \gamma _{K}\\
0 & 1 & 0\\
\sin \gamma _{K} & 0 & \cos \gamma _{K}
\end{bmatrix}\cdot\begin{bmatrix}
\cos \chi _{K} & \sin \chi _{K} & 0\\
-\sin \chi _{K} & \cos \chi _{K} & 0\\
0 & 0 & 1
\end{bmatrix}$$

$$\boldsymbol{M}_{KO} =\begin{bmatrix}
\cos \chi_{K}\cos \gamma_{K} & \sin \chi_{K}\cos \gamma_{K} & -\sin \gamma_{K}\\
-\sin \chi_{K} & \cos \chi_{K} & 0\\
\cos \chi_{K}\sin \gamma_{K} & \sin \chi_{K}\sin \gamma_{K} & \cos \gamma_{K}
\end{bmatrix}$$

## Aerodynamic to Body frame

Negative sideslip $-\beta_A$ followed by angle of attack $\alpha_A$.

$$\boldsymbol{M}_{BA} = \boldsymbol{M}_y(\alpha_A) \cdot \boldsymbol{M}_z(-\beta_A)$$

$$\boldsymbol{M}_{BA} =\begin{bmatrix}
\cos \alpha _{A} & 0 & -\sin \alpha _{A}\\
0 & 1 & 0\\
\sin \alpha _{A} & 0 & \cos \alpha _{A}
\end{bmatrix} \cdot \begin{bmatrix}
\cos( -\beta _{A}) & \sin( -\beta _{A}) & 0\\
-\sin( -\beta _{A}) & \cos( -\beta _{A}) & 0\\
0 & 0 & 1
\end{bmatrix}$$

$$\boldsymbol{M}_{BA} =\begin{bmatrix}
\cos \alpha _{A}\cos \beta _{A} & -\cos \alpha _{A}\sin \beta _{A} & -\sin \alpha _{A}\\
\sin \beta _{A} & \cos \beta _{A} & 0\\
\sin \alpha _{A}\cos \beta _{A} & -\sin \alpha _{A}\sin \beta _{A} & \cos \alpha _{A}
\end{bmatrix}$$