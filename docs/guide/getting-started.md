# Getting Started

## In a module system

Install the library with NPM:

```bash
npm install mise-en-place
```

Then register the library as a plugin to globally install all components:

```js
import MiseEnPlace from "mise-en-place";

Vue.use(MiseEnPlace);
```

Or, import components individually for local registration:

```js
import { Layout } from "mise-en-place";

export default {
  components: { Layout }
};
```

## Directly in the browser

Drop the library in with a `<script>` tag alongside Vue to globally install all components:

```html
<div id="app">
  <layout>...</layout>
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/mise-en-place"></script>
<script>
  new Vue({ el: "#app" });
</script>
```
