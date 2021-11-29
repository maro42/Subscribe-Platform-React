import React, { useMemo } from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { TableCell, TableHead, TableBody, TableRow } from '@material-ui/core';
import { TableHeader } from '../../../src/lib/props';
import Checkbox from '@mui/material/Checkbox';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

//TODO : 페이지네이션 추가

type DeliveryTableProps = {
  headers: TableHeader[];
  content: { [key: string]: string | number | boolean }[];
};

export default function DeliveryTable({
  headers,
  content,
}: DeliveryTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {
            <TableRow>
              {headers.map((v, index) => {
                return <TableCell key={index}>{v.label}</TableCell>;
              })}
            </TableRow>
          }
        </TableHead>
        <TableBody>
          {content.map((v, index) => {
            return (
              <TableRow key={index}>
                {headers.map((h, i) => {
                  //TODO : align 추가

                  if (h.property === 'complete') {
                    return (
                      <TableCell key={i}>
                        <Checkbox checked={Boolean(v[h.property]!)} />
                      </TableCell>
                    );
                  } else {
                    return <TableCell key={i}>{v[h.property]}</TableCell>;
                  }
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
