# Variable Parser

Extracts CSS custom properties from CSS text using css-tree AST parsing.

## Usage

        import { VariableParser } from './variableParser.js';
        
        const css = `
        :root {
            --primary-color: #ff0000;
            --spacing: 1rem;
        }`;
        
        const variables = VariableParser.extract(css);
        // Result: { 
        //   '--primary-color': '#ff0000',
        //   '--spacing': '1rem'
        // }

## API

### VariableParser.extract(cssText)
- `cssText` {string} - Raw CSS content to parse
- Returns: {Object} - Map of variable names to their values
