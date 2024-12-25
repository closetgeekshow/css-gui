# FloatingBlob Pattern Component

A dynamic floating blob effect with procedurally generated animations and transformations.

## Features
- Randomized border radius animations
- Configurable transform properties
- Customizable blur and opacity
- Gradient background variations
- Seeded random generation

## Usage

Basic implementation:

        import FloatingBlob from './FloatingBlob';
        
        const blob = new FloatingBlob();
        blob.initialize();

With custom seed:

        const blob = new FloatingBlob(12345);
        blob.initialize();

## Configuration

The component uses CSS variables for runtime modifications:

| Variable | Type | Description |
|----------|------|-------------|
| --translate-x-start | percentage | Initial X translation |
| --translate-y-start | percentage | Initial Y translation |
| --rotate-mid | degrees | Mid-point rotation |
| --scale-mid | number | Mid-point scale factor |
| --blob-gradient | gradient | Blob gradient pattern |
| --animation-duration | seconds | Animation cycle length |

## HTML Structure

        <div class="floating-blob"></div>
