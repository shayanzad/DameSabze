import HelperClass from "../global/apiHelperClass";
class getCommentsForSlider {
  //get active sliders to show user
  getCommentsForSlider() {
    return HelperClass.getRequest(`/get-sliders`);
  }
}
export default new getCommentsForSlider();
