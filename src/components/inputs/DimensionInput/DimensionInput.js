/**
 * @file Dimension input component for CSS size variables
 * @module DimensionInput
 * @requires BaseInput
 */

import { BaseInput } from '../BaseInput';

/**
 * Input component for handling CSS dimension values (px, rem, etc)
 * @class
 * @extends BaseInput
 */
export class DimensionInput extends BaseInput {
    /**
     * @constructor
     * @param {string} variable - CSS variable name
     * @param {string} value - Initial dimension value
     * @param {function} onChange - Change handler callback
     */
    constructor(variable, value, onChange) {
        super(variable, value, onChange);
        this.units = ['px', 'rem', 'em', 'vh', 'vw', '%'];
        [this.numericValue, this.unit] = this.parseValue(value);
    }
    
    /**
     * Parses dimension value into number and unit
     * @param {string} value - Value to parse (e.g. "100px")
     * @returns {Array} [number, unit]
     */
    parseValue(value) {
        const match = value.match(/^([\d.]+)(\D+)$/);
        return match ? [parseFloat(match[1]), match[2]] : [0, 'px'];
    }
}