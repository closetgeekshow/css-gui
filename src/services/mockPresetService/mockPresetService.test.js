import { MockPresetService } from './mockPresetService.js';

describe('MockPresetService', () => {
    let service;

    beforeEach(() => {
        service = new MockPresetService();
    });

    test('savePreset creates new preset with ID', async () => {
        const preset = await service.savePreset({ name: 'Test', variables: {} });
        expect(preset.id).toBeDefined();
    });
});
