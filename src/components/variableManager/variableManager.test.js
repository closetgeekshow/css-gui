import { VariableManager } from './variableManager.js';

describe('VariableManager', () => {
    let manager;

    beforeEach(() => {
        manager = new VariableManager();
        expect(manager.variables.size).toBe(0);
    });

    test('loads variables with types', () => {
        const css = `
            :root {
                --primary-color: #ff0000;
                --spacing: 1rem;
                --opacity: 0.5;
            }
        `;
        const variables = manager.loadFromCss(css);
        
        expect(variables.size).toBe(3);
        expect(variables.get('--primary-color')).toEqual({
            value: '#ff0000',
            type: 'color'
        });
        expect(variables.get('--spacing')).toEqual({
            value: '1rem',
            type: 'dimension'
        });
        expect(variables.get('--opacity')).toEqual({
            value: '0.5',
            type: 'number'
        });
    });

    test('maintains variable state between calls', () => {
        manager.loadFromCss(':root { --color: blue; }');
        manager.loadFromCss(':root { --size: 1rem; }');
        
        expect(manager.variables.size).toBe(2);
    });
});