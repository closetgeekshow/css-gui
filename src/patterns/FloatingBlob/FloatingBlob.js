/**
 * @file Floating blob animation with procedural generation capabilities
 * @module FloatingBlob
 * @requires BasePattern
 */

import BasePattern from '/patterns/BasePattern.js';

/**
 * @typedef {Object} TransformBounds
 * @property {Object} translate - Translation bounds
 * @property {Object} translate.x - X-axis translation bounds
 * @property {number} translate.x.min - Minimum X translation percentage
 * @property {number} translate.x.max - Maximum X translation percentage
 * @property {Object} translate.y - Y-axis translation bounds
 * @property {number} translate.y.min - Minimum Y translation percentage
 * @property {number} translate.y.max - Maximum Y translation percentage
 * @property {Object} rotate - Rotation bounds
 * @property {number} rotate.min - Minimum rotation in degrees
 * @property {number} rotate.max - Maximum rotation in degrees
 * @property {Object} scale - Scale bounds
 * @property {number} scale.min - Minimum scale factor
 * @property {number} scale.max - Maximum scale factor
 */

export default class FloatingBlob extends BasePattern {
  static discoverCSSVariables() {
    // Get all stylesheet rules
    const styleSheets = Array.from(document.styleSheets);
    const cssVars = new Map();

    styleSheets.forEach(sheet => {
      try {
        const rules = Array.from(sheet.cssRules);
        rules.forEach(rule => {
          const cssText = rule.cssText;
          // Match all CSS variable declarations
          const matches = cssText.match(/--[\w-]+:\s*[^;]+/g);
          if (matches) {
            matches.forEach(match => {
              const [name, value] = match.split(':').map(s => s.trim());
              // Analyze value type
              const type = this.inferVariableType(value);
              cssVars.set(name, { value, type, ...this.getVariableConstraints(type) });
            });
          }
        });
      } catch (e) {
        // Handle cross-origin stylesheet errors
      }
    });

    return Object.fromEntries(cssVars);
  }

  static inferVariableType(value) {
    if (value.endsWith('px')) return { type: 'size', unit: 'px' };
    if (value.endsWith('%')) return { type: 'percentage', unit: '%' };
    if (value.endsWith('deg')) return { type: 'angle', unit: 'deg' };
    if (value.endsWith('s')) return { type: 'time', unit: 's' };
    if (value.match(/^[\d.]+$/)) return { type: 'number' };
    if (value.startsWith('cubic-bezier')) return { type: 'timing-function' };
    if (value.startsWith('linear-gradient')) return { type: 'gradient' };
    return { type: 'string' };
  }

  static logCSSVariables() {
    const variables = this.discoverCSSVariables();
    
    // Create groups by type for better organization
    const groupedVars = Object.entries(variables).reduce((acc, [name, info]) => {
      const type = info.type.type || 'other';
      if (!acc[type]) acc[type] = {};
      acc[type][name] = info;
      return acc;
    }, {});
  
    // Output with console groups for better readability
    console.group('CSS Variables by Type');
    Object.entries(groupedVars).forEach(([type, vars]) => {
      console.group(type);
      console.table(vars);
      console.groupEnd();
    });
    console.groupEnd();
  }  

  static getVariableConstraints(typeInfo) {
    const constraints = {
      size: { min: 0, max: 1000 },
      percentage: { min: -100, max: 100 },
      angle: { min: -360, max: 360 },
      time: { min: 0, max: 30 },
      number: { min: 0, max: 1 }
    };
    return constraints[typeInfo.type] || {};
  }

  static CONFIG = {
    transform: {
      translate: {
        x: { min: -50, max: 50, default: 0, unit: '%' },
        y: { min: -30, max: 40, default: 0, unit: '%' }
      },
      rotate: { min: -60, max: 60, default: 0, unit: 'deg' },
      scale: { min: 1, max: 1.2, default: 1 }
    },
    borderRadius: {
      horizontal: { min: 20, max: 80, unit: '%' },
      vertical: { min: 15, max: 100, unit: '%' }
    },
    animation: {
      duration: { min: 5, max: 15, unit: 's' },
      bezier: {
        points: [
          { x: { min: 0, max: 1 }, y: { min: -1, max: 2 } },
          { x: { min: 0, max: 1 }, y: { min: -1, max: 2 } }
        ]
      }
    },
    blob: {
      size: { min: 20, max: 30, unit: 'rem' },
      opacity: { min: 0.3, max: 0.7, step: 0.1 },
      blur: { min: 1, max: 10, unit: 'px' }
    },
    cssVariables: this.discoverCSSVariables()
  };

  /**
 * Creates a new FloatingBlob instance
 * @param {number} seed - Random seed value
 */
  constructor(seed = 1) {
    super(seed);
    this.root = document.documentElement;
  }

  /**
 * Generates random transform properties within defined bounds
 * using seeded random number generation
 * @returns {void}
 */
  generate() {
    const config = FloatingBlob.CONFIG;
  
    // Set translations
    const translateX = this.getRandomXRange(config.transform.translate.x.min, config.transform.translate.x.max);
    const translateY = this.getRandomYRange(config.transform.translate.y.min, config.transform.translate.y.max);
  
    this.root.style.setProperty('--translate-x-start', `${translateX}%`);
    this.root.style.setProperty('--translate-y-start', `${translateY}%`);
  
    // Set rotation
    const rotation = this.getRandomDegRange(config.transform.rotate.min, config.transform.rotate.max);
    this.root.style.setProperty('--rotate-mid', `${rotation}deg`);
  
    // Set scale
    const scale = this.getRandomScale(config.transform.scale.min, config.transform.scale.max);
    this.root.style.setProperty('--scale-mid', scale);
  
    // Set gradient
    this.getRandomLinearGradient().then(gradient => {
      this.root.style.setProperty('--blob-gradient', gradient);
    });
  
    // Border radius
    this.root.style.setProperty('--border-radius-start', this.generateBorderRadius(config.borderRadius));
    this.root.style.setProperty('--border-radius-mid', this.generateBorderRadius(config.borderRadius));
    this.root.style.setProperty('--border-radius-end', this.generateBorderRadius(config.borderRadius));
  
    // Animation
    this.root.style.setProperty('--animation-duration', 
      `${this.getRandomRange(config.animation.duration.min, config.animation.duration.max)}s`);
    this.root.style.setProperty('--animation-timing', this.generateBezierCurve(config.animation.bezier));
  
    // Blob properties
    this.root.style.setProperty('--blob-size',
      `${this.getRandomRange(config.blob.size.min, config.blob.size.max)}rem`);
    this.root.style.setProperty('--blob-opacity',
      this.getRandomRange(config.blob.opacity.min, config.blob.opacity.max));
    this.root.style.setProperty('--blob-blur',
      `${this.getRandomRange(config.blob.blur.min, config.blob.blur.max)}px`);
  }
  /**
   * Initialize blob animation and event listeners
   * @returns {void}
   */
  initialize() {
    this.generate();
    document.querySelector('body').addEventListener('click', () => this.generate());
  }
}
// Initialize on DOM load
// Initializes the FloatingBlob component and logs the CSS variables used by the component when the DOM content has finished loading.

document.addEventListener('DOMContentLoaded', () => {
  const blob = new FloatingBlob(Math.floor(Math.random() * 99999));
  blob.initialize();
  FloatingBlob.logCSSVariables();
});
