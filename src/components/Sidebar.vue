<template>
  <div class="dashboard-sidebar">
    <div class="sidebar-image">
      <div class="image-holder">
        <img src="../assets/images/elephantom.png" alt="" />
      </div>
    </div>
    <div class="sidebar-menu">
      <ul>
        <li
          v-for="(route, index) in routes"
          :key="index"
          :class="$router.currentRoute.path === `${route.path}` ? 'active' : ''"
        >
          <router-link :to="route.path" exact-active-class="active">{{
            route.pathName
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-sidebar",
  data() {
    return {
      routes: [
        {
          path: "/",
          pathName: "Home",
        },
        {
          path: "/elephant",
          pathName: "Elephant",
        },
      ],
    };
  },
};
</script>

<style scoped>
.dashboard-sidebar {
  background: #ddddff;
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
  color: #30425a;
}

.sidebar-menu li {
  padding: 1rem 2.5rem;
  height: 3rem;
  display: flex;
  align-items: center;
}

.sidebar-menu li.active {
  background: #b9b9ff;
}

.sidebar-menu li.active a {
  color: #fff;
}
</style>