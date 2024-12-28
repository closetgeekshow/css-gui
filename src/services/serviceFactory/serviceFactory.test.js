import { ServiceFactory } from './serviceFactory.js';
import { PresetService } from '../presetService/presetService.js';
import { MockPresetService } from '../mockPresetService/mockPresetService.js';
import { CONFIG } from '../../config.js';

describe('ServiceFactory', () => {
    beforeEach(() => {
        // Reset CONFIG between tests
        CONFIG.USE_MOCK_SERVICES = false;
        CONFIG.API_BASE_URL = 'http://test.api';
    });

    test('returns MockPresetService when USE_MOCK_SERVICES is true', () => {
        CONFIG.USE_MOCK_SERVICES = true;
        const service = ServiceFactory.getPresetService();
        expect(service instanceof MockPresetService).toBeTruthy();
    });

    test('returns PresetService when USE_MOCK_SERVICES is false', () => {
        CONFIG.USE_MOCK_SERVICES = false;
        const service = ServiceFactory.getPresetService();
        expect(service instanceof PresetService).toBeTruthy();
    });
});
