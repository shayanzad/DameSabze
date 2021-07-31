<template>
  <div dir="rtl">
    <div class="choose-item">
      <!-- <i :class="selected.icon"></i> -->
      <div class="d-flex">
        <img class="icons" :src="selected.src" />
        <h3 class="m-3">{{ selected.title }}</h3>
      </div>
      <p class="m-1">{{ selected.message }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["selected"]
};
</script>
<style scoped>
.icons {
  max-width: 55px;
  max-height: 55px;
}
</style>
