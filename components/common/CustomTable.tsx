import React, { useMemo } from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { TableCell, TableHead, TableBody, TableRow } from '@material-ui/core';
import { TableHeader } from '../../src/lib/props';

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

type CustomTableProps = {
  headers: TableHeader[];
  content: { [key: string]: string | number }[];
  removable?: boolean;
  onClickRemove?: any;
};

export default function CustomTable({
  headers,
  content,
  removable,
  onClickRemove,
}: CustomTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {
            <TableRow>
              {headers.map((v, index) => {
                return <TableCell key={index}>{v.label}</TableCell>;
              })}
              {removable ? <TableCell>삭제</TableCell> : <></>}
            </TableRow>
          }
        </TableHead>
        <TableBody>
          {content.map((v, index) => {
            return (
              <TableRow key={index}>
                {headers.map((h, i) => {
                  //TODO : align 추가
                  return <TableCell key={i}>{v[h.property]}</TableCell>;
                })}
                {removable ? (
                  <TableCell>
                    <button onClick={() => onClickRemove(v['id'])}>X</button>
                  </TableCell>
                ) : (
                  <></>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
