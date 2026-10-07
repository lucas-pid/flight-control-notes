# Coordinate Transformations

## Basic Rotations

Rotation around $x$-axis

$$\bm{M}_{AB}=\begin{bmatrix}
1 & 0 & 0\\
0 & \cos \alpha  & \sin \alpha \\
0 & -\sin \alpha  & \cos \alpha 
\end{bmatrix}$$

Rotation around $y$-axis

$$\bm{M}_{AB}=\begin{bmatrix}
\cos \alpha  & 0 & -\sin \alpha \\
0 & 1 & 0\\
\sin \alpha  & 0 & \cos \alpha 
\end{bmatrix}$$

Rotation around $z$-axis

$$\bm{M}_{AB}=\begin{bmatrix}
\cos \alpha  & \sin \alpha  & 0\\
-\sin \alpha  & \cos \alpha  & 0\\
0 & 0 & 1
\end{bmatrix}$$

!!! note Rotations are NOT commutative
    Successive rotations around coordinate axis are not commutative. Therefore, the sequence of ration matters.

## ECEF and NED

$$\bm{M}_{OE}=\begin{bmatrix}
-\sin \phi _{WGS84}\cos \lambda  & -\sin \phi \sin \lambda  & -\cos \phi \\
-\sin \lambda  & \cos \lambda  & 0\\
-\cos \phi \cos \lambda  & -\cos \phi \sin \lambda  & \sin \lambda 
\end{bmatrix}$$

## NED and Body frame

$$\bm{M}_{BO} =\begin{bmatrix}
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

$$\bm{M}_{BO} =\begin{bmatrix}
\cos \Psi \cos \Theta  & \sin \Psi \cos \Theta  & -\sin \Theta \\
\cos \Psi \sin \Theta \sin \Phi -\sin \Psi \cos \Phi  & \sin \Psi \sin \Theta \sin \Phi +\cos \Psi \cos \Phi  & \cos \Theta \sin \Phi \\
\cos \Psi \sin \Theta \cos \Phi +\sin \Psi \sin \Phi  & \sin \Psi \sin \Theta \cos \Phi -\cos \Psi \sin \Phi  & \cos \Theta \cos \Phi 
\end{bmatrix}$$

## NED and Kinematic frame
$$\bm{M}_{KO} =\begin{bmatrix}
\cos \gamma _{K} & 0 & -\sin \gamma _{K}\\
0 & 1 & 0\\
\sin \gamma _{K} & 0 & \cos \gamma _{K}
\end{bmatrix}\cdot\begin{bmatrix}
\cos \chi _{K} & \sin \chi _{K} & 0\\
-\sin \chi _{K} & \cos \chi _{K} & 0\\
0 & 0 & 1
\end{bmatrix}$$

$$\bm{M}_{KO} =\begin{bmatrix}
\cos \chi_{K}\cos \gamma_{K} & \sin \chi_{K}\cos \gamma_{K} & -\sin \gamma_{K}\\
-\sin \chi_{K} & \cos \chi_{K} & 0\\
\cos \chi_{K}\sin \gamma_{K} & \sin \chi_{K}\sin \gamma_{K} & \cos \gamma_{K}
\end{bmatrix}$$

## Aerodynamic and Body frame

$$\bm{M}_{BA} =\begin{bmatrix}
\cos \alpha _{A} & 0 & -\sin \alpha _{A}\\
0 & 1 & 0\\
\sin \alpha _{A} & 0 & \cos \alpha _{A}
\end{bmatrix} \cdot \begin{bmatrix}
\cos( -\beta _{A}) & \sin( -\beta _{A}) & 0\\
-\sin( -\beta _{A}) & \cos( -\beta _{A}) & 0\\
0 & 0 & 1
\end{bmatrix}$$

$$\bm{M}_{BA} =\begin{bmatrix}
\cos \alpha _{A}\cos \beta _{A} & -\cos \alpha _{A}\sin \beta _{A} & -\sin \alpha _{A}\\
\sin \beta _{A} & \cos \beta _{A} & 0\\
\sin \alpha _{A}\cos \beta _{A} & -\sin \alpha _{A}\sin \beta _{A} & \cos \alpha _{A}
\end{bmatrix}$$