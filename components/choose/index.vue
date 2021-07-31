<template>
  <div>
    <div class="choose-area pt-100 pb-70">
      <div class="choose-shape">
        <img src="@/assets/img/home-one/choose1.png" alt="Shape" />
        <img src="@/assets/img/home-one/banner-shape3.png" alt="Shape" />
        <img src="@/assets/img/home-one/choose2.png" alt="Shape" />
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="choose-content">
              <div class="row align-items-center">
                <div class="col-sm-6 col-lg-6">
                  <div class="col-lg-12 p-0">
                    <Card :selected="CardInfo[0]" />
                  </div>
                  <div class="col-lg-12 p-0">
                    <Card :selected="CardInfo[1]" />
                  </div>
                </div>
                <div class="col-sm-6 col-lg-6">
                  <Card :selected="CardInfo[2]" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <WhyYouChooseUs v-bind="WhyUs" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./card";
import WhyYouChooseUs from "../cardWithCallToActions";
export default {
  components: {
    Card,
    WhyYouChooseUs
  },
  data() {
    return {
      CardInfo: [
        {
          src: "/NEWIMAGES/organic.png",
          title: "محصولات ارگانیک",
          message:
            "در پروش دام‌ها ، از هیچ‌گونه دارویی استفاده نمی‌شود و دام‌ها در چراگاه و به صورت سنتی و گله‌ای رشد می‌کنند. "
        },
        {
          src: "/NEWIMAGES/free_delivery.png",
          title: "ارسال رایگان",
          message:
            "ارسال گوسفند و به طور کلی تمامی دام‌ها ، به صورت کاملا رایگان و به سراسر تهران و کرج انجام می‌شود."
        },
        {
          src: "/NEWIMAGES/butcher.png",
          title: "اعزام قصاب",
          message: "همراه با ارسال تمامی دام‌ها، قصاب هم به محل اعزام می‌شود."
        }
      ],
      WhyUs: [
        {
          title: "چرا دام سبز اولین انتخاب ماست",
          titr: "گوسفند زنده‌ی باکیفیت را از ما بخرید!",
          message: `گروه دامداری دام سبز، پاسخگوی نیاز شما برای خرید انواع دام باکیفیت می‌باشد. 
گوسفندها و به طور کلی دام‌های ما، به صورت کاملا بهداشتی و ارگانیک و از همه مهم‌تر 
به صورت سنتی و گله‌ای رشد پیدا می‌کنند. از آن جایی که خوراک باکیفیت و ارگانیک، به 
افزایش سلامت ما کمک می‌کند، استفاده از دام‌های باکیفیت برای ما اهمیت زیادی دارد. 
گروه دامداری دام سبز، این اطمینان را به شما می‌دهد که بدون مشغله‌ی فکری، بهترین 
دام‌ها را تهیه کنید. `
        }
      ]
    };
  }
};
</script>
