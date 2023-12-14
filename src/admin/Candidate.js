import "../css/admin.css";
import Sidebars from "./sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { BiSolidDownload } from "react-icons/bi";
import DataTable from "react-data-table-component";

const Candidate = () => {
  const [careerData, setCareerData] = useState([]);

  useEffect(() => {
    axios.get("https://infygain.com/api/candata").then((res) => {
      setCareerData(res.data);
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
//     {
//       name: "JD",
//       selector: (row) => row.content,
//   },
//   {
//     name: "intro",
//     selector: (row) => row.intro,
// },
    {
      name: "Download",
      selector: (row) => {
        return (
          <>
          <a href={`/uploads/${row.file}`} download>
            <button  className="btn btn-warning">
              <BiSolidDownload />
              {/* {console.log(row.id)} */}
            </button>
          </a>
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
          <h1 className="mb-5">Candidate Details</h1>
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
export default Candidate;