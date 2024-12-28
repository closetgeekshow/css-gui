import { DimensionInput } from './dimensionInput.js';

describe('DimensionInput', () => {
    test('parses pixel values correctly', () => {
        const input = new DimensionInput('--test', '16px', () => {});
        expect(input.numericValue).toBe(16);
        expect(input.unit).toBe('px');
    });

    test('parses rem values correctly', () => {
        const input = new DimensionInput('--test', '1.5rem', () => {});
        expect(input.numericValue).toBe(1.5);
        expect(input.unit).toBe('rem');
    });

    test('handles invalid values', () => {
        const input = new DimensionInput('--test', 'invalid', () => {});
        expect(input.numericValue).toBe(0);
        expect(input.unit).toBe('px');
    });

    test('calls onChange with correct values', () => {
        const onChange = jest.fn();
        const input = new DimensionInput('--spacing', '16px', onChange);
        input.handleChange('20px');
        expect(onChange).toHaveBeenCalledWith('--spacing', '20px');
    });
});
