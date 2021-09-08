import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LineChart from './LineChart';
import { Grid } from '@material-ui/core';

//import { Container } from '@material-ui/core';
//import Login from './Login';
import TodoList from './TodoList';
import Clock from './Time';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    paper: {
        padding: theme.spacing(6),
        textAlign: 'right',
        color: theme.palette.text.secondary,
      },
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        padding : theme.spacing(2),
        fontSize: 14
      }
    }));

function createData(ResourceId, DeliveryId, Name, StartDate, EndDate) {
    return { ResourceId, DeliveryId, Name, StartDate, EndDate };
};

const rows = [
    createData("conveyor", "g1", "Task 1", "2017-01-01 10:30", "2017-01-01 11:00"),
    { "ResourceId": "machine1", "DeliveryId": "g1", "Name": "Task 2", "StartDate": "2017-01-01 10:40", "EndDate": "2017-01-01 11:00" },
    { "ResourceId": "spareparts", "DeliveryId": "g1", "Name": "Task 3", "StartDate": "2017-01-01 10:40", "EndDate": "2017-01-01 11:10" },
    { "ResourceId": "packaging1", "DeliveryId": "g1", "Name": "Task 4", "StartDate": "2017-01-01 10:20", "EndDate": "2017-01-01 10:50" },
    { "ResourceId": "packaging2", "DeliveryId": "g1", "Name": "Task 5", "StartDate": "2017-01-01 11:10", "EndDate": "2017-01-01 11:30" },
    { "ResourceId": "truckloading", "DeliveryId": "g1", "Name": "Task 6", "StartDate": "2017-01-01 11:30", "EndDate": "2017-01-01 12:20" },
]

export default function ReactTable() {
    const classes = useStyles();

    return (
        <Box>
            
            <Grid container spacing={3}>
            <Grid item xs={12}>
          <div className={classes.paper}><Clock/></div>
        </Grid>
            <Grid item xs={12} sm={6}>
            <LineChart />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TodoList/>
            
            </Grid>
            </Grid>
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.head}>Name</TableCell>
                        <TableCell align="right" className={classes.head}>Work</TableCell>
                        <TableCell align="right" className={classes.head}>Delivery</TableCell>
                        <TableCell align="right" className={classes.head}>Start Date</TableCell>
                        <TableCell align="right" className={classes.head}>Start Time</TableCell>
                        <TableCell align="right" className={classes.head}>End Date</TableCell>
                        <TableCell align="right" className={classes.head}>End Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.Name}>
                            <TableCell component="th" scope="row">
                                {row.Name}
                            </TableCell>
                            <TableCell align="right">{row.ResourceId}</TableCell>
                            <TableCell align="right">{row.DeliveryId}</TableCell>
                            <TableCell align="right">{new Date(row.StartDate).toLocaleDateString('en-US')}</TableCell>
                            <TableCell align="right">{new Date(row.StartDate).toLocaleTimeString('en-US')}</TableCell>
                            <TableCell align="right">{new Date(row.EndDate).toLocaleDateString('en-US')}</TableCell>
                            <TableCell align="right">{new Date(row.EndDate).toLocaleTimeString('en-US')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            
        </TableContainer>
        
        </Box>
    );
}
