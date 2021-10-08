<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Overpass&display=swap');
/* @font-face {
  font-family: "SF Pro Text";
  src: url(./assets/fonts/FontsFree-Net-SFProText-Regular.tff), format('ttf');
}
@font-face {
  font-family: "Graphik";
  src: url(./assets/fonts/GraphikRegular.otf), format('otf');
} */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #f5f8ff;
}
</style>
