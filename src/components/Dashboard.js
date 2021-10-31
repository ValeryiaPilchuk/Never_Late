import React, { useEffect, useState } from 'react'
import { Grid, Paper } from '@mui/material';
import ClockLoader from "react-spinners/ClockLoader";
import Calendar from './Calendar';

export default function Dashboard(props) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    },[])

    return (
        <>
            {!props.auth.isAuthenticated && props.history.push("/")}
            <Grid container justifyContent="center" alignItems="center" pr={2} pl={2}>
                { loading ?
                    <ClockLoader
                        size={60}
                        color={"#123abc"}
                        loading={loading}
                    />
                    :
                    <Grid container display="grid" gridAutoFlow="column" spacing={1}>
                        <Grid item>
                            <Paper sx={{textAlign: "center", padding:"5%", minHeight:"45vh", width:"40%", minWidth:"300px"}} >
                                Add Courses
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper sx={2}>
                                <Calendar />
                            </Paper>
                        </Grid>
                        {/* <Grid item>
                            <Paper sx={{textAlign: "center", padding:"5%", minHeight:"45vh", width:"40%", minWidth:"300px"}} >
                                Due Today
                            </Paper>
                        </Grid> */}
                    </Grid>
                        
                }
            </Grid>
        </>
    );
}
