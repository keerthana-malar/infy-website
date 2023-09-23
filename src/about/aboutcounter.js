import Progress from "../progress";

function aboutcounter(){
    return(
<div className="load">
    <div className="testbox">
        <div className="counter-sec">
            <div className="row">
              <div className="col-md-4 main-bx">
                <div className="coun-box">
                  <div className="count"></div>
                </div>
                <div className="title">
                  <p className="sub-title">Completed Projects</p>
                </div>
              </div>
              <div className="col-md-4 main-bx">
                <div className="coun-box">
                  <div className="count"></div>
                </div>
                <div className="title">
                  <p className="sub-title">Happy Clients</p>
                </div>
              </div>
              <div className="col-md-4 main-bx">
                <div className="coun-box">
                  <div className="count"></div>
                </div>
                <div className="title">
                  <p className="sub-title">Services Provider</p>
                </div>
              </div>
            </div>
        </div>

        <div className="inn">
        <div className="short-abt">
          <div className="row">
            <div className="col-md-6">
              <div className="short-img">
              <img className="img-fluid " src="./images/abt.jpg"></img>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sh-abt-bx p-5">
                <p className="mini-title main-color">about us</p>
                <p className="s-title">
                  We deal With The Aspects Of Professional IT Services
                </p>
                <p>
                  We take pride in ourselves being able to cater to the
                  needs of big organizations, institutions, industries and
                  individual clients, with the prime goal of providing
                  top-class doorstep services at highly competitive rates
                  and value for our customers.
                </p>
                <Progress />
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
 </div>
    );
}

export default aboutcounter;