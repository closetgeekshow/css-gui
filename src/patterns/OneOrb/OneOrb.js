/**
 * @file Generates an orb effect with gradient backgrounds and animations
 * @module OneOrb
 * @requires BasePattern
 */

import BasePattern from '/patterns/BasePattern.js';

/**
 * @typedef {Object} GradientStop
 * @property {string} color - The color value in rgba or hex
 * @property {string} position - The position as a percentage
 */

/**
 * @typedef {Object} GradientConfig
 * @property {string} ANGLE - The gradient angle
 * @property {GradientStop[]} STOPS - Array of gradient color stops
 */

/**
 * @typedef {Object} AnimationKeyframe
 * @property {number} rotation - Rotation degree value
 */

/**
 * @class OneOrb
 * @extends BasePattern
 * @description Creates an animated orb with multiple gradient layers and rotation animation
 */
export default class OneOrb extends BasePattern {
  static CSS_VARS = {
    '--orb-size': '300px',
    '--orb-rotation': '0deg',
    '--orb-shadow-blur': '55px',
    '--orb-shadow-spread': '20px',
    '--orb-shadow-opacity': '0.1',
    '--orb-gradient-1': '',
    '--orb-gradient-2': '',
    '--orb-gradient-3': '',
    '--orb-gradient-4': '',
    '--orb-animation-duration': '10s'
  };

  static CONFIG = {
    GRADIENTS: {
      BACKGROUND: {
        FIRST: {
          ANGLE: 'to top',
          STOPS: [
            { color: 'rgba(89,88,179,1)', position: '0%' },
            { color: 'rgba(76,110,207,0.29)', position: '17%' },
            { color: 'rgba(76,110,207,0)', position: '24%' }
          ]
        },
        SECOND: {
          ANGLE: '20deg',
          STOPS: [
            { color: '#2ef5cd', position: '0%' },
            { color: '#4c6ecf', position: '44%' },
            { color: '#6567ce', position: '60%' },
            { color: '#fa99c7', position: '100%' }
          ]
        }
      },
      ORB: {
        FIRST: {
          ANGLE: '45deg',
          STOPS: [
            { color: 'rgba(46,244,205,0)', position: '30%' },
            { color: 'rgba(198,171,203,0)', position: '60%' },
            { color: 'rgba(246,148,203,1)', position: '100%' }
          ]
        },
        SECOND: {
          TYPE: 'radial',
          STOPS: [
            { color: 'rgba(76,110,207,0)', position: '27%' },
            { color: 'rgba(76,110,207,0.33)', position: '51%' },
            { color: 'rgba(89,88,179,0.58)', position: '69%' },
            { color: 'rgba(89,78,183,1)', position: '100%' }
          ]
        },
        THIRD: {
          ANGLE: '80deg',
          STOPS: [
            { color: 'rgba(246,148,203,0)', position: '0%' },
            { color: 'rgba(70,232,205,0.1)', position: '70%' },
            { color: 'rgba(46,244,205,1)', position: '100%' }
          ]
        },
        FOURTH: {
          ANGLE: '45deg',
          STOPS: [
            { color: 'rgba(46,244,205,1)', position: '0%' },
            { color: 'rgba(76,110,207,0.2)', position: '50%' },
            { color: 'rgba(76,110,207,0)', position: '60%' }
          ]
        }
      }
    },
    ANIMATION: {
      NAME: 'warp',
      DURATION: 10,
      KEYFRAMES: {
        START: { rotation: 0 },
        QUARTER: { rotation: 15 },
        HALF: { rotation: -5 },
        THREE_QUARTERS: { rotation: 15 },
        END: { rotation: 0 }
      }
    },
    SHADOW: {
      OFFSET_Y: 15,
      BLUR: 55,
      SPREAD: 20,
      OPACITY: 0.1
    },
    DIMENSIONS: {
      DEFAULT_SIZE: 300
    }
  };

  static defaultParams = {
    size: OneOrb.CONFIG.DIMENSIONS.DEFAULT_SIZE,
    rotationDegrees: OneOrb.CONFIG.ANIMATION.KEYFRAMES.QUARTER.rotation,
    animationDuration: OneOrb.CONFIG.ANIMATION.DURATION,
    shadowBlur: OneOrb.CONFIG.SHADOW.BLUR,
    shadowSpread: OneOrb.CONFIG.SHADOW.SPREAD,
    shadowOpacity: OneOrb.CONFIG.SHADOW.OPACITY
  };

  constructor(params = {}) {
    super(params.seed);
    this.params = { ...OneOrb.defaultParams, ...params };
    this.root = document.documentElement;
  }

  async generate() {
    // Set base properties
    this.root.style.setProperty('--orb-size', `${this.params.size}px`);
    this.root.style.setProperty('--orb-animation-duration', `${this.params.animationDuration}s`);
    this.root.style.setProperty('--orb-shadow-blur', `${this.params.shadowBlur}px`);
    this.root.style.setProperty('--orb-shadow-spread', `${this.params.shadowSpread}px`);
    this.root.style.setProperty('--orb-shadow-opacity', this.params.shadowOpacity);

    // Generate and set gradients
    const gradient1 = await this.getRandomLinearGradient(BasePattern.config);
    const gradient2 = await this.getRandomRadialGradient(BasePattern.config);
    const gradient3 = await this.getRandomLinearGradient(BasePattern.config);
    const gradient4 = await this.getRandomLinearGradient(BasePattern.config);

    this.root.style.setProperty('--orb-gradient-1', gradient1);
    this.root.style.setProperty('--orb-gradient-2', gradient2);
    this.root.style.setProperty('--orb-gradient-3', gradient3);
    this.root.style.setProperty('--orb-gradient-4', gradient4);

    return {
      css: `
        .orb {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: var(--orb-size);
          height: var(--orb-size);
          background: 
            var(--orb-gradient-1),
            var(--orb-gradient-2),
            var(--orb-gradient-3),
            var(--orb-gradient-4);
          border-radius: 100%;
          box-shadow: 0 var(--orb-shadow-spread) var(--orb-shadow-blur) 
                     var(--orb-shadow-spread) 
                     rgba(0, 0, 0, var(--orb-shadow-opacity));
          animation: var(--orb-animation-duration) warp infinite;
        }
      `,
      keyframes: `
        @keyframes warp {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          25% { transform: translate(-50%, -50%) rotate(var(--orb-rotation)); }
          50% { transform: translate(-50%, -50%) rotate(calc(var(--orb-rotation) * -0.33)); }
          75% { transform: translate(-50%, -50%) rotate(var(--orb-rotation)); }
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