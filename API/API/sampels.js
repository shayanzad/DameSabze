

import HelperClass from '../global/apiHelperClass'
class Comments {
    //get all samples
    getAllSamples(slug){
        return HelperClass.getRequest(`/articles/${slug}/comment/store`)
    };
    //get specific sample information for sample pag
    getSample(slug){
        return HelperClass.getRequest(`/sample/${slug}`)
    }
}
export default new Comments()

