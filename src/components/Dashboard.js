import React from 'react'
import { Grid, Paper } from '@mui/material';

export default function Dashboard() {
    return (
        <>
            <br/><br/><br/>
           <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                                <Paper sx={{ height: 500, width: 300 }} >
                                    Add Courses
                                </Paper>
                        </Grid>
                        <Grid item>
                                <Paper sx={{ height: 500, width: 600 }} >
                                    Calender
                                </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
