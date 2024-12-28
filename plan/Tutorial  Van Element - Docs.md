---
created: 2024-12-28T14:27:45 (UTC -05:00)
tags: []
source: https://van-element.pages.dev/intro/tutorial.html
author: 
---

# Tutorial | Van Element - Docs

> ## Excerpt
> Documentation for Van Element

---
Before starting, it is recommended that you take the [VanJS tutorial](https://vanjs.org/tutorial) 🙂

You can follow the tutorial with [this CodePen template](https://codepen.io/pen?template=WNmQwLw), or just read along if you prefer!

## First element [](https://van-element.pages.dev/intro/tutorial.html#first-element)

Let's build our first Van Element! It will just be a `span` with inline styles:

js

```
<span><span>define</span><span>(</span><span>"hello-world"</span><span>, () </span><span>=&gt;</span></span>
<span><span>  span</span><span>({ style: </span><span>"color:red;font-size:20px"</span><span> }, </span><span>"Hello world!"</span><span>)</span></span>
<span><span>);</span></span>
```

html

```
<span><span>My first Van Element: &lt;</span><span>hello-world</span><span>&gt;&lt;/</span><span>hello-world</span><span>&gt;</span></span>
```

Result My first Van Element: Hello world

## Slots [](https://van-element.pages.dev/intro/tutorial.html#slots)

Let's add children to our Van element. We can use the `slot` for this.

js

```
<span><span>const</span><span> { </span><span>span</span><span>, </span><span>slot</span><span> } </span><span>=</span><span> van.tags;</span></span>
<span></span>
<span><span>define</span><span>(</span><span>"hello-world"</span><span>, () </span><span>=&gt;</span></span>
<span><span>  span</span><span>({ style: </span><span>"color:red;font-size:20px"</span><span> }, </span><span>slot</span><span>())</span></span>
<span><span>);</span></span>
```

html

```
<span><span>Cool discovery: &lt;</span><span>hello-world</span><span>&gt;the slot&lt;/</span><span>hello-world</span><span>&gt;</span></span>
```

Result Cool discovery: the slot

TIP

Because they are Web components, Van Elements can use the `slot` tag as a way to inject children HTML elements. [Learn more about slots here!](https://van-element.pages.dev/advanced/slots.html)

## Attributes [](https://van-element.pages.dev/intro/tutorial.html#attributes)

It would be nice if we can change `color` and `font-size` from outside the Van Element, right?

Meet the first property provided by Van Element: `attr()`. It takes an attribute name and an optional default value and returns a VanJS `State` object.

js

```
<span><span>define</span><span>(</span><span>"hello-world"</span><span>, ({ </span><span>attr</span><span> }) </span><span>=&gt;</span><span> {</span></span>
<span><span>  const</span><span> color</span><span> =</span><span> attr</span><span>(</span></span>
<span><span>    "color"</span><span>, </span><span>// name of the attribute</span></span>
<span><span>    "red"</span><span> // default value (optional)</span></span>
<span><span>  );</span></span>
<span><span>  const</span><span> size</span><span> =</span><span> attr</span><span>(</span><span>"size"</span><span>, </span><span>20</span><span>);</span></span>
<span><span>  return</span><span> span</span><span>(</span></span>
<span><span>    { </span><span>style</span><span>: () </span><span>=&gt;</span><span> `color:${</span><span>color</span><span>.</span><span>val</span><span>};font-size:${</span><span>size</span><span>.</span><span>val</span><span>}`</span><span> },</span></span>
<span><span>    slot</span><span>()</span></span>
<span><span>  );</span></span>
<span><span>});</span></span>
```

html

```
<span><span>&lt;</span><span>hello-world</span><span> color</span><span>=</span><span>"green"</span><span> size</span><span>=</span><span>"16px"</span><span>&gt;I can be green &lt;/</span><span>hello-world</span><span>&gt;</span></span>
<span><span>&lt;</span><span>hello-world</span><span> color</span><span>=</span><span>"orange"</span><span> size</span><span>=</span><span>"24px"</span><span>&gt;or orange &lt;/</span><span>hello-world</span><span>&gt;</span></span>
<span><span>&lt;</span><span>hello-world</span><span>&gt;or red by default&lt;/</span><span>hello-world</span><span>&gt;</span></span>
```

ResultI can be green or orange or default

## Isolated styles [](https://van-element.pages.dev/intro/tutorial.html#isolated-styles)

There is another way we can style our content instead of inline styles: by using a `style` tag.

Our Van Element is isolated in the Shadow DOM, so whatever we write in that inner style won't leak out to the rest of the page!

javascript

```
<span><span>define</span><span>(</span><span>"hello-world"</span><span>, ({ </span><span>attr</span><span> }) </span><span>=&gt;</span><span> {</span></span>
<span><span>  const</span><span> color</span><span> =</span><span> attr</span><span>(</span><span>"color"</span><span>, </span><span>"red"</span><span>);</span></span>
<span><span>  const</span><span> size</span><span> =</span><span> attr</span><span>(</span><span>"size"</span><span>, </span><span>"20px"</span><span>);</span></span>
<span><span>  return</span><span> [</span></span>
<span><span>    // Styles won't leak out!</span></span>
<span><span>    style</span><span>(() </span><span>=&gt;</span><span> `*{color:${</span><span>color</span><span>.</span><span>val</span><span>};font-size:${</span><span>size</span><span>.</span><span>val</span><span>}}`</span><span>),</span></span>
<span><span>    span</span><span>(</span><span>slot</span><span>()),</span></span>
<span><span>  ];</span></span>
<span><span>});</span></span>
```

html

```
<span><span>The styles in the normal DOM</span></span>
<span><span>&lt;</span><span>hello-world</span><span> color</span><span>=</span><span>"green"</span><span>&gt;or in other Van Elements &lt;/</span><span>hello-world</span><span>&gt;</span></span>
<span><span>&lt;</span><span>hello-world</span><span>&gt;won't be affected!&lt;/</span><span>hello-world</span><span>&gt;</span></span>
```

Result The styles in the normal DOM or in other Van Elements won't be affected!

## Reactive Van Elements [](https://van-element.pages.dev/intro/tutorial.html#reactive-van-elements)

This tutorial is way too static. Let's add a bit of reactivity.

Something nice about Van Elements is that you can reuse them... inside other Van Elements!

As an example, let's build some handles for our Van Element:

javascript

```
<span><span>const</span><span> RangePicker</span><span> =</span><span> (</span><span>min</span><span>:</span><span> number</span><span>, </span><span>max</span><span>:</span><span> number</span><span>, </span><span>value</span><span>:</span><span> State</span><span>&lt;</span><span>number</span><span>&gt;) </span><span>=&gt;</span></span>
<span><span>  input</span><span>({</span></span>
<span><span>    type: </span><span>"range"</span><span>,</span></span>
<span><span>    min,</span></span>
<span><span>    max,</span></span>
<span><span>    value,</span></span>
<span><span>    oninput</span><span>: (</span><span>e</span><span>) </span><span>=&gt;</span><span> (value.val </span><span>=</span><span> e.target.value),</span></span>
<span><span>  });</span></span>
<span></span>
<span><span>define</span><span>(</span><span>"tutorial-wrapper"</span><span>, () </span><span>=&gt;</span><span> {</span></span>
<span><span>  const</span><span> color</span><span> =</span><span> van.</span><span>state</span><span>(</span><span>0</span><span>);</span></span>
<span><span>  const</span><span> size</span><span> =</span><span> van.</span><span>state</span><span>(</span><span>20</span><span>);</span></span>
<span><span>  return</span><span> div</span><span>(</span></span>
<span><span>    div</span><span>(</span><span>"Hue: "</span><span>, </span><span>RangePicker</span><span>(</span><span>0</span><span>, </span><span>360</span><span>, color), () </span><span>=&gt;</span><span> ` ${</span><span>color</span><span>.</span><span>val</span><span>}deg`</span><span>),</span></span>
<span><span>    div</span><span>(</span><span>"Size: "</span><span>, </span><span>RangePicker</span><span>(</span><span>20</span><span>, </span><span>40</span><span>, size), () </span><span>=&gt;</span><span> ` ${</span><span>size</span><span>.</span><span>val</span><span> /</span><span> 20</span><span>}em`</span><span>),</span></span>
<span><span>    p</span><span>(</span></span>
<span><span>      van.tags[</span><span>"hello-world"</span><span>](</span></span>
<span><span>        {</span></span>
<span><span>          color</span><span>: () </span><span>=&gt;</span><span> `hsl(${</span><span>color</span><span>.</span><span>val</span><span>} 100% 50%)`</span><span>,</span></span>
<span><span>          size</span><span>: () </span><span>=&gt;</span><span> `${</span><span>size</span><span>.</span><span>val</span><span> /</span><span> 20</span><span>}em`</span><span>,</span></span>
<span><span>        },</span></span>
<span><span>        slot</span><span>()</span></span>
<span><span>      )</span></span>
<span><span>    )</span></span>
<span><span>  );</span></span>
<span><span>});</span></span>
```

html

```
<span><span>&lt;</span><span>tutorial-wrapper</span><span>&gt;Color sample&lt;/</span><span>tutorial-wrapper</span><span>&gt;</span></span>
```

## Lifecycle [](https://van-element.pages.dev/intro/tutorial.html#lifecycle)

Since `em` is not very visual, it would be nice to get the computed `font-size` in pixels. We could use `window.getComputedStyle` for this! Let's try it:

ts

```
<span><span>define</span><span>(</span><span>"computed-size"</span><span>, ({ </span><span>attr</span><span> }) </span><span>=&gt;</span><span> {</span></span>
<span><span>  const</span><span> color</span><span> =</span><span> attr</span><span>(</span><span>"color"</span><span>, </span><span>"red"</span><span>);</span></span>
<span><span>  const</span><span> size</span><span> =</span><span> attr</span><span>(</span><span>"size"</span><span>, </span><span>"20px"</span><span>);</span></span>
<span><span>  const</span><span> dom</span><span> =</span><span> slot</span><span>();</span></span>
<span><span>  return</span><span> [</span></span>
<span><span>    style</span><span>(</span></span>
<span><span>      () </span><span>=&gt;</span><span> `</span></span>
<span><span>      * {</span></span>
<span><span>        color: ${</span><span>color</span><span>.</span><span>val</span><span>};</span></span>
<span><span>        font-size: ${</span><span>size</span><span>.</span><span>val</span><span>};</span></span>
<span><span>      }</span></span>
<span><span>    `</span></span>
<span><span>    ),</span></span>
<span><span>    span</span><span>(dom),</span></span>
<span><span>    window.</span><span>getComputedStyle</span><span>(dom, </span><span>null</span><span>).fontSize,</span></span>
<span><span>  ];</span></span>
<span><span>});</span></span>
```

html

```
<span><span>&lt;</span><span>computed-size</span><span> size</span><span>=</span><span>"1.5em"</span><span>&gt;1.5em&lt;/</span><span>computed-size</span><span>&gt;&lt;</span><span>br</span><span> /&gt;</span></span>
<span><span>&lt;</span><span>computed-size</span><span> size</span><span>=</span><span>"1.2em"</span><span> color</span><span>=</span><span>"orange"</span><span>&gt;1.2em&lt;/</span><span>computed-size</span><span>&gt;</span></span>
```

That doesn't seem to work 🤔 the reason is that slots only get populated _after_ the component has rendered.

For this, there is the `mount` hook: it registers a function that only runs when the component has mounted:

ts

```
<span><span>define</span><span>(</span><span>"computed-size-fixed"</span><span>, ({ </span><span>attr</span><span>, </span><span>mount</span><span> }) </span><span>=&gt;</span><span> {</span></span>
<span><span>  const</span><span> color</span><span> =</span><span> attr</span><span>(</span><span>"color"</span><span>, </span><span>"red"</span><span>);</span></span>
<span><span>  const</span><span> size</span><span> =</span><span> attr</span><span>(</span><span>"size"</span><span>, </span><span>"20px"</span><span>);</span></span>
<span><span>  const</span><span> dom</span><span> =</span><span> slot</span><span>();</span></span>
<span><span>  const</span><span> computedFontSize</span><span> =</span><span> van.</span><span>state</span><span>(</span><span>""</span><span>); </span></span>
<span><span>  mount</span><span>(() </span><span>=&gt;</span><span> {</span></span>
<span><span>    computedFontSize.val </span><span>=</span><span> window.</span><span>getComputedStyle</span><span>(dom, </span><span>null</span><span>).fontSize;</span></span>
<span><span>  });</span></span>
<span><span>  return</span><span> [</span></span>
<span><span>    style</span><span>(</span></span>
<span><span>      () </span><span>=&gt;</span><span> `</span></span>
<span><span>      * {</span></span>
<span><span>        color: ${</span><span>color</span><span>.</span><span>val</span><span>};</span></span>
<span><span>        font-size: ${</span><span>size</span><span>.</span><span>val</span><span>};</span></span>
<span><span>      }</span></span>
<span><span>    `</span></span>
<span><span>    ),</span></span>
<span><span>    span</span><span>(dom),</span></span>
<span><span>    computedFontSize,</span></span>
<span><span>  ];</span></span>
<span><span>});</span></span>
```

html

```
<span><span>&lt;</span><span>computed-size-fixed</span><span> size</span><span>=</span><span>"1.5em"</span><span>&gt;1.5em&lt;/</span><span>computed-size-fixed</span><span>&gt;&lt;</span><span>br</span><span> /&gt;</span></span>
<span><span>&lt;</span><span>computed-size-fixed</span><span> size</span><span>=</span><span>"1.2em"</span><span> color</span><span>=</span><span>"orange"</span><span>&gt;1.2em&lt;/</span><span>computed-size-fixed</span><span>&gt;</span></span>
```

Now we get the proper font sizes!

## Self-reference [](https://van-element.pages.dev/intro/tutorial.html#self-reference)

There is one last thing we would want to do: we want to make sure our Van Element is used properly!

Currently people can use anything in the slot: plain text, any HTML tags, even script tags 🤔 this might be intended for some components, but here we want to make sure that the only child of our Van Element is:

-   plain text
-   not white space

We can access the reference of the Van Element using `$this`

ts

```
<span><span>define</span><span>(</span><span>"final-element"</span><span>, ({ </span><span>attr</span><span>, </span><span>mount</span><span>, </span><span>$this</span><span> }) </span><span>=&gt;</span><span> {</span></span>
<span><span>  if</span><span> ($this.childElementCount </span><span>||</span><span> !</span><span>$this.innerHTML.</span><span>trim</span><span>())</span></span>
<span><span>    return</span><span> span</span><span>({ style: </span><span>"color:red"</span><span> }, </span><span>"ERROR - only text allowed"</span><span>);</span></span>
<span><span>  const</span><span> color</span><span> =</span><span> attr</span><span>(</span><span>"color"</span><span>, </span><span>"red"</span><span>);</span></span>
<span><span>  const</span><span> size</span><span> =</span><span> attr</span><span>(</span><span>"size"</span><span>, </span><span>"20px"</span><span>);</span></span>
<span><span>  const</span><span> dom</span><span> =</span><span> slot</span><span>();</span></span>
<span><span>  const</span><span> computedFontSize</span><span> =</span><span> van.</span><span>state</span><span>(</span><span>""</span><span>);</span></span>
<span><span>  mount</span><span>(() </span><span>=&gt;</span><span> {</span></span>
<span><span>    computedFontSize.val </span><span>=</span><span> window.</span><span>getComputedStyle</span><span>(dom, </span><span>null</span><span>).fontSize;</span></span>
<span><span>  });</span></span>
<span><span>  return</span><span> [</span></span>
<span><span>    style</span><span>(</span></span>
<span><span>      () </span><span>=&gt;</span><span> `</span></span>
<span><span>      * {</span></span>
<span><span>        color: ${</span><span>color</span><span>.</span><span>val</span><span>};</span></span>
<span><span>        font-size: ${</span><span>size</span><span>.</span><span>val</span><span>};</span></span>
<span><span>      }</span></span>
<span><span>    `</span></span>
<span><span>    ),</span></span>
<span><span>    span</span><span>(dom),</span></span>
<span><span>    computedFontSize,</span></span>
<span><span>  ];</span></span>
<span><span>});</span></span>
```

html

```
<span><span>&lt;</span><span>final-element</span><span> color</span><span>=</span><span>"orange"</span><span> size</span><span>=</span><span>"1.2em"</span><span>&gt;Correct usage&lt;/</span><span>final-element</span><span>&gt;&lt;</span><span>br</span><span> /&gt;</span></span>
<span><span>&lt;</span><span>final-element</span><span> color</span><span>=</span><span>"orange"</span><span> size</span><span>=</span><span>"1.2em"</span><span>&gt;&lt;</span><span>p</span><span>&gt;Wrong usage&lt;/</span><span>p</span><span>&gt;&lt;/</span><span>final-element</span><span>&gt;</span></span>
```

ResultCorrect usage  

Wrong usage

## That's it! [](https://van-element.pages.dev/intro/tutorial.html#that-s-it)

You have reached the end of the tutorial! Now you know basically everything there is to know about Van Elements. You can now freely explore the wonders of the Web Component world... or [disable the Shadow DOM](https://van-element.pages.dev/learn/shadow-options.html#disable-shadow-dom) if you prefer!
