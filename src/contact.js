import Header from './common/header';
import Contactbanner from './contact/contactbanner';
import Contactform from './contact/contactform';
import Maincontent from './contact/maincontent';
import Footer from './common/footer';


function Contactus(){
    return(
        <>
        <Header/>
        <Contactbanner/>
        <Contactform/>
        <Maincontent/>
        <Footer/>
        </>
    );
}

export default Contactus;