<template>
  <main id="shared-root" />
</template>

<script>
import Components from "../components/Components";

export default {
  name: "MicroFrontend",
  data() {
    return {
      host: "http://localhost:8080",
      name: "Shared",
    };
  },
  components: { Components },
  mounted() {
    this.getManifest();
  },
  methods: {
    mountMicroFrontend() {
      const windowMethod = window[`mount${this.name}`];

      if (windowMethod) windowMethod("shared-root");
    },
    unmountMicroFrontend() {
      console.log(unmountMicroFrontend, "unmountMicroFrontend");
      const windowMethod = window[`unmount${this.name}`];

      if (windowMethod) windowMethod("shared-root");
    },
    getManifest() {
      const scriptId = `micro-frontend-script-${this.name}`;

      if (document.getElementById(scriptId)) {
        this.unmountMicroFrontend();
        this.mountMicroFrontend();
        return;
      }

      fetch(`${this.host}/asset-manifest.json`)
        .then((res) => res.json())
        .then((manifest) => {
          Object.keys(manifest.files).map((key) => {
            const script = document.createElement("script");

            if (!key.endsWith(".js")) return;

            script.id = scriptId;
            script.crossOrigin = "";
            script.src = `${this.host}${manifest.files[key]}`;

            script.onload = () => {
              this.mountMicroFrontend();
            };

            document.head.appendChild(script);
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
