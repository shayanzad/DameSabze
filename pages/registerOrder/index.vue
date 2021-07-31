<template>
  <div dir="rtl">
    <!-- Preloader -->
    <div v-show="showLoader" class="loader">
      <Loader />
    </div>
    <!-- End Preloader -->

    <!-- Page Title -->
    <PageTitleArea selected="سفارش دام" />
    <!-- End Page Title -->
    <div>
      <RegisterOrderForm />
    </div>

    <!-- Subscribe -->
    <Subscribe />
    <!-- End Subscribe -->
  </div>
</template>
<script>
import Loader from "@/components/loader";
import RegisterOrderForm from "@/components/registerOrderForm";
import Subscribe from "@/components/subscribe";
import PageTitleArea from "@/components/pageTitleArea";

export default {
  components: {
    PageTitleArea,
    Loader,
    RegisterOrderForm,
    Subscribe
  },
  mounted() {
    this.showLoader = false;
  },
  data() {
    return {
      showLoader: true,
      title: this.pageTitle,
      meta: [
        {
          name: "Description",
          content: this.pageDescription
        }
      ]
    };
  },
  head() {
    return {
      pageTitle: "خرید و سفارش انواع گوسفند و دام‌های گوشتی| دام سبز",
      pageDescription:
        "برای خرید و سفارش گوسفند با کیفیت و انواع دام گوشتی، با شماره‌های زیر در تماس باشید. شعبه‌ی ملاصدرا:02188699125 شعبه‌ی شهر زیبا: 02144749671"
    };
  }
};
</script>
