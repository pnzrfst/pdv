"use client"
import { DataGrid, GridColDef, GridRowsProp} from '@mui/x-data-grid';

import "./index.css";


interface TableComponentProps {
  columns: GridColDef[];
  rows: GridRowsProp; 
}

export default function DataTable({ columns, rows }: TableComponentProps) {
  return (
    <div>
      
    <DataGrid rows = {rows} columns = {columns}
     initialState = {{
      pagination: {
        paginationModel: {
          page: 0,
          pageSize: 5
        }
      }
     }}
     pageSizeOptions={[5, 10]} checkboxSelection
     />
     </div>
  )
}