<template>
  <div dir="rtl ">
    <div class="choose-contact">
      <div class="section-title" style="text-align:right">
        <span class="sub-title">{{ title }}</span>
        <h2>{{ titr }}</h2>
      </div>
      <p style="max-width:700px">{{ message }}</p>
      <NuxtLink class="cmn-btn" to="/contact">تماس با ما</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      requerd: true
    },
    titr: {
      requerd: true
    },
    message: {
      requerd: true
    }
  }
};
</script>
