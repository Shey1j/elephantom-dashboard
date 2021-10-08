<template>
  <div class="elephant-data-container">
      <div class="elephant-data-content">
          <div class="elephant-image">
              <div class="image-overlay" />
          </div>
          <div class="content-details">
              <div class="elephant-name">
                  <h1>Tuffi</h1>
                  <p>Female</p>
              </div>
              <div class="elephant-description">
                  <p>A female circus elephant that became famous in Germany during 1950 when she accidentally fell into the River Wupper, and survived.</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "elephant-content"
}
</script>

<style scoped>
.elephant-data-container {
  padding: 1.5rem 1rem;
}

.elephant-image {
    height: 15rem;
    width: 100%;
    background-image: url(../assets/images/elephant.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.image-overlay {
    background: linear-gradient(180deg, rgba(196, 196, 196, 0) -1.55%, rgba(29, 29, 242, 0.37) 77.84%);
    width: 100%;
    height: 100%;
    position: absolute;
}

.elephant-name {
    display: flex;
    align-items: flex-end;
    column-gap: 12px;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(196, 205, 213, 0.62)
}
</style>