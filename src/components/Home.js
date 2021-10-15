import React from 'react'
import './HomePage.css';
import { Grid, Paper } from '@mui/material';


export default function Home() {
    return (
        <>
            <br/><br/><br/>
            <div className= "homePage">
            <h1>
                Welcome,
            </h1>
                <p>to NeverLate</p>
            </div>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                                <Paper sx={{ height: 500, width: 600 }} >
                                    some description about the app
                                </Paper>
                        </Grid>
                        <Grid item>
                                <Paper sx={{ height: 500, width: 600 }} >
                                    May be some images for people to understand
                                </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
