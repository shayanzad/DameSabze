<template>
  <div>
    <!-- Banner -->
    <div class="banner-area">
      <div class="banner-shape">
        <img
          style="right:auto !important;max-width:700px;left:6%"
          src="@/assets/NEWIMAGES/Banner.png"
          alt="Banner"
        />

        <img src="@/assets/img/home-one/banner-shape1.png" alt="Shape" />
        <img src="@/assets/img/home-one/banner-shape2.png" alt="Shape" />
        <img src="@/assets/img/home-one/banner-shape3.png" alt="Shape" />
        <img src="@/assets/img/home-one/banner-shape4.png" alt="Shape" />
        <img src="@/assets/img/home-one/banner-shape5.png" alt="Shape" />
        <img src="@/assets/img/home-one/banner-shape6.png" alt="Shape" />
      </div>
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="banner-text">
              <h1>{{ selected.titr }}</h1>
              <p>{{ selected.description }}</p>
              <!-- <a class="cmn-btn" href="#">ارتباط با ما</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Banner -->
  </div>
</template>
<script>
export default {
  props: ["selected"]
};
</script>
<style scoped></style>
