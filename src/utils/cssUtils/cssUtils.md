# CSS Utilities

Utility functions for CSS parsing and manipulation.

## CssUtils

Static utility class providing CSS-related helper functions.

### Methods

#### extractVariables(cssText)
Extracts CSS custom properties from a CSS string.

- **Parameters**: `cssText` (string) - Raw CSS text to parse
- **Returns**: Object mapping variable names to their values
- **Example**:

        const css = `:root { --color: blue; }`;
        const vars = CssUtils.extractVariables(css);
        // Result: { '--color': 'blue' }
