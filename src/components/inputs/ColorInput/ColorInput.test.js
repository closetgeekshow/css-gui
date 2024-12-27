import { ColorInput } from './ColorInput.js';

describe('ColorInput', () => {
    test('initializes with color value', () => {
        const input = new ColorInput('--test', '#ff0000', () => {});
        expect(input.getValue()).toBe('#ff0000');
    });

    test('creates picker instance', () => {
        const input = new ColorInput('--test', '#ff0000', () => {});
        expect(input.picker).toBeDefined();
    });

    test('calls onChange with hex color', () => {
        const onChange = jest.fn();
        const input = new ColorInput('--primary', '#ff0000', onChange);
        input.picker.onChange({ hex: '#00ff00' });
        expect(onChange).toHaveBeenCalledWith('--primary', '#00ff00');
    });
});
