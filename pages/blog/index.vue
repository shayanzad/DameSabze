<template>
  <div dir="rtl">
    <!-- Preloader -->
    <div v-show="showLoader" class="loader">
      <Loader />
    </div>
    <!-- End Preloader -->

    <!-- Page Title -->
    <PageTitleArea selected="وبلاگ" />
    <!-- End Page Title -->

    <!-- Blog -->
    <section class="blog-area ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-4">
            <BlogPost
              v-for="(item, index) in AllArticles"
              :key="index"
              :selected="item"
            />
          </div>
        </div>
        <div class="pagination-area">
          <ul>
            <li>
              <a @click="GetPreviousPageNummber()">قبلی</a>
            </li>
            <li v-for="value in lastPage" :key="value">
              <NuxtLink
                @click.native="GetCurrentPageNummber(value)"
                :to="`/blog?page=${value}`"
                >{{ value }}</NuxtLink
              >
            </li>
            <li>
              <a @click="GetNextPageNummber()">بعدی</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- End Blog -->

    <!-- Subscribe -->
    <Subscribe />
    <!-- End Subscribe -->
  </div>
</template>
<script>
import Loader from "@/components/loader";
import Subscribe from "@/components/subscribe";
import BlogPost from "@/components/blogPost";
import blogsAPI from "@/API/asyncAPI/blogsAPI";
import PageTitleArea from "@/components/pageTitleArea";

export default {
  async asyncData(context) {
    let page = context.route.query.page;
    if (!page) {
      page = 1;
    }
    let getAllArticles = await blogsAPI.getAllArticles(page).then(res => {
      return res.data.data;
    });
    let lastPage = getAllArticles.last_page;
    let AllArticles = getAllArticles.articles;

    return { lastPage, AllArticles };
  },
  watchQuery: ["page"],
  components: {
    Loader,
    PageTitleArea,
    Subscribe,
    BlogPost
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
      currentPage: 1,
      pageTitle: "مجله‌ی دانستنی دام سبز| بلاگ| دام سبز",
      pageDescription:
        "مجله دانستنی دام سبز. دانستنی‌های مربوط به فرآورده‌های گوشتی و انواع دام. هر آنچه که باید درمورد خرید دام بدانید!"
    };
  },
  mounted() {
    this.showLoader = false;
  },
  methods: {
    GetCurrentPageNummber(currentPage) {
      this.currentPage = currentPage;
    },
    GetPreviousPageNummber() {
      this.currentPage === 1 ? "" : (this.currentPage = this.currentPage - 1);
      this.$router.push(`/blog?page=${this.currentPage}`);
    },
    GetNextPageNummber() {
      this.currentPage === this.lastPage
        ? ""
        : (this.currentPage = this.currentPage + 1);
      this.$router.push(`/blog?page=${this.currentPage}`);
    }
  }
};
</script>
