import { CssUtils } from './cssUtils.js';

describe('CssUtils', () => {
    test('extractVariables extracts CSS custom properties', () => {
        const css = `:root {
            --color: blue;
            --spacing: 1rem;
        }`;
        
        const variables = CssUtils.extractVariables(css);
        
        expect(variables).toEqual({
            '--color': 'blue',
            '--spacing': '1rem'
        });
    });
});
