import React from "react";
import './Table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List  = () => {

    const rows = [
        {
            id :155458,
            product :"ace san",
            img: "https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_960_720.jpg",
            customer : "amal nassih",
            date : "12/08/2021",
            amount: 1258,
            method:"online payment",
            status:"Approved"
        },
        {
            id :1789,
            product :"ace san",
            img: "https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_960_720.jpg",
            customer : "amal nassih",
            date : "12/08/2021",
            amount: 1258,
            method:"online payment",
            status:"Pending"
        },
        {
            id :19,
            product :"ace san",
            img: "https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_960_720.jpg",
            customer : "amal nassih",
            date : "12/08/2021",
            amount: 1258,
            method:"online payment",
            status:"Pending"
        },
        {
            id :189,
            product :"ace san",
            img: "https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_960_720.jpg",
            customer : "amal nassih",
            date : "12/08/2021",
            amount: 1258,
            method:"online payment",
            status:"Approved"
        }
    ]
   
        return (
            <TableContainer component={Paper} className="table">
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell className="tableCell">Product</TableCell>
                  <TableCell className="tableCell">Customer</TableCell>
                  <TableCell className="tableCell">Date</TableCell>
                  <TableCell className="tableCell">Amount</TableCell>
                  <TableCell className="tableCell">Method</TableCell>
                  <TableCell className="tableCell">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                  >
                    <TableCell component="th" scope="row"className="tableCell">
                      {row.id}
                    </TableCell>
                    <TableCell className="tableCell">{row.product}</TableCell>
                   
                    <TableCell className="tableCell"><div className="cellwrapper">
                        <img src={row.img} alt="" srcset="" />
                        {row.customer}
                        </div></TableCell>
                    <TableCell className="tableCell">{row.date}</TableCell>
                    <TableCell className="tableCell">{row.amount}</TableCell>
                    <TableCell className="tableCell">{row.method}</TableCell>
                    <TableCell className="tableCell">
                        <span className={`status ${row.status}`}>
                            {row.status}
                        </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
}

export default List;