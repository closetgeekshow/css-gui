# Color Input

Color picker component for CSS color variables using vanilla-picker.

## Usage

    import { ColorInput } from './ColorInput.js';
    
    const input = new ColorInput('--primary-color', '#ff0000', (variable, value) => {
        console.log(`${variable} changed to ${value}`);
    });

## Features
- Color picker popup interface
- HEX color value handling
- Real-time color preview
- Supports all CSS color formats

## API

### constructor(variable, value, onChange)
- `variable` {string} - CSS variable name
- `value` {string} - Initial color value
- `onChange` {function} - Change handler callback
