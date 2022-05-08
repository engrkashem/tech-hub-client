import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const QuesThree = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className=' w-1/2' align="center">SQL</TableCell>
                        <TableCell className=' w-1/2' align="center">NoSQL</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                        <TableCell align="left">SQL databases are relational</TableCell>
                        <TableCell align="left">NoSQL databases are non-relational</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="left">SQL databases use structured query language and have a predefined schema.</TableCell>
                        <TableCell align="left">NoSQL databases have dynamic schemes for unstructured data.</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="left">SQL databases are vertically scalable</TableCell>
                        <TableCell align="left">NoSQL databases are horizontally scalable.</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="left">It is table based. </TableCell>
                        <TableCell align="left">It stores document, key-value, graph, or wide-column.</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="left">Best suited for complex queriries. </TableCell>
                        <TableCell align="left">Not suited enough for complex queriries.</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="left">SQL databases are better for multi-row transactions  </TableCell>
                        <TableCell align="left">NoSQL is better for unstructured data like documents or JSON. </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default QuesThree;