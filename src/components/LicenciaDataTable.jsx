import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import rows from "../assets/licencias.json"

const columns = [
  { field: 'fecha', headerName: 'Fecha', width: 130 },
  { field: 'dias', headerName: 'Dias', width: 130 },
  { field: 'desde', headerName: 'Desde', width: 130 },
  { field: 'hasta', headerName: 'Hasta', width: 130 },
  { field: 'corresponde_año', headerName: 'de/año', width: 130 },
  { field: 'autorizo', headerName: 'Autorizo', width: 210 },
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
        pageSizeOptions={[5, 10]}
        checkboxSelection
        />
    </div>
        </>
  );
}


