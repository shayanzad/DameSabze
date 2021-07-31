<template>
  <div dir="rtl">
    <client-only>
      <section class="review-area ptb-100">
        <div class="review-shape">
          <img
            class="avatar-user"
            src="@/assets/img/home-one/banner-shape6.png"
            alt="Shape"
          />
        </div>
        <div class="container">
          <div class="section-title">
            <span class="sub-title">بازخورد مشتریان</span>
            <h2>مشتریان ما چه می گویند</h2>
          </div>
          <div dir="ltr">
            <carousel
              :perPageCustom="[
                [0, 1],
                [320, 1],
                [380, 1],
                [412, 1],
                [1199, 2]
              ]"
            >
              <slide
                v-for="(item, index) in selected"
                :key="index"
                data-index="3"
                data-name="MySlideName"
              >
                <div dir="rtl" class="review-slider">
                  <div class="review-item">
                    <div
                      class="d-flex align-items-center flex-column p-3 content"
                    >
                      <img :src="item.image_url" alt="Review" />
                      <h4>{{ item.title }}</h4>
                      <p>{{ item.sub_title }}</p>
                    </div>
                  </div>
                </div>
              </slide>
            </carousel>
          </div>
        </div>
      </section>
    </client-only>
  </div>
</template>
<script>
export default {
  props: ["selected"]
};
</script>
<style scoped>
.review-slider {
  overflow: visible;
  padding-top: 32px;
  max-width: 600px;
  max-height: 292px;
  margin: auto;
  box-shadow: 0 0 20px 0 #dddddd80;
  position: relative;
  justify-content: center;
}
.review-item img {
  position: absolute;
  max-width: 100px;
  border-radius: 10px;
  right: -32px;
  top: -45px;
}
.content {
  text-align: center;
}

.content h3 {
  font-weight: 600;
  font-size: 20px;
  color: #4a686a;
  margin-bottom: 10px;
}
</style>
