/**
 * @file Dimension input component for CSS size variables
 * @module DimensionInput
 * @requires BaseInput
 * @requires ValueParser
 * @requires CSSUnitsManager
 * @requires UIUtils
 */

import { BaseInput } from '/src/components/inputs/baseInput/baseInput.js';
import { ValueParser } from '/src/utils/valueParser/valueParser.js';
import { CSSUnitsManager } from '/src/utils/cssUnitsManager/cssUnitsManager.js';
import { UIUtils } from '/src/utils/uiUtils/uiUtils.js';

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
        
        const { value: numericValue, unit } = ValueParser.parseDimension(value);
        this.numericValue = numericValue;
        this.unit = unit;

        UIUtils.injectStyles('dimension-input-styles', `
            .dimension-input {
                display: flex;
                gap: 8px;
                align-items: center;
            }
            .dimension-number {
                width: 80px;
            }
            .dimension-unit {
                width: 70px;
            }
        `);
        
        this.numberInput = UIUtils.createInput('number', {
            value: this.numericValue,
            className: 'dimension-number'
        });
        
        this.unitSelect = document.createElement('select');
        this.unitSelect.className = 'dimension-unit';
        
        this.element.appendChild(this.numberInput);
        this.element.appendChild(this.unitSelect);
        
        this.initializeUnits();
        this.setupEventListeners();
    }

    async initializeUnits() {
        await CSSUnitsManager.initialize();
        const units = CSSUnitsManager.getLengthUnits();
        
        // Refresh the unit select options
        this.unitSelect.innerHTML = '';
        units.forEach(unit => {
            const option = UIUtils.createInput('option', {
                value: unit,
                textContent: unit
            });
            this.unitSelect.appendChild(option);
        });
        
        // Restore current unit selection
        this.unitSelect.value = this.unit;
    }

    transformValue(value) {
        try {
            const parsed = ValueParser.parseDimension(value);
            return `${parsed.value}${parsed.unit}`;
        } catch (error) {
            this.addError('parsing', error.message);
            return this.value;
        }
    }

    updateUI(value) {
        const { value: num, unit } = ValueParser.parseDimension(value);
        this.numberInput.value = num;
        this.unitSelect.value = unit;
    }

    setupEventListeners() {
        this.numberInput.addEventListener('input', (e) => {
            this.handleChange(`${e.target.value}${this.unitSelect.value}`);
        });
        
        this.unitSelect.addEventListener('change', (e) => {
            this.handleChange(`${this.numberInput.value}${e.target.value}`);
        });
    }
}