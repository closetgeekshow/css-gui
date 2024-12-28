/**
 * @file Value parsing and validation utilities
 * @module ValueParser
 */
export class ValueParser {
    /**
     * Parses and validates dimension values
     * @param {string} value - CSS dimension value
     * @returns {Object} Parsed value with unit and numeric components
     * @throws {Error} If value is invalid
     */
    static parseDimension(value) {
        const match = value.match(/^([\d.]+)(\D+)$/);
        if (!match) {
            throw new Error('Invalid dimension format');
        }
        return {
            value: parseFloat(match[1]),
            unit: match[2]
        };
    }

    /**
     * Parses and validates numeric values
     * @param {string} value - Numeric value
     * @returns {number} Parsed number
     * @throws {Error} If value is not numeric
     */
    static parseNumeric(value) {
        const num = parseFloat(value);
        if (isNaN(num)) {
            throw new Error('Invalid numeric value');
        }
        return num;
    }

    /**
     * Validates color values
     * @param {string} value - CSS color value
     * @returns {string} Validated color value
     * @throws {Error} If color format is invalid
     */
    static parseColor(value) {
        // Add color validation logic
        const isValid = /^#([0-9A-F]{3}){1,2}$/i.test(value) || 
                       /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/i.test(value);
        if (!isValid) {
            throw new Error('Invalid color format');
        }
        return value;
    }
}
