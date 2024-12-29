/**
 * @file UI state management implementation
 * @module UIState
 * @requires EventBus
 */

/**
 * @typedef {Object} StateChange
 * @property {string} key - State property identifier
 * @property {*} value - New state value
 */

/**
 * Manages centralized UI state with event notifications
 * @class
 * @classdesc Provides centralized state management with change notifications
 */
export class UIState {
    /**
     * Creates a UI state manager
     * @constructor
     * @param {EventBus} eventBus - Event bus instance for state change notifications
     */
    constructor(eventBus) {
        /**
         * @private
         * @type {Map<string, *>}
         */
        this.state = new Map();
        
        /**
         * @private
         * @type {EventBus}
         */
        this.eventBus = eventBus;
    }

    /**
     * Updates a state value and notifies listeners
     * @param {string} key - State property to update
     * @param {*} value - New value to set
     * @fires state-change
     */
    update(key, value) {
        this.state.set(key, value);
        this.eventBus.emit('state-change', { key, value });
    }
}
