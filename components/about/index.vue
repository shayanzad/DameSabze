<template>
  <div dir="rtl">
    <section class="about-area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 ">
            <AboutUs style="margin-right:10%" v-bind="AboutUsInfo" />
          </div>
          <div class="col-lg-6">
            <div>
              <img src="/NEWIMAGES\about-us.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import AboutUs from "@/components/cardWithCallToActions";
export default {
  components: {
    AboutUs
  },
  data() {
    return {
      AboutUsInfo: {
        title: "درباره ما بیشتر بدانید",
        titr: "خرید گوسفند زنده، با بالاترین کیفیت به صورت مجازی!",
        message: `
          گروه دامداری دام سبز، فعالیت خود را از سال 85 با عرضه‌ی انواع دام‌های گوشتی، مثل 
گوسفند و گوساله و خروس و باقی دام‌ها شروع کرده و پس از 15 سال عرضه‌ی خدمات 
باکیفیت، اکنون در فضای مجازی هم در خدمت شماست. `
      }
    };
  }
};
</script>
