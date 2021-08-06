<template>
  <div>
    <headerbar />
    <sortNav />
    <footerbar />
  </div>
</template>

<script>
import headerbar from "../../components/header.vue";
import footerbar from "../../components/footer.vue";
import sortNav from "./sortNav.vue";
export default {
  data() {
    return {};
  },
  components: {
    headerbar,
    footerbar,
    sortNav,
  },
};
</script>

<style scoped>
.main {
  background-color: #f7f7f7;
}
</style>