# Dimension Input

Input component for CSS dimension values with unit selection.

## Usage

    import { DimensionInput } from './dimensionInput.js';
    
    const input = new DimensionInput('--spacing', '16px', (variable, value) => {
        console.log(`${variable} changed to ${value}`);
    });
    
    // Access parsed values
    console.log(input.numericValue); // 16
    console.log(input.unit);         // 'px'

## Supported Units
- px
- rem
- em
- vh
- vw
- %

## API

### constructor(variable, value, onChange)
- `variable` {string} - CSS variable name
- `value` {string} - Initial dimension value
- `onChange` {function} - Change handler callback

### parseValue(value)
- `value` {string} - Dimension value to parse
- Returns: {Array} - [numericValue, unit]
