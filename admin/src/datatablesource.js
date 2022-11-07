export const userColumns = [
  { field: "_id", headerName: "ID", width: 120 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={
              params.img ||
              `https://xsgames.co/randomusers/assets/avatars/male/${Math.floor(
                Math.random() * 90 + 10
              )}.jpg`
            }
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "city",
    headerName: "city",
    width: 100,
  },
  {
    field: "country",
    headerName: "country",
    width: 100,
  },
  {
    field: "phone",
    headerName: "phone",
    width: 100,
  },
  {
    field: "isActive",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div
          className={`cellWithStatus ${
            params.row.isActive ? "active" : "Disabled"
          }`}
        >
          {params.row.isActive ? "Active" : "Disabled"}
        </div>
      );
    },
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 200 },
  { field: "name", headerName: "Name", width: 250 },
  { field: "desc", headerName: "Description", width: 350 },
  { field: "rating", headerName: "Rating", width: 250 },
];
