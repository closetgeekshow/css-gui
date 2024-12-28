---
created: 2024-12-28T14:26:52 (UTC -05:00)
tags: []
source: https://vanjs.org/tutorial
author: 
---

# VanJS - Tutorial and API Reference

> ## Excerpt
> -- Occam's Razor

---
> _Entia non sunt multiplicanda praeter necessitatem  
> (The best solution is usually the one with the least unnecessary complexity)
> 
> \-- Occam's Razor
> 
> _

In this tutorial, we will break down into 3 core functionalities **VanJS** supports: DOM composition / manipulation, State and State binding.

## [DOM Composition and Manipulation](https://vanjs.org/tutorial#dom)

___

### [Your first VanJS app: a simple `Hello` page](https://vanjs.org/tutorial#your-first-vanjs-app-a-simple-hello-page)

We will start this tutorial with a simple `Hello` page, with the code below:

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/hello)

The code should be self-explanatory if you have some familiarity with HTML. Unlike React, everything in the code above is just pure JavaScript, meaning that you are simply calling functions from `van.js` without any transpiling that converts your source code into another form. Reusable UI components built with **VanJS** can be pure vanilla JavaScript functions as well. Here we capitalize the first letter to follow React conventions.

Also unlike React, **VanJS** does not introduce an ad-hoc virtual DOM layer. All the tag functions above directly return the created DOM objects. e.g.: the function call `p("👋Hello")` simply creates an `[HTMLParagraphElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParagraphElement)` with `👋Hello` as its `[innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)`, meaning that you can directly interact with your created DOM nodes with native DOM APIs.

💡 **Tip**: If you are tired of adding all the tag function names manually in the importing line:

we have built a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=TaoXin.vanjs-importtag) with the command that can automatically import the tag function at the cursor. You can check out its [GitHub repo](https://github.com/vanjs-org/vanjs-importtag) for more details.

### [API reference: `van.tags`](https://vanjs.org/tutorial#api-tags)

`van.tags` is a top-level dynamic object in **VanJS** implemented with `[Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)`. `van.tags.<name>` gets you a function that creates an HTML element with tag name `<name>`. A common way of using `van.tags` is like the line below:

With the line, `a`, `div`, `p` are functions that create `<a>`, `<div>`, `<p>` HTML elements respectively.

We will use `div` function as an example, the API reference for `div` tag function is as below:

<table><tbody><tr><td><b>Signature</b></td><td><code id="code-lang-js"><span>div</span><span>(</span><span><span>[</span>props<span>]</span><span>,</span> <span>...</span>children</span><span>)</span> <span>=&gt;</span> <span>&lt;</span>the created <span>DOM</span> element<span>&gt;</span></code></td></tr><tr><td><b>Description</b></td><td>Creates an <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement">HTMLDivElement</a></code> with <code>props</code> as its properties and <code>children</code> as its child nodes.</td></tr><tr><td><b>Parameters</b></td><td><ul><li><b><code>props</code></b> - optional, a plain JavaScript object whose keys and values are the keys and values of the properties of the created HTML element. Keys should be <code>string</code>, and each value can be a primitive (<code>string</code>, <code>number</code>, <code>boolean</code> or <code>bigint</code>), <code>null</code>, a primitive-valued or <code>null</code>-valued <code>State</code> object, or a <code>function</code> for a <code>State</code>-derived property. We will explain the behavior of <a href="https://vanjs.org/tutorial#state-typed-prop"><code>State</code>-typed</a> and <a href="https://vanjs.org/tutorial#state-derived-prop"><code>State</code>-derived</a> properties in State Binding section below. For keys like <code>on...</code>, the value should be a <code>function</code> to represent the event handler.</li><li><b><code>children</code></b> - caller can provide 0 or more children as arguments to represent the child nodes of the created HTML element. Each child can be a valid DOM node, a primitive (<code>string</code>, <code>number</code>, <code>boolean</code> or <code>bigint</code>), <code>null</code>, <code>undefined</code>, a primitive-valued or <code>null</code>/<code>undefined</code>-valued <code>State</code> object, a <code>function</code> for a <code>State</code>-derived child, or an <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a></code> of children. <code>null</code>/<code>undefined</code>-valued children will be ignored. A <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Text">Text node</a></code> will be created for each primitive-typed argument. We will explain the behavior of <a href="https://vanjs.org/tutorial#state-typed-child"><code>State</code>-typed child</a> and <a href="https://vanjs.org/tutorial#state-derived-child"><code>State</code>-derived child</a> in State Binding section below. For DOM node, it shouldn't be already connected to a document tree (<code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected">isConnected</a></code> property should be <code>false</code>). i.e.: You should not declare an existing DOM node in the current document as the child node of the newly created element.</li></ul></td></tr><tr><td><b>Returns</b></td><td>The <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement">HTMLDivElement</a></code> object just created.</td></tr></tbody></table>

### [SVG and MathML Support](https://vanjs.org/tutorial#svg-and-mathml-support)

To create HTML elements with custom `[namespace URI](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI)`, you can declare tag functions via `van.tags(<namespaceURI>)` (or `van.tagsNS(<namespaceURI>)` before **VanJS** [1.4.0](https://github.com/vanjs-org/van/discussions/280)). Here is an example of composing the SVG DOM tree:

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/smiley)

Similarly, math formulas can be created with `[MathML](https://developer.mozilla.org/en-US/docs/Web/MathML/Element)` elements:

**Demo:** eiπ+1\=0

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/euler)

### [API reference `van.tags` (for elements with custom namespace URI)](https://vanjs.org/tutorial#api-tagsns)

<table><tbody><tr><td><b>Signature</b></td><td><code id="code-lang-js">van<span>.</span><span>tags</span><span>(</span><span>namespaceURI</span><span>)</span> <span>=&gt;</span> <span>&lt;</span>the created tags object <span>for</span> elements <span>with</span> specified namespaceURI<span>&gt;</span></code></td></tr><tr><td><b>Description</b></td><td>Creates a tags <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy">Proxy</a></code> object similar to <code><a href="https://vanjs.org/tutorial#api-tags">van.tags</a></code> for elements with specified <code>namespaceURI</code>.</td></tr><tr><td><b>Parameters</b></td><td><ul><li><b><code>namespaceURI</code></b> - a string for the <code>namespaceURI</code> property of elements created via tag functions.</li></ul></td></tr><tr><td><b>Returns</b></td><td>The created tags object.</td></tr></tbody></table>

### [API reference: `van.add`](https://vanjs.org/tutorial#api-add)

`van.add` function is similar to tag functions described above. Instead of creating a new HTML element with specified properties and children, `van.add` function mutates its first argument (which is an existing `[Element node](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)`) by appending 0 or more children with `[appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)` calls:

<table><tbody><tr><td><b>Signature</b></td><td><code id="code-lang-js">van<span>.</span><span>add</span><span>(</span><span>dom<span>,</span> <span>...</span>children</span><span>)</span> <span>=&gt;</span> dom</code></td></tr><tr><td><b>Description</b></td><td>Mutates <code>dom</code> by appending 0 or more child nodes to it. Returns <code>dom</code> for possibly further chaining.</td></tr><tr><td><b>Parameters</b></td><td><ul><li><b><code>dom</code></b> - an existing DOM element that we want to append children to.</li><li><b><code>children</code></b> - caller can provide 0 or more <code>children</code> as arguments to represent the child nodes we want to append to <code>dom</code>. Each child can be a valid DOM node, a primitive, <code>null</code>, <code>undefined</code>, a primitive-valued or <code>null</code>/<code>undefined</code>-valued <code>State</code> object, a <code>function</code> for a <code>State</code>-derived child, or an <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a></code> of children. <code>null</code>/<code>undefined</code>-valued children will be ignored. A <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Text">Text node</a></code> will be created for each primitive-typed argument. <a href="https://vanjs.org/tutorial#state-typed-child"><code>State</code>-typed child</a> and <a href="https://vanjs.org/tutorial#state-derived-child"><code>State</code>-derived child</a> behave the same way as in tag function. For DOM node, it shouldn't be already connected to a document tree (<code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected">isConnected</a></code> property should be <code>false</code>). i.e.: You should not append an existing DOM node in the current document to <code>dom</code>. If 0 children is provided, this function is a no-op.</li></ul></td></tr><tr><td><b>Returns</b></td><td><code>dom</code></td></tr></tbody></table>

### [DOM nodes already in the document tree can't be used as `children`](https://vanjs.org/tutorial#dom-nodes-already-in-the-document-tree-can-t-be-used-as-children)

As mentioned in the API reference, if a DOM node is already connected to the document tree, it shouldn't be used as the child node of tag function or `van.add`. The following code is invalid and an `[Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)` will be thrown when `van-<version>.debug.js` is being used:

### [Functional-style DOM tree building](https://vanjs.org/tutorial#fun-dom)

Because both tag functions and `van.add` can take `[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)` arguments and the `Array` arguments can be deeply nested. **VanJS** enables very ergonomic DOM tree composition in functional-style. See examples below:

Building a bullet list:

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/list)

Building a table:

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/table)

### [`on...` event handlers](https://vanjs.org/tutorial#on-event-handlers)

In tag functions, you can provide a `function` value for property keys like `on...`. This is a convenient way to specify event handlers. For instance, the code below creates a `[button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)` that shows an alert whenever clicked:

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/onclick)

_The support of custom event handlers was added in **VanJS** [1.2.8](https://github.com/vanjs-org/van/discussions/246)._

🎉 Congratulations! You have mastered the skills for building and manipulating DOM trees using **VanJS**'s declarative API, which is incredibly powerful for creating comprehensive applications with elegant code. In the sections below, you will continue to learn how to build reactive applications with state and state binding.

If your application doesn't rely on state and state binding, you can use the slimmed-down version of **VanJS** - [Mini-Van](https://vanjs.org/minivan).

## [State](https://vanjs.org/tutorial#state)

___

A `State` object in **VanJS** represents a value that can be updated throughout your application. A `State` object has a public property `val`, with a [custom setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) that automatically propagates changes to DOM nodes that are bound to it.

The code below illustrates how a `State` object can be used:

**Demo:**

1

Text

1<sup>2</sup> = 1

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/state)

### [API reference: `van.state`](https://vanjs.org/tutorial#api-state)

<table><tbody><tr><td><b>Signature</b></td><td><code id="code-lang-js">van<span>.</span><span>state</span><span>(</span><span>initVal</span><span>)</span> <span>=&gt;</span> <span>&lt;</span>the created State object<span>&gt;</span></code></td></tr><tr><td><b>Description</b></td><td>Creates a <code>State</code> object with its init value specified in the argument.</td></tr><tr><td><b>Parameters</b></td><td><ul><li><b><code>initVal</code></b> - the init value of the <code>State</code> object to be created.</li></ul></td></tr><tr><td><b>Returns</b></td><td>The created <code>State</code> object.</td></tr></tbody></table>

### [Public interface of `State` objects](https://vanjs.org/tutorial#public-interface-of-state-objects)

-   Property `**val**` - the current value of the `State` object. When a new value of this property is set, all [derived states](https://vanjs.org/tutorial#derived-state) and [side effects](https://vanjs.org/tutorial#side-effect) registered via `[van.derive](https://vanjs.org/tutorial#api-derive)` and all DOM nodes that are bound to it will be updated accordingly.
-   Readonly property `**oldVal**` - the old value of the `State` object prior to the current UI update cycle. This property might be useful for [stateful binding](https://vanjs.org/tutorial#stateful-binding).
-   Readonly property `**rawVal**` - _(requires **VanJS** [1.5.0](https://github.com/vanjs-org/van/discussions/290) or later)_ getting the current value of the `State` object (peeking) without registering the state as a dependency of the binding function for the derived state, side effect or DOM node. For instance, the derived state `van.derive(() => a.rawVal + b.val)` will be updated when `b` changes, but won't be updated when `a` changes.

The value of a `State` object can be almost anything, primitive, `[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)`, `[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)`, `[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null)`, etc., with 2 ad-hoc exceptions that we made: The value of the `State` object cannot be a DOM node, or another `State` object. Having values in these 2 types carries little semantic information and is more likely a result of coding bugs. Thus we disallow `State` objects to have values in these 2 types. In `van-{version}.debug.js`, an explicit error will be thrown if you try to assign a DOM node or another `State` object as the value of a state.

See also: [Why can't states have DOM node as values?](https://vanjs.org/advanced#why-not-dom-valued-states)

### [`State.val` is immutable](https://vanjs.org/tutorial#state-val-is-immutable)

While you can update `State` objects by setting the `val` property, you should never mutate the underlying object of `val` itself. Doing so will not trigger the DOM tree update as you would expect and might result in [undefined behavior](https://en.wikipedia.org/wiki/Undefined_behavior) due to [aliasing](https://en.wikipedia.org/wiki/Aliasing_(computing)).

### [Derived state](https://vanjs.org/tutorial#derived-state)

Derived states can be declared via `van.derive`, as illustrated in the example below:

**Demo:** The length of is 5.

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/derived-state)

### [API reference: `van.derive`](https://vanjs.org/tutorial#api-derive)

<table><tbody><tr><td><b>Signature</b></td><td><code id="code-lang-js">van<span>.</span><span>derive</span><span>(</span><span>f</span><span>)</span> <span>=&gt;</span> <span>&lt;</span>the created derived state<span>&gt;</span></code></td></tr><tr><td><b>Description</b></td><td>Creates a derived <code>State</code> object based on the derivation function <code>f</code>. The <code>val</code> of the derived state is always in sync with the result of <code>f</code>. i.e.: whenever the <code>val</code> of its dependency changes, <code>f</code> will be called to update the <code>val</code> of the derived state, synchronously.</td></tr><tr><td><b>Parameters</b></td><td><ul><li><b><code>f</code></b> - The derivation function, which takes no parameter and returns a single value.</li></ul></td></tr><tr><td><b>Returns</b></td><td>The created derived <code>State</code> object.</td></tr></tbody></table>

Note that: Since [**VanJS** 1.5.0](https://github.com/vanjs-org/van/discussions/290), we have changed the execution of state derivation from synchronous to asynchronous as an optimization to avoid potentially unnecessary derivations. That is, instead of executing state derivations immediately, the derivations are scheduled to execute as soon as the next event cycle of browser context (i.e.: after the current call stack is cleared, which is equivalent to `setTimeout(..., 0)`). The effect of the asynchronous derivation can be illustrated by the code below:

### [Side effect](https://vanjs.org/tutorial#side-effect)

`van.derive` can be used to declare side effects as well. You can discard the return value of `van.derive` if you are not interested. The code below is a modified `Counter App` which logs the counter to console whenever it changes:

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/effect)

See also: [Advanced state derivation](https://vanjs.org/advanced#advanced-state-derivation)

## [State Binding](https://vanjs.org/tutorial#state-binding)

___

Once `State` objects are created, we can bind them to DOM nodes in various ways to make your UI reactive to state changes.

### [`State` objects as properties](https://vanjs.org/tutorial#state-typed-prop)

`State` objects can be used as properties of HTML elements. Similar to `State`\-based child nodes, the value of the properties will be always in sync with the value of the respective states. When `State` objects are used as properties, you need to make sure that the values of the states are always valid property values, i.e.: primitives or `function`s (for event handlers).

The following code demonstrates 2 `[text inputs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)` whose values are always in sync:

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/connected-props)

### [`State` objects as child nodes](https://vanjs.org/tutorial#state-typed-child)

`State` objects can be used as child nodes in `[tag functions](https://vanjs.org/tutorial#api-tags)` and `[van.add](https://vanjs.org/tutorial#api-add)`, like the `[Counter](https://vanjs.org/#code-counter)` example shown in the home page. For a `State` object used as a child node, its value needs to be primitive (`string`, `number`, `boolean` or `bigint`), and a `[Text node](https://developer.mozilla.org/en-US/docs/Web/API/Text)` will be created for it. The content of the created `Text node` will be always in sync with the value of the state.

The following code shows how to build a simple timer with this feature:

**Demo:** 5s

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/timer)

### [`State`\-derived properties](https://vanjs.org/tutorial#state-derived-prop)

`State`\-derived property is a more advanced way to bind a property of an HTML element to one or more underlying `State` objects. To declare a `State`\-derived property, you need to provide a function as the value in `props` argument while calling to a `[tag function](https://vanjs.org/tutorial#api-tags)`. The function takes no parameter and return the value of the property. Whenever any dependency of the function changes, the value of the property will be updated accordingly.

The example below is a live font size and color preview implemented with this feature:

**Demo:** Size: Color: Hello 🍦VanJS

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/font-preview)

### [State-derived `on...` event handlers](https://vanjs.org/tutorial#state-derived-event-handlers)

When declaring a `State`\-derived property for an `on...` event handler, you should wrap around the binding function with `van.derive(...)` (i.e.: defining an ad-hoc [derived state](https://vanjs.org/tutorial#derived-state)). Otherwise, the function you provide will be consider as the event handler, rather than the binding function for the `State`\-derived property. See the example below:

**Demo:** ❤️ 0

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/escape-derived-prop)

### [`State`\-derived child nodes](https://vanjs.org/tutorial#state-derived-child)

Similarly, you can bind an HTML node to one or more underlying `State` objects. To declare a `State`\-derived child node, you need to provide a function as the `child` argument while calling to a `[tag function](https://vanjs.org/tutorial#api-tags)` or `[van.add](https://vanjs.org/tutorial#api-add)`. The function you provide can return a primitive value (a `[Text node](https://developer.mozilla.org/en-US/docs/Web/API/Text)` will be created for it) or a DOM node. The following example illustrates this:

**Demo:**

Comma-separated list:

-   a
-   b
-   c

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/sorted-list)

Note that: Due to the limit of DOM API, the result of the binding function can't be an array of elements. You can wrap the result into a pass-through container (`<span>` for inline elements and `<div>` for block elements) if multiple elements need to be returned.

### [Removing a DOM node](https://vanjs.org/tutorial#removing-a-dom-node)

For `State`\-derived child nodes, if the binding function returns `null` or `undefined`, the DOM node will removed. Removed DOM node will never be brought back, even when the binding function would return a non-`null`/`undefined` value based on future values of the dependencies.

The following code illustrates how to build an editable list with this features:

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/editable-list)

### [Stateful binding](https://vanjs.org/tutorial#stateful-binding)

While dealing with state updates for `State`\-derived child node, a user can choose to, instead of regenerating the new version of the DOM node entirely based on new state values, mutate the existing DOM node that is already connected to the document tree based on all the new values and old values of its dependencies. This feature can be used as an optimization to avoid the entire DOM subtree being completely re-rendered.

The following code is a snippet of the [auto-complete application](https://vanjs.org/demo#auto-complete) which leverages this feature to optimize:

The piece of code above is building a suggestion list that is reactive to the changes of selection `candidates` and `selectedIndex`. When selection `candidates` change, the `suggestionList` needs to be regenerated. However, if only `selectedIndex` changes, we only need to update the DOM element to indicate that the new candidate is being selected now, which can be achieved by changing the `[classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)` of relevant candidate elements.

To facilitate stateful binding, the binding function takes the `dom` parameter, which is the current version of the DOM node prior to UI updates (or `undefined` when the binding function is first called). The binding function can either return `dom` (which means we don't want to update the DOM node to a new version), a primitive value (a new `[Text node](https://developer.mozilla.org/en-US/docs/Web/API/Text)` will be created for it), or a new DOM node (whose `[isConnected](https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected)` property should be `false`).

### [Polymorphic Binding](https://vanjs.org/tutorial#polymorphic-binding)

If you use **VanJS** to build reusable UI components, it might be desirable for your components, just like tag functions, to accept a static value, a `State` object, or a binding function as a property value. For instance, for a reusable `Button` component like that:

it would be desirable for the `color` property of `Button` component to accept a static value, a `State` object, or a binding function. If the `color` property is used as a DOM node property or as a child node, things can work out of the box, as tag functions and `van.add` support static values, `State` objects, and binding functions in `props` and `children` parameter. However, if the `color` property is used inside a binding function for a `State`\-derived property or a `State`\-derived child, it would be hard for your component to work with different types of input. Consider the example below:

When `color` is a static value, we should use `${color}`. However, when `color` is a state, we should use `${color.val}`, and when `color` is a binding function, we should use `${color()}` . This makes it hard to build reusable UI component that accepts all types of property values.

To tackle this issue, you can define an ad-hoc value resolver to get value for different types of property inputs. The value resolver can be something like this:

Note that we're using `Object.getPrototypeOf(van.state())` (`van.state()` returns a dummy `State` object) to get the [prototype object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes) of `State` objects. It's guaranteed that all `State` objects in **VanJS** share the same prototype.

Let's look at a practical example - a reuseable button whose `color`, `text` and `onclick` properties can be a static value, a `State` object, or a binding function:

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/poly-binding)

## [The End](https://vanjs.org/tutorial#the-end)

___

🎉 Congratulations! You have completed the entire tutorial of **VanJS**. Now you can start your journey of building feature-rich applications!

To learn more, you can:

-   check out a list of [sample applications](https://vanjs.org/demo) built with **VanJS**.
-   read the in-depth discussion of a few [advanced topics](https://vanjs.org/advanced).
-   check out how to build a [fullstack app](https://vanjs.org/ssr) with SSR, CSR and hydration.
-   check out [**VanX**](https://vanjs.org/x) for more features: reactive list, global app state, server-driven UI, serialization, etc.
-   debug complex dependencies in your app via [**VanGraph**](https://vanjs.org/graph).

## [API Index](https://vanjs.org/tutorial#api-index)

___

Below is the list of all top-level APIs in **VanJS**:

-   `[van.tags](https://vanjs.org/tutorial#api-tags)`
-   `[van.add](https://vanjs.org/tutorial#api-add)`
-   `[van.state](https://vanjs.org/tutorial#api-state)`
-   `[van.derive](https://vanjs.org/tutorial#api-derive)`
-   `[van.hydrate](https://vanjs.org/ssr#api-hydrate)`
