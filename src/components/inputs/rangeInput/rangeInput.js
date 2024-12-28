/**
 * @file Range slider input component for numeric CSS variables
 * @module RangeInput
 * @requires BaseInput
 * @requires ValueParser
 */

import { BaseInput } from '../baseInput/baseInput.js';
import { ValueParser } from '../../../utils/valueParser/valueParser.js';

export class RangeInput extends BaseInput {
    constructor(variable, value, onChange) {
        super(variable, value, onChange);
        
        this.numericValue = ValueParser.parseNumeric(value);
        
        this.rangeInput = UIUtils.createInput('range', {
            min: 0,
            max: 1,
            step: 0.1,
            value: this.numericValue,
            className: 'range-slider'
        });
        
        this.valueLabel = UIUtils.createContainer('range-value');
        this.valueLabel.textContent = this.numericValue;
        
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

    setRange(min, max, step) {
        Object.assign(this.rangeInput, { min, max, step });
    }
}