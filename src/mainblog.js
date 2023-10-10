import Header from './common/header';
import Banner from './main-blog/banner';
import Footer from './common/footer';
import Enquiry from "./common/enquiry";

import  Mainsection from './main-blog/mainsection';

function MainBlogs(){
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

export default MainBlogs;