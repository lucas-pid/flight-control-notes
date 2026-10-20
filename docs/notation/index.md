# Notation

In this work, scalars are written with normal weight characters, e.g. $\lambda \in \mathbb{R}$, while vectors and matrices are denoted with bold symbols, e.g. $\boldsymbol{A} \in \mathbb{R}^{m \times n}$.

Coordinate transformation matrices use the following subscript notation:

$$\boldsymbol{M}_{AB}$$

where $\boldsymbol{M}_{AB}$ represents the transformation matrix from frame $B$ to frame $A$.

## Geometric vectors

Geometric vectors follow the notation of the [TUM FSD Institute](https://www.fsd.ed.tum.de/) as close as possible. For example,

$$(\boldsymbol{V}^R)^I_B$$

denotes the velocity of point $R$ with respect to the reference frame $I$, expressed in frame $B$. Similarly, the acceleration is denoted as

$$\left(\frac{d}{dt}\right)^B (\boldsymbol{V}^R)^I_B = \left(\dot{\boldsymbol{V}}^R\right)^{IB}_B$$

where $\left(\frac{d}{dt}\right)^B$ denotes that the derivative is taken with respect to frame $B$.

The angular rate vector between two coordinate frames is depicted as

$$\left(\boldsymbol{\omega}^{IB}\right)_B$$

where the superscript $IB$ denotes the angular rotation of frame $B$ with respect to frame $I$, and the subscript $B$ depicts the frame in which the vector is expressed. Likewise, the angular acceleration is written as

$$\left(\frac{d}{dt}\right)^B \left(\boldsymbol{\omega}^{IB}\right)_B = \left(\dot{\boldsymbol{\omega}}^{IB}\right)_B^B$$

where the superscript $B$ denotes the frame in which the derivative is evaluated.

The figure below summarizes the geometric vector notation.

<figure>
  <object data="../assets/images/fdm_doc-Notation.drawio.svg" type="image/svg+xml" style="max-width:100%;">Geometric vectors notation</object>
  <figcaption>Geometric vectors notation</figcaption>
</figure>
