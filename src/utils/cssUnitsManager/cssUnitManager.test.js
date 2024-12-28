import { CSSUnitsManager } from './cssUnitsManager.js';

describe('CSSUnitsManager', () => {
    beforeAll(async () => {
        await CSSUnitsManager.initialize();
    });

    test('getLengthUnits returns array of length units', async () => {
        const units = CSSUnitsManager.getLengthUnits();
        expect(units).toContain('px');
        expect(units).toContain('rem');
    });

    test('getDimensionUnits includes lengths, angles and times', () => {
        const units = CSSUnitsManager.getDimensionUnits();
        expect(units).toContain('px');
        expect(units).toContain('deg');
        expect(units).toContain('ms');
    });
});
