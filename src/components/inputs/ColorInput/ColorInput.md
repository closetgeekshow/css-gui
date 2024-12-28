# Color Input

Color picker component for CSS color variables using vanilla-picker.

## Usage

    import { ColorInput } from './ColorInput.js';
    
    const input = new ColorInput('--primary-color', '#ff0000', (variable, value) => {
        console.log(`${variable} changed to ${value}`);
    });
    
    // Add to DOM
    container.appendChild(input.element);

## Features
- Color picker popup interface
- Color preview element
- HEX color value handling
- Real-time preview updates
- Supports all CSS color formats

## API

### constructor(variable, value, onChange)
- `variable` {string} - CSS variable name
- `value` {string} - Initial color value
- `onChange` {function} - Change handler callback

### element
- {HTMLElement} - Main component container element

### preview
- {HTMLElement} - Color preview element

### handleChange(newValue)
- `newValue` {string} - New color value to set
