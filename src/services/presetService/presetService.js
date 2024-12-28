/**
 * @file Service for managing CSS variable presets with server communication
 * @module PresetService
 */

/**
 * @typedef {Object} Preset
 * @property {string} id - Unique identifier
 * @property {string} name - Preset name
 * @property {Object.<string, string>} variables - CSS variables
 */

/**
 * @class PresetService
 * @classdesc Handles server communication for preset management
 */
export class PresetService {
    /**
     * @constructor
     * @param {string} apiBaseUrl - Base URL for API endpoints
     */
    constructor(apiBaseUrl) {
        this.apiBaseUrl = apiBaseUrl;
    }

    /**
     * Saves a new preset
     * @async
     * @param {Preset} presetData - Preset data to save
     * @returns {Promise<Preset>} Saved preset with generated ID
     * @throws {Error} When save operation fails
     */
    async savePreset(presetData) {
        const response = await fetch(`${this.apiBaseUrl}/presets`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(presetData)
        });
        
        if (!response.ok) {
            throw new Error('Failed to save preset');
        }
        return response.json();
    }

    /**
     * Loads all presets
     * @async
     * @returns {Promise<Preset[]>} Array of presets
     * @throws {Error} When load operation fails
     */
    async loadPresets() {
        const response = await fetch(`${this.apiBaseUrl}/presets`);
        if (!response.ok) {
            throw new Error('Failed to load presets');
        }
        return response.json();
    }

    /**
     * Loads a preset by its ID
     * @async
     * @param {string} id - ID of the preset to load
     * @returns {Promise<Preset>} Loaded preset
     * @throws {Error} When load operation fails
     */
    async loadPresetById(id) {
        const response = await fetch(`${this.apiBaseUrl}/presets/${id}`);
        if (!response.ok) {
            throw new Error('Failed to load preset');
        }
        return response.json();
    }

    /**
     * Deletes a preset by its ID
     * @async
     * @param {string} id - ID of the preset to delete
     * @returns {Promise<void>}
     * @throws {Error} When delete operation fails
     */
    async deletePreset(id) {
        const response = await fetch(`${this.apiBaseUrl}/presets/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete preset');
        }
        return response.json();
    }
}