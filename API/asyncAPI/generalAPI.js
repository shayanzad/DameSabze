

import HelperClass from '../global/apiHelperClass'
class AboutUs {
    getGeneralInformation(){
        return HelperClass.getRequest('/settings')
    }
}
export default new AboutUs()
