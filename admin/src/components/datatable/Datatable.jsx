import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { toast } from "react-toastify";
import Popover from "@mui/material/Popover";

const Datatable = ({ column, title }) => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);
  const { data, loading, error, reFetch } = useFetch(`/${path}`);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    setList(data);
    console.log(data);
  }, [data]);

  const handleDelete = async (e, id) => {
    e.preventDefault();

    try {
      console.log(deleteId);
      await axios.delete(`${path}/${deleteId}`);
      handleClose();
      toast.warn(`${title} deleted!`, { position: toast.POSITION.TOP_RIGHT });
    } catch (error) {
      console.log(error);
    }
    setList(list.filter((item) => item._id !== deleteId));
  };
  const handleClick = (event) => {
    console.log("clicked");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <div className="pop-wraper">
                <p>Do you want to delete this {title} ?</p>

                <div className="btn-container">
                  <div
                    className="deleteButton"
                    onClick={(e) => handleDelete(e, params.row._id)}
                  >
                    Yes
                  </div>
                  <div className="viewButton" onClick={() => handleClose()}>
                    No
                  </div>
                </div>
              </div>
            </Popover>
            <div className="viewButton">View</div>

            <div
              className="deleteButton"
              aria-describedby={id}
              onClick={(e) => {
                setDeleteId(params.row._id);
                console.log(params.row._id);
                handleClick(e);
              }}
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
