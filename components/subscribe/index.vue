<template>
  <div dir="rtl">
    <div class="subscribe-area">
      <div class="subscribe-wrap px-1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="section-title" style="text-align:right">
                <h2>در خبرنامه ما عضو شوید</h2>
              </div>
            </div>
            <div class="col-lg-6 col-12 py-4 px-2">
              <form
                @submit.prevent="subscribe()"
                class=" newsletter-form"
                data-toggle="validator"
              >
                <div class="row">
                  <div class="col-12 col-md my-2 my-md-0 ">
                    <input
                      style="text-align:left !important;"
                      v-model="email"
                      type="email"
                      class="form-control"
                      placeholder="آدرس ایمیل شما"
                      name="EMAIL"
                      required
                      autocomplete="off"
                    />
                  </div>
                  <div class=" col-12 col-md-auto d-flex">
                    <button
                      @click.prevent="subscribe($event, email)"
                      class="btn button-submitt"
                      type="submit"
                    >
                      ثبت اشتراک
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import membership from "@/API/API/membership";
import HelperClass from "@/API/global/HelperClass";
export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    // send email
    subscribe(e, email) {
      e.preventDefault();
      let formdata = new FormData();
      formdata.append("email", email);
      membership
        .requestToJoinMagazine(formdata)
        .then(() => {
          this.$noty.success("ایمیل شما با موفقیت در خبرنامه ثبت شد");
          this.email = "";
        })
        .catch(error => {
          //   error.response
          // ? this.$noty.warning(error.response.data.errors.email)
          // : "";
          //   console.log(error.response.data.errors);
          e.preventDefault();
          HelperClass.showErrors(error, this.$noty);
        });
    }
  }
};
</script>
<style scoped>
.button-submitt {
  color: white;
  background-color: #fdb139;
  border-radius: 30px;
}
</style>
