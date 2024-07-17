import React, { useState } from "react";
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
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import UploadFileIcon from "@mui/icons-material/UploadFile";
import "dayjs/locale/es-mx" ;

const currentYear = dayjs().year();
const currentDay = dayjs()

export default function NewLicence(initialState) {
  const [form,setForm]=useState(initialState)

const handleChange=(e)=>{
setForm({...form,
  [e.target.name]:e.target.value}
)
}
const handleSave=()=>{
  console.log("send:", form)
  setForm(initialState)
}
const handleCancel=()=>{
  console.log("cancel")
  setForm(initialForm)
}
  // Esta propiedad debe recibirse de un context
  // el Current User, tambien. ver sese manejo
  const isAdmin = true;

  const ActionsButtons = ({toSave,toCancel}) => {
    return (
      <Box>
        <IconButton onClick={toSave} color="success">
          <DoneIcon />
        </IconButton>
        <IconButton>
          <ClearIcon onCick={toCancel} color="error"/>
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
          name="today"
          value={form.today}
          onChange={handleChange}
          disabled={!isAdmin}
          />
        </TableCell>
        <TableCell align="right" >
          <TextField
            variant="standard"
            sx={{ width: 50 }}
            name="dias"
            value={form.dias}
            onChange={handleChange}
            />
        </TableCell>
        <TableCell align="center">
          <DatePicker
            sx={{maxWidth:160}}
            name="desde"
            value={form.desde}
            onChange={handleChange}
            />
        </TableCell>
        <TableCell align="center">
          <DatePicker
            sx={{maxWidth:160}}
            name="hasta"
            value={form.hasta}
            onChange={handleChange}
            />
        </TableCell>
        <TableCell align="center">
          <TextField
            variant="standard"
            sx={{ width: 50 }}
            name="año"
            value={form.año}
            onChange={handleChange}
            />
        </TableCell>
        <TableCell align="right">
          <TextField
            variant="standard"
            value={form.autorizo}
            name="autorizo"
            onChange={handleChange}
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
          <ActionsButtons toSave={handleSave} toCancel={handleCancel}/>
        </TableCell>
      </TableRow>
    </LocalizationProvider>
  );
}
