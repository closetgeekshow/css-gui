# Base Input

Core input component that provides shared functionality for all CSS variable inputs.

## Usage

    import { BaseInput } from './BaseInput.js';
    
    const input = new BaseInput('--variable', 'value', (variable, value) => {
        console.log(`${variable} changed to ${value}`);
    });
    
    input.handleChange('newValue');
    
    if (input.validate()) {
        console.log('Value is valid');
    }

## Features
- Value validation system
- Error tracking
- Reset functionality
- Standardized change handling
- Initial value preservation

## API

### constructor(variable, value, onChange)
- `variable` {string} - CSS variable name
- `value` {string} - Initial value
- `onChange` {function} - Change handler callback

### validate()
- Returns: {boolean} - Validation result

### reset()
- Resets to initial value

### handleChange(newValue)
- `newValue` {string} - New value to set

### getErrors()
- Returns: {Array<string>} - Current validation errors

### getValue()
- Returns: {string} - Current value
