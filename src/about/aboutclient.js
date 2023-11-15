import "../css/home.css";
function aboutclient() {
  return (
    <div className="client-sec">
      <div className="row">
        <div className="col-md-6">
          <div className="client-pro" data-aos="zoom-in" data-aos-duration="3000">
            <img className="img-fluid " src="./images/others/world.png" alt="client reviews"></img>
          </div>
        </div>
        <div className="col-md-6">
          <div className="review-main">
            <div className="client-con sh-abt-bx mb-5">
              <p className="mini-title">CLIENT FEEDBACK</p>
              <p className="s-title clienttitle mb-5">What Our Clients Say</p>
              <i className="text-muted">
                "I Got Excellent Technical services from Infygain !!!
               We tried Past 1 week could not install payroll software in my system due to some technical error. They said it was due to an OS error.
               Hence, I called Infygain due to this. He said, without New OS installation, I can solve this issue. As he said, he did. A very few people, what exactly customer asking only doing that. Finally the software installed and running successfully. I really thanks to Infygain to solve my mind pressure with right time.
             Please keep it up like this..."
              </i>
            </div>
            <div className="clientBox">
              <div className="clientImgBox">
                <div className="clientImg">
                  <img className="img-fluid" src="/images/abt.webp"></img>
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
