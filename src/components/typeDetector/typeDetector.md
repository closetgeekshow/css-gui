# Type Detector

Detects and categorizes CSS value types using css-tree lexer.

## Usage

        import { TypeDetector } from './typeDetector.js';
        
        // Detect color values
        const colorType = TypeDetector.detect('#ff0000');  // returns 'color'
        
        // Detect dimension values
        const sizeType = TypeDetector.detect('16px');      // returns 'dimension'
        
        // Detect number values
        const numType = TypeDetector.detect('0.5');        // returns 'number'

## Supported Types
- color: Any valid CSS color value
- dimension: Values with units (px, rem, em, etc)
- number: Plain numeric values
- text: Default for unrecognized values

## API

### TypeDetector.detect(value)
- `value` {string} - CSS value to analyze
- Returns: {string} - Detected type name
