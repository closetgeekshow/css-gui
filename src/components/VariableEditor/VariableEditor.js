/**
 * @file Main UI component for CSS variable editing
 * @module VariableEditor
 * @requires VariableManager
 * @requires TypeDetector
 * @requires ColorInput
 * @requires RangeInput
 * @requires DimensionInput
 * @requires BaseInput
 */

import { ColorInput } from '/src/components/inputs/ColorInput/ColorInput.js';
import { RangeInput } from '/src/components/inputs/RangeInput/RangeInput.js';
import { DimensionInput } from '/src/components/inputs/DimensionInput/DimensionInput.js';
import { BaseInput } from '/src/components/inputs/BaseInput/BaseInput.js';
import { PresetManager } from '/src/components/PresetManager/PresetManager.js';



export class VariableEditor {
  /**
   * @constructor
   * @param {HTMLElement} container - DOM element to mount editor
   * @param {VariableManager} variableManager - Instance of variable manager
   */
  constructor(container, variableManager) {
    this.container = container;
    this.manager = variableManager;
    this.inputs = new Map();
    this.previewStyle = document.createElement("style");
    document.head.appendChild(this.previewStyle);

    // Bind the method to maintain correct 'this' context
    this.handleVariableChange = this.handleVariableChange.bind(this);

    this.presetManager = new PresetManager(this);
    this.container.appendChild(this.presetManager.element);
   
  }

  /**
   * Renders the variable editor UI
   */
  render() {
    this.container.innerHTML = "";
    const list = document.createElement("div");
    list.className = "variable-list";

    for (const [name, data] of this.manager.variables) {
      const row = this.createVariableRow(name, data);
      list.appendChild(row);
    }

    this.container.appendChild(list);
  }

  /**
   * Creates input row for a variable
   * @param {string} name - Variable name
   * @param {Object} data - Variable data including type and value
   * @returns {HTMLElement} Row element containing variable input
   */
  createVariableRow(name, data) {
    const row = document.createElement("div");
    row.className = "variable-row";

    // Label
    const label = document.createElement("label");
    label.textContent = name;

    // Create appropriate input based on type
    const input = this.createInputForType(name, data);

    row.appendChild(label);
    row.appendChild(input.element);

    return row;
  }

  /**
   * Updates preview styles
   */
  updatePreview() {
    const css = Array.from(this.inputs.entries())
      .map(([name, input]) => `${name}: ${input.getValue()};`)
      .join("\n");

    this.previewStyle.textContent = `:root {\n${css}\n}`;
  }

  /**
   * Creates appropriate input component based on variable type
   * @param {string} name - Variable name
   * @param {Object} data - Variable data including type and value
   * @returns {BaseInput} Input component instance
   */
  createInputForType(name, data) {
    let input;
    
    switch (data.type) {
      case 'color':
        input = new ColorInput(name, data.value, this.handleVariableChange);
        break;
      case 'dimension':
        input = new DimensionInput(name, data.value, this.handleVariableChange);
        break;
      case 'number':
        input = new RangeInput(name, data.value, this.handleVariableChange);
        input.setRange(0, 1, 0.1);
        break;
      default:
        input = new BaseInput(name, data.value, this.handleVariableChange);
    }
    
    this.inputs.set(name, input);
    return input;
  }
  /**
   * Handles variable value changes
   * @param {string} variable - Variable name
   * @param {string} value - New value
   */
  handleVariableChange(variable, value) {
    const input = this.inputs.get(variable);
    if (input) {
        input.value = value;  // Update the input's value directly
        this.updatePreview(); // Update the preview with new values
    }
  }
}
