import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Button} from '@mui/material';
import {Dialog,DialogActions,DialogContent,DialogTitle} from '@mui/material';

import dayjs from 'dayjs';


export default function NewLicenceDialog() {
    const [value, setValue] = React.useState(dayjs('2022-04-17'));

const data=    {
    "id":"001",
  "fecha": "2024-05-28",
  "dias": "5",
  "desde": "2024-06-01",
  "hasta": "2024-06-05",
  "corresponde_año": "2024",
  "autorizo": "Pérez Gómez Juan",
  "adjunto": "documento1.pdf"
}
  return (
    <React.Fragment>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker"           value={value}
          onChange={(newValue) => setValue(newValue)}/>
      </DemoContainer>
</LocalizationProvider>
    </React.Fragment>
  );
}