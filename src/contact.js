import Header from './common/header';
import Contactbanner from './contact/contactbanner';
import Contactform from './contact/contactform';
import Maincontent from './contact/maincontent';
import Footer from './common/footer';
import Enquiry from "./common/enquiry";



function Contactus(){
    return(
        <>
        <Header/>
        <Contactbanner/>
        <Maincontent/>
        <Contactform/>
        <Enquiry/>
        <Footer/>
        </>
    );
}

export default Contactus;