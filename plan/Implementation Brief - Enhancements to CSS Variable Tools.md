# Implementation Brief: Enhancements to CSS Variable Tools

## Context

You are tasked with implementing improvements to a project designed for managing CSS variables and presets. This project includes components like `VariableEditor`, `PresetManager`, and tools for parsing and extracting CSS variables. The following enhancements focus on reducing redundancy, improving scalability, and introducing better event management and architectural patterns.

---

## Goals

1. **Consolidate Overlapping Code**:
   - Combine the functionality of `VariableParser` and `CssVarExtractor` into a single utility (`CssUtils`).

2. **Abstract Server Communication**:
   - Introduce a `PresetService` to handle interactions with the server (mock or real).

3. **Enhance Unit Extraction**:
   - Leverage `csstree` or `mdn-data` to dynamically extract supported CSS units.

4. **Scalable Event Management**:
   - Integrate an event bus (using `mitt`) to decouple components and handle interactions.

5. **Shadow DOM Styling**:
   - Migrate inline CSS to a more encapsulated shadow DOM approach.

6. **Decouple Logic and UI**:
   - Separate rendering logic and business logic in components like `VariableEditor`.

7. **Introduce Mediator Pattern**:
   - Implement a mediator to manage communication between `PresetManager`, `VariableEditor`, and other components.

---

## Implementation Steps

### 1. Consolidate Variable Parsing into `CssUtils`

Create a `CssUtils` utility to handle CSS variable extraction.

#### File: `/src/utils/CssUtils.js`

        import * as csstree from '/node_modules/css-tree/dist/csstree.esm.js';

        export class CssUtils {
            static extractVariables(cssText) {
                const ast = csstree.parse(cssText);
                const variables = {};
                csstree.walk(ast, {
                    visit: 'Declaration',
                    enter(node) {
                        if (node.property.startsWith('--')) {
                            variables[node.property] = csstree.generate(node.value);
                        }
                    }
                });
                return variables;
            }
        }

#### Replace Usages

Replace `VariableParser.extract` and `CssVarExtractor.extract` calls with `CssUtils.extractVariables`.

---

### 2. Abstract Server Communication with `PresetService`

Create a `PresetService` to manage server interactions.

#### File: `/src/services/PresetService.js`

        export class PresetService {
            constructor(apiBaseUrl) {
                this.apiBaseUrl = apiBaseUrl;
            }

            async savePreset(presetData) {
                const response = await fetch(`${this.apiBaseUrl}/presets`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(presetData),
                });
                return response.json();
            }

            async loadPresets() {
                const response = await fetch(`${this.apiBaseUrl}/presets`);
                return response.json();
            }
        }

#### Update `PresetManager`

Pass `PresetService` as a dependency to `PresetManager`:

        import { PresetService } from '/src/services/PresetService.js';

        export class PresetManager {
            constructor(editor, presetService = new PresetService('/api')) {
                this.editor = editor;
                this.presetService = presetService;
            }

            async handleSave() {
                const name = this.nameInput.value;
                if (!name) return;

                const presetData = {
                    name,
                    variables: Object.fromEntries(this.editor.manager.variables),
                };
                await this.presetService.savePreset(presetData);
            }
        }

---

### 3. Extract Units Using `csstree` or `mdn-data`

Use `csstree.lexer` or `mdn-data` to dynamically fetch supported CSS units.

#### File: `/src/utils/CssUnits.js`

        import data from '/node_modules/mdn-data/css/index.js';

        export const CssUnits = {
            getSupportedUnits() {
                return Object.keys(data.syntaxes).filter((key) => key.endsWith('unit'));
            }
        };

---

### 4. Add Event Bus for Communication

Use the `mitt` library for event management.

#### File: `/src/utils/EventBus.js`

        import mitt from '/node_modules/mitt/dist/mitt.umd.js';

        export const eventBus = mitt();

#### Example Usage in `PresetManager`

        import { eventBus } from '/src/utils/EventBus.js';

        export class PresetManager {
            constructor(editor) {
                this.editor = editor;
                eventBus.on('variable-updated', this.handleVariableUpdate.bind(this));
            }

            handleVariableUpdate(data) {
                console.log('Variable updated:', data);
            }
        }

---

### 5. Use Shadow DOM for Styling

Refactor components like `PresetManager` to include styles in their shadow DOM.

#### Update `PresetManager`

        export class PresetManager {
            constructor(editor) {
                this.editor = editor;

                const shadowRoot = this.element.attachShadow({ mode: 'open' });

                const style = document.createElement('style');
                style.textContent = `
                    .preset-manager { padding: 1rem; border-bottom: 1px solid #ccc; }
                `;
                shadowRoot.appendChild(style);
            }
        }

---

### 6. Decouple Rendering and Logic in `VariableEditor`

Separate UI rendering from state management.

#### Create Renderer

        export class VariableEditorRenderer {
            constructor(container) {
                this.container = container;
            }

            renderVariable(name, value) {
                const row = document.createElement('div');
                row.textContent = `${name}: ${value}`;
                this.container.appendChild(row);
            }
        }

#### Update `VariableEditor`

        import { VariableEditorRenderer } from './VariableEditorRenderer.js';

        export class VariableEditor {
            constructor(container, variableManager) {
                this.manager = variableManager;
                this.renderer = new VariableEditorRenderer(container);
            }

            updateVariable(name, value) {
                this.manager.variables.set(name, value);
                this.renderer.renderVariable(name, value);
            }
        }

---

### 7. Implement Mediator Pattern

Introduce a mediator to manage communication between components.

#### File: `/src/utils/Mediator.js`

        export class Mediator {
            constructor() {
                this.events = {};
            }

            subscribe(event, callback) {
                if (!this.events[event]) this.events[event] = [];
                this.events[event].push(callback);
            }

            publish(event, data) {
                if (this.events[event]) {
                    this.events[event].forEach((callback) => callback(data));
                }
            }
        }

#### Example Usage

        const mediator = new Mediator();

        class PresetManager {
            constructor() {
                mediator.subscribe('variable-changed', this.updatePresetList.bind(this));
            }
        }

        class VariableEditor {
            changeVariable(name, value) {
                mediator.publish('variable-changed', { name, value });
            }
        }

---

## Deliverables

1. Refactor `CssVarExtractor` and `VariableParser` into `CssUtils`.
2. Implement `PresetService` for managing server communication.
3. Update event management with `mitt` for a framework-agnostic solution.
4. Dynamically fetch CSS units using `mdn-data` or `csstree`.
5. Refactor components to use shadow DOM for styling.
6. Decouple UI rendering and state management in `VariableEditor`.
7. Implement the mediator pattern for inter-component communication.

## Testing & Validation

- Validate CSS variable extraction with complex CSS inputs.
- Mock API responses to test `PresetService` integration.
- Ensure components interact correctly through the event bus or mediator.
