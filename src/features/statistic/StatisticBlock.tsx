import React, { FC } from 'react';
import { Grid, Paper } from '@mui/material';
import './statistic-block.scss';

const StatisticBlock: FC = () => {
  return (
    <Grid container spacing={2} className="statistic">
      <Grid item xs={4}>
        <Paper className="paper">
          <span className="paper__title">Income</span>
          <span className="paper__value">26800</span> 
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className="paper">
          <span className="paper__title">Expenses</span> 
          <span className="paper__value">20800</span>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className="paper">
          <span className="paper__title">Balance</span>
          <span className="paper__value">6000</span>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default StatisticBlock;
