<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="faq-content">
            <ul
              v-for="(item, index) in selected"
              :key="index"
              class="accordion"
            >
              <li @click="clickfaqItem(item.id)" class="my-2">
                <a :class="activIndex === item.id ? 'active' : ''">{{
                  item.title
                }}</a>
                <p :class="['p-3', activIndex === item.id ? 'active_p' : '']">
                  {{ item.description }}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="faq-img">
            <img src="/NEWIMAGES/faq.jpg" alt="FAQ" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["selected"],

  data() {
    return {
      activIndex: 1,
      tempActiveIndex: ""
    };
  },

  methods: {
    clickfaqItem(index) {
      this.activIndex = index;
    }
  }
};
</script>
<style scoped>
.active_p {
  display: block !important;
}
</style>
