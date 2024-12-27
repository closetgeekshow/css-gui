/**
 * @file Color picker input component for CSS color variables
 * @module ColorInput
 * @requires BaseInput
 * @requires vanilla-picker
 */

import { BaseInput } from './BaseInput';
import Picker from 'vanilla-picker';

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
        this.picker = new Picker({
            color: this.value,
            onChange: (color) => {
                this.onChange(this.variable, color.hex);
            }
        });
    }
}
