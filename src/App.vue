<template>
  <div>
    <MicroFrontend />
  </div>
</template>

<script>
import MicroFrontend from "./components/microFrontend";

export default {
  name: "App",
  components: {
    MicroFrontend,
  },
};
</script>

<style>
#product-root {
  border: 5px solid green;
}
</style>
