/**
 * @file UI utility functions for component creation and management
 * @module UIUtils
 */
export class UIUtils {
    /**
     * Injects styled into document head with deduplication
     * @param {string} id - Unique identifier for style block
     * @param {string} css - CSS content to inject
     */
    static injectStyles(id, css) {
        if (!document.getElementById(id)) {
            const style = document.createElement('style');
            style.id = id;
            style.textContent = css;
            document.head.appendChild(style);
        }
    }

    /**
     * Creates a container element with specified class
     * @param {string} className - CSS class for container
     * @returns {HTMLElement} Container element
     */
    static createContainer(className) {
        const container = document.createElement('div');
        container.className = className;
        return container;
    }

    /**
     * Creates an input element with specified properties
     * @param {string} type - Input type (text, number, etc)
     * @param {Object} props - Input properties and event handlers
     * @returns {HTMLInputElement} Configured input element
     */
    static createInput(type, props) {
        const input = document.createElement('input');
        input.type = type;
        Object.assign(input, props);
        return input;
    }
}
