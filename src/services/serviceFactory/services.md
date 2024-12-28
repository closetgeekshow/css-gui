# Preset Services

Services for managing CSS variable presets.

## PresetService

Handles server communication for preset management.

### Methods

#### savePreset(presetData)
Saves a new preset to the server.

#### loadPresets()
Retrieves all available presets.

#### loadPresetById(id)
Loads a specific preset by ID.

#### deletePreset(id)
Deletes a preset by ID.

## MockPresetService

In-memory implementation for testing and development.

### Usage

        const mockService = new MockPresetService();
        const preset = {
            name: 'Theme',
            variables: { '--color': 'blue' }
        };
        const saved = await mockService.savePreset(preset);

