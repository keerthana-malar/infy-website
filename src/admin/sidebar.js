import { Link } from "react-router-dom";
import "../css/admin.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Sidebar = () => {
  useEffect(() => {
    const userData = Cookies.get("user");
    if (userData) {
      console.log("User Data:", JSON.parse(JSON.stringify(userData)));
    } else {
      console.log("Hiiiiii");
    }
  }, []);

  return (
    <>
      <div className="sideBar">
        <div className="logoBox mb-3">
          <img src="/images/icons/logo-alt.svg"></img>
        </div>
        <div className="menuBox">
          <Link className="sideLinks active">Dashboard</Link>
          <Link className="sideLinks">Users</Link>
          <Link className="sideLinks">Blogs</Link>
        </div>
        <div className="bottomBox">
          <button className="btn btn-light">Logout</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
