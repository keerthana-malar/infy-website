import React,{useEffect} from 'react';
import { FaHandPointRight } from "react-icons/fa";
import '../css/BookforServices.css';
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Existinguser(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div className='container'>
            <div className='grandgrandparent'>
            <div className='row grandparent'>
                <div className='col-md-12 col-sm-12 col-lg-12 rightboxing data-aos-delay="300"
                data-aos="zoom-in-left"'>
                    <div className='rightboxborder'>
                    <div className='headingregisteration'>
                  <h3 className='headingtag'>Existing User </h3>
                  <p className='headingtagunder'>You have the username and password already.</p>
                  </div>
                  
                  <div className='contentpara'>

                    {/* 1 */}
                  <div className='orders'>
                  <div className='iconpotti'>
                     <FaHandPointRight/>
                  </div>
                  <p>After you login the customer portal page, you will show the three cetegories (Accounts, Cases, Orders)</p>
                  </div>
                  {/* 2 */}
                  <div className='orders'>
                  <div className='iconpotti'>
                     <FaHandPointRight/>
                  </div>
                  <p>Initial you should enter your details in the "Account". Just click the create account button.</p>
                  </div>
                  {/* 3 */}
                  <div className='orders'>
                  <div className='iconpotti'>
                     <FaHandPointRight/>
                  </div>
                  <p>If you have already account in this portal you just proceed to cases or Orders.</p>
                  </div>
                  {/* 4 */}
                  <div className='orders'>
                  <div className='iconpotti'>
                     <FaHandPointRight/>
                  </div>
                  <p>You want any services from us, go to cases and click to create cases and fill the details</p>
                  </div>
                  {/* 5 */}
                  <div className='orders'>
                  <div className='iconpotti'>
                     <FaHandPointRight/>
                  </div>
                  <p>You are the regular client from Infygain technolgies. 
                    If you are looking for materials, products and a quote, enter the information in the "Orders"</p>
                  </div>
                  <div className='buttontaging'>
                 <button className="btn insidebtn">Login Here</button>
                 </div>
                </div>
                </div>
                </div>
              

                </div>
        </div>
        </div>
    )
}

export default Existinguser;
