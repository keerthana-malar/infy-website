import 'font-awesome/css/font-awesome.css';
import '../css/contact.css';

function Contactmain() {
    return (
        <>
            <div className="container mt-4">
                <div className=' maincontent'>
                <p className="medium-title text-center">Our Address</p>
            <p className='text-muted contactpara'>Welcome to Infygain Technologies. If you have any questions or inquiries,
                please don't hesitate to <br></br>contact us using the information below:</p>
            <br></br>
           <div className='cont'>
           <div className="row cont-full">
                <div className=' col-lg-4 contact-details'>
                    <div className='row'>
                        <div className='conbox1'>
                            <div className='col-md-3'>
                            <i className="fa fa-solid fa-location-arrow"></i>
                            </div>
                            <div className='col-md-9'>
                            <p className='mini-title tit1'>Location</p>
                            <p className='text-muted locacon'>Hari complex opp.prozone mall,
                            Sathy Rd, Saravanampatti,
                            Coimbatore, Tamil Nadu 641035.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-lg-4 contact-details'>
                    <div className='row'>
                        <div className='conbox1'>
                            <div className='col-md-3'>
                            <i className="fa fa-solid fa-phone"></i>
                            </div>
                            <div className='col-md-9'>
                            <p className='mini-title tit1'>Support</p>
                            <p className='text-muted locacon'> +91 9952141444 <br /> +91 9087724444</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-lg-4 contact-details'>
                    <div className='row'>
                        <div className='conbox1'>
                            <div className='col-md-3'>
                            <i className="fa fa-solid fa-user"></i>
                            </div>
                            <div className='col-md-9 us-sup'>
                            <p className='mini-title tit3'>Get In Touch</p>
                            <p className='text-muted locacon'>Monday - Friday: 10:00 to 7:00.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
                </div>
            </div>
            </>
             );
            }
            export default Contactmain;