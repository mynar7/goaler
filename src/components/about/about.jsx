import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import './about.css';

class About extends Component {
    render() {
        return (
            <Grid container>
                <Grid item>
                    <Paper className="about">
                        <Typography variant={"h3"}>
                            Made by Lee
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default About;