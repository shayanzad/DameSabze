<template>
  <div dir="rtl">
    <ul>
      <li class="comment-box">
        <!-- <img src="assets/img/home-one/review1.jpg" alt="Details"> -->
        <h4>{{ name }}</h4>
        <span class="date">{{
          new Date(created_at).toLocaleDateString("fa-IR")
        }}</span>
        <p>{{ text }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      requerd: true
    },
    text: {
      requerd: true
    },
    created_at: {
      requerd: true
    }
  }
};
</script>
<style scoped>
.comment-box {
  border: 1px solid rgba(200, 200, 200, 0.8);
  border-radius: 5px;
  padding: 10px 10px 0px 0px;
  margin: 10px;
}
.date {
  color: #fdb139;
}
</style>
