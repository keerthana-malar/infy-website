import 'font-awesome/css/font-awesome.css';
import '../css/blog.css';
import '../css/common.css';
import { useEffect, useState } from "react";
import axios from "axios";

function Mainsection() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      axios.get("https://infygain.in/api/catdata").then((res) => {
        setBlogs(res.data);
        console.log(res.data);
      });
    }, []);
   

    return (
        <>
            <div className='main'>

                <div className=" blogsection">
                    <div className='row'>
                        <div className='col-md-7'>
                    <button className='btns'>Infygain</button>    <button className='btns blogbutton'>Infygain</button><br></br><br></br>
                    <time className='text-muted entry-date published'><i className="fa-solid fa-calendar-days"></i>September 27, 2023</time><br></br>
                    <div className='image'>
                    <img
                        className="img-fluid"
                        src="/images/girl.jpg">
                    </img>
                    </div>
                    <p className='text-muted blog-content'>We are a prominent IT service provider, based in Coimbatore, with a wide range of products
                        and services, to meet the exclusive needs of our customers. We offer end-to-end solutions to enable a reliable and uninterrupted
                        workflow for our customers. We take pride in ourselves being able to cater to the needs of big organizations, institutions,
                        industries and individual clients, with the prime goal of providing top-class doorstep services at highly competitive rates and value for our customers.</p>
                    <div className='reviewsection'><i class="fa fa-solid fa-quote-left"></i>
                        <p className='review'><b>"Best laptop and computer service provider in Coimbatore.<br></br>
                            They are provide multi-brand laptops services. I recommend infygain for total IT support."</b><br></br></p>

                    </div><br></br>
                    <p className='sub-title'>Pricing Page: 11 Must-Know Ways to Drive More Sales</p>
                    <p className='text-muted para'>Leos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <hr></hr>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Mainsection;
