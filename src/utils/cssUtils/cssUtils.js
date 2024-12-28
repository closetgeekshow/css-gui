/**
 * @file Utility functions for CSS parsing and manipulation
 * @module CssUtils
 * @requires css-tree
 */

import * as csstree from '/node_modules/css-tree/dist/csstree.esm.js';

/**
 * @class CssUtils
 * @classdesc Static utility class for CSS operations
 */
export class CssUtils {
    /**
     * Extracts CSS custom properties from a CSS string
     * @static
     * @param {string} cssText - Raw CSS text to parse
     * @returns {Object.<string, string>} Object mapping variable names to their values
     * @example
     * const css = `:root { --color: blue; }`;
     * const vars = CssUtils.extractVariables(css);
     * // Result: { '--color': 'blue' }
     */
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