/**
 * @file Mock implementation of PresetService for testing and development
 * @module MockPresetService
 */

/**
 * @class MockPresetService
 * @classdesc In-memory implementation of PresetService
 */
export class MockPresetService {
    /**
     * @constructor
     */
    constructor() {
        /** @private */
        this.presets = new Map();
    }

    /**
     * @async
     * @param {import('../presetService/presetService').Preset} presetData 
     * @returns {Promise<import('../presetService/presetService').Preset>}
     */
    async savePreset(presetData) {
        const id = Date.now().toString();
        this.presets.set(id, { ...presetData, id });
        return { id, ...presetData };
    }

    /**
     * @async
     * @returns {Promise<Array<import('../presetService/presetService').Preset>>}
     */
    async loadPresets() {
        return Array.from(this.presets.values());
    }

    /**
     * @async
     * @param {string} id
     * @returns {Promise<import('../presetService/presetService').Preset | undefined>}
     */
    async loadPresetById(id) {
        return this.presets.get(id);
    }

    /**
     * @async
     * @param {string} id
     * @returns {Promise<{success: boolean}>}
     */
    async deletePreset(id) {
        this.presets.delete(id);
        return { success: true };
    }
}