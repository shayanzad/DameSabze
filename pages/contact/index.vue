<template>
  <div dir="rtl">
    <!-- Preloader -->
    <div v-show="showLoader" class="loader">
      <Loader />
    </div>
    <!-- End Preloader -->

    <!-- Page Title -->
    <PageTitleArea selected="تماس با ما" />
    <!-- End Page Title -->

    <!-- Location -->
    <div class="location-area pt-100 pb-70">
      <LocationCard />
    </div>
    <!-- End Location -->

    <!-- Contact -->
    <div class="contact-area pb-100">
      <ContactForm />
    </div>
    <!-- End Contact -->

    <!-- Map -->
    <div class="map-area pb-100">
      <Map />
    </div>
    <!-- End Map -->

    <!-- Subscribe -->
    <div class="subscribe-area">
      <Subscribe />
    </div>
    <!-- End Subscribe -->
  </div>
</template>
<script>
import Loader from "@/components/loader";
import LocationCard from "@/components/locationCard";
import ContactForm from "@/components/contactForm";
import Map from "@/components/map";
import Subscribe from "@/components/subscribe";
import PageTitleArea from "@/components/pageTitleArea";
import GeneralAPI from "@/API/asyncAPI/generalAPI.js";

export default {
  async asyncData(context) {
    await GeneralAPI.getGeneralInformation().then(res => {
      context.store.dispatch("getAllSetting", res.data);
    });
    // let getBannerInformation = context.store.state.AllSetting.data.about_us;
    // return { getBannerInformation };
  },
  components: {
    PageTitleArea,
    Loader,
    LocationCard,
    ContactForm,
    Map,
    Subscribe
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
      pageTitle: "برای خرید گوسفند زنده با ما تماس بگیرید| تماس با ما",
      pageDescription:
        "برای خرید گوسفند و دام زنده به صورت آنلاین در تهران و کرج با شماره‌های زیر در تماس باشید. "
    };
  },
  mounted() {
    this.showLoader = false;
  }
};
</script>
