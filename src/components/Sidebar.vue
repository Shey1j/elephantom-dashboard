<template>
  <div class="dashboard-sidebar">
      <div class="sidebar-image">
          <div class="image-holder">
              <img src="../assets/images/elephantom.png" alt="" />
          </div>
      </div>
      <div class="sidebar-menu">
          <ul>
              <li v-for="(route, index) in routes" :key="index"><router-link :to="route.path" exact-active-class="active">{{ route.pathName }}</router-link></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: 'app-sidebar',
    data() {
        return {
            routes: [
                {
                    path: "/",
                    pathName: "Home"
                },
                {
                    path: "/elephant",
                    pathName: "Elephant"
                }
            ]
        }
    }
}
</script>

<style scoped>
    .dashboard-sidebar {
        background: #ddddff;
        height: 100vh;
        width: 22.5rem;
    }
    .sidebar-image {
        padding: 2.5rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image-holder {
        padding: 1.75rem;
        border-radius: 50%;
        background: #fff;
    }

    .sidebar-menu a {
        text-decoration: none;
    }

    .sidebar-menu li.active {
        padding: 1rem 2.5rem;
        background: #b9b9ff;
    }
</style>