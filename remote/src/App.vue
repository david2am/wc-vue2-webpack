<script>
export default {
  data() {
    return {
      description: "Uses a dynamic prop"
    };
  }
};
</script>

<template>
  <div class="container">
    <my-navbar>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </my-navbar>
    <h1>Remote with WC</h1>
    <my-description some-text="Uses a static prop" />
    <my-description :some-text="description" />

    <my-footer />
  </div>
</template>