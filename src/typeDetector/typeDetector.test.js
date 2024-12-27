import { TypeDetector } from './typeDetector.js';

describe('TypeDetector', () => {
    test('detects color values', () => {
        expect(TypeDetector.detect('#ff0000')).toBe('color');
        expect(TypeDetector.detect('rgb(255,0,0)')).toBe('color');
    });

    test('detects dimension values', () => {
        expect(TypeDetector.detect('16px')).toBe('dimension');
        expect(TypeDetector.detect('2rem')).toBe('dimension');
    });

    test('detects number values', () => {
        expect(TypeDetector.detect('0.5')).toBe('number');
        expect(TypeDetector.detect('1')).toBe('number');
    });
});
