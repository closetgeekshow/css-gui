/**
 * @file Test suite for VariableEditor component
 */
import { VariableEditor } from './variableEditor.js';
import { VariableManager } from '../../variableManager/variableManager.js';

const testCss = `
:root {
    --primary-color: #ff0000;
    --spacing: 1rem;
    --opacity: 0.5;
}`;

describe('VariableEditor', () => {
    let container, editor, manager;

    beforeEach(() => {
        container = document.createElement('div');
        manager = new VariableManager();
        manager.loadFromCss(testCss);
        editor = new VariableEditor(container, manager);
    });

    test('renders all variables', () => {
        editor.render();
        const rows = container.querySelectorAll('.variable-row');
        expect(rows.length).toBe(3);
    });

    test('updates preview on input change', () => {
        editor.render();
        const input = editor.inputs.get('--primary-color');
        input.handleChange('#00ff00');
        
        const style = document.head.querySelector('style');
        expect(style.textContent).toContain('--primary-color: #00ff00');
    });
});

test('initializes preset manager', () => {
    const editor = new VariableEditor(container, manager);
    expect(editor.presetManager).toBeDefined();
    expect(editor.presetManager instanceof PresetManager).toBe(true);
});
