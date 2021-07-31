

import HelperClass from '../global/apiHelperClass'
class Comments {
    //get all samples
    requestToJoinMagazine(data){
        return HelperClass.postRequest(`/store-new-magazine-service`,data)
    };
    
}
export default new Comments()

