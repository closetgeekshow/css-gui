/**
 * @file Color picker input component for CSS color variables
 * @module ColorInput
 * @requires BaseInput
 * @requires vanilla-picker
 * @requires UIUtils
 * @requires ValueParser
 */

import { BaseInput } from '/src/components/inputs/baseInput/baseInput.js';
import { UIUtils } from '/src/utils/uiUtils/uiUtils.js';
import { ValueParser } from '/src/utils/valueParser/valueParser.js';
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
        
        // Inject component styles
        UIUtils.injectStyles('color-input-styles', `
            .color-input { display: inline-block; }
            .color-preview {
                width: 40px;
                height: 40px;
                border: 2px solid #ccc;
                border-radius: 4px;
                cursor: pointer;
            }
        `);
        
        this.preview = UIUtils.createInput('button', {
            className: 'color-preview',
            style: { backgroundColor: this.value }
        });
        
        this.element.appendChild(this.preview);
        
        this.initializePicker();
    }

    /**
     * @override
     * Transforms and validates color values
     * @param {string} value - Color value to transform
     * @returns {string} Validated color value
     */
    transformValue(value) {
        try {
            return ValueParser.parseColor(value);
        } catch (error) {
            this.addError('parsing', error.message);
            return this.value; // Return current value if invalid
        }
    }

    /**
     * @override
     * Updates color preview UI
     * @param {string} value - Color value to display
     */
    updateUI(value) {
        this.preview.style.backgroundColor = value;
    }

    /**
     * Initializes the color picker
     * @private
     */
    initializePicker() {
        this.picker = new Picker({
            parent: this.preview,
            color: this.value,
            popup: 'right',
            onChange: (color) => {
                this.handleChange(color.hex);
            }
        });
    }
}
