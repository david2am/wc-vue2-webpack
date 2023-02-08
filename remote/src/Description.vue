<script>
export default {
  props: {
    someText: {
      type: String,
      default: "This component receives a prop"
    }
  }
};
</script>

<template>
  <p>{{ someText }}</p>
</template>
