<template>
  <div dir="rtl">
    <!-- Preloader -->
    <div v-show="showLoader" class="loader">
      <Loader />
    </div>
    <!-- End Preloader -->

    <!-- Error -->
    <div class="error-area">
      <div class="error-item">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container my-5">
              <div class="error-img">
                <img
                  style="max-width:350px;"
                  src="@/assets/NEWIMAGES/404-error.png"
                  alt="Error"
                />
                <img src="@/assets/img/error-shape1.png" alt="Shape" />
                <img src="@/assets/img/error-shape2.png" alt="Shape" />
                <img src="@/assets/img/error-shape3.png" alt="Shape" />
              </div>
              <h1>404</h1>
              <p>صفحه یافت نشد</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Error -->

    <!-- Subscribe -->
    <Subscribe />
    <!-- end Subscribe -->
  </div>
</template>
<script>
import Loader from "@/components/loader";
import Subscribe from "@/components/subscribe";
export default {
  components: {
    Loader,
    Subscribe
  },
  mounted() {
    this.showLoader = false;
  },
  data() {
    return {
      showLoader: true,
      pageTitle: "404| صفحه در درسترس نیست| دام سبز",
      pageDescription:
        "دام زنده‌ای در این صفحه موجود نیست! برای خرید دام زنده به صفحه‌ی اصلی مراجعه کنید. "
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
  }
};
</script>
