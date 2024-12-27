/**
 * @file Range slider input component for numeric CSS variables
 * @module RangeInput
 * @requires BaseInput
 */

import { BaseInput } from '../BaseInput';

/**
 * Input component for handling numeric range values
 * @class
 * @extends BaseInput
 */
export class RangeInput extends BaseInput {
    /**
     * @constructor
     * @param {string} variable - CSS variable name
     * @param {string} value - Initial numeric value
     * @param {function} onChange - Change handler callback
     */
    constructor(variable, value, onChange) {
        super(variable, value, onChange);
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.numericValue = this.parseValue(value);
    }
    
    /**
     * Converts string value to number
     * @param {string} value - Value to parse
     * @returns {number} Parsed numeric value
     */
    parseValue(value) {
        return parseFloat(value) || 0;
    }
    
    /**
     * Sets range constraints
     * @param {number} min - Minimum allowed value
     * @param {number} max - Maximum allowed value
     * @param {number} step - Step increment value
     */
    setRange(min, max, step) {
        this.min = min;
        this.max = max;
        this.step = step;
    }
}