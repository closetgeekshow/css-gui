/**
 * @file Range slider input component for numeric CSS variables
 * @module RangeInput
 * @requires BaseInput
 */

import { BaseInput } from '/src/components/inputs/BaseInput/BaseInput.js';

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
        
        // Create container for range and label
        this.element = document.createElement('div');
        this.element.className = 'range-input';
        
        // Parse initial value first
        this.numericValue = this.parseValue(value);
        
        // Configure range input with constraints before setting value
        this.min = 0;
        this.max = 1;
        this.step = 0.1;
        
        // Create and configure range input
        this.rangeInput = document.createElement('input');
        this.rangeInput.type = 'range';
        this.rangeInput.min = this.min;
        this.rangeInput.max = this.max;
        this.rangeInput.step = this.step;
        this.rangeInput.value = this.numericValue; // Set after constraints
        
        this.rangeInput.addEventListener('input', (e) => {
            this.handleChange(e.target.value);
        });
        
        // Create and set value label
        this.valueLabel = document.createElement('span');
        this.valueLabel.className = 'range-value';
        this.valueLabel.textContent = this.numericValue;
        
        // Assemble UI
        this.element.appendChild(this.rangeInput);
        this.element.appendChild(this.valueLabel);
    }
    
    parseValue(value) {
        // Handle values like "0.5" or ".5"
        return parseFloat(value) || 0;
    }    
    handleChange(newValue) {
        if (this.validate()) {
            this.value = newValue;
            this.valueLabel.textContent = newValue;
            this.rangeInput.value = newValue;
            this.onChange(this.variable, this.value);
        }
    }
    
    setRange(min, max, step) {
        this.min = min;
        this.max = max;
        this.step = step;
        
        this.rangeInput.min = min;
        this.rangeInput.max = max;
        this.rangeInput.step = step;
    }
}