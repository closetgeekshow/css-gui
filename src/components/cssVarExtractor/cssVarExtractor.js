/**
 * @file CSS Variable extractor that parses CSS and extracts custom properties
 * @module cssVarExtractor
 * @requires css-tree
 */
import * as csstree from '/node_modules/css-tree/dist/csstree.esm.js';
//'css-tree';

export class CssVarExtractor {
    /**
     * Extract CSS custom properties from CSS text
     * @param {string} cssText - Raw CSS content to parse
     * @returns {Object} Object containing variable names and values
     */
    static extract(cssText) {
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
