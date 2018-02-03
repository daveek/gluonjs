# Gluonjs

[Gluonjs](https://gluonjs.ruph.in/) is a **lightweight library** for building web applications. The latest 2.2 release (with all dependencies bundled in) weighs only 2.8Kb.


* **Platform Based:** GluonJS is designed to leverage the latest web platform capabilities, making it extremely small in size, and very performant on modern browsers. Additionally, it means that __build/compile steps are optional__; GluonJS components work on modern browsers without any pre-processing.
* **Component Model:** Build components with encapsulated logic and style, then compose them to make complex interfaces. Uses the Web Component standard, with all related APIs available directly to developers.
* **Highly Reusable:** Because GluonJS creates standards-compliant Web Components, you can use components created with GluonJS in almost any existing application. Check [Custom Elements Everywhere](https://custom-elements-everywhere.com/) for up-to-date compatibility tables with existing frameworks.
* **Powerful Templating:** GluonJS uses [lit-html](https://github.com/PolymerLabs/lit-html) for templating, making it highly expressive and flexible.


## Examples

Here is an example of a GluonJS component:

```javascript
// helloMessage.js
import { GluonElement, html } from '/node_modules/gluonjs/gluon.js';

class HelloMessage extends GluonElement {
  get template() {
    return html`<div>Hello ${this.getAttribute('name')}</div>`;
  }
}

customElements.define(HelloMessage.is, HelloMessage);
```

We can import and use this component from anywhere:

```html
<!-- index.html -->
<script type="module" src="/helloMessage.js"></script>

<hello-message name="John"></hello-message>
```

This example will render "Hello John" on the page.


## Documentation

***Coming soon***


## Installation

GluonJS is available through [npm](https://www.npmjs.com) as `gluonjs`.


## Compatibility

| Chrome | Safari | Edge | Firefox  | IE |
|--------|--------|------|----------|----|
| ✔      | ✔     | *    | * †      | * † ‡|

\* Requires [Web Component polyfill](https://www.webcomponents.org/polyfills/)

† Requires ES6 Module bundling

‡ Pending IE support in [lit-html](https://github.com/PolymerLabs/lit-html)




## Contributing
All work on GluonJS happens in the open on [Github](https://github.com/ruphin/gluonjs). A development environment is available at `localhost:5000` with `npm install && npm run dev`, or `make dev` if you use [Docker](https://www.docker.com/). All issue reports and pull requests are welcome.


## License

[MIT](http://opensource.org/licenses/MIT)

Copyright © 2017-present, Goffert van Gool
