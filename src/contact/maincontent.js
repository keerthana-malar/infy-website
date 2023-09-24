import 'font-awesome/css/font-awesome.css';
import '../css/contact.css';

function Contactmain() {
    return (
        <>
<div className="container maincontent">
    <p className="sub-title text-center">Our Address</p>
            <p className='text-muted contactpara '>Welcome to Infygain. If you have any questions or inquiries, <br></br>
                please don't hesitate to contact us using the information below:</p>
            <br></br>
            <div className="row">
                <div className=' col-md-4 contact-details'>
                    <h5 className='location'><span><i className="fa fa-solid fa-location-arrow"></i>Location</span></h5>
                    <p className='text-muted locacon'>hari complex opp.prozone mall,
                        Sathy Rd, Saravanampatti,
                        Coimbatore, Tamil Nadu 641035</p>
                </div>
                <div className=' col-md-4 contact-details'>
                    <h5 className='location'><span><i className="fa fa-solid fa-phone"></i> Support</span></h5>
                    <p className='text-muted locacon'>Mobile:+91 9952141444 <br></br> 0422 3500770</p>
                </div>
                <div className=' col-md-4 contact-details'>
                    <h5 className='location'><span><i className="fa fa-user"></i>Get In Touch</span></h5>
                    <p className='text-muted locacon'>Office Hour: (9.45 am - 7.30 pm)<br></br> Closed On sunday</p>
                </div>
            </div>
            </div>
            </>
             );
            }
            export default Contactmain;