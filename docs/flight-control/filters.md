# Filters

Transfer functions and state-space realizations of commonly used filters. All are continuous-time, single input $u$, output $y$, with state $\boldsymbol{x}$. Cut-off frequency $\omega_c$ and time constant $\tau = 1/\omega_c$.

## First-Order Low-Pass

In the literature, the transfer function can be found in many forms...

$$H(s) = \frac{\omega_n}{s + \omega_n} = \frac{1}{\frac{s}{\omega_n} + 1} = \frac{1}{\tau s + 1}$$

where $\omega_n$ is the cut-off frequency and $\tau = \frac{1}{\omega_n}$ is the time constant.

<figure>
  <object data="../../assets/images/block-diagrams-1st-ord-lowpass.drawio.svg" type="image/svg+xml" style="max-width:100%;">Block diagram of a first-order low-pass filter</object>
  <figcaption>Block diagram of a first-order low-pass filter</figcaption>
</figure>

State-space realization:

$$\dot{x} = -\omega_n \cdot x + \omega_n \cdot u, \qquad y = x$$

Magnitude response: flat ($0$ dB) below $\omega_n$, $-3$ dB at $\omega_n$, then $-20$ dB/decade roll-off.

<figure>
  <object data="../../assets/images/block-diagrams-lowpass-bode.drawio.svg" type="image/svg+xml" style="max-width:100%;">Bode magnitude plot of a low-pass filter with cut-off frequency and roll-off slope</object>
  <figcaption>Bode magnitude plot of a low-pass filter with cut-off frequency and roll-off slope</figcaption>
</figure>

```matlab
% Define filter parameters
wn_radDs = 10;  	% 10 rad/s cut-off frequency
			   
% Create state space object
A = -wn_radDs;
B =  wn_radDs;
C = 1;
D = 0;
ss_pt1   = ss(A,B,C,D,...
             'StateName', 'x_pt1', ...
             'InputName', 'u',...
			 'OutputName','y');
```

## Second-Order Low-Pass

$$H(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$$

with natural frequency $\omega_n$ and damping ratio $\zeta$. Roll-off is $-40$ dB/decade; $\zeta < 1/\sqrt{2}$ causes peaking near $\omega_n$.

<figure>
  <object data="../../assets/images/block-diagrams-2nd-ord-lowpass.drawio.svg" type="image/svg+xml" style="max-width:100%;">Block diagram of a second-order low-pass filter</object>
  <figcaption>Block diagram of a second-order low-pass filter</figcaption>
</figure>

State-space realization:

$$\begin{bmatrix} \dot{x} \\ \ddot{x} \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -\omega_n^2 & -2\zeta\omega_n \end{bmatrix} \cdot \begin{bmatrix}  x \\ \dot{x} \end{bmatrix} + \begin{bmatrix} 0 \\ \omega_n^2 \end{bmatrix} \cdot u, \qquad y = \begin{bmatrix} 1 & 0 \end{bmatrix} \cdot \begin{bmatrix} x \\ \dot{x} \end{bmatrix}$$

```matlab
% Define filter parameters
wn_radDs = 10;  		% 10 rad/s cut-off frequency
zeta 	 = 1/sqrt(2);   % Butterworth filter
  
% Create state space object
A = [0, 1; -wn_radDs^2, -2*zeta*wn_radDs];
B = [0; wn_radDs^2];
C = [1, 0];
D = 0;
ss_pt2   = ss(A,B,C,D,...
             'StateName', {'x_pt2', 'x_dot_pt2'}, ...
             'InputName', 'u',...
			 'OutputName','y');
```

## High-Pass Filter

First-order high-pass with the same cut-off $\omega_n$. It complements the first-order low-pass

$$L(s) + H(s) = 1$$

where $L(s)$ is the transfer function of a first order low pass filter and

$$H(s) = \frac{s}{s + \omega_n} = \frac{\tau \cdot s}{\tau s + 1}$$

State-space realization:

$$\dot{x} = -\omega_n \cdot x + \omega_n \cdot u, \qquad y = - x + u$$

<figure>
  <object data="../../assets/images/block-diagrams-1st-ord-highpass.drawio.svg" type="image/svg+xml" style="max-width:100%;">Block diagram of a first-order high-pass filter</object>
  <figcaption>Block diagram of a first-order high-pass filter</figcaption>
</figure>

<figure>
  <object data="../../assets/images/block-diagrams-highpass-bode.drawio.svg" type="image/svg+xml" style="max-width:100%;">Bode magnitude plot of a high-pass filter</object>
  <figcaption>Bode magnitude plot of a high-pass filter</figcaption>
</figure>

```matlab
% Define filter parameters
wn_radDs = 10;  	% 10 rad/s cut-off frequency

% Create state space object
A = -wn_radDs;
B =  wn_radDs;
C = -1;
D = +1;
ss_hpf   = ss(A,B,C,D,...
             'StateName', 'x_hpf', ...
             'InputName', 'u',...
			 'OutputName','y');
```

## Notch Filter

Attenuates a narrow band around the center frequency $\omega_n$ while passing everything else. $\omega_q$ sets the notch width:

$$H(s) = ...$$

State-space realization:

$$...$$

<figure>
  <object data="../../assets/images/block-diagrams-notch-filter-bode.drawio.svg" type="image/svg+xml" style="max-width:100%;">Bode magnitude plot of a notch filter</object>
  <figcaption>Bode magnitude plot of a notch filter</figcaption>
</figure>

```matlab
% Define filter parameters
wn_radDs = 100;  	% 100 rad/s filter frequency
wq_radDs = 10;  	% 10  rad/s filter width

% Create state space object
A = [0, 1; -wn_radDs^2, -wq_radDs];
B = [0; 1];
C = [0, -wq_radDs];
D = +1;
ss_notch = ss(A,B,C,D,...
             'StateName', {'x_notch', 'x_dot_notch'}, ...
             'InputName', 'u',...
			 'OutputName','y');
```

## Complementary Filter
