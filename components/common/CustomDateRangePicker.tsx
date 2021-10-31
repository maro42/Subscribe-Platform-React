import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';

function CustomDateRangePicker({ setDateFunc }: any) {

  const [value, setValue] = useState<DateRange<Date>>([new Date(), new Date()]);

  useEffect(() => {
    setDateFunc(value[0] == null ? new Date() : value[0].getFullYear() + '' + ('0' + (value[0].getMonth() + 1)).slice(-2) + '' + ('0' + value[0].getDate()).slice(-2),
    value[1] == null ? new Date() : value[1].getFullYear() + '' + ('0' + (value[1].getMonth() + 1)).slice(-2) + '' + ('0' + value[1].getDate()).slice(-2))
  }, [value])


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Typography sx={{ mt: 2, mb: 1 }}>날짜 </Typography>
        <DateRangePicker
          calendars={1}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </div>
    </LocalizationProvider>
  );
}

export default CustomDateRangePicker;