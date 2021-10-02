import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { TableHeader } from '../../../src/lib/props';
import {
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Collapse,
  Button,
} from '@material-ui/core';

type ServiceTableRowProps = {
  headers: TableHeader[];
  content: { [key: string]: string | any };
};

function ServiceTableRow({ headers, content }: ServiceTableRowProps) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow hover>
        {headers.map((h, i) => {
          if (h.property === 'title') {
            return (
              <TableCell key={i}>
                <Button onClick={() => setOpen(!open)}>
                  {content[h.property]}
                </Button>
              </TableCell>
            );
          }
          return <TableCell key={i}>{content[h.property]}</TableCell>;
        })}
      </TableRow>
      <TableRow>
        <TableCell
          colSpan={headers.length}
          style={{ paddingBottom: 0, paddingTop: 0 }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div>
              {content['custom'].title}
              {content['custom'].content}
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

type ServiceTableProps = {
  data: {
    headers: TableHeader[];
    content: { [key: string]: string | any }[];
  };
};

function ServiceTable({ data }: ServiceTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {
            <TableRow>
              {data.headers.map((v, index) => {
                return <TableCell key={index}>{v.label}</TableCell>;
              })}
            </TableRow>
          }
        </TableHead>
        <TableBody>
          {data.content.map((v, index) => {
            if (v['custom']) {
              return <ServiceTableRow content={v} headers={data.headers} />;
            } else {
              return (
                <React.Fragment>
                  <TableRow key={index} hover>
                    {data.headers.map((h, i) => {
                      //TODO : align 추가
                      return <TableCell key={i}>{v[h.property]}</TableCell>;
                    })}
                  </TableRow>
                </React.Fragment>
              );
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ServiceTable;
