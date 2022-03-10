import * as React from 'react';
import { useCallback, useState } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  TextField
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import {LocalizationProvider, DatePicker} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

export default function Charts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [value, setValue] = React.useState<Date | null>(new Date());

  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const data = [
    { name: 'Food', value: 5400 },
    { name: 'House', value: 4300 },
    { name: 'Sport', value: 500 },
    { name: 'Education', value: 100 },
  ];

  const barData = [
    {
      "name": "January",
      "expenses": 4000,
      "income": 2400
    },
    {
      "name": "February",
      "expenses": 3000,
      "income": 1398
    },
    {
      "name": "March",
      "expenses": 2000,
      "income": 9800
    },
    {
      "name": "April",
      "expenses": 2780,
      "income": 3908
    },
    {
      "name": "May",
      "expenses": 1890,
      "income": 4800
    },
    {
      "name": "June",
      "expenses": 2390,
      "income": 3800
    },
    {
      "name": "July",
      "expenses": 3490,
      "income": 4300
    }
  ]

  const [type, setType] = React.useState('expenses');

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  return (
    <>
      <h2>This month Income/Expenses for categories</h2>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        fullWidth
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
      <FormControl>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value="expenses">Expenses</MenuItem>
          <MenuItem value="income">Income</MenuItem>
        </Select>
      </FormControl>
      <PieChart width={800} height={500}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={400}
          cy={250}
          innerRadius={120}
          outerRadius={160}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
      <h2>Last year Income/Expenses</h2>
      <BarChart width={850} height={350} data={barData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="expenses" fill="#8884d8" />
        <Bar dataKey="income" fill="#82ca9d" />
      </BarChart>
    </>
  );
}
