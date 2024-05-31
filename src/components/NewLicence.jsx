import { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button, TableCell, TableRow, TextField } from "@mui/material/";
import "dayjs/locale/es-mx";

export default function NewLicence() {
  const [today, setToday] = useState(dayjs());
  const [desde, setDesde] = useState(dayjs());
  const [hasta, setHasta] = useState(dayjs());
  const [dias, setDias] = useState();
  const [año, setAño] = useState(2024);
  const [autorizo, setAutorizo] = useState('Curent User');

  const [isAdmin, setIsAdmin]=useState(true)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
      <TableRow>
        <TableCell align="center" >
          <DatePicker
            label="Fecha de creacion"
            value={today}
            onChange={(newValue) => setToday(newValue)}
            disabled={!isAdmin}
          />
        </TableCell>
        <TableCell align="center">
          <DatePicker
            label="Desde"
            value={desde}
            onChange={(newValue) => setDesde(newValue)}
          />
        </TableCell>
        <TableCell align="center">
          <DatePicker
            label="Hasta"
            value={hasta}
            onChange={(newValue) => setHasta(newValue)}
          />
        </TableCell>
        <TableCell align="right">
        <TextField
            label="Dias"
            value={dias}
            onChange={(e) => setDias(e.target.value)}
          />
        </TableCell>
        <TableCell align="center">
          <TextField
            label="de año"
            value={año}
            onChange={(e) => setAño(e.target.value)}
          />
        </TableCell>
        <TableCell align="right">          <TextField
            label="Autorizó"
            value={autorizo}
            onChange={(e)=>{setAutorizo(e.target.value)}}
disabled={!isAdmin}          />
</TableCell>
<TableCell>
<Button onClick={()=>setIsAdmin(!isAdmin)}>Is Admin</Button>
</TableCell>
      </TableRow>
    </LocalizationProvider>
  );
}
