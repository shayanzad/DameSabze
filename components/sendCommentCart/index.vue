<template>
  <div dir="rtl">
    <h3>پاسخ دهید</h3>
    <span
      >آدرس ایمیل شما منتشر نخواهد شد. قسمتهای مورد نیاز علامت گذاری شده اند
      *</span
    >
    <form @submit.prevent="postUserComment">
      <div class="row">
        <div class="col-lg-6">
          <div class="form-group">
            <label>نام*</label>
            <input v-model="comments.name" type="text" class="form-control" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-group">
            <label>ایمیل*</label>
            <input v-model="comments.email" type="email" class="form-control" />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="form-group">
            <label>نظر</label>
            <textarea
              v-model="comments.message"
              id="your-comment"
              rows="10"
              class="form-control"
            ></textarea>
          </div>
        </div>
        <div class="col-lg-12">
          <button
            @click.prevent="postUserComment($event, $route.params.slug)"
            type="submit"
            class="btn cmn-btn"
          >
            ارسال
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import commentsAPI from "@/API/API/commentsAPI.js";
import HelperClass from "@/API/global/HelperClass";

export default {
  data() {
    return {
      comments: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  props: ["selected"],

  methods: {
    // post user comments
    postUserComment(e, slug) {
      e.preventDefault();
      let isFormComplet = false;
      if (this.comments.name.length > 3 && this.comments.message.length != "") {
        isFormComplet = true;
      }
      if (isFormComplet == true) {
        let formdata = new FormData();
        formdata.append("name", this.comments.name);
        formdata.append("email", this.comments.email);
        formdata.append("text", this.comments.message);
        formdata.append("article_id", this.selected);
        // reply comment
        // formdata.append("parent", id);
        // user id
        // formdata.append("user_id", this.userid);
        commentsAPI
          .postUserComment(slug, formdata)
          .then(() => {
            this.comments = {};
            this.$noty.success("کامنت شما با موفقیت ارسال شد");
          })
          .catch(error => {
            e.preventDefault();
            HelperClass.showErrors(error, this.$noty);
          });
      } else {
        this.$noty.warning("لطفا فیلد های الزامی را تکمیل کنید");
      }
    }
  }
};
</script>
