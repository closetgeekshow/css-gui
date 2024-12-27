import * as csstree from '/node_modules/css-tree/dist/csstree.esm.js';

export class VariableParser {
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