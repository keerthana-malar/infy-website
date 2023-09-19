import './css/contact.css';
import './css/footer.css';
import 'font-awesome/css/font-awesome.css'
import Footer from './common/footer';
import Aboutus from './aboutus';
function contact() {
    return (
        <>
            <br></br>
            
            <div className="top-banner">
                <div>
                    <p className="main-title">Contact Us</p>
                </div>
            </div>
            <br></br><br></br><br></br>
            <p className="sub-title text-center">Our Address</p>
            <p className='text-muted contactpara '>Welcome to Infygain. If you have any questions or inquiries, <br></br>
                please don't hesitate to contact us using the information below:</p>
            <br></br>
            <div className="row">
                <div className='col-xs-6 col-md-4 contact-details'>
                    <h5 className='location'><span><i className="fa fa-solid fa-location-arrow"></i>Location</span></h5>
                    <p className='text-muted locacon'>hari complex opp.prozone mall,
                        Sathy Rd, Saravanampatti,
                        Coimbatore, Tamil Nadu 641035</p>
                </div>
                <div className='col-xs-6 col-md-4 contact-details'>
                    <h5 className='location'><span><i className="fa fa-solid fa-phone"></i> Support</span></h5>
                    <p className='text-muted locacon'>Mobile:+91 9952141444 <br></br> 0422 3500770</p>
                </div>
                <div className='col-xs-6 col-md-4 contact-details'>
                    <h5 className='location'><span><i className="fa fa-user"></i>Get In Touch</span></h5>
                    <p className='text-muted locacon'>Office Hour: (9.45 am - 7.30 pm)<br></br> Closed On sunday</p>
                </div>
            </div>


            <div className='main'>
                <div className="row">
                    <div className='col-xs-6 col-md-6 form-details'>
                        <h className='sub-title ready'>Ready to Get started ?</h><br></br><br></br>
                        <p className='text-muted'>You may simply complete the form below and click ‘send’ to submit an enquiry. Our customer service team will get in touch with you within 3 business days.</p>
                        <form>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" className="form-control" placeholder="Your name" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <input type="number" className="form-control" placeholder="Phone" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className=" form-group">
                                    <input type="textarea" className="form-control" placeholder="Message" />
                                </div>
                            </div>
                            <button className="btns send">
                                Send Message &nbsp;<span className="fa fa-arrow-right"></span>
                            </button>
                        </form>
                       
                    </div>
                    <div className='col-xs-6 col-md-6 map'> <iframe className='
                                infymap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.7810369745266!2d76.99267347504593!3d11.055036689111168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb6fed9cc5d5%3A0xdf0b5bd38b8e7b7c!2sInfygain%20Technologies%20-%20Best%20computer%2C%20laptop%20and%20networking%20services!5e0!3m2!1sen!2sin!4v1694516298402!5m2!1sen!2sin" ></iframe>
                                </div>
                                
                </div>
            </div>
        </>
        
    );
}

export default contact;
