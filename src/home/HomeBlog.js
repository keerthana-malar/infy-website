import "../css/home.css";

const HomeBlog = () => {
  return (
    <>
      <section className="homeBlogSec">
        <div className="container">
            <div className="homeBlogTopCont text-center">
                <p className="mini-title main-color">From Our Blogs</p>
                <p className="test-head">Here’s What’s Happening</p>
            </div>
            <div className="homeBlogBox">
                <div className="row p-1">
                    <div className="col-md-4">
                        <div className="blogBoxInn">
                            <div className="blogImgBox">
                                <img className="img-fluid" src="/images/project-1web.webp"></img>
                            </div>
                            <div className="blogContBox">
                                <p className="text-muted">OCTOBER 14, 2023</p>
                                <p className="mid-title">The Next Big Challenge for Content Marketer</p>
                                <a className="links">READ MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blogBoxInn">
                            <div className="blogImgBox">
                                <img className="img-fluid" src="/images/project-1web.webp"></img>
                            </div>
                            <div className="blogContBox">
                                <p className="text-muted">OCTOBER 14, 2023</p>
                                <p className="mid-title">The Next Big Challenge for Content Marketer</p>
                                <a className="links">READ MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blogBoxInn">
                            <div className="blogImgBox">
                                <img className="img-fluid" src="/images/project-1web.webp"></img>
                            </div>
                            <div className="blogContBox">
                                <p className="text-muted">OCTOBER 14, 2023</p>
                                <p className="mid-title">The Next Big Challenge for Content Marketer</p>
                                <a className="links">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default HomeBlog;
