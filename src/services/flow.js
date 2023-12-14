import { BiMessageDetail } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbTargetArrow } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";

function Flow() {
  return (
    <>
      <div className="flowmain">
        <div className="flowbox1">
          <div className="featurebox">
            <div className="icconbx">
              <FiSettings />
            </div>
            <div className="conbx">Easy Steps</div>
          </div>
          <div className="sercon">
            <p
              className="su-title"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Protect Your Home Or Business<br></br>
            </p>
            <span className="stt" data-aos="fade-left" data-aos-duration="3000">
              With Our Unique Solutions
            </span>
          </div>
        </div>
        <div className="flowbox2">
          <div className="fbox">
            <div className="flowimgbx">
              <span>
                <BiMessageDetail />
              </span>
            </div>
            <div className="flowtitbx">
              <p>Contact us First</p>
            </div>
            <div className="flowconbx">
              <p>
                We develop the relationships that underpin the next phase in
                your organisation’s growth.
              </p>
            </div>
            <div className="flowbtnbx">
              <p>
                <Link to="/contact">
                  <span>
                    Contact us &nbsp;
                    {/* <MdOutlineKeyboardArrowRight /> */}
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <div className="fbox">
            <div className="flowimgbx">
              <span>
                <HiOutlineUserGroup />
              </span>
            </div>
            <div className="flowtitbx">
              <p>Consult with us</p>
            </div>
            <div className="flowconbx">
              <p>
                The success of every business relies heavily on a company’s
                ability to attract and retain customers.
              </p>
            </div>
            <div className="flowbtnbx">
              <p>
                <Link to="/contact">
                  <span>
                    Contact us &nbsp;
                    {/* <MdOutlineKeyboardArrowRight /> */}
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <div className="fbox">
            <div className="flowimgbx">
              <span>
                <TbTargetArrow />
              </span>
            </div>
            <div className="flowtitbx">
              <p>Place Order</p>
            </div>
            <div className="flowconbx">
              <p>
                The definition of marketing software refers to a compendium of
                systems designed to optimize.
              </p>
            </div>
            <div className="flowbtnbx">
              <p>
                <Link to="/contact">
                  <span>
                    Contact us &nbsp;
                    {/* <MdOutlineKeyboardArrowRight /> */}
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <div className="fbox">
            <div className="flowimgbx">
              <span>
                <GiReceiveMoney />
              </span>
            </div>
            <div className="flowtitbx">
              <p>Make Payment</p>
            </div>
            <div className="flowconbx">
              <p>
                Beyond defining the software category, we’ll expound on the
                other aspects of marketing app.
              </p>
            </div>
            <div className="flowbtnbx">
              <p>
                <Link to="/contact">
                  <span>
                    Contact us &nbsp;
                    {/* <MdOutlineKeyboardArrowRight /> */}
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Flow;
