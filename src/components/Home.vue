<template>
  <div class="sidebar-to-header">
    <app-sidebar />
    <div class="body-content">
      <app-header />
      <app-content-list />
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import ElephantList from "./ElephantsList.vue";
export default {
  name: "elephant-home",
  components: {
    "app-sidebar": Sidebar,
    "app-header": Header,
    "app-content-list": ElephantList,
  },
};
</script>

<style>
.sidebar-to-header {
  display: flex;
}

.sidebar-to-header .body-content {
    width: 100%;
}
</style>