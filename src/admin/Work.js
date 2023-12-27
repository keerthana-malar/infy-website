import "../css/admin.css";
import Sidebars from "./sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { BiSolidCommentEdit, BiSolidDownload } from "react-icons/bi";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const Work = () => {
  const [careerData, setCareerData] = useState([]);

  useEffect(() => {
    // axios.get("https://infygain.com/api/candata")
    axios.get("https://infygain.com/api/partnerdatas")
   
    .then((res) => {
      const data = res.data
      const foundData = data.filter(item => item.category === 'Work');
        setCareerData(foundData);
    });
  }, []);


  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
        name: "Number",
        selector: (row) => row.phno,
    },
    {
        name: "Position",
        selector: (row) => row.position,
    },

    {
      name: "View",
      selector: (row) => {
        return (
          <>
          <Link to={`/work/${row.id}`} className="btn btn-warning">
            <BiSolidCommentEdit />
          </Link>
          </>
        );
      },
    },
  ];


  const tableCustomStyles = {
    headCells: {
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        backgroundColor: "#0061ae",
        color: "#fff",
      },
    },
    rows: {
      style: {
        minHeight: "60px",
        fontSize: "16px",
      },
    },
  };

  

  return (
    <>
      <div className="adminMainBox">
        <div className="sideBarBox">
          <Sidebars />
        </div>
        <div className="mainContBox p-5">
          <h1 className="mb-5">Partner Details</h1>
          <DataTable
            pagination
            columns={columns}
            data={careerData}
            customStyles={tableCustomStyles}
          />
        </div>
      </div>
    </>
  );
};
export default Work;