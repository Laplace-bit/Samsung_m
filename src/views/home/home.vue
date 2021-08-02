<template>
  <div>
    <headerbar />
    <banner />
    <type />
  </div>
</template>

<script>
import headerbar from "../../components/header.vue";
import banner from "./banner.vue";
import type from "./type.vue";
export default {
  data() {
    return {};
  },
  components: {
    headerbar,
    banner,
    type,
  },
};
</script>

<style>
</style>