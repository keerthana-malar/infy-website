import 'font-awesome/css/font-awesome.css';
function header() {
  return (
    <section>
      {/* Top head section */}
      <div className="top-head">
        <div className="row">
          <div className="col-lg-2 col-md-2">
          <p><i className="fa fa-location"></i><a className="head-link" href="#">Coimbatore, Tamil Nadu 641035</a> &nbsp;&nbsp; |</p>
          </div>
          <div className="col-lg-2 col-md-2">
            <p><i className="fa fa-mail"></i><a className="head-link" href="mailto:info@infygain.com">info@infygain.com</a></p>
          </div>
          <div className='col-lg-4 col-md-4'></div>
          <div className="col-lg-2 col-md-2">
            <p><a className="head-link" href="#">Office Hour: 9.45 am - 7.30 pm</a>&nbsp;&nbsp;&nbsp; |</p>
          </div>
          <div className="col-lg-2 col-md-2 social-icons">
          <a className='head-link' href="#"><i className="fa fa-facebook"></i></a>
          <a className='head-link' href="#"><i className="fa fa-instagram"></i></a>
          <a className='head-link' href="#"><i className="fa fa-twitter"></i></a>
          <a className='head-link' href="#"><i className="fa fa-linkedin"></i></a>
          <a className='head-link' href="#"><i className="fa fa-whatsapp"></i></a>
          <a className='head-link' href="#"><i className="fa fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Main head section */}
      <div className='main-head'>
        <div className='row'>
          <div className='col-md-2'>
            <div className='logo-box'>
              <img src="./images/infy-logo.png" alt="infygain logo"></img>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='menu-box'>
                <li><a className='mlink' href="#">home</a></li>
                <li><a className='mlink' href="#">About us</a></li>
                <li><a className='mlink' href="#">Services</a></li>
                <li><a className='mlink' href="#">Blog</a></li>
                <li><a className='mlink' href="#">Contact</a></li>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='contact-box'>
              <a className='head-link' href="#"><i className="fa fa-headset"></i></a>
                <p>Have Any Questions?<br></br><span>+91 &nbsp;99342567810</span></p>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='enquiry-box'>
              <button className='btns'>Get a quote &nbsp;&nbsp;<i className='fa fa-arrow-right'></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default header;
