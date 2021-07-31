import HelperClass from "@/API/global/apiHelperClass";
class AboutUs {
  //get 10 random articles
  getRandomArticle() {
    return HelperClass.getRequest(`/get-random-article`);
  }
  //get all articles
  getAllArticles(page) {
    return HelperClass.getRequest(`/get-articles?page=${page}`);
  }
  //get level one articleCategories
  getArticleCategoriesLevelOne() {
    return HelperClass.getRequest(`/get-article-level-on-categories`);
  }
  //get specific article with slug
  getSpecificArticle(slug) {
    return HelperClass.getRequest(`/article/${slug}`);
  }
  //get popular articles
  getPopularArticles() {
    return HelperClass.getRequest(`/popular-articles`);
  }
  //get a category's articles
  getCategoryArticels(page, slug) {
    return HelperClass.getRequest(`/categories/${slug}/articles?page=${page}`);
  }
  //increment article visit so call this to increase a hit
  addNewVisitToArticles(id) {
    return HelperClass.postRequest(`/article/hit/${id}`);
  }
}
export default new AboutUs();
