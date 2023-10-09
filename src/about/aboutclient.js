import "../css/home.css";
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
                "Great team to work with, they understood my requirements
                    and helped me go live within hours, and delivered the
                    results ahead of schedule."
                </i>
            </div>
            <div className="clientBox">
                    <div className="clientImgBox">
                        <div className="clientImg">
                            <img className="img-fluid" src="/images/abt.jpg"></img>
                        </div>
                        <div className="clientQuote">
                            <img src="/images/Quote.svg"></img>
                        </div>
                    </div>
                    <div className="clientName">
                        <p className="mid-title">Ragan</p>
                        <p className="text-muted">Ragan Dimension</p>
                    </div>
                  </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default aboutclient;