/**
 * @file Test suite for CSS Variable extractor
 */
import { CssVarExtractor } from './cssVarExtractor.js';

// Test CSS
const testCss = `
:root {
    --primary-color: #ff0000;
    --spacing-unit: 8px;
}
`;

// Run test
const vars = CssVarExtractor.extract(testCss);
console.assert(vars['--primary-color'] === '#ff0000', 'Should extract primary color');
console.assert(vars['--spacing-unit'] === '8px', 'Should extract spacing unit');
