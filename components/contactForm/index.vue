<template>
  <div dir="rtl">
    <div class="container" style="text-aligh:right">
      <div class="section-title">
        <h2>با ما در ارتباط باشید</h2>
      </div>
      <form @submit.prevent="sentForm()" id="contactForm">
        <div class="row">
          <div class="col-sm-6 col-lg-6">
            <div class="form-group">
              <label>نام</label>
              <input
                v-model="contactForm.name"
                type="text"
                name="name"
                id="name"
                class="form-control"
                required
                data-error="لطفا نام خود را وارد کنید"
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-6">
            <div class="form-group">
              <label>ایمیل</label>
              <input
                v-model="contactForm.email"
                type="email"
                name="email"
                id="email"
                class="form-control"
                required
                data-error="لطفا ایمیل خود را وارد کنید"
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-6">
            <div class="form-group">
              <label>تلفن</label>
              <input
                v-model="contactForm.phone_number"
                type="text"
                name="phone_number"
                id="phone_number"
                required
                data-error="لطفا تلفن خود را وارد کنید"
                class="form-control"
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-6">
            <div class="form-group">
              <label>موضوع</label>
              <input
                v-model="contactForm.subject"
                type="text"
                name="msg_subject"
                id="msg_subject"
                class="form-control"
                required
                data-error="لطفا موضوع خود را وارد کنید"
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="col-md-12 col-lg-12">
            <div class="form-group">
              <label>پیام</label>
              <textarea
                v-model="contactForm.message"
                name="message"
                class="form-control"
                id="message"
                cols="30"
                rows="8"
                required
                data-error="پیام خود را بنویسید"
              ></textarea>
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="col-md-12 col-lg-12">
            <button
              @click.prevent="sentForm()"
              type="submit"
              class="cmn-btn btn"
            >
              ارسال پیام
            </button>
            <div id="msgSubmit" class="h3 text-center hidden"></div>
            <div class="clearfix"></div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import userOrder from "@/API/API/userOrder.js";
import HelperClass from "@/API/global/HelperClass.js";
export default {
  data() {
    return {
      contactForm: {
        name: "",
        email: "",
        phone_number: "",
        subject: "",
        message: ""
      }
    };
  },
  methods: {
    sentForm() {
      let formdata = new FormData();
      formdata.append("full_name", this.contactForm.name);
      formdata.append("email", this.contactForm.email);
      formdata.append("cell", this.contactForm.phone_number);
      formdata.append("subject", this.subject);
      formdata.append("description", this.contactForm.message);
      userOrder
        .sendOrder(formdata)
        .then(res => {
          if (res.data.message == "success") {
            this.$noty.success("فرم تماس با موفقیت ارسال شد");
            this.$noty.success("به زودی همکاران ما با شما تماس خواهند گرفت");
            this.contactForm = {
              name: "",
              email: "",
              phone_number: "",
              subject: "",
              message: ""
            };
          }
        })
        .catch(error => {
          HelperClass.showErrors(error, this.$noty);
        });
    }
  }
};
</script>
<style scoped>
.form-group {
  text-align: right !important;
}
</style>
