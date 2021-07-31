<template>
  <div>
    <div class="estimate-area ptb-100 mt-5">
      <div class="container">
        <div class="estimate-content">
          <div class="section-title">
            <h2>سفارش دام</h2>
          </div>
          <form @submit.prevent="submitOrder()">
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <input
                    v-model="order.name"
                    type="text"
                    class="form-control"
                    placeholder="نام شما"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <input
                    v-model="order.phoneNumber"
                    type="number"
                    class="form-control"
                    placeholder="شماره شما"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <input
                    v-model="order.emailAddress"
                    type="email"
                    class="form-control"
                    placeholder="آدرس ایمیل شما"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <input
                    v-model="order.Subject"
                    type="text"
                    class="form-control"
                    placeholder="موضوع"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <textarea
                    v-model="order.message"
                    id="your-message"
                    rows="6"
                    class="form-control"
                    placeholder="پیام شما"
                  ></textarea>
                </div>
              </div>
              <div class="col-lg-12">
                <button
                  @click.prevent="submitOrder($event)"
                  type="submit"
                  class="btn cmn-btn"
                >
                  سفارش دام
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userOrder from "@/API/API/userOrder";
import HelperClass from "@/API/global/HelperClass";
export default {
  data() {
    return {
      order: {
        name: "",
        phoneNumber: "",
        emailAddress: "",
        Subject: "",
        message: ""
      }
    };
  },
  methods: {
    submitOrder(e) {
      e.preventDefault();
      let isFormCompleted = false;
      if (
        this.order.name.length !== "" &&
        this.order.phoneNumber.length !== "" &&
        this.order.emailAddress.length !== "" &&
        this.order.Subject.length !== "" &&
        this.order.message.length !== ""
      ) {
        isFormCompleted = true;
      } else {
        alert("complete the form");
      }
      if (isFormCompleted == true) {
        let formdata = new FormData();
        formdata.append("full_name", this.order.name);
        formdata.append("cell", this.order.phoneNumber);
        formdata.append("email", this.order.emailAddress);
        formdata.append("title", this.order.Subject);
        formdata.append("description", this.order.message);
        userOrder
          .sendOrder(formdata)
          .then(() => {
            this.order.name = "";
            this.order.phoneNumber = "";
            this.order.emailAddress = "";
            this.order.Subject = "";
            this.order.message = "";
            this.$noty.success("فرم با موفقیت ارسال شد");
          })
          .catch(error => {
            HelperClass.showErrors(error, this.$noty);
          });
      }
    }
  }
};
</script>
