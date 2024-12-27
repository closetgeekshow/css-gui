import { VariableParser } from './variableParser.js';

describe('VariableParser', () => {
    test('extracts basic variables', () => {
        const css = `
            :root {
                --primary-color: #ff0000;
                --spacing: 1rem;
            }
        `;
        const variables = VariableParser.extract(css);
        expect(variables['--primary-color']).toBe('#ff0000');
        expect(variables['--spacing']).toBe('1rem');
    });

    test('handles nested variables', () => {
        const css = `
            .container {
                --padding: 20px;
            }
            .nested {
                --margin: 10px;
            }
        `;
        const variables = VariableParser.extract(css);
        expect(variables['--padding']).toBe('20px');
        expect(variables['--margin']).toBe('10px');
    });
});
