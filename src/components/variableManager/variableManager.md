# Variable Manager

Manages CSS variables with type detection and validation.

## Usage

        import { VariableManager } from './variableManager.js';
        
        const manager = new VariableManager();
        
        const css = `
        :root {
            --primary-color: #ff0000;
            --spacing: 1rem;
        }`;
        
        const variables = manager.loadFromCss(css);
        // Result: Map {
        //   '--primary-color' => {value: '#ff0000', type: 'color'},
        //   '--spacing' => {value: '1rem', type: 'dimension'}
        // }

## API

### constructor()
Creates new VariableManager instance with empty variables Map

### loadFromCss(cssText)
- `cssText` {string} - CSS content to parse
- Returns: {Map} - Variables with their values and detected types
- Uses static methods from VariableParser and TypeDetector internally