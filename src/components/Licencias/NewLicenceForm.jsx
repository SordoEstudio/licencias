import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Button,
  FormControl,
  TextField
} from "@mui/material/";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import "dayjs/locale/es-mx";
import { SaveCancelComponent } from "../SaveCancelComponent";

// Asegúrate de que initialForm tiene todos los campos correctamente inicializados
const hoy = dayjs('2022-04-17',"DD-MM-YYYY")
const initialForm = {
  pedido:hoy,
  dias: 0,
  desde: hoy,
  hasta: hoy,
  año: dayjs().year(),
  corresponde_año: dayjs().year(),
  autorizo:"Current User" ,
  adjunto: false,
};

export default function NewLicenceForm({ data, toSave, toCancel }) {
  const [form, setForm] = useState( initialForm);

  // Use effect to set initial form data if 'data' prop is passed
  useEffect(() => {
    if (data) {
      setForm(data);
    }
  }, [data]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value || "",
    });
  };

  const handleDateChange = (name, value) => {
    setForm({
      ...form,
      [name]: value|| dayjs(),
    });
  };

  const handleSave = () => {
    toSave(form);
    setForm(initialForm);
  };

  const handleCancel = () => {
    toCancel();
    setForm(initialForm);
  };

  const isAdmin = true;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
      <FormControl sx={{display:"grid",direction:"column",gap:1}}>
        <DatePicker
          sx={{ maxWidth: 160 }}
          name="today"
          value={form.pedido}
          onChange={(newValue) => handleDateChange("today", newValue)}
          disabled={!isAdmin}
label="pedido"
        />

        <DatePicker
          sx={{ maxWidth: 160 }}
          name="desde"
          value={form.desde}
          onChange={(newValue) => handleDateChange("desde", newValue)}
          label="Desde"
          placeholder="Desde"
        />
        <DatePicker
          sx={{ maxWidth: 160 }}
          name="hasta"
          value={form.hasta}
          onChange={(newValue) => handleDateChange("hasta", newValue)}
          label="Hasta"
          placeholder="Hasta"
        />
                <TextField
          variant="standard"
          sx={{ width: 50 }}
          name="dias"
          value={form.dias}
          onChange={handleChange}
          placeholder="dias"
          label="Dias"
        />
{/*         <TextField
          variant="standard"
          sx={{ width: 50 }}
          name="año"
          value={form.año}
          onChange={handleChange}
          placeholder="Año"
          label="Año"
        /> */}
        <TextField
          variant="standard"
          value={form.autorizo}
          name="autorizo"
          onChange={handleChange}
          disabled={!isAdmin}
                    placeholder="Autorizó"
          label="Autorizó"
        />
        <Button>
          <UploadFileIcon />
        </Button>
        <SaveCancelComponent toSave={handleSave} toCancel={handleCancel} />
      </FormControl>
    </LocalizationProvider>
  );
}
