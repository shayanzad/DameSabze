<template>
  <div dir="rtl">
    <!-- Preloader -->
    <div v-show="showLoader" class="loader">
      <Loader />
    </div>
    <!-- End Preloader -->

    <!-- Page Title -->
    <PageTitleArea selected="سوالات متداول" />
    <!-- End Page Title -->

    <!-- FAQ -->
    <div class="faq-area ptb-100">
      <FAQ :selected="allFAQ" />
    </div>
    <!-- End FAQ -->

    <!-- Subscribe -->
    <Subscribe />
    <!-- End Subscribe -->
  </div>
</template>
<script>
import Loader from "@/components/loader";
import Subscribe from "@/components/subscribe";
import FAQ from "@/components/faq";
import FAQAPI from "@/API/asyncAPI/faq.js";
import HelperClass from "@/API/global/HelperClass.js";
import PageTitleArea from "@/components/pageTitleArea";

export default {
  async asyncData() {
    let allFAQ = await FAQAPI.getFaqs()
      .then(res => {
        // console.log(res.data.data);
        return res.data.data;
      })
      .catch(err => {
        HelperClass.showErrors(err, this.$noty);
      });
    return {
      allFAQ: allFAQ
    };
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        {
          name: "Description",
          content: this.pageDescription
        }
      ]
    };
  },
  data() {
    return {
      showLoader: true,
      activIndex: 10,
      pageTitle: "آیا امکان ارسال به درب منزل وجود دارد؟| سوالات متداول",
      pageDescription:
        "بله، تمامی دام‌ها به صورت رایگان وهمراه با اعزام قصاب به صورت رایگان ارسال می‌شوند. ارسال دام به تمامی نقاط تهران و کرج صورت می‌پذیرد."
    };
  },

  mounted() {
    this.showLoader = false;
  },
  components: {
    PageTitleArea,
    Loader,
    Subscribe,
    FAQ
  }
};
</script>
<style scoped>
.ggg {
  display: block !important;
}
</style>
