import { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Box,
  Button,
  IconButton,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material/";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import "dayjs/locale/es-mx";

export default function NewLicence() {
  const [today, setToday] = useState(dayjs());
  const [desde, setDesde] = useState(dayjs());
  const [hasta, setHasta] = useState(dayjs());
  const [dias, setDias] = useState();
  const [año, setAño] = useState(2024);
  const [autorizo, setAutorizo] = useState("Curent User");

  // Esta propiedad debe recibirse de un context
  const isAdmin = true;

  const ActionsButtons = () => {
    return (
      <Box>
        <IconButton>
          <SaveIcon />
        </IconButton>
        <IconButton>
          <CancelIcon />
        </IconButton>
      </Box>
    );
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
      <TableRow>
        <TableCell align="center">
          <DatePicker
          sx={{maxWidth:160}}
            /* label="Fecha de creacion" */
            value={today}
            onChange={(newValue) => setToday(newValue)}
            disabled={!isAdmin}
          />
        </TableCell>
        <TableCell align="right">
          <TextField
            variant="standard"
            sx={{ width: 50 }}
            value={dias}
            onChange={(e) => setDias(e.target.value)}
          />
        </TableCell>
        <TableCell align="center">
          <DatePicker
                    sx={{maxWidth:160}}

            /* label="Desde" */
            value={desde}
            onChange={(newValue) => setDesde(newValue)}
          />
        </TableCell>
        <TableCell align="center">
          <DatePicker
                    sx={{maxWidth:160}}

            /* label="Hasta" */
            value={hasta}
            onChange={(newValue) => setHasta(newValue)}
          />
        </TableCell>

        <TableCell align="center">
          <TextField
            variant="standard"
            sx={{ width: 50 }}
            value={año}
            onChange={(e) => setAño(e.target.value)}
          />
        </TableCell>
        <TableCell align="right">
          {" "}
          <TextField
            variant="standard"
            value={autorizo}
            onChange={(e) => {
              setAutorizo(e.target.value);
            }}
            disabled={!isAdmin}
          />
        </TableCell>
        <TableCell align="center">
          <Button>
            <UploadFileIcon />
          </Button>
          {/*   <input type='file'/>
           */}
        </TableCell>
        <TableCell>
          <ActionsButtons />
        </TableCell>
      </TableRow>
    </LocalizationProvider>
  );
}
