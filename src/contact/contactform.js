import 'font-awesome/css/font-awesome.css';
import '../css/contact.css';

function Contactform() {
    return (
        <>
<div className='main container'>
<div className="row">
    <div className='col-md-6 form-details'>
        <h className='medium-title ready'>Ready to Get started ?</h><br></br><br></br>
        <p className='text-muted'>You may simply complete the form below and click ‘send’ to submit an enquiry. Our customer service team will get in touch with you within 3 business days.</p>
        <form>
            <div className="row box">
                <div className="col-md-6 form-group">
                    <input type="text" className="form-control" placeholder="Your name *" required />
                </div>
                <div className="col-md-6 form-group">
                    <input type="phone" className="form-control" placeholder="Phone *" required />
                </div>
                <div className="col-md-6 form-group">
                    <input type="email" className="form-control" placeholder="Email *" required />
                </div>
                <div className="col-md-6 form-group">
                    <select className="form-control" name="category" required>
                    <option className="text-muted" value="nil">Problem Category</option>
                    <option value="laptop">Laptop</option>
                    <option value="desktop">Desktop</option>
                    <option value="network">Network</option>
                    <option value="firewall">Firewall</option>
                    <option value="server">Server</option>
                    <option value="cctv">CCTV</option>
                    <option value="avsolution">AV Solution</option>
                    <option value="website">Website</option>
                    <option value="seo">SEO</option>
                    <option value="isp">ISP</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" required />
                </div>
                <div className=" form-group">
                    <input type="textarea" className="form-control" placeholder="Your Message"  required/>
                </div>
            </div>
            <button className="btns send">
                Send Message &nbsp;<span className="fa fa-arrow-right"></span>
            </button>
        </form>
       
    </div>
    <div className='col-md-6 map'> <iframe className='
                infymap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.7810369745266!2d76.99267347504593!3d11.055036689111168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb6fed9cc5d5%3A0xdf0b5bd38b8e7b7c!2sInfygain%20Technologies%20-%20Best%20computer%2C%20laptop%20and%20networking%20services!5e0!3m2!1sen!2sin!4v1694516298402!5m2!1sen!2sin" ></iframe>
    </div>
</div>
</div>
      </>
      );
     }
     export default Contactform;