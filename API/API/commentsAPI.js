import HelperClass from "@/API/global/apiHelperClass";
class Comments {
  //store new comment for specific article(base on slug}
  postUserComment(slug, data = null) {
    return HelperClass.postRequest(`/articles/${slug}/comment/store`, data);
  }
  //get all comments of the specific articles with their children
  getAllcomments(slug) {
    return HelperClass.getRequest(`/articles/comments/${slug}`);
  }
}
export default new Comments();
