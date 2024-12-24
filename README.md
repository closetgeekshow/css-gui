# css-gui based generative css component

We're building a system for building procedurally generated web effects using with standards-based CSS, CSS variables, design tokens, Javascript and HTML. They are going to be static or animated. I intend to have them be composed based on templates or saved presets of parameters. I would like to be able to combine effects together. 

Each effect will be generative and parametric with some static parameters and some variable ones. 

I intend to build the interface using react and the css.gui library for manipulating the defined parameters in a given template. Parameters can be css variables, js variables, or html attributes. 

We should also have a way to save and load templates and presets as JSON as well as having a way to predefine some. 

We also need to have a way to export the CSS, js and html required to reproduce the effect.

## Requirements
- code must be written in javascript
- code must follow the (Style Guide)[jsDocStyleGuide.md]
- folders and files must follow the (Pattern)[folderPattern.md]

## Future TODOS
- [ ] Add a way to write and edit templates with a text editor
- [ ] add a way to write and edit presets with a text editor
- [ ] Visual editors for templates and presets