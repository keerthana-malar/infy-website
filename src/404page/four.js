import 'font-awesome/css/font-awesome.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../css/aboutus.css';
import { Link } from "react-router-dom";

function Fournotfour() {
    return (
        <div className='fournotfour'>
            <div className='row'> <img src="../images/banner/four.gif" alt="Image Description" className="ispimage" />
                <div className='four-text'>
                    <h1>404 - PAGE NOT FOUND</h1>
                    <p>We're sorry, the page you requested could not be found</p>
                    <p>Please check the URL and try again</p>

                    <div className='four-button'>
                        <Link className='btn btn-secondary' to='/'>Home</Link>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Fournotfour;
