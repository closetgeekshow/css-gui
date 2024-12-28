import { BaseInput } from './baseInput.js';

describe('BaseInput', () => {
    test('initializes with correct values', () => {
        const input = new BaseInput('--test', 'initial', () => {});
        expect(input.variable).toBe('--test');
        expect(input.value).toBe('initial');
        expect(input.initialValue).toBe('initial');
    });

    test('validates non-empty values', () => {
        const input = new BaseInput('--test', 'value', () => {});
        expect(input.validate()).toBe(true);
        expect(input.getErrors()).toHaveLength(0);
    });

    test('invalidates empty values', () => {
        const input = new BaseInput('--test', '', () => {});
        expect(input.validate()).toBe(false);
        expect(input.getErrors()).toHaveLength(1);
    });

    test('handles value changes', () => {
        const onChange = jest.fn();
        const input = new BaseInput('--test', 'initial', onChange);
        input.handleChange('new');
        expect(onChange).toHaveBeenCalledWith('--test', 'new');
    });

    test('resets to initial value', () => {
        const onChange = jest.fn();
        const input = new BaseInput('--test', 'initial', onChange);
        input.handleChange('new');
        input.reset();
        expect(input.getValue()).toBe('initial');
        expect(onChange).toHaveBeenCalledWith('--test', 'initial');
    });
});