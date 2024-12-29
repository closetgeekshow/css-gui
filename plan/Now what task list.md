# Dependency-Ordered Task List for Lit Migration

## 1. Foundation Layer
### 1.1 Event Architecture
- [ ] Implement EventBus
  - Create EventBus class with typed events
  - Add subscription management
  - Add event emission handling
  
- [ ] Create UIState Manager
  - Implement state container
  - Add reactive state updates
  - Connect with EventBus

### 1.2 Base Components
- [ ] Create LitBaseInput
  - Port BaseInput to Lit component
  - Add reactive properties
  - Implement shadow DOM styling
  - Add validation hooks

- [ ] Implement FormValidator
  - Create validation rule system
  - Add error collection mechanism
  - Connect with UIState

## 2. Input Components
### 2.1 Simple Inputs
- [ ] Port RangeInput
  - Convert to Lit component
  - Add reactive min/max/step
  - Implement value formatting

- [ ] Port TextInput
  - Create basic text input
  - Add validation patterns
  - Implement error display

### 2.2 Complex Inputs
- [ ] Port ColorInput
  - Convert to Lit component
  - Integrate color picker
  - Add color validation
  - Implement preview updates

- [ ] Port DimensionInput
  - Convert to Lit component
  - Add unit management
  - Implement validation rules
  - Connect with CSSUnitsManager

## 3. Management Layer
### 3.1 Variable Management
- [ ] Update VariableManager
  - Add reactive variable tracking
  - Implement change detection
  - Connect with UIState

- [ ] Remove PresetSystem
  - ensure all references to and for PresetSystem is removed

### 3.2 Editor Components
- [ ] Port VariableEditor
  - Convert main editor to Lit
  - Implement component composition
  - Add dynamic input creation
  - Connect all subsystems

## 4. Integration & Polish
### 4.1 Testing
- [ ] Unit Tests
  - Test each Lit component
  - Validate event system
  - Check state management

- [ ] Integration Tests
  - Test component interactions
  - Check error handling

### 4.2 Documentation
- [ ] API Documentation
  - Document Lit components
  - Update usage examples
  - Add migration guide

### 4.3 Performance
- [ ] Optimization
  - Audit render cycles
  - Check memory usage
  - Profile event handling
  - Implement lazy loading
