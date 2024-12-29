/**
 * @file Handles preset management for CSS variable configurations
 * @module PresetManager
 * @requires VariableManager
 */

import { PresetService } from '/src/services/presetService/presetService.js';

export class PresetManager {
    /**
     * @constructor
     * @param {VariableEditor} editor - Reference to main editor instance
     */
    constructor(editor, presetService = new PresetService('/api')) {
        this.editor = editor;
        this.presetService = presetService;
        this.currentPreset = null;
        
        this.initializeUI();
        this.bindEvents();
        this.updatePresetList();
    }

    initializeUI() {
        this.element = document.createElement('div');
        this.element.className = 'preset-manager';
        
        // Save controls
        this.saveContainer = document.createElement('div');
        this.saveContainer.className = 'preset-save-container';
        
        this.nameInput = document.createElement('input');
        this.nameInput.className = 'preset-name-input';
        this.nameInput.placeholder = 'Preset name';
        
        this.saveButton = document.createElement('button');
        this.saveButton.className = 'preset-save-button';
        this.saveButton.textContent = 'Save Preset';
        
        // Load controls
        this.loadContainer = document.createElement('div');
        this.loadContainer.className = 'preset-load-container';
        
        this.presetSelect = document.createElement('select');
        this.presetSelect.className = 'preset-select';
        
        this.loadButton = document.createElement('button');
        this.loadButton.className = 'preset-load-button';
        this.loadButton.textContent = 'Load Preset';
        
        this.deleteButton = document.createElement('button');
        this.deleteButton.className = 'preset-delete-button';
        this.deleteButton.textContent = 'Delete';
        
        // Status message
        this.statusMessage = document.createElement('div');
        this.statusMessage.className = 'preset-status-message';
        
        // Assemble UI
        this.saveContainer.append(this.nameInput, this.saveButton);
        this.loadContainer.append(this.presetSelect, this.loadButton, this.deleteButton);
        this.element.append(this.saveContainer, this.loadContainer, this.statusMessage);
    }

    bindEvents() {
        this.saveButton.addEventListener('click', () => this.handleSave());
        this.loadButton.addEventListener('click', () => this.handleLoad());
        this.deleteButton.addEventListener('click', () => this.handleDelete());
    }

    async handleSave() {
        try {
            const name = this.nameInput.value;
            if (!name) {
                this.showStatus('Please enter a preset name', 'error');
                return;
            }
            
            const variables = Object.fromEntries(this.editor.manager.variables);
            const presetData = { name, variables };
            
            await this.presetService.savePreset(presetData);
            this.showStatus('Preset saved successfully', 'success');
            await this.updatePresetList();
            
        } catch (error) {
            this.showStatus('Failed to save preset', 'error');
            console.error(error);
        }
    }

    async handleLoad() {
        try {
            const selectedId = this.presetSelect.value;
            if (!selectedId) {
                this.showStatus('Please select a preset', 'error');
                return;
            }
            
            const preset = await this.presetService.loadPresetById(selectedId);
            this.editor.manager.variables = new Map(Object.entries(preset.variables));
            this.editor.render();
            
            this.showStatus('Preset loaded successfully', 'success');
            
        } catch (error) {
            this.showStatus('Failed to load preset', 'error');
            console.error(error);
        }
    }

    async handleDelete() {
        try {
            const selectedId = this.presetSelect.value;
            if (!selectedId) {
                this.showStatus('Please select a preset', 'error');
                return;
            }
            
            await this.presetService.deletePreset(selectedId);
            this.showStatus('Preset deleted successfully', 'success');
            await this.updatePresetList();
            
        } catch (error) {
            this.showStatus('Failed to delete preset', 'error');
            console.error(error);
        }
    }

    async updatePresetList() {
        try {
            const presets = await this.presetService.loadPresets();
            this.presetSelect.innerHTML = '';
            
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Select a preset...';
            this.presetSelect.appendChild(defaultOption);
            
            presets.forEach(preset => {
                const option = document.createElement('option');
                option.value = preset.id;
                option.textContent = preset.name;
                this.presetSelect.appendChild(option);
            });
            
        } catch (error) {
            this.showStatus('Failed to load preset list', 'error');
            console.error(error);
        }
    }

    showStatus(message, type = 'info') {
        this.statusMessage.textContent = message;
        this.statusMessage.className = `preset-status-message ${type}`;
        setTimeout(() => {
            this.statusMessage.textContent = '';
            this.statusMessage.className = 'preset-status-message';
        }, 3000);
    }
}