# Preset Manager

UI component for saving and loading CSS variable configurations.

## Usage

    import { PresetManager } from './presetManager.js';
    import { VariableEditor } from '../variableEditor/variableEditor.js';
    
    const editor = new VariableEditor(container, manager);
    const presetManager = new PresetManager(editor);
    
    // Add to DOM
    container.appendChild(presetManager.element);

## Features
- Save current variable state as named preset
- Load existing presets
- Ready for server integration
- Real-time UI updates

## API

### constructor(editor)
- `editor` {VariableEditor} - Reference to main editor instance

### handleSave()
- Saves current variable state as preset

### handleLoad()
- Loads selected preset

### updatePresetList()
- Updates UI with available presets
