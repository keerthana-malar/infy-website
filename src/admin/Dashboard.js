import React, { useState, useEffect } from "react";
import "../css/admin.css";
import Sidebars from "./sidebar";
import axios from "axios";

const Dashboard = () => {
  const [date, setDate] = useState(
    new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
  );
  const [data, setData] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // ! Get Dash Data
  useEffect(() => {
    axios
      .get("https://infygain.in/api/dash")
      .then((res) => {
        console.log("Dash Data :" + JSON.stringify(res));
        setData(res.data)
      })
      .catch((err) => {
        console.log("Dash Data Error :" + err);
      });
  }, []);

  return (
    <>
      <div className="adminMainBox">
        <div className="sideBarBox">
          <Sidebars />
        </div>
        <div className="mainContBox p-5">
          <h1 className="mb-5">DashBoard</h1>
          <div className="userDetailsBox mb-3">
            <div className="dataBox wlcmBox">
              <h1 className="">Welcome Admin</h1>
              <h3>{date}</h3>
              <p>Welcome admin panel 😊</p>
            </div>
          </div>
          <div className="blogDetailsBox">
            <div className="dataBox">
              <h5>Total Blogs</h5>
              <h1>{data.totalBlogs}</h1>
            </div>
            <div className="dataBox">
              <h5>Total Active Blogs</h5>
              <h1>{data.activeBlogs}</h1>
            </div>
            <div className="dataBox">
              <h5>Total Categories</h5>
              <h1>{data.totalCategories}</h1>
            </div>
            <div className="dataBox">
              <h5>Total Active Categories</h5>
              <h1>{data.activeCategories}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
