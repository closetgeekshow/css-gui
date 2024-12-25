/**
 * @file Generates an orb effect with gradient backgrounds and animations
 * @module OneOrb
 * @requires BasePattern
 */

import BasePattern from '../BasePattern';

export default class OneOrb extends BasePattern {
  static defaultParams = {
    size: 300,
    rotationDegrees: 15,
    animationDuration: 10,
    shadowBlur: 20,
    shadowSpread: 15,
    shadowOpacity: 0.1,
    gradientAngle1: 45,
    gradientAngle2: 80,
    gradientAngle3: 45,
    primaryColor: '#2ef5cd',
    secondaryColor: '#4c6ecf',
    tertiaryColor: '#fa99c7',
    backgroundColor1: '#5958b3',
    backgroundColor2: '#4c6ecf'
  };

  constructor(params = {}) {
    super(params.seed);
    this.params = { ...OneOrb.defaultParams, ...params };
  }

  generate() {
    const {
      size,
      rotationDegrees,
      animationDuration,
      shadowBlur,
      shadowSpread,
      shadowOpacity,
      gradientAngle1,
      gradientAngle2,
      gradientAngle3,
      primaryColor,
      secondaryColor,
      tertiaryColor,
      backgroundColor1,
      backgroundColor2
    } = this.params;

    return {
      css: `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: ${size}px;
        height: ${size}px;
        background: 
          linear-gradient(${gradientAngle1}deg, rgba(46,244,205,0) 30%, rgba(198,171,203,0) 60%, ${tertiaryColor} 100%),
          radial-gradient(ellipse at center, rgba(76,110,207,0) 27%, rgba(76,110,207,0.33) 51%, rgba(89,88,179,0.58) 69%, ${backgroundColor1} 100%),
          linear-gradient(${gradientAngle2}deg, rgba(246,148,203,0) 0%, rgba(70,232,205,.1) 70%, ${primaryColor} 100%),
          linear-gradient(${gradientAngle3}deg, ${primaryColor} 0%, rgba(76,110,207,0.2) 50%, rgba(76,110,207,0) 60%);
        border-radius: 100%;
        box-shadow: 0 ${shadowSpread}px ${shadowBlur}px ${shadowSpread}px rgba(0, 0, 0, ${shadowOpacity});
        animation: ${animationDuration}s warp infinite;
      `,
      keyframes: `
        @keyframes warp {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          25% { transform: translate(-50%, -50%) rotate(${rotationDegrees}deg); }
          50% { transform: translate(-50%, -50%) rotate(${-rotationDegrees/3}deg); }
          75% { transform: translate(-50%, -50%) rotate(${rotationDegrees}deg); }
          100% { transform: translate(-50%, -50%) rotate(0deg); }
        }
      `
    };
  }

  static getParameterDefinitions() {
    return {
      size: { type: 'range', min: 100, max: 500, default: 300 },
      rotationDegrees: { type: 'range', min: 0, max: 360, default: 15 },
      animationDuration: { type: 'range', min: 1, max: 20, default: 10 },
      shadowBlur: { type: 'range', min: 0, max: 50, default: 20 },
      shadowSpread: { type: 'range', min: 0, max: 50, default: 15 },
      shadowOpacity: { type: 'range', min: 0, max: 1, default: 0.1 },
      gradientAngle1: { type: 'range', min: 0, max: 360, default: 45 },
      gradientAngle2: { type: 'range', min: 0, max: 360, default: 80 },
      gradientAngle3: { type: 'range', min: 0, max: 360, default: 45 },
      primaryColor: { type: 'color', default: '#2ef5cd' },
      secondaryColor: { type: 'color', default: '#4c6ecf' },
      tertiaryColor: { type: 'color', default: '#fa99c7' },
      backgroundColor1: { type: 'color', default: '#5958b3' },
      backgroundColor2: { type: 'color', default: '#4c6ecf' }
    };
  }
}
