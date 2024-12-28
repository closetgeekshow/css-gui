# Variable Editor

Main UI component for editing CSS variables with preset management.

## Usage

    import { VariableEditor } from './VariableEditor.js';
    import { VariableManager } from '/src/components/variableManager/variableManager.js';
    
    // Create and initialize variable manager
    const manager = new VariableManager();
    manager.loadFromCss(cssText);
    
    // Create editor instance
    const editor = new VariableEditor(
        document.getElementById('editor'),
        manager
    );
    
    // Render the editor UI
    editor.render();

## Features
- Automatic input type detection and rendering
- Live preview updates
- Input validation and error handling
- Reset functionality for individual variables
- Responsive grid layout
- Monospace variable name display
- Integrated preset management
- Save/load variable configurations
- Real-time preview updates

## Components
- PresetManager - Handles saving and loading variable configurations

## API

### constructor(container, variableManager)
- `container` {HTMLElement} - DOM element to mount editor
- `variableManager` {VariableManager} - Initialized variable manager instance

### render()
Renders the complete editor interface

### updatePreview()
Updates the live preview styles

### createVariableRow(name, data)
- `name` {string} - Variable name
- `data` {Object} - Variable data including type and value
- Returns: {HTMLElement} - Row element containing variable input

## Events
The editor emits change events when variables are updated:
- `variable-change`: Fired when any variable value changes
- `editor-reset`: Fired when editor is reset to initial state
