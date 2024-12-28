/**
 * @file Color picker input component for CSS color variables
 * @module ColorInput
 * @requires BaseInput
 * @requires vanilla-picker
 */


import { BaseInput } from '/src/components/inputs/BaseInput/BaseInput.js';
import Picker from '/node_modules/vanilla-picker/dist/vanilla-picker.mjs';
/**
 * Input component for handling CSS color values
 * @class
 * @extends BaseInput
 */
export class ColorInput extends BaseInput {
    /**
     * @constructor
     * @param {string} variable - CSS variable name
     * @param {string} value - Initial color value
     * @param {function} onChange - Change handler callback
     */
    constructor(variable, value, onChange) {
        super(variable, value, onChange);
        
        // Inject component styles if not already present
        if (!document.querySelector('#color-input-styles')) {
            const styles = document.createElement('style');
            styles.id = 'color-input-styles';
            styles.textContent = `
                .color-input {
                    display: inline-block;
                }
                
                .color-preview {
                    width: 40px;
                    height: 40px;
                    border: 2px solid #ccc;
                    border-radius: 4px;
                    cursor: pointer;
                }
                
                .color-preview:hover {
                    border-color: #999;
                }
                
                .color-preview:focus {
                    outline: none;
                    border-color: #666;
                    box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
                }
            `;
            document.head.appendChild(styles);
        }
        
        // Create container element
        this.element = document.createElement('div');
        this.element.className = 'color-input';
        
        // Create color preview button
        this.preview = document.createElement('button');
        this.preview.className = 'color-preview';
        this.preview.style.backgroundColor = this.value;
        
        this.element.appendChild(this.preview);
        
        // Initialize color picker
        this.picker = new Picker({
            parent: this.preview,
            color: this.value,
            popup: 'right',
            onChange: (color) => {
                this.handleChange(color.hex);
            }
        });
    }
    
    /**
     * @override
     * Handles value changes with validation
     * @param {string} newValue - New color value
     */
    handleChange(newValue) {
        if (this.validate()) {
            this.value = newValue;
            this.preview.style.backgroundColor = newValue;
            this.onChange(this.variable, this.value);
        }
    }
}

