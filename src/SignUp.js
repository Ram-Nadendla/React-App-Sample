import React from "react";
import { Container } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function SignUp() {
  const classes = useStyles;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <form >

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField variant="outlined" fullWidth id="fName" label="First Name" name="fName" margin='normal' autoFocus />
          </Grid>
          <Grid item xs={6}>
            <TextField variant="outlined" fullWidth name="lname" label="Last Name" type="lName" id="lName" margin='normal' autoComplete="current-password" />
          </Grid>

          <Grid item xs={6}>
            <TextField variant="outlined" fullWidth id="phone" label="Phone" name="phone" margin='normal' autoFocus />
          </Grid>
          <Grid item xs={6}>
            <TextField variant="outlined" fullWidth name="email" label="Email" type="email" id="email" margin='normal' autoComplete="current-password" />
          </Grid>

          <Grid item xs={6}>
            <TextField variant="outlined" fullWidth name="password" label="Password" type="password" id="password" margin='normal' autoComplete="current-password" />
          </Grid>
          <Grid item xs={6}>
            <TextField variant="outlined" fullWidth id="confirmPassword" label="Confirm Password" name="password" margin='normal' autoFocus />
          </Grid>

          <Grid item xs={12}>
            <TextField variant="outlined" fullWidth id="companyName" label="Company Name" name="companyName" margin='normal' autoFocus />
          </Grid>

        </Grid>
        <Button type="submit" fullWidth variant="contained" color="secondary" className={classes.paper} > Submit </Button>
      </form>
    </Container>
  )
}