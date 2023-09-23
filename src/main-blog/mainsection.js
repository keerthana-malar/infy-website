import 'font-awesome/css/font-awesome.css';
import '../css/mainblog.css';

function Mainsection() {
    return (
        <>
        <div className='main-blogs'>
           <div className='row'>
            <div className="col-md-6  mainblogsection">
                <div className=" image-section">
                  <div className="img">
                    <img
                      className="img-fluid"
                      src="/images/girl.jpg"
                    ></img>
                  </div>
                  <div className="buttons">
                            <button className="btns firstbutton">infygain</button>
                            <button className="btns secondbutton">infygain</button>
                        </div>
                  <div className="content-box ">
                    <div className="content-box-content">
                      <p className=" text-muted detailscontent ">We are a prominent IT service provider, based in Coimbatore, with a wide range of products and services, to meet the exclusive needs of our customers. We offer end-to-end solutions to enable a reliable and uninterrupted workflow for our customers. We take pride in ourselves being able to cater to the needs of big organizations, institutions, industries and individual clients, with the prime goal of providing top-class doorstep services at highly competitive rates and value for our customers.</p>
                      
                    </div>
                  </div>
                  <div className='readmorelink'>
                    <p className=' readmoretext'>READ MORE</p>
                  </div>
                </div>
              </div>
              </div>
              </div>
        </>
    );
}

export default Mainsection;
