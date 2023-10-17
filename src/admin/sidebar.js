import { Link } from "react-router-dom";
import "../css/admin.css";
import { useNavigate } from "react-router-dom";
import { MdSpaceDashboard, MdAccountCircle } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";
import { BiSolidCategory, BiSolidCategoryAlt } from "react-icons/bi";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useEffect, useState } from "react";

const Sidebars = () => {
  const [width, setWidth] = useState("");
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      if (window.innerWidth <= 800) {
        setCollapse(true);
      } else {
        setCollapse(false);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sideStyle = {
    button: {
      [`&.active`]: {
        backgroundColor: "red",
        color: "#b6c8d9",
      },
    },
  };

  return (
    <>
      <Sidebar className="sideBar" collapsed={collapse}>
        <div className="logoBox">
          <img src="/images/icons/infylogo.svg"></img>
        </div>
        <Menu className="menuBox" menuItemStyles={sideStyle}>
          <MenuItem
            icon={<MdSpaceDashboard />}
            component={<Link to="/dashboard" />}
          >
            Dashboard
          </MenuItem>
          <SubMenu icon={<FaBlogger />} label="Blogs">
            <MenuItem icon={<BiSolidCategory />} component={<Link to="/category" />}> Category </MenuItem>
            <MenuItem icon={<FaBlogger />} component={<Link to="/adminblog" />}> Blog</MenuItem>
          </SubMenu>
        </Menu>
        <div className="bottomBox p-1">
          <Link to="/admin" className="btn w-100 btn-danger">Logout</Link>
        </div>
      </Sidebar>
    </>
  );
};

export default Sidebars;
