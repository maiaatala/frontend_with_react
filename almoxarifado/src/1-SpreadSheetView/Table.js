import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";

import "./Table.css";

import { Data } from "./Data";
const url =
  "https://sheet.best/api/sheets/623f54ad-5a89-45cb-8b21-a088aac15e9f";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "teclado", headerName: "Teclado", width: 130 },
  { field: "mouse", headerName: "Mouse", width: 130 },
  {
    field: "monitor",
    headerName: "Monitor",
    width: 130,
  },
  {
    field: "cabos",
    headerName: "Cabos",
    width: 130,
  },
  {
    field: "gabinete",
    headerName: "Gabinete",
    width: 130,
  },
];

const datagridSx = {
  // https://mui.com/components/data-grid/style/
  borderRadius: 2,
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    "& .MuiDataGrid-row": {
      "&:nth-child(2n)": { backgroundColor: "rgb(177, 176, 176)" },
    },
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "rgb(197, 197, 197)",
    color: "rgb(0, 0, 0)",
  },
};

export default function DataTable() {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    // const response = await fetch(url);
    // const d = await response.json();
    // setData(d);
    setData(Data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="TableView" style={{ width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={data.length}
        rowsPerPageOptions={[]}
        checkboxSelection={true}
        autoHeight={true}
        hideFooterPagination={true}
        sx={datagridSx}
      />
    </div>
  );
}
