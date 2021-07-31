import HelperClass from "../global/apiHelperClass";
class FAQ {
  getFaqs() {
    return HelperClass.getRequest("/faqs");
  }
}
export default new FAQ();
