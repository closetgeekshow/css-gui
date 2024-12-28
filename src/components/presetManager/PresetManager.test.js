import { PresetManager } from './presetManager.js';
import { VariableEditor } from '../variableEditor/variableEditor.js';

describe('PresetManager', () => {
    let presetManager;
    let editor;

    beforeEach(() => {
        editor = new VariableEditor(document.createElement('div'), new VariableManager());
        presetManager = new PresetManager(editor);
    });

    test('creates UI elements', () => {
        expect(presetManager.element).toBeDefined();
        expect(presetManager.nameInput).toBeDefined();
        expect(presetManager.saveButton).toBeDefined();
        expect(presetManager.presetSelect).toBeDefined();
        expect(presetManager.loadButton).toBeDefined();
    });

    test('handles save action', async () => {
        presetManager.nameInput.value = 'test-preset';
        await presetManager.handleSave();
        // Add assertions for save behavior
    });

    test('handles load action', async () => {
        await presetManager.handleLoad();
        // Add assertions for load behavior
    });
});
