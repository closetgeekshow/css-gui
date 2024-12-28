import * as csstree from '/node_modules/css-tree/dist/csstree.esm.js';

export class TypeDetector {
    static detect(value) {
        try {
            // First try parsing as a complete value
            const ast = csstree.parse(value, { 
                context: 'value',
                onParseError: () => {} // Suppress parse errors
            });

            // Handle numeric values with decimal points
            if (value.match(/^\d*\.?\d+$/)) {
                return 'number';
            }

            // Handle dimensions (numbers with units)
            if (value.match(/^\d*\.?\d+(px|em|rem|%|vh|vw|s|ms)$/)) {
                return 'dimension';
            }

            // Handle colors
            if (value.match(/^#[0-9a-f]{3,8}$/i) || 
                value.match(/^(rgb|rgba|hsl|hsla)\(/i)) {
                return 'color';
            }

            return 'text';
        } catch (e) {
            // Fallback parsing for partial input
            return this.detectPartialValue(value);
        }
    }

    static detectPartialValue(value) {
        // Handle partial numeric input
        if (value.match(/^\d*\.?\d*$/)) {
            return 'number';
        }
        return 'text';
    }
}