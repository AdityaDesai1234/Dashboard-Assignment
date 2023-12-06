import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography'
const columns = [
  
//   { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'campaigns',
    headerName: 'Campaigns',
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
  
  { id: 1, campaigns: 'Cosmetics', clicks: '712', coast: 'USD 4,272', conversions:8, revenue:'USD 16,568' },
  { id: 2, campaigns: 'Serums', clicks: '3,961', coast: 'USD 27,331', conversions:115, revenue:'USD 362,526' },
  { id: 3, campaigns: 'Facewash', clicks: '9,462', coast: 'USD 76,831', conversions:123, revenue:'USD 266,800' },
  { id: 4, campaigns: 'Shampoos', clicks: '439', coast: 'USD 2,151', conversions:5, revenue:'USD 11,029' },
  { id: 5, campaigns: 'Conditioners', clicks: '1,680', coast: 'USD 3,864', conversions:49, revenue:'USD 175,245' },
  { id: 6, campaigns: 'Facewash 2', clicks: '4,978', coast: 'USD 29,370', conversions:189, revenue:'USD 623,106' },
  { id: 7, campaigns: 'Total', clicks: '26,510', coast: 'USD 1,43,819', conversions:489, revenue:'USD 15,73,563' },
  
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