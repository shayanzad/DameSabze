<template>
  <div dir="rtl">
    <!-- Preloader -->
    <div v-show="showLoader" class="loader">
      <Loader />
    </div>
    <!-- End Preloader -->

    <!-- Page Title -->
    <PageTitleArea selected="در باره ما" />
    <!-- End Page Title -->

    <!--  aboutUs content -->
    <section style="padding:5%" v-html="getBannerInformation"></section>
    <!-- end aboutUs content -->

    <!-- Counter -->
    <Counter />
    <!-- End Counter -->

    <!-- Subscribe -->
    <Subscribe />
    <!-- End Subscribe -->
  </div>
</template>
<script>
import PageTitleArea from "@/components/pageTitleArea";
import Loader from "@/components/loader";
import Counter from "@/components/counter";
import Subscribe from "@/components/subscribe";
import GeneralAPI from "@/API/asyncAPI/generalAPI.js";

export default {
  async asyncData(context) {
    await GeneralAPI.getGeneralInformation().then(res => {
      context.store.dispatch("getAllSetting", res.data);
    });
    let getBannerInformation = context.store.state.AllSetting.data.about_us;
    return { getBannerInformation };
  },

  data() {
    return {
      showLoader: true,
      pageTitle: "خرید گوسفند زنده آنلاین| دام سبز| درباره‌ی ما",
      pageDescription:
        "خرید گوسفند زنده، بابالاترین کیفیت به صورت مجازی! گروه دامداری دام سبز."
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
  components: {
    PageTitleArea,
    Loader,
    Counter,
    Subscribe
  },
  mounted() {
    this.showLoader = false;
  }
};
</script>
