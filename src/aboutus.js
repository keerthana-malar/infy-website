import 'font-awesome/css/font-awesome.css'
import './css/aboutus.css';

import { FontAwesomeIcon }
    from '@fortawesome/react-fontawesome'
function aboutus() {
    return (
        <>
            <div className="aboutpicturesection container">
                <div className="row">
                    <div className="makes"><h1 className="mini-title make">We Make 
                    IT simple</h1>
                        <p className="main-title team">Discover Trust Team and<br></br> Our Experts</p>
                    </div>
                    <div className="photos">
                        <div className="row">
                            <div className="col-md-3 picture">
                                <div className='teammembers'>
                                    <img className="team-img img-fluid" src="/images/team01.jpg" alt="Girl in a jacket" width="500" height="600" />
                                    <div className="social-icons">
                                        <a href="#" className="socialicon"><i className="fa fa-brands fa-facebook"></i></a>
                                        <a href="#" className="socialicon"><i className="fa fab fa-twitter"></i></a>
                                        <a href="#" className="socialicon"><i className="fa fab fa-instagram"></i></a>
                                        <a href="#" className="socialicon"><i className="fa fab fa-youtube"></i></a>
                                    </div>
                                </div>
                                <div className="overlay">
                                    <div className="ranjith">Kupuraj</div><br></br><div className='text-muted ceo'>CEO</div>
                                </div>
                            </div>

                            <div className="col-md-3 picture">
                                <div className='teammembers'>
                                    <img className="team-img img-fluid" src="/images/team04.jpg" alt="Girl in a jacket" width="500" height="600" />
                                    <div className="social-icons">
                                        <a href="#" className="socialicon"><i className="fa fa-brands fa-facebook"></i></a>
                                        <a href="#" className="socialicon"><i className="fa fab fa-twitter"></i></a>
                                        <a href="#" className="socialicon"><i className="fa fab fa-instagram"></i></a>
                                        <a href="#" className="socialicon"><i className="fa fab fa-youtube"></i></a>
                                    </div>
                                </div>
                                <div className="ranjith">Ranjith</div><br></br><div className= 'text-muted ceo'> Developer</div>
                            </div>

                            <div className="col-md-3 picture">
                                <div className='teammembers'>
                                    <img className="team-img img-fluid" src="/images/team03.jpg" alt="Girl in a jacket" width="500" height="600" />
                                    <div className="social-icons">
                                        <a href="#" className="socialicon"><i className="fa fa-brands fa-facebook"></i></a>
                                        <a href="#" className="socialicon"><i className="fa fab fa-twitter"></i></a>
                                        <a href="#" className="socialicon"><i className="fa fab fa-instagram"></i></a>
                                        <a href="#" className="socialicon"><i className="fa fab fa-youtube"></i></a>
                                    </div>
                                </div>
                                <div className="ranjith">Keer
                                thana</div><br></br><div className='text-muted ceo'>SEO Analyst</div>
                                </div>
                            <div className="col-md-3 picture">
                                <div className='teammembers'>
                                    <img className="team-img img-fluid" src="/images/team02.jpg" alt="Girl in a jacket" width="500" height="600" />
                                    <div className="social-icons">
                                        <a href="#" className="socialicon"><i className="fa fa-brands fa-facebook"></i></a>
                                        <a href="#" className="socialicon"><i className="fa fab fa-twitter"></i></a>
                                        <a href="#" className="socialicon"><i className="fa fab fa-instagram"></i></a>
                                        <a href="#" className="socialicon"><i className="fa fab fa-youtube"></i></a>
                                    </div>
                                </div>
                                <div className="ranjith">Indhumathi</div><br></br><div className='text-muted ceo'>Junior Developer</div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default aboutus;
