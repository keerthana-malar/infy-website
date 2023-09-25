import 'font-awesome/css/font-awesome.css';
import '../css/contact.css';

function Contactmain() {
    return (
        <>
            <div className="container">
                <div className=' maincontent'>
                <p className="medium-title text-center">Our Address</p>
            <p className='text-muted contactpara'>Welcome to Infygain Technologies. If you have any questions or inquiries,
                please don't hesitate to contact us using the information below:</p>
            <br></br>
            <div className="row">
                <div className=' col-md-4 contact-details'>
                    <div className='row'>
                        <div className='conbox1'>
                            <div className='col-md-4'>
                            <span className='location'><i className="fa fa-solid fa-location-arrow"></i></span>
                            </div>
                            <div className='col-md-8'>
                            <p className='mini-title tit1'>Location</p>
                            <p className='text-muted locacon'>hari complex opp.prozone mall,
                            Sathy Rd, Saravanampatti,
                            Coimbatore, Tamil Nadu 641035</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-md-4 contact-details'>
                    <div className='row'>
                        <div className='conbox1'>
                            <div className='col-md-4'>
                            <span className='location'><i className="fa fa-solid fa-phone"></i></span>
                            </div>
                            <div className='col-md-8'>
                            <p className='mini-title tit1'>Support</p>
                            <p className='text-muted locacon'>Mobile: +91 9952141444 <br></br> 0422 3500770</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-md-4 contact-details'>
                <div className='row'>
                        <div className='conbox1'>
                            <div className='col-md-4'>
                            <span className='location'><i className="fa fa-user"></i></span>
                            </div>
                            <div className='col-md-8'>
                            <p className='mini-title tit1'>Get In Touch</p>
                            <p className='text-muted locacon'>Office Hour: (9.45 am - 7.30 pm)<br></br> Closed On sunday</p>
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