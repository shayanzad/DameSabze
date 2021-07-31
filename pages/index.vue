<template>
  <div dir="rtl">
    <!-- Preloader -->
    <div v-show="showLoader" class="loader">
      <Loader />
    </div>
    <!-- End Preloader -->

    <!-- Banner -->
    <!-- <Banner :selected="getBannerInformation" /> -->
    <Banner :selected="Banner" />
    <!-- end Banner -->

    <!-- Counter -->
    <Counter />
    <!-- End Counter -->

    <!-- Choose -->
    <Choose />
    <!-- End Choose -->

    <!-- About -->
    <About />
    <!-- End About -->

    <!-- Review -->
    <RegisterOrder />
    <!-- End Review -->

    <!-- Estimate -->
    <Estimate :selected="sliderCommetns" />
    <!-- End Estimate -->

    <!-- Subscribe -->
    <Subscribe />
    <!-- End Subscribe -->
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Counter from "../components/counter";
import Choose from "../components/choose";
import About from "../components/about";
import Estimate from "../components/Estimate";
import RegisterOrder from "../components/registerOrderForm";
import Subscribe from "../components/subscribe";
import Loader from "../components/loader";
import GeneralAPI from "@/API/asyncAPI/generalAPI.js";
import getCommentsForSlider from "@/API/asyncAPI/slider.js";

export default {
  layout: "dafault",
  async asyncData(context) {
    // slider
    let getBannerInformation = await GeneralAPI.getGeneralInformation()
      .then(res => {
        context.store.dispatch("getAllSetting", res.data);
        return res.data;
      })
      .catch(error => {
        console.log(error);
      });

    let sliderCommetns = await getCommentsForSlider
      .getCommentsForSlider()
      .then(res => {
        return res.data.data;
      });
    return { getBannerInformation: getBannerInformation.data, sliderCommetns };
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
      pageTitle: "فروش گوسفند زنده| دام زنده| دام سبز",
      pageDescription:
        "فروش گوسفند زنده باکیفیت. فروش انواع دام‌های گوشتی باکیفیت و ارگانیک، ارسال به سراسر تهران و کرج همراه با اعزام قصاب. ",
      Banner: {
        titr: "دام سبز",
        description:
          "دامداری دام سبز، با 15 سال سابقه‌ی کار در زمینه‌ی توزیع انواع دام‌های گوشتی، از جمله  گوسفند، گوساله، خروس و دیگر دام‌ها فعالیت می‌کند. افتخار ما این است که در تمام  سال‌های فعالیت، دام‌های ارگانیک و با کیفیت به مشتریان عزیزمان عرضه کرده‌ایم."
      }
    };
  },
  components: {
    Banner,
    Loader,
    Counter,
    Choose,
    About,
    Estimate,
    RegisterOrder,
    Subscribe
  },
  mounted() {
    this.showLoader = false;
  }
};
</script>
