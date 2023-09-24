import { BiSolidQuoteAltLeft } from "react-icons/bi";
function aboutclient(){
    return (
        <div className="client-sec">
        <div className="row">
            <div className="col-md-6">
            <div className="client-pro">
                <img className="img-fluid " src="./images/1.png"></img>
            </div>
            </div>
            <div className="col-md-6">
            <div className="review-main">
            <div className="client-con sh-abt-bx mb-5">
                <p className="mini-title main-color">CLIENT FEEDBACK</p>
                <p className="s-title mb-5">What Our Clients Say</p>
                <i className="text-muted">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim laborum. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantiumtam rem aperiam eaque ipsa quae inventore
                veritatis quasi architecto beatae vitae.
                </i>
            </div>
            <div className="review">
                <div className="row">
                <div className="col-md-3">
                    <div className="rev-bx1">
                    <BiSolidQuoteAltLeft />
                    </div>
                    <div className="rev-bx2">
                    <img className="img-fluid " src="./images/abt.jpg"></img>
                    </div>
                </div>
                <div className="col-md-9">
                    <p><b>John Smith</b></p>
                    <p className="text-muted">A leading Company</p>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default aboutclient;