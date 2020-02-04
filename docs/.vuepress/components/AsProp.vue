<template>
  <div>
    <ul>
      <li>Type: <code>String</code></li>
      <li>
        Default: <code>{{ as }}</code>
      </li>
    </ul>
    <p>
      The HTML element to render the
      <code>&lt; {{ name }} /&gt;</code> component as. See
      <a href="/guide/principles.html#semantic-html" class="">semantic HTML</a>
      for more details.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    as: {
      type: String,
      default: "div"
    }
  }
};
</script>

<style></style>
