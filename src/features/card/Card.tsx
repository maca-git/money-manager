import React, { FC } from 'react';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import './card.scss';

const Card: FC = () => {
  return (
    <TableContainer component={Paper} className="card">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>03/09/2022</TableCell>
            <TableCell align="right">550</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>
              Food
            </TableCell>
            <TableCell align="right">100</TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>
              Sport
            </TableCell>
            <TableCell align="right">450</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Card;
