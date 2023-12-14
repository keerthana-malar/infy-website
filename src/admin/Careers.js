import "../css/admin.css";
import Sidebars from "./sidebar";
import { Link} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BiSolidCommentEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import DataTable from "react-data-table-component";

const Careers = () => {
 

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.title,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
        name: "Qualification",
        selector: (row) => row.degree,
    },
    {
        name: "Experience",
        selector: (row) => row.exp,
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
      name: "Action",
      selector: (row) => {
        return (
          <>
            <Link to={`/edit-career/${row.id}`} className="btn btn-warning">
              <BiSolidCommentEdit />
            </Link>
            &nbsp;&nbsp;
            <Link onClick={()=>{handleDelete(row.id)}} className="btn btn-danger">
              <MdDeleteForever />
            </Link>
          </>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (confirmDelete) {
      axios.delete(`https://infygain.com/api/cardelete/${id}`)
        .then((res) => {
          alert("Deleted Successfully 😥");
          axios.get("https://infygain.com/api/career-data")
          .then((res) => {
            setCareerData(res.data);
          })
          .catch((error) => {
            console.error("Error fetching updated data:", error);
          });
        })
        .catch((error) => {
          console.error("Error deleting Category:", error);
        });
    }
  };

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

  const [careerData, setCareerData] = useState([]);

  useEffect(() => {
    axios.get("https://infygain.com/api/career-data").then((res) => {
      setCareerData(res.data);
    });
  }, []);

  return (
    <>
      <div className="adminMainBox">
        <div className="sideBarBox">
          <Sidebars />
        </div>
        <div className="mainContBox p-5">
          <h1 className="mb-5">Career</h1>
          <div className="topBtnBox d-flex justify-content-end mb-3">
            <button className="btn btn-primary">
              <Link className="text-light" to="/AddCareer">
                Create
              </Link>
            </button>
          </div>
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
export default Careers;
