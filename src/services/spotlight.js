import '../css/seo.css';
import '../css/common.css';
import { FiSettings } from "react-icons/fi";

function webservice(){
    return(
        <>
            <div className='main-services'>
                <div className='featurebox'>
                    <FiSettings/>
                    <span>Featured Service</span>
                    
                </div>
            </div>
        </>
    );
}

export default webservice;