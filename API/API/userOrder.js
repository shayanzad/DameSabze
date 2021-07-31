import HelperClass from '../global/apiHelperClass'
class Comments {
    //get all samples
    sendOrder(data){
        return HelperClass.postRequest(`/store-user-info`,data)
    };
    
}
export default new Comments()

