 import React from "react";
 import { makeStyles } from '@material-ui/core/styles';
 import Button from '@material-ui/core/Button';
 import TextField from '@material-ui/core/TextField';
 //import { Paper } from "@material-ui/core";
 import { Grid } from "@material-ui/core";
 import { Container } from "@material-ui/core";
//import { render } from "@testing-library/react";
//const tasks = ['Task 1', 'Task2'];
const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

export default function TodoList() {
    const classes = useStyles();
    return(
        <Container component="main" maxWidth="xs">
            <div className="todoListContainer">
                <form className={classes.form} noValidate>
                    <TextField variant="outlined" fullWidth id="email" label="Enter Task" name="email" margin='normal' autoFocus />
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Button type="add" fullWidth variant="contained" className={classes.submit} onClick={activateTask} >
                                Add
                            </Button>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button type="delete" fullWidth variant="contained" className={classes.submit} >
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )

    
        // tasks.map((data) => {
        //     <Grid container spacing={1}>

        //         <Grid item xs={12} sm={6}>
        //             <Paper className={classes.Paper}>{data}</Paper>
        //         </Grid>
        //     </Grid>
        // })
};
function activateTask() {
    debugger;

}