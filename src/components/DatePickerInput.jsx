import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const DatePickerInput = ({date}) => {
  const [selectedDate, setSelectedDate] = useState(date || new Date());

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return 
`${day}-${month}-${year}`
;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (<TextField
          id="date"
      label="Fecha"
      type="date"
      value={formatDate(selectedDate)}
      onChange={(e) => handleDateChange(new Date(e.target.value))}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default DatePickerInput;