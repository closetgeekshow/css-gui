# PresetService Component
    
## Purpose
Handles server communication for managing CSS variable presets

## API
- savePreset(presetData): Creates/updates preset
- loadPresets(): Retrieves all presets
- loadPresetById(id): Retrieves specific preset
- deletePreset(id): Removes preset

## Usage Example
const presetService = new PresetService(apiBaseUrl);
const presets = await presetService.loadPresets();

## Dependencies
None - Pure JavaScript implementation
