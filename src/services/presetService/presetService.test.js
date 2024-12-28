import { PresetService } from './presetService.js';

describe('PresetService', () => {
    let service;
    const mockApiUrl = 'http://api.test';

    beforeEach(() => {
        service = new PresetService(mockApiUrl);
        global.fetch = jest.fn();
    });

    test('loadPresets fetches from correct endpoint', async () => {
        await service.loadPresets();
        expect(fetch).toHaveBeenCalledWith(`${mockApiUrl}/presets`);
    });

    // Additional tests for other methods
});
