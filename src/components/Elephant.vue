<template>
  <div class="sidebar-to-header">
    <app-sidebar />
    <div class="body-content">
      <app-header />
      <app-elephant-data />
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import ElephantData from "./ElephantContent.vue";
export default {
  name: "elephant-type",
  components: {
    "app-sidebar": Sidebar,
    "app-header": Header,
    "app-elephant-data": ElephantData
  },

}
</script>

<style>
.sidebar-to-header {
  display: flex;
}

.sidebar-to-header .body-content {
    width: 100%;
}
</style>