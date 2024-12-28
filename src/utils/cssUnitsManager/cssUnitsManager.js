export class CSSUnitsManager {
    static async initialize() {
        if (!this.unitsData) {
            const response = await fetch('/node_modules/mdn-data/css/units.json');
            this.unitsData = await response.json();
        }
        return this;
    }

    static getLengthUnits() {
        return Object.entries(this.unitsData)
            .filter(([_, data]) => data.groups.includes('CSS Lengths'))
            .map(([unit]) => unit);
    }

    static getDimensionUnits() {
        return Object.entries(this.unitsData)
            .filter(([_, data]) => 
                data.groups.includes('CSS Lengths') || 
                data.groups.includes('CSS Angles') ||
                data.groups.includes('CSS Times')
            )
            .map(([unit]) => unit);
    }

    static getUnitsByGroup(groupName) {
        return Object.entries(this.unitsData)
            .filter(([_, data]) => data.groups.includes(groupName))
            .map(([unit]) => unit);
    }
}