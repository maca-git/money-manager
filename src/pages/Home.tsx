import * as React from 'react';
import Card from '../features/card/Card';
import StatisticBlock from '../features/statistic/StatisticBlock';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function Home() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
      >
        <DatePicker
          views={['year', 'month']}
          label="Year and Month"
          minDate={new Date('2012-03-01')}
          maxDate={new Date('2023-06-01')}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>
      <StatisticBlock />
      <Card />
      <Card />
      <Card />
    </>
  );
}

export default Home;
