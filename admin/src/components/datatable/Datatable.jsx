import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Datatable = ({ column, title }) => {
  const location = useLocation();

  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);
  const { data, loading, error, reFetch } = useFetch(`/${path}`);

  useEffect(() => {
    setList(data);
    console.log(data);
  }, [data]);

  const handleDelete = async (e, id) => {
    e.preventDefault();
    console.log(id);
    try {
      await axios.delete(`${path}/${id}`);
    } catch (error) {
      console.log(error);
    }
    setList(list.filter((item) => item._id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={(e) => handleDelete(e, params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  console.log(path);
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New {title}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={column.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row._id}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
