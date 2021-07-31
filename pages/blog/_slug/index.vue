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
                :to="`/blog/${$route.params.slug}?page=${value}`"
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
    let allArticlesWithSlug = await blogsAPI
      .getCategoryArticels(page, context.params.slug)
      .then(res => {
        return res.data.data;
      });
    let lastPage = allArticlesWithSlug.last_page;
    let AllArticles = allArticlesWithSlug.articles;
    return { lastPage, AllArticles };
  },
  components: {
    Loader,
    Subscribe,
    BlogPost,
    PageTitleArea
  },
  watchQuery: ["page"],
  mounted() {
    this.showLoader = false;
  },
  data() {
    return {
      showLoader: true,
      currentPage: 1
    };
  },
  methods: {
    GetCurrentPageNummber(currentPage) {
      this.currentPage = currentPage;
    },
    GetPreviousPageNummber() {
      this.currentPage === 1 ? "" : (this.currentPage = this.currentPage - 1);
      this.$router.push(
        `/blog/${this.$route.params.slug}/?page=${this.currentPage}`
      );
    },
    GetNextPageNummber() {
      this.currentPage === this.lastPage
        ? ""
        : (this.currentPage = this.currentPage + 1);
      this.$router.push(
        `/blog/${this.$route.params.slug}/?page=${this.currentPage}`
      );
    }
  }
};
</script>
