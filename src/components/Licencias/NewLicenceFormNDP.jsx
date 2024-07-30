import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  Button,
  FormControl,
  TextField,
  Typography
} from "@mui/material/";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import "dayjs/locale/es-mx";
import { SaveCancelComponent } from "../SaveCancelComponent";
import DatePickerInput from "../DatePickerInput";


export default function NewLicenceFormNDP({ data, toSave, toCancel }) {
  const [form, setForm] = useState(data);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value || "",
    });
  };

  const handleDateChange = (value, name) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSave = () => {
    toSave(form);
  };

  const handleCancel = () => {
    toCancel();
  };

  const isAdmin = true;

  return (<>
      <FormControl sx={{ display: "grid", direction: "column", gap: 1 ,paddingTop:"0.5rem"}}>
        <DatePickerInput
          label="Desde"
          date={form.desde}
          changeDate={handleDateChange}
          name="desde"
        />
        <DatePickerInput
          label="Hasta"
          date={form.hasta}
          changeDate={handleDateChange}
          name="hasta"
        />
        <DatePickerInput
          label="Fecha"
          date={form.fecha}
          changeDate={handleDateChange}
          name="fecha"
        />

                <TextField
          variant="standard"
          sx={{ width: 50 }}
          name="dias"
          value={form.dias}
          onChange={handleChange}
          placeholder="dias"
          label="Dias"/>

        <TextField
          variant="standard"
          sx={{ width: 50 }}
          name="año"
          value={form.corresponde_año}
          onChange={handleChange}
          placeholder="Año"
          label="Año"
        />
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
      </>
  );
}
