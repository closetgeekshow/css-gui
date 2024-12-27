# Range Input

Numeric range input component with min/max constraints for CSS numeric values.

## Usage

    import { RangeInput } from './RangeInput.js';
    
    const input = new RangeInput('--opacity', '0.5', (variable, value) => {
        console.log(`${variable} changed to ${value}`);
    });
    
    // Configure range constraints
    input.setRange(0, 1, 0.1);

## Features
- Configurable min/max values
- Adjustable step increments
- Automatic numeric parsing
- Value validation within bounds

## API

### constructor(variable, value, onChange)
- `variable` {string} - CSS variable name
- `value` {string} - Initial numeric value
- `onChange` {function} - Change handler callback

### setRange(min, max, step)
- `min` {number} - Minimum allowed value
- `max` {number} - Maximum allowed value
- `step` {number} - Step increment value
