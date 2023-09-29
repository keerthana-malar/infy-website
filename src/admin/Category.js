import "../css/admin.css";
import Sidebars from "./sidebar";
import BootstrapTable from "react-bootstrap-table-next";
import { Link } from "react-router-dom";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const Category = () => {
  const cat = [
    {
      id: 1,
      name: "IT Support",
      status: "Active"
    },
    {
      id: 2,
      name: "Web Services",
      status: "Active"
    },
    {
      id: 3,
      name: "ISP Services",
      status: "Inactive"
    },
  ];

  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "name",
      text: "Category Name",
      sort: true
    },
    {
      dataField: "status",
      text: "Status",
    },
  ];

  return (
    <>
      <div className="adminMainBox">
        <div className="sideBarBox">
          <Sidebars />
        </div>
        <div className="mainContBox p-5">
          <h1 className="mb-5">Category</h1>
          <div className="topBtnBox d-flex justify-content-end mb-3">
              <button className="btn btn-primary"><Link className="text-light" to="/AddCategory">Create</Link></button>
            </div>
          <BootstrapTable keyField='id' data={ cat } columns={ columns } striped rowStyle={ { backgroundColor: 'red' } } />
        </div>
      </div>
    </>
  );
};
export default Category;
