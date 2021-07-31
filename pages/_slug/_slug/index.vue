<template>
  <div dir="rtl">
    <!-- Preloader -->
    <div v-show="showLoader" class="loader">
      <Loader />
    </div>
    <!-- End Preloader -->

    <!-- Page Title -->
    <PageTitleArea :selected="$route.params.slug" />
    <!-- End Page Title -->

    <!-- Blog Details -->
    <div class="blog-details-area ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="details-item">
              <div class="details-img">
                <img :src="`${Details.image_url}`" alt="Details" />
                <ul>
                  <li>
                    <i class="bx bx-user"></i>
                    توسط: <a>{{ Details.writer }}</a>
                  </li>
                  <li>
                    <i class="bx bx-calendar-alt"></i>
                    {{
                      new Date(Details.created_at).toLocaleDateString("fa-IR")
                    }}
                  </li>
                  <li>
                    <i class="bx bx-message-detail"></i>
                    <a v-if="Comments">نظرات ({{ Comments.length }})</a>
                    <a v-else>نظرات (0)</a>
                  </li>
                </ul>
                <h2>{{ Details.title }}</h2>
                <p style="overflow:hidden;" v-html="Details.content"></p>
              </div>
              <!-- comment cart -->
              <div v-if="Comments" class="details-comments">
                <h3>نظرات</h3>
                <CommentCart
                  v-for="(item, index) in Comments"
                  :key="index"
                  v-bind="item"
                />
              </div>
              <!-- end comment cart -->

              <div class="details-form">
                <SendComment :selected="Details.id" />
              </div>
            </div>
          </div>
          <!-- side bar -->

          <div class="col-lg-3">
            <SideColumn :selected="AllCategories" />
          </div>
        </div>
      </div>
    </div>
    <!-- End Blog Details -->

    <!-- Subscribe -->
    <Subscribe />
    <!-- End Subscribe -->
  </div>
</template>
<script>
import Loader from "@/components/loader";
import Subscribe from "@/components/subscribe";
import SideColumn from "@/components/blogSidepanel";
import CommentCart from "@/components/commentCart";
import blogsAPI from "@/API/asyncAPI/blogsAPI";
import commentsAPI from "@/API/API/commentsAPI";
import SendComment from "@/components/sendCommentCart";
import GeneralAPI from "@/API/asyncAPI/generalAPI.js";

export default {
  // fetch data
  async asyncData(context) {
    await GeneralAPI.getGeneralInformation().then(res => {
      context.store.dispatch("getAllSetting", res.data);
    });

    // get one article with slug
    let Details = await blogsAPI
      .getSpecificArticle(encodeURIComponent(context.route.params.slug))
      .then(Articel => {
        console.log(Articel.data.data.article);
        return Articel.data.data.article;
      });

    // get all comments based on slug
    let Comments = await commentsAPI
      .getAllcomments(encodeURIComponent(context.route.params.slug))
      .then(AllComments => {
        let res;
        if (AllComments.data != "") {
          res = AllComments.data.data.data;
          return res;
        } else {
          return 0;
        }
      });

    // // get all category
    let AllCategories = await blogsAPI
      .getArticleCategoriesLevelOne()
      .then(res => {
        return res.data.data;
      })
      .catch(error => {
        console.log(error);
      });
    return { AllCategories, Details, Comments };
  },
  head() {
    return {
      title: this.Details.slug,
      meta: [
        {
          name: "Description",
          content: this.Details.meta
        }
      ]
    };
  },
  components: {
    Loader,
    Subscribe,
    SideColumn,
    CommentCart,
    SendComment
  },
  data() {
    return {
      showLoader: true
    };
  },
  mounted() {
    if (!localStorage.getItem("userVisited")) {
      //  data = id or slug
      this.isUserVisitedBlog(this.Details.id);
    }
    this.showLoader = false;
  },
  methods: {
    isUserVisitedBlog(id) {
      blogsAPI.addNewVisitToArticles(id).then(() => {});
    }
  }
};
</script>
