/**
 * @file Base class for all CSS variable input components
 * @module BaseInput
 * @requires UIUtils
 */

import { UIUtils } from '/src/utils/uiUtils/uiUtils.js';

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
        this.errors = new Map();
        
        // Using UIUtils for consistent element creation
        this.element = UIUtils.createContainer('base-input');
        
        // Add common input styles
        UIUtils.injectStyles('base-input-styles', `
            .base-input {
                display: flex;
                margin: 8px 0;
            }
        `);
    }
    
    /**
     * Validates the current input value
     * @returns {boolean} True if valid, false otherwise
     */
    validate() {
        this.clearErrors();
        if (!this.value) {
            this.addError('validation', 'Value cannot be empty');
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
        const transformedValue = this.transformValue(newValue);
        if (this.validate()) {
            this.value = transformedValue;
            this.updateUI(transformedValue);
            this.onChange(this.variable, this.value);
        }
    }
    
    /**
     * Returns current validation errors
     * @returns {Map<string, string>} Map of error categories and messages
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

    /**
     * Adds an error message for specified category
     * @param {string} category - Error category (validation, parsing, etc)
     * @param {string} message - Error message
     */
    addError(category, message) {
        this.errors.set(category, message);
    }

    /**
     * Clears all errors or errors of specific category
     * @param {string} [category] - Optional category to clear
     */
    clearErrors(category) {
        if (category) {
            this.errors.delete(category);
        } else {
            this.errors.clear();
        }
    }

    /**
     * Transforms input value before update
     * @param {string} value - Value to transform
     * @returns {string} Transformed value
     * @abstract
     */
    transformValue(value) {
        return value;
    }

    /**
     * Updates UI elements with new value
     * @param {string} value - Value to display
     * @abstract
     */
    updateUI(value) {
        // Implement in subclasses
    }
}