/**
 * @file Base pattern generation functionality and color utilities
 * @module BasePattern
 */

export const config = {
  transform: {
    rotate: { min: -360, max: 360, default: 0, unit: "deg" },
    scale: { min: 1, max: 1.2, default: 1 },
  },
  borderRadius: {
    horizontal: { min: 20, max: 80, unit: "%" },
    vertical: { min: 15, max: 100, unit: "%" },
  },
};

export default class BasePattern {
  constructor(seed = 1) {
    this.seed = seed;
    this.currentSeed = seed;
  }

  // Seeded random number generator using mulberry32
  random() {
    let t = (this.currentSeed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  /**
   * Gets a random value within X translation range
   * @param {number} min - Minimum percentage value
   * @param {number} max - Maximum percentage value
   * @returns {number} Random X translation percentage
   */
  getRandomXRange(min, max) {
    return this.random() * (max - min) + min;
  }

  /**
   * Gets a random value within Y translation range
   * @param {number} min - Minimum percentage value
   * @param {number} max - Maximum percentage value
   * @returns {number} Random Y translation percentage
   */
  getRandomYRange(min, max) {
    return this.random() * (max - min) + min;
  }

  /**
   * Gets a random value within degree range
   * @param {number} min - Minimum degrees
   * @param {number} max - Maximum degrees
   * @returns {number} Random rotation in degrees
   */
  getRandomDegRange(
    min = config.transform.rotate.min,
    max = config.transform.rotate.max
  ) {
    return this.random() * (max - min) + min;
  }

  /**
   * Gets a random scale value
   * @param {number} min - Minimum scale factor
   * @param {number} max - Maximum scale factor
   * @returns {number} Random scale value
   */
  getRandomScale(min, max) {
    return this.random() * (max - min) + min;
  }

  /**
   * Fetches and generates a random gradient from available UI patterns
   * @async
   * @returns {Promise<string>} CSS linear-gradient string
   */
  async getRandomLinearGradient(config) {
    const response = await fetch("/uiPatterns.json");
    const patterns = await response.json();
    const patternIndex = Math.floor(this.random() * patterns.length);
    const pattern = patterns[patternIndex];

    return `linear-gradient(${this.getRandomDegRange(
      config.transform.rotate.min,
      config.transform.rotate.max
    )}deg, ${pattern.colors
      .map((color, i) => `${color} ${(i * 100) / (pattern.colors.length - 1)}%`)
      .join(", ")})`;
  }

  /**
   * @public
   * @param {Object} params - Parameters object to randomize
   * @param {Object} ranges - Object defining min/max ranges for each param
   * @returns {Object} Updated params object with randomized values
   */
  randomizeParams(params, ranges) {
    params.seed = this.currentSeed;

    for (const [key, range] of Object.entries(ranges)) {
      if (range.min !== undefined && range.max !== undefined) {
        if (Number.isInteger(range.min) && Number.isInteger(range.max)) {
          params[key] =
            Math.floor(this.random() * (range.max - range.min + 1)) + range.min;
        } else {
          params[key] = this.random() * (range.max - range.min) + range.min;
        }
      }
    }

    return params;
  }

  /**
   * Generates a random border radius string with 8 values (4 horizontal/4 vertical)
   * @param {Object} config - Border radius configuration
   * @param {Object} config.horizontal - Horizontal radius bounds
   * @param {number} config.horizontal.min - Minimum horizontal percentage
   * @param {number} config.horizontal.max - Maximum horizontal percentage
   * @param {Object} config.vertical - Vertical radius bounds
   * @param {number} config.vertical.min - Minimum vertical percentage
   * @param {number} config.vertical.max - Maximum vertical percentage
   * @returns {string} CSS border-radius value
   */
  generateBorderRadius(config) {
    const h = config.horizontal;
    const v = config.vertical;

    const horizontalValues = Array.from(
      { length: 4 },
      () => `${this.random() * (h.max - h.min) + h.min}%`
    );

    const verticalValues = Array.from(
      { length: 4 },
      () => `${this.random() * (v.max - v.min) + v.min}%`
    );

    return `${horizontalValues.join(" ")} / ${verticalValues.join(" ")}`;
  }

  /**
   * Generates a random cubic bezier curve string
   * @param {Object} config - Bezier configuration
   * @param {Array<Object>} config.points - Control points configuration
   * @param {Object} config.points[].x - X coordinate bounds
   * @param {Object} config.points[].y - Y coordinate bounds
   * @returns {string} CSS cubic-bezier function
   */
  generateBezierCurve(config) {
    const points = config.points.map((point) => ({
      x: this.random() * (point.x.max - point.x.min) + point.x.min,
      y: this.random() * (point.y.max - point.y.min) + point.y.min,
    }));

    return `cubic-bezier(${points.map((p) => `${p.x}, ${p.y}`).join(", ")})`;
  }

  /**
   * Gets a random value within specified range
   * @param {number} min - Minimum value
   * @param {number} max - Maximum value
   * @returns {number} Random value between min and max
   */
  getRandomRange(min, max) {
    return this.random() * (max - min) + min;
  }

  /**
   * @abstract
   * @public
   * @returns {string} CSS gradient string for the pattern
   * @throws {Error} When child class doesn't implement generate()
   */
  generate() {
    throw new Error("Generate method must be implemented by child class");
  }

  async getRandomRadialGradient() {
    const response = await fetch("/uiPatterns.json");
    const patterns = await response.json();
    const patternIndex = Math.floor(this.random() * patterns.length);
    const pattern = patterns[patternIndex];

    return `radial-gradient(ellipse at center, ${pattern.colors
      .map((color, i) => `${color} ${(i * 100) / (pattern.colors.length - 1)}%`)
      .join(", ")})`;
  }
}
