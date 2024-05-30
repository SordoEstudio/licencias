import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import rows from "../assets/licencias.json"
import { Box, IconButton, Paper, Toolbar } from '@mui/material';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import IosShareIcon from '@mui/icons-material/IosShare';
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const columns = [
  { field: 'fecha', headerName: 'Fecha', width: 130 },
  { field: 'dias', headerName: 'Dias', width: 130 },
  { field: 'desde', headerName: 'Desde', width: 130 },
  { field: 'hasta', headerName: 'Hasta', width: 130 },
  { field: 'corresponde_año', headerName: 'de/año', width: 130 },
  { field: 'autorizo', headerName: 'Autorizo', width: 130 },
  { field: 'adjunto', headerName: 'Adjunto', width: 130 }
];

export default function LicenciaDataTable() {

  
  return (
    <>
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        checkboxSelection
        />
    </div>
        </>
  );
}

/*const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];*/

