import "../css/seo.css";
import "../css/common.css";

function subscribe() {
  return (
    <>
      <div className="subscribe">
        <div className="row">
          <div className="col-lg-6 col-1"></div>
          <div className="col-lg-6 col-11">
            <div className="sercon">
              <p className="sub-titlebx">Stay connect with us</p>
              <span className="subx">
                And Get the latest update of our company
              </span>
              <div className="subform">
                <form>
                  <input
                    type="text"
                    name="name"
                    placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter your email"
                  />
                  <button type="submit" className="btns reach-btn">
                    Reach Us
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default subscribe;