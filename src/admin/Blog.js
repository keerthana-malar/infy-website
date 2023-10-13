import "../css/admin.css";
import Sidebars from "./sidebar";
import { Link, json } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BiSolidCommentEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";

const Blog = () => {
  const navigate = useNavigate();

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

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Date",
      selector: (row) => {
        const rawDate = row.date;
        const blogDate = rawDate.slice(0, 10);
        return blogDate;
      },
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Category",
      selector: (row) => row.category,
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
            <Link to={`/editblog/${row.id}`} className="btn btn-warning">
              <BiSolidCommentEdit />
            </Link>
            &nbsp;&nbsp;
            <Link
              onClick={() => {
                handleDelete(row.id);
              }}
              className="btn btn-danger"
            >
              <MdDeleteForever />
            </Link>
          </>
        );
      },
    },
  ];

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("https://infygain.in/api/blogdata").then((res) => {
      setBlogs(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (confirmDelete) {
      axios
        .delete(`https://infygain.in/api/blogdelete/${id}`)
        .then((res) => {
          alert("Deleted Successfully 😥");
          axios
            .get("https://infygain.in/api/blogdata")
            .then((res) => {
              setBlogs(res.data);
            })
            .catch((error) => {
              console.error("Error fetching updated data:", error);
            });
        })
        .catch((error) => {
          console.error("Error deleting blog:", error);
        });
    }
  };

  return (
    <>
      <div className="adminMainBox">
        <div className="sideBarBox">
          <Sidebars />
        </div>
        <div className="mainContBox p-5">
          <h1 className="mb-5">Blogs</h1>
          <div className="topBtnBox d-flex justify-content-end mb-3">
            <button className="btn btn-primary">
              <Link className="text-light" to="/addblog">
                Create
              </Link>
            </button>
          </div>
          <DataTable
            pagination
            columns={columns}
            data={blogs}
            customStyles={tableCustomStyles}
          />
        </div>
      </div>
    </>
  );
};
export default Blog;
