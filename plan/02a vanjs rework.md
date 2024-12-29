# Briefing Document: Updating Input Components to Use Van Element

## Context

The input components `BaseInput`, `DimensionInput`, `ColorInput`, and `RangeInput` need to be refactored to leverage Van Element for better encapsulation, reusability, and isolated styles. These updates will align with the goal of using Van Element for input components and VanJS for other parts of the application.

---

## Component Updates

### 1. BaseInput

#### Purpose:
Refactor `BaseInput` into a Van Element that serves as the foundation for other input components.

#### Updates:
- Define it as a custom element with default attributes for `label`, `value`, and `type`.
- Use slots to allow customization of child elements.
- Provide isolated styles via Shadow DOM.

#### Example Code:
        import { define } from 'van-element';

        define('base-input', ({ attr, slot }) => {
            const label = attr('label', '');
            const value = attr('value', '');
            const type = attr('type', 'text');

            return [
                style(`
                    .base-input { display: flex; flex-direction: column; gap: 0.5rem; }
                    .base-input label { font-weight: bold; }
                    .base-input input { padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; }
                `),
                div(
                    { class: 'base-input' },
                    label ? label({ for: 'input-field' }, label.val) : null,
                    input({
                        id: 'input-field',
                        type: type.val,
                        value: value.val,
                        oninput: (e) => {
                            value.val = e.target.value;
                            console.log(`Value updated: ${value.val}`);
                        },
                    }),
                    slot()
                ),
            ];
        });

---

### 2. DimensionInput

#### Purpose:
Extend `BaseInput` to handle numeric values with units.

#### Updates:
- Define it as a custom element.
- Use attributes for `value` and `unit`.
- Add a dropdown for selecting units and integrate it into the slot.

#### Example Code:
        import { define } from 'van-element';

        define('dimension-input', ({ attr, slot }) => {
            const value = attr('value', '16');
            const unit = attr('unit', 'px');

            const updateValue = () => {
                console.log(`Dimension updated to: ${value.val}${unit.val}`);
            };

            return [
                style(`
                    .dimension-input { display: flex; align-items: center; gap: 0.5rem; }
                    .dimension-input input { width: 3rem; }
                `),
                div(
                    { class: 'dimension-input' },
                    input({
                        type: 'number',
                        value: value.val,
                        oninput: (e) => {
                            value.val = e.target.value;
                            updateValue();
                        },
                    }),
                    select(
                        {
                            onchange: (e) => {
                                unit.val = e.target.value;
                                updateValue();
                            },
                        },
                        ['px', 'rem', 'em', '%', 'vh', 'vw'].map((u) =>
                            option({ value: u, selected: u === unit.val }, u)
                        )
                    ),
                    slot()
                ),
            ];
        });

---

### 3. ColorInput

#### Purpose:
Provide a color picker with reactive updates.

#### Updates:
- Define as a custom element.
- Use attributes for the `value`.
- Encapsulate styles for the color preview box.

#### Example Code:
        import { define } from 'van-element';

        define('color-input', ({ attr }) => {
            const value = attr('value', '#ff0000');

            return [
                style(`
                    .color-preview {
                        width: 40px;
                        height: 40px;
                        border: 2px solid #ccc;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                `),
                input({
                    type: 'color',
                    value: value.val,
                    class: 'color-preview',
                    onchange: (e) => {
                        value.val = e.target.value;
                        console.log(`Color updated to: ${value.val}`);
                    },
                }),
            ];
        });

---

### 4. RangeInput

#### Purpose:
Handle numeric range inputs with reactive display.

#### Updates:
- Define as a custom element.
- Use attributes for `min`, `max`, `step`, and `value`.
- Include a live display of the current value.

#### Example Code:
        import { define } from 'van-element';

        define('range-input', ({ attr }) => {
            const min = attr('min', '0');
            const max = attr('max', '100');
            const step = attr('step', '1');
            const value = attr('value', '50');

            return [
                style(`
                    .range-container { display: flex; gap: 0.5rem; align-items: center; }
                    .range-container input { flex-grow: 1; }
                `),
                div(
                    { class: 'range-container' },
                    input({
                        type: 'range',
                        min: min.val,
                        max: max.val,
                        step: step.val,
                        value: value.val,
                        oninput: (e) => {
                            value.val = e.target.value;
                            console.log(`Range value updated: ${value.val}`);
                        },
                    }),
                    span(() => value.val) // Reactive display of value
                ),
            ];
        });

---

# Task List: Integration Plan for Van Element and VanJS

1. **BaseInput (Foundation for Input Components)**
   - [ ] Define `base-input` custom element with attributes and slot support.
   - [ ] Test reactivity and slot behavior for general input handling.

2. **DimensionInput (Extends BaseInput)**
   - [ ] Define `dimension-input` custom element.
   - [ ] Add attributes for `value` and `unit`.
   - [ ] Integrate dropdown for unit selection.
   - [ ] Test integration with `base-input`.

3. **ColorInput (Custom Color Picker)**
   - [ ] Define `color-input` custom element.
   - [ ] Add `value` attribute for the selected color.
   - [ ] Ensure color preview and value update work correctly.

4. **RangeInput (Numeric Range Handler)**
   - [ ] Define `range-input` custom element.
   - [ ] Add attributes for `min`, `max`, `step`, and `value`.
   - [ ] Test reactive value display.

5. **VanJS Integration for Non-Input Components**
   - [ ] Update `PresetManager` to use VanJS for UI rendering and state management.
   - [ ] Refactor remaining components in `/src/components/` to leverage VanJS.

6. **Testing and Validation**
   - [ ] Validate custom elements for proper encapsulation and isolated styles.
   - [ ] Ensure seamless integration between Van Element-based inputs and VanJS components.
