# Notation

In this work, scalars are presented using normal weighted characters, e.g. $\lambda \in \mathbb{R}$, vectors and matrices are denoted with bold symbols, e.g. $\boldsymbol{A} \in \mathbb{R}^{m \times n}$ and coordinate transformation matrices are given with the following subscript notation:
    
$$\boldsymbol{M}_{AB}$$
	
where $\boldsymbol{M}_{AB}$ represents the matrix transformation from frame $B$ to frame $A$.

Geometric vectors are denoted using the notation from TUM FSD Institute https://www.fsd.ed.tum.de/. For example,

$$(\boldsymbol{V}^R)^I_{B}$$

denotes the velocity of point $R$ with respect to the reference frame $I$, expressed in the frame $B$. Similarly, the acceleration is denoted as

$$\left(\dfrac{d}{dt} \right)^B(\boldsymbol{V}^R)^I_{B}=\left( \dot{\boldsymbol{V}^R} \right)^{IB}_B$$

where $\left(\frac{d}{dt} \right)^B$ denotes that the derivative is taken with respect to the frame $B$.

The angular rate vector between two coordinate frames is depicted as

$$\left(\boldsymbol{\omega}^{IB} \right)_B$$

where the superscript $IB$ denotes the angular rotation of frame $B$ with respect to frame $I$, and the subscript $B$ depicts the frame in which the vector is denoted in. Likewise, the angular acceleration is depicted as

$$\left(\dfrac{d}{dt} \right)^B \left(\boldsymbol{\omega}^{IB} \right)_B=\left(\dot{\boldsymbol{\omega}}^{IB} \right)_B^B$$

where the superscript $B$ denotes the frame in which the derivative is evaluated.

The figure bellow summarizes the geometric vectors notation.

<figure>
  <object data="../assets/images/fdm_doc-Notation.drawio.svg" type="image/svg+xml" style="max-width:100%;">Geometric vectors notation</object>
  <figcaption>Geometric vectors notation</figcaption>
</figure>