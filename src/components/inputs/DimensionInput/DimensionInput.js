/**
 * @file Dimension input component for CSS size variables
 * @module DimensionInput
 * @requires BaseInput
 */

import { BaseInput } from '/src/components/inputs/BaseInput/BaseInput.js';

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
        
        // Create container element
        this.element = document.createElement('div');
        this.element.className = 'dimension-input';
        
        // Create number input
        this.numberInput = document.createElement('input');
        this.numberInput.type = 'number';
        this.numberInput.value = this.numericValue;
        this.numberInput.addEventListener('input', (e) => {
            const currentUnit = this.unitSelect.value; // Preserve current unit
            this.handleChange(`${e.target.value}${currentUnit}`);
        });
        
        // Create unit select
        this.unitSelect = document.createElement('select');
        this.units.forEach(unit => {
            const option = document.createElement('option');
            option.value = unit;
            option.textContent = unit;
            this.unitSelect.appendChild(option);
        });
        this.unitSelect.value = this.unit;
        this.unitSelect.addEventListener('change', (e) => {
            const currentNumber = this.numberInput.value; // Preserve current number
            this.handleChange(`${currentNumber}${e.target.value}`);
        });
        
        this.element.appendChild(this.numberInput);
        this.element.appendChild(this.unitSelect);
    }
    
    handleChange(newValue) {
        if (this.validate()) {
            this.value = newValue;
            [this.numericValue, this.unit] = this.parseValue(newValue);
            this.numberInput.value = this.numericValue;
            this.unitSelect.value = this.unit;
            this.onChange(this.variable, this.value);
        }
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