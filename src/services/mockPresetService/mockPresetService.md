# Mock Preset Service

An in-memory implementation of the PresetService interface for development and testing purposes.

## Overview
MockPresetService provides a fully functional preset management system that operates entirely in memory. It implements the same interface as the production PresetService, making it ideal for:
- Local development without backend dependencies
- Unit testing
- UI prototyping
- Offline development

## Methods

### constructor()
        Creates a new MockPresetService instance with an empty preset store
        Returns: MockPresetService

### savePreset(presetData)
        async savePreset(presetData: Preset)
        Stores a preset in memory with an auto-generated ID
        Parameters:
            presetData - Preset object to save
        Returns: Promise<Preset> with added ID

### loadPresets()
        async loadPresets()
        Retrieves all stored presets
        Returns: Promise<Preset[]>

### loadPresetById(id)
        async loadPresetById(id: string)
        Retrieves a specific preset by ID
        Parameters:
            id - Unique identifier of the preset
        Returns: Promise<Preset | undefined>

### deletePreset(id)
        async deletePreset(id: string)
        Removes a preset from storage
        Parameters:
            id - Unique identifier of the preset to delete
        Returns: Promise<{success: boolean}>

## Usage Example
        const presetService = new MockPresetService();
        
        // Save a preset
        const savedPreset = await presetService.savePreset({
            name: "Test Preset",
            styles: { color: "blue" }
        });
        
        // Load all presets
        const allPresets = await presetService.loadPresets();

## Implementation Details
- Uses Map for in-memory storage
- Generates unique IDs using timestamps
- Simulates async behavior with Promises
- Maintains data only for current session
