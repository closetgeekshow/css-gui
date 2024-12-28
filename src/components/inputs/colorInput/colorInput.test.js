import { ColorInput } from './colorInput.js';

describe('ColorInput', () => {
    test('initializes with color value', () => {
        const input = new ColorInput('--test', '#ff0000', () => {});
        expect(input.getValue()).toBe('#ff0000');
    });

    test('creates DOM elements', () => {
        const input = new ColorInput('--test', '#ff0000', () => {});
        expect(input.element).toBeDefined();
        expect(input.preview).toBeDefined();
        expect(input.element.className).toBe('color-input');
        expect(input.preview.className).toBe('color-preview');
    });

    test('updates preview on color change', () => {
        const onChange = jest.fn();
        const input = new ColorInput('--primary', '#ff0000', onChange);
        input.handleChange('#00ff00');
        expect(input.preview.style.backgroundColor).toBe('#00ff00');
        expect(onChange).toHaveBeenCalledWith('--primary', '#00ff00');
    });
});