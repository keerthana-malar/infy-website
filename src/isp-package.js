import './css/ispservice.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './common/footer';
import Header from './common/header';
import MyPackages from './ispservice/MyPackages';
import Bannerpac from './ispservice/ban-loc-pac';
function Isppackage() {
    useEffect(() => {

        AOS.init();
        AOS.refresh();

    }, []);
    return (
        <>
            <Header />
            <div className='ispmainservice'>
                <Bannerpac />
                <MyPackages />
            </div>

            <Footer />
        </>
    );
}

export default Isppackage;