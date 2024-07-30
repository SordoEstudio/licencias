import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';

const DatePickerInput = ({ date, label, changeDate, name }) => {
  const [selectedDate, setSelectedDate] = useState(date || dayjs());

  useEffect(() => {
    setSelectedDate(date || dayjs());
  }, [date]);

  const formatDate = (date) => {
    return dayjs(date).format('YYYY-MM-DD');
  };

  const handleDateChange = (e) => {
    const newDate = dayjs(e.target.value);
    setSelectedDate(newDate);
    changeDate(formatDate(newDate),name);
  };

  return (
    <TextField
      id="date"
      label={label}
      type="date"
      value={formatDate(selectedDate)}
      onChange={handleDateChange}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default DatePickerInput;
