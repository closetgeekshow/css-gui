/**
 * @file Factory service for creating and managing service instances
 * @module ServiceFactory
 * @requires PresetService
 * @requires MockPresetService
 * @requires CONFIG
 */

import { PresetService } from '../presetService/presetService.js';
import { MockPresetService } from '../mockPresetService/mockPresetService.js';
import { CONFIG } from '../../config.js';

/**
 * @class ServiceFactory
 * @classdesc Factory class responsible for instantiating appropriate service implementations
 * based on configuration settings
 */
export class ServiceFactory {
    /**
     * Creates and returns an instance of the PresetService
     * @static
     * @public
     * @returns {PresetService|MockPresetService} An instance of either the real PresetService 
     * or MockPresetService based on configuration
     */
    static getPresetService() {
        return CONFIG.USE_MOCK_SERVICES 
            ? new MockPresetService()
            : new PresetService(CONFIG.API_BASE_URL);
    }
}
