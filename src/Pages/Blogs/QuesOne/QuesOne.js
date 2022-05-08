import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const QuesOne = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className=' w-1/2' align="center">JavaScript</TableCell>
                        <TableCell className=' w-1/2' align="center">Node Js</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                        <TableCell align="left">JavaScript is a light weight programming language that runs in browser's JS Engine.</TableCell>
                        <TableCell align="left">Node JS is a  running environment for a JavaScript programm</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="left">JS only runs in browsers</TableCell>
                        <TableCell align="left">Node JS enables JS  to run outside of browser</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="left">Primarily used on client side</TableCell>
                        <TableCell align="left">Mostly used on server side.</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="left">JS follows Java Programming language standard. </TableCell>
                        <TableCell align="left">Node JS is written in C++ but helps us run a written javascript program in any browser environment.</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="left">JS runs in any browser engine as like Spidermonkey in Firefox and JS core in safari.  </TableCell>
                        <TableCell align="left">Only V8 is the JavaScript engine inside of node.js that  runs Javascript. </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default QuesOne;