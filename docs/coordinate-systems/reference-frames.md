# Reference Frames

Frames used throughout these notes. For how to convert vectors between them, see [Coordinate Transformations](coordinate-transformations.md).

## Earth-Centered Inertial (ECI)

The Earth-Centered Inertial (ECI) frame, denoted $I$, is treated as inertial.

- Origin: center of the Earth.
- $z$-axis: along the Earth's rotation axis.
- $x$-axis: in the equatorial plane, toward the vernal equinox.
- $y$-axis: completes a right-handed system with $x$ and $z$.

<figure>
  <object data="../../assets/images/frames-ECI.drawio.svg" type="image/svg+xml" style="max-width:100%;">ECI frame</object>
  <figcaption>ECI frame</figcaption>
</figure>

## Earth-Centered Earth-Fixed (ECEF)

The Earth-Centered Earth-Fixed (ECEF) frame, denoted $E$:

- Origin: center of the Earth.
- $x$-axis: toward the Greenwich meridian.
- $z$-axis: along the Earth's rotation axis.
- $y$-axis: completes a right-handed system with $x$ and $z$.

This frame rotates with the Earth at angular velocity $\boldsymbol{\omega}^{IE}$ with respect to the ECI frame.

<figure>
  <object data="../../assets/images/frames-ECEF.drawio.svg" type="image/svg+xml" style="max-width:100%;">ECEF frame</object>
  <figcaption>ECEF frame</figcaption>
</figure>

!!! note "ECI vs ECEF"
    ECI is non-rotating and used for inertial propagation. ECEF rotates with the Earth and is used for position (e.g. GNSS coordinates). The transformation between them is a single rotation about the $z$-axis.

## Body Frame

The body frame $B$ is fixed to the aircraft. Its origin is the reference point $R$:

- $x$-axis: forward, along the direction of flight.
- $z$-axis: downward, in the aircraft plane of symmetry.
- $y$-axis: toward the right wing.

<figure>
  <object data="../../assets/images/frames-body-frame.drawio.svg" type="image/svg+xml" style="max-width:100%;">Body frame</object>
  <figcaption>Body frame</figcaption>
</figure>

## North-East-Down (NED)

The North-East-Down (NED) frame, denoted $O$, is fixed to the aircraft; its origin coincides with the body frame origin.

- $x$-axis: geographic north.
- $y$-axis: geographic east.
- $z$-axis: down, along the local gravity vector.

The orientation between the body frame and the NED frame is defined with Euler angles (see figure below and [Coordinate Transformations](coordinate-transformations.md)).

<figure>
  <object data="../../assets/images/frames-euler-angles.drawio.svg" type="image/svg+xml" style="max-width:100%;">Euler angles between NED and body frames</object>
  <figcaption>Euler angles between NED and body frames</figcaption>
</figure>

## Kinematic Frame

The kinematic frame, denoted $K$, is fixed to the aircraft; its origin coincides with the body frame origin.

- $x$-axis: coincides with the direction of the kinematic velocity vector.
- $y$-axis: lies on the $x_Oy_O$ plane, perpendicular to the $x_K$-axis.
- $z$-axis: downwards, forming a right-hand system with the $x$ and $y$ axes.

<figure>
  <object data="../../assets/images/frames-kinematic_frame.drawio.svg" type="image/svg+xml" style="max-width:100%;">Kinematic frame</object>
  <figcaption>Kinematic frame</figcaption>
</figure>

## Summary

| Frame | Symbol | Origin | $x$ | $y$ | $z$ |
|-------|--------|--------|-----|-----|-----|
| ECI | $I$ | Earth center | Vernal equinox | Completes right-handed system with $x$ and $z$ | Earth's rotation axis |
| ECEF | $E$ | Earth center | Greenwich meridian | Completes right-handed system with $x$ and $z$ | Earth's rotation axis |
| Body | $B$ | Reference point $R$ | Forward | Right wing | Down |
| NED | $O$ | Reference point $R$ | North | East | Down (gravity) |
| Kinematic | $K$ | Reference point $R$ | Direction of the kinematic velocity vector | Lies on the $x_Oy_O$ plane, perpendicular to the $x_K$-axis | Forms right-handed system with $x$ and $y$ axes |
