<template>
  <!-- <Component :is="getComponent('spinner')" />  -->

  <div>test test test</div>
</template>

<script>
export default {
  name: "Spinner",
  mounted() {
    console.log("mounted");
    // this.getComponent()
  },
  computed: {},
  methods: {
    getComponent(id) {
      console.log("halo");
      const parent = document.getElementById("product-root");
      console.log(parent);
      // const childRoot = parent.querySelector("main");
      // const spinner = document.createElement("div");
      // document.body.appendChild(childRoot);
      // console.log(spinner, "spinner");
      return;
    },

    // const child = parent.getElementById('shared-root')
    // const component = document.getElementsByClassName(`${id}`);
    // return component;
  },
};
</script>

<style lang="scss" scoped>
</style>