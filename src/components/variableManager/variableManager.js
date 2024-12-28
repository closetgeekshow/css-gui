import { TypeDetector } from '/src/components/typeDetector/typeDetector.js';
import { VariableParser } from '/src/components/variableParser/variableParser.js';

export class VariableManager {
    constructor() {
        this.variables = new Map();
    }

    loadFromCss(cssText) {
        const extracted = VariableParser.extract(cssText);
        
        for (const [name, value] of Object.entries(extracted)) {
            // Strip any whitespace from the value
            const cleanValue = value.trim();
            
            // Detect the type using our improved TypeDetector
            const type = TypeDetector.detect(cleanValue);
            
            // Store both the original value and detected type
            this.variables.set(name, {
                value: cleanValue,
                type,
                original: value // Keep original for reference
            });
        }
        
        return this.variables;
    }

    // Add helper methods for working with variables
    getVariable(name) {
        return this.variables.get(name);
    }

    getAllOfType(type) {
        return Array.from(this.variables.entries())
            .filter(([_, data]) => data.type === type);
    }
}