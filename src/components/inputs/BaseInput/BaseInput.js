/**
 * @file Base class for all CSS variable input components
 * @module BaseInput
 */

/**
 * Base input component that handles common functionality for all CSS variable inputs
 * @class
 */
export class BaseInput {
    /**
     * Base input component for handling CSS variable changes
     * @class BaseInput
     * @classdesc Provides core input functionality for CSS variable manipulation
     * 
     * @constructor
     * @param {string} variable - CSS variable name (e.g. --primary-color)
     * @param {string} value - Initial value for the input
     * @param {function} onChange - Callback function when value changes
     * @returns {void}
     * 
     * @example
     * const input = new BaseInput('--primary-color', '#ffffff', (newValue) => {
     *   console.log(newValue);
     * });
     */
    constructor(variable, value, onChange) {
        this.variable = variable;
        this.value = value;
        this.initialValue = value;
        this.onChange = onChange;
        this.errors = [];
        
        // Create base element
        this.element = document.createElement('input');
        this.element.type = 'text';
        this.element.value = value;
        this.element.addEventListener('input', (e) => {
            this.handleChange(e.target.value);
        });
    }
    
    /**
     * Validates the current input value
     * @returns {boolean} True if valid, false otherwise
     */
    validate() {
        this.errors = [];
        if (!this.value) {
            this.errors.push('Value cannot be empty');
            return false;
        }
        return true;
    }
    
    /**
     * Resets input to initial value
     */
    reset() {
        this.value = this.initialValue;
        this.onChange(this.variable, this.value);
    }
    
    /**
     * Handles value changes with validation
     * @param {string} newValue - New value to set
     */
    handleChange(newValue) {
        if (this.validate()) {
            this.value = newValue;
            this.onChange(this.variable, this.value);
        }
    }
    
    /**
     * Returns current validation errors
     * @returns {Array<string>} List of error messages
     */
    getErrors() {
        return this.errors;
    }
    
    /**
     * Returns current input value
     * @returns {string} Current value
     */
    getValue() {
        return this.value;
    }
}