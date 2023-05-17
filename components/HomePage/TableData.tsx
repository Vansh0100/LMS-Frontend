import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    accNo: number,
  callNo: string,
  title:string,
  authors:string[],
  issueDate:string,
  dueDate:string,
  odc:number,
  itemCategory:string,
  reIssue:string,
  status:string,

) {
  return { callNo, accNo, title,authors,issueDate,dueDate,odc,itemCategory,reIssue,status };
}

const rows = [
  createData(15057,"006.31 Su87R","Reinforcement Learning: An Introduction( ed. 2)",["Richard S Sutton", "Andrew G Barto"],"01-Dec-2022","01-Jan-2023",0.00,"General","ReIssue","NoAction"),
  createData(15057,"006.31 Su87R","Reinforcement Learning: An Introduction( ed. 2)",["Richard S Sutton", "Andrew G Barto"],"01-Dec-2022","01-Jan-2023",0.00,"General","ReIssue","NoAction"),
  createData(15057,"006.31 Su87R","Reinforcement Learning: An Introduction( ed. 2)",["Richard S Sutton", "Andrew G Barto"],"01-Dec-2022","01-Jan-2023",0.00,"General","ReIssue","NoAction"),
  createData(15057,"006.31 Su87R","Reinforcement Learning: An Introduction( ed. 2)",["Richard S Sutton", "Andrew G Barto"],"01-Dec-2022","01-Jan-2023",0.00,"General","ReIssue","NoAction"),
  createData(15057,"006.31 Su87R","Reinforcement Learning: An Introduction( ed. 2)",["Richard S Sutton", "Andrew G Barto"],"01-Dec-2022","01-Jan-2023",0.00,"General","ReIssue","NoAction"),
  createData(15057,"006.31 Su87R","Reinforcement Learning: An Introduction( ed. 2)",["Richard S Sutton", "Andrew G Barto"],"01-Dec-2022","01-Jan-2023",0.00,"General","ReIssue","NoAction"),
];

export default function TableData() {
  return (
    <TableContainer className='mt-3'>
      <Table  aria-label="simple table">
        <TableHead className='' style={{background: "rgba(60, 92, 169, 1)"}}>
          <TableRow >
            <TableCell className='text-white'>Acc. No</TableCell>
            <TableCell className='text-white'>Call. No</TableCell>
            <TableCell className='text-white'>Title</TableCell>
            <TableCell className='text-white'>Author(s)</TableCell>
            <TableCell className='text-white'>Issue Date</TableCell>
            <TableCell className='text-white'>Due Date</TableCell>
            <TableCell className='text-white'>O.D.C</TableCell>
            <TableCell className='text-white'>Item Category</TableCell>
            <TableCell className='text-white'>Return/ReIssue</TableCell>
            <TableCell className='text-white'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{background:"rgba(240, 247, 251, 1)"}} >
          {rows.map((row) => (
            <TableRow
              key={row.accNo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            
            >
              
              <TableCell >{row.accNo}</TableCell>
              <TableCell >{row.callNo}</TableCell>
              <TableCell >{row.title}</TableCell>
              <TableCell >{row.authors.join('; ')}</TableCell>
              <TableCell >{row.issueDate}</TableCell>
              <TableCell >{row.dueDate}</TableCell>
              <TableCell >{row.odc}</TableCell>
              <TableCell >{row.itemCategory}</TableCell>
              <TableCell >
                <button className='p-1 rounded-md text-white' style={{backgroundColor:"rgba(60, 92, 169, 1)"}}>
                  {row.reIssue}
                </button>
              </TableCell>
              <TableCell >{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}