# CSS Variable Extractor

Extracts CSS custom properties (variables) from CSS text.

## Usage

        import { CssVarExtractor } from './cssVarExtractor.js';
        
        const css = `
        :root {
            --primary-color: #ff0000;
        }`;
        
        const variables = CssVarExtractor.extract(css);
        // Result: { '--primary-color': '#ff0000' }

## API

### CssVarExtractor.extract(cssText)
- `cssText` {string} - Raw CSS content to parse  
- Returns: {Object} - Map of variable names to their values
