"use client";
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridRowsProp,
} from "@mui/x-data-grid";
import "./index.css";

interface TableComponentProps {
  columns: GridColDef[];
  rows: GridRowsProp;
  paginationModel: GridPaginationModel;
  onPaginationModelChange: (model: GridPaginationModel) => void;
  rowCount: number;
}

export default function DataTable({
  rows,
  columns,
  paginationModel,
  onPaginationModelChange,
  rowCount,
}: TableComponentProps) {
  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rowCount={rowCount}
        rows={rows}
        columns={columns}
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={onPaginationModelChange}
        pageSizeOptions={[5, 10, 20]}
      />
    </div>
  );
}
