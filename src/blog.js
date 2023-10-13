import Header from './common/header';
import Banner from './blog/banner';
import Footer from './common/footer';
import  Mainsection from './blog/mainsection';
import Enquiry from "./common/enquiry";


function Blogs(){
    return(
        <>
        <Header/>
        <Banner/>
        <Mainsection/>
        <Enquiry/>
        <Footer/>
        </>
    );
}

export default Blogs;