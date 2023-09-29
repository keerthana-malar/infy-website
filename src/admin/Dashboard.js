import "../css/admin.css";
import Sidebars from "./sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="adminMainBox">
        <div className="sideBarBox">
          <Sidebars />
        </div>
        <div className="mainContBox p-5">
          <h1 className="mb-5">DashBoard</h1>
          <div className="userDetailsBox mb-3">
            <div className="dataBox wlcmBox">1</div>
            <div className="dataBox TuserBox">2</div>
          </div>
          <div className="blogDetailsBox">
            <div className="dataBox">1</div>
            <div className="dataBox">2</div>
            <div className="dataBox">3</div>
            <div className="dataBox">4</div>
            <div className="dataBox">5</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
