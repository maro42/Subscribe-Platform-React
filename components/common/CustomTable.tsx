import React, { useMemo } from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { TableCell, TableHead,TableBody, TableRow } from '@material-ui/core';
import {TableHeader} from '../../src/lib/props'


function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

//TODO : 페이지네이션 추가

type CustomTableProps = {
    headers : TableHeader[];
    content : {[key:string] : string }[];
}

export default function CustomTable(
    {
        headers,
        content,
    }: CustomTableProps
) {


    const TableHeaders = useMemo(()=>{
        return(
                <TableRow>
                    {
                   headers.map((v,index)=>{
                       return (
                           <TableCell key={index}>{v.label}</TableCell>
                       )
                   })
               }
                </TableRow>
        )

    },[headers]);

    const TableBodies = useMemo(()=>{

        return (
            content.map((v, index)=>{

                return(
                    <TableRow key={index}>
                        
                        {
                           headers.map((h, i)=>{
                               //TODO : align 추가 
                               return(
                                   <TableCell key={i}>{v[h.property]}</TableCell>
                               )
                           })
                        }

                    </TableRow>
                )
             
            })
        )

    },[]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
              {TableHeaders}
        </TableHead>
        <TableBody>
            {TableBodies}
        </TableBody>     
    </Table>
    </TableContainer>
  );
}