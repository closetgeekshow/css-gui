# css effects generator tools

## The backstory
We're trying to figure out how to approach a system for generating css effects. This is mark 2, the first was trying to do too many things at once. This time we're going to try to create self contained tools/scripts that are focused on a particular task.

## The new approach, what tools I think we need
* A tool for pulling out a list of all the css variables in a given css file or string
* a tool that can take a list of css variables and generate a ui component for editing and setting them with javascript
  * a preset system so that you can save and load values for the variables
* a tool that can take html, css and js and generate an html page of them all together perhaps embedded in a iframe or as a scoped custom element 
  * html, css and js can be in json, seperate files, or strings, or edited in real time in the browser
* a tool that can look at some css (in a file, json, or string) and provide a list of attributes inside that could be parameterized into css variables that would be good for procedural generation
  * we could also figure out a way to write this as a reusable LLM prompt  
* a tool for generating sensible color schemes from a given color

## Requirements
- code must be written in vanilla javascript in ES6 format using ESM imports
- typescript libraries are allowed but i don't want to ever write it
- code must follow the (JSDoc Style Guide)[jsDocStyleGuide.md]
- folders and files must follow the (Pattern)[folderPattern.md]
