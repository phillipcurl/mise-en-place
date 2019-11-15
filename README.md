# mise-en-place

<p align="center">
<!-- <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a> -->
</p>

<p>
  <!-- <a href="https://circleci.com/gh/vuejs/vue/tree/dev"><img src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg" alt="Build Status"></a> -->
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/v/mise-en-place" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/bundlephobia/minzip/mise-en-place" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/mise-en-place" alt="License"></a>
</p>

> A collection of layout primitives for building Vue.js apps.

[![Edit mise-en-place-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/mise-en-place-demo-72l3z?fontsize=14&hidenavigation=1&theme=dark&view=preview)

## Basic Usage

### Directly in the browser

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

Or, if you only want to use a small subset of components, drop them in individually:

```html
<div id="app">
  <layout></layout>
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/mise-en-place/Layout"></script>
<script>
  new Vue({ el: "#app" });
</script>
```

### In a module system

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
