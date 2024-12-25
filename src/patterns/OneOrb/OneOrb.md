# OneOrb Pattern Component

A procedurally generated orb effect with multiple gradient layers and smooth rotation animation.

## Features
- Multiple layered gradients for depth and visual interest
- Configurable size, colors, and animation timing
- Customizable shadow effects
- Seeded random generation for reproducible results

## Usage

Basic implementation:

        import OneOrb from './OneOrb';
        
        const orb = new OneOrb();
        const { css, keyframes } = orb.generate();

With custom parameters:

        const orb = new OneOrb({
            size: 400,
            rotationDegrees: 20,
            animationDuration: 8,
            primaryColor: '#2ef5cd',
            backgroundColor1: '#5958b3'
        });

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| size | number | 300 | Size in pixels |
| rotationDegrees | number | 15 | Maximum rotation angle |
| animationDuration | number | 10 | Animation duration in seconds |
| shadowBlur | number | 55 | Shadow blur radius |
| shadowSpread | number | 20 | Shadow spread distance |
| shadowOpacity | number | 0.1 | Shadow opacity value |

## HTML Structure

        <div class="orb"></div>
