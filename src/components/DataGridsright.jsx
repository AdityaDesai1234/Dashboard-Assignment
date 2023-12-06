import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography'
const columns = [
  
//   { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'group',
    headerName: 'Group',
    width: 150,
    editable: false,
  },
  {
    field: 'clicks',
    headerName: 'Clicks',
    width: 150,
    editable: false,
  },
  {
    field: 'coast',
    headerName: 'Coast',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'conversions',
    headerName: 'Conversions',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'revenue',
    headerName: 'Revenue',
    type: 'number',
    width: 110,
    editable: false,
  }
];

const rows = [
  
  { id: 1, group: 'Male', clicks: '348', coast: 'USD 12,528', conversions:42, revenue:'USD 62,118' },
  { id: 2, group: 'Female', clicks: '692', coast: 'USD 24,912', conversions:35, revenue:'USD 5,175' },
  { id: 3, group: 'Unknown', clicks: '105', coast: 'USD 3,943', conversions:3, revenue:'USD 4,489' },
  { id: 4, group: 'Total', clicks: '1,145', coast: 'USD 41,383', conversions:80, revenue:'USD 71,782' },
  
  
];
// height: 474,
export default function DataGridDemo() {
  return (
    <Box sx={{ width:'100%'}}> 
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          }
        }}
        pageSizeOptions={[7]}
        // checkboxSelection
        // disableRowSelectionOnClick
        style={{background:'white'}}/>
    </Box>
  );
}