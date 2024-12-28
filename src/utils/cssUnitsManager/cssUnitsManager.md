# CSS Units Manager

A utility class for managing and retrieving CSS unit information based on MDN data.

## Overview
The CSSUnitsManager provides static methods to access and filter CSS units by their types and groups. It uses the MDN CSS units data as its source of truth.

## Methods

### initialize()
        static async initialize()
        Loads and caches the CSS units data from MDN.
        Returns: Promise<CSSUnitsManager>

### getLengthUnits()
        static getLengthUnits()
        Returns an array of CSS length units (px, rem, em, etc.)
        Returns: string[]

### getDimensionUnits()
        static getDimensionUnits()
        Returns an array of dimensional units including:
        - Length units (px, rem)
        - Angle units (deg, rad)
        - Time units (ms, s)
        Returns: string[]

### getUnitsByGroup(groupName)
        static getUnitsByGroup(groupName: string)
        Returns units belonging to a specific CSS group
        Parameters:
            groupName - Name of the CSS unit group
        Returns: string[]

## Usage Example
        await CSSUnitsManager.initialize();
        const lengthUnits = CSSUnitsManager.getLengthUnits();
        // Result: ['px', 'em', 'rem', ...]

## Dependencies
- MDN CSS units data (mdn-data/css/units.json)
