/**
 * @file Event bus implementation for decoupled component communication
 * @module EventBus
 */

/**
 * @typedef {Function} EventCallback
 * @param {*} data - Data passed with the event
 */

/**
 * Manages application-wide events and subscriptions
 * @class
 * @classdesc Provides pub/sub functionality for component communication
 */
export class EventBus {
    /**
     * Creates an event bus instance
     * @constructor
     */
    constructor() {
        /**
         * @private
         * @type {Map<string, Set<EventCallback>>}
         */
        this.listeners = new Map();
    }
    
    /**
     * Subscribes a callback to an event
     * @param {string} event - Event identifier
     * @param {EventCallback} callback - Function to execute when event occurs
     */
    on(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, new Set());
        }
        this.listeners.get(event).add(callback);
    }

    /**
     * Emits an event with optional data
     * @param {string} event - Event identifier
     * @param {*} data - Data to pass to event handlers
     */
    emit(event, data) {
        if (this.listeners.has(event)) {
            this.listeners.get(event).forEach(callback => callback(data));
        }
    }
}