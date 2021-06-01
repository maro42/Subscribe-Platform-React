import React, { useMemo } from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { TableCell, TableHead,TableBody, TableRow } from '@material-ui/core';
import {TableHeader} from '../../src/lib/props'


function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

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