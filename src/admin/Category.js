import "../css/admin.css";
import Sidebars from "./sidebar";
import { Link, json } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BiSolidCommentEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";

const Category = () => {
  const navigate = useNavigate();

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
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Action",
      selector: (row) => {
        return (
          <>
            <Link to={`/editcategory/${row.id}`} className="btn btn-warning">
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
      axios.delete(`https://infygain.in/api/catdelete/${id}`)
        .then((res) => {
          alert("Deleted Successfully 😥");
          axios.get("https://infygain.in/api/catdata")
          .then((res) => {
            setCategories(res.data);
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

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://infygain.in/api/catdata").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <>
      <div className="adminMainBox">
        <div className="sideBarBox">
          <Sidebars />
        </div>
        <div className="mainContBox p-5">
          <h1 className="mb-5">Category</h1>
          <div className="topBtnBox d-flex justify-content-end mb-3">
            <button className="btn btn-primary">
              <Link className="text-light" to="/AddCategory">
                Create
              </Link>
            </button>
          </div>
          <DataTable
            pagination
            columns={columns}
            data={categories}
            customStyles={tableCustomStyles}
          />
        </div>
      </div>
    </>
  );
};
export default Category;
