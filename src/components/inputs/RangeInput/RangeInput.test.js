import { RangeInput } from './RangeInput.js';

describe('RangeInput', () => {
    test('parses numeric values correctly', () => {
        const input = new RangeInput('--test', '0.5', () => {});
        expect(input.numericValue).toBe(0.5);
    });

    test('handles invalid values', () => {
        const input = new RangeInput('--test', 'invalid', () => {});
        expect(input.numericValue).toBe(0);
    });

    test('respects range constraints', () => {
        const input = new RangeInput('--test', '50', () => {});
        input.setRange(0, 100, 10);
        expect(input.min).toBe(0);
        expect(input.max).toBe(100);
        expect(input.step).toBe(10);
    });

    test('calls onChange with correct values', () => {
        const onChange = jest.fn();
        const input = new RangeInput('--opacity', '0.5', onChange);
        input.handleChange('0.7');
        expect(onChange).toHaveBeenCalledWith('--opacity', '0.7');
    });
});
