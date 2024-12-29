/**
 * @file Range slider input component for numeric CSS variables
 * @module RangeInput
 * @requires BaseInput
 * @requires ValueParser
 * @requires UIUtils
 */

import { BaseInput } from '/src/components/inputs/baseInput/baseInput.js';
import { ValueParser } from '/src/utils/valueParser/valueParser.js';
import { UIUtils } from '/src/utils/uiUtils/uiUtils.js';

export class RangeInput extends BaseInput {
    constructor(variable, value, onChange) {
        super(variable, value, onChange);
        
        this.numericValue = ValueParser.parseNumeric(value);

        UIUtils.injectStyles('range-input-styles', `
            .range-container {
                display: flex;
                gap: 12px;
                align-items: center;
            }
            .range-slider {
                flex: 1;
                min-width: 150px;
            }
            .range-value {
                min-width: 40px;
                text-align: right;
            }
        `);
        
        this.rangeInput = UIUtils.createInput('range', {
            min: 0,
            max: 1,
            step: 0.1,
            value: this.numericValue,
            className: 'range-slider'
        });
        
        this.valueLabel = UIUtils.createContainer('range-value');
        this.valueLabel.textContent = this.numericValue;
        
        this.element.className = 'range-container';
        this.element.appendChild(this.rangeInput);
        this.element.appendChild(this.valueLabel);
        
        this.setupEventListeners();
    }

    transformValue(value) {
        try {
            return ValueParser.parseNumeric(value).toString();
        } catch (error) {
            this.addError('parsing', error.message);
            return this.value;
        }
    }

    updateUI(value) {
        const numValue = ValueParser.parseNumeric(value);
        this.rangeInput.value = numValue;
        this.valueLabel.textContent = numValue;
    }

    setupEventListeners() {
        this.rangeInput.addEventListener('input', (e) => {
            this.handleChange(e.target.value);
        });
    }

    /**
     * Sets the range constraints for the slider
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @param {number} step - Step increment
     */
    setRange(min, max, step) {
        Object.assign(this.rangeInput, { min, max, step });
    }
}