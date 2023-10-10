import 'font-awesome/css/font-awesome.css';
import '../css/ispservice.css';
import { FaComputer } from "react-icons/fa6";
function Services() {
  return (
    <>
      <div className='container services' data-aos="zoom-in-up" data-aos-duration="2000">
        <div className='row Boxss'>
          <div className="servicebox col-lg-4">
            <div className="serviceContent">
              <div className='des'><i class="fa fa-regular fa-globe globe " style={{ color: "#9cc723" }}></i></div>

              <h2 className="mids-title">Internet Leased Line </h2>
              <p className="text-muted box-conin">
                Our Internet Leased Line service provides high-speed, dedicated Internet connectivity to ensure your business stays connected 24/7.              </p>
              <div className='smallines'><hr className='smalline'></hr></div>
              <div className='buttons'><button className='btns-greenbox'>View Details</button></div>


            </div>
          </div>
          <div className="servicebox col-lg-4">
            <div className="serviceContent">
              <div className='des'><i class="fa fa-solid fa-gears" style={{ color: "#9cc723" }}></i></div>

              <h2 className="mids-title">SME Line</h2>
              <p className="text-muted box-conin">
                Tailored connectivity solutions for small and medium-sized enterprises, designed to boost productivity and efficiency.              </p>
              <div className='smallines'><hr className='smalline'></hr></div>
              <div className='buttons'><button className='btns-greenbox'>View Details</button></div>


            </div>
          </div>   <div className="servicebox col-lg-4">
            <div className="serviceContent">
              <div className='des'><i class="fa fa-solid fa-wifi" style={{ color: "#9cc723" }}></i></div>

              <h2 className="mids-title">Business Broadband</h2>
              <p className="text-muted box-conin">
                Reliable broadband solutions that deliver consistent, high-speed Internet access for your business needs.              </p>
              <div className='smallines'><hr className='smalline'></hr></div>
              <div className='buttons'><button className='btns-greenbox'>View Details</button></div>


            </div>
          </div>
        </div>
        <div className='row Boxsss'>
          <div className="servicebox col-lg-4">
            <div className="serviceContent">
              <div className='des'><i class="fa fa-solid fa-tv" style={{ color: "#9cc723" }}></i></div>

              <h2 className="mids-title">Broadband

                /IPTV/Voice</h2>
              <p className="text-muted box-conin">
                Explore our comprehensive range of Broadband, IPTV, and Voice services, designed to elevate your digital experience to new heights.              </p>
              <div className='smallines'><hr className='smalline'></hr></div>
              <div className='buttons'><button className='btns-greenbox'>View Details</button></div>


            </div>
          </div>
          <div className="servicebox col-lg-4">
            <div className="serviceContent">
              <div className='des'><i class="fa fa-solid fa-desktop " style={{ color: "#9cc723" }}></i></div>

              <h2 className="mids-title">Intranet</h2>
              <p className="text-muted box-conin">
                Build a secure and efficient internal network to enhance collaboration and information sharing within your organization.              </p>
              <div className='smallines'><hr className='smalline'></hr></div>
              <div className='buttons'><button className='btns-greenbox'>View Details</button></div>


            </div>
          </div>
          <div className="servicebox col-lg-4">
            <div className="serviceContent">
              <div className='des'><i class="fa fa-solid fa-lock" style={{ color: "#9cc723" }}></i></div>

              <h2 className="mids-title">VPN Solutions</h2>
              <p className="text-muted box-conin">
                Protect your data and communications with our robust Virtual Private Network solutions, ensuring privacy and security.              </p>
              <div className='smallines'><hr className='smalline'></hr></div>
              <div className='buttons'><button className='btns-greenbox'>View Details</button></div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;