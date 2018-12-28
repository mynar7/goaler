import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Icon from '@material-ui/icons/AddAlarm'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withTheme } from '@material-ui/core/styles'
import { withFirebase } from '../Firebase';
import './goalform.css';

class Goalform extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.now = new Date();
        this.today = `${this.now.getFullYear()}-${this.now.getMonth() + 1}-${this.now.getDate()}`
        this.maxDate = `${this.now.getFullYear() + 10}-${this.now.getMonth() + 1}-${this.now.getDate()}`
        this.currentTime = `${this.now.getHours() < 10 ? '0' + this.now.getHours() : this.now.getHours()}:${(this.now.getMinutes() + 1) < 10 ? '0' + (this.now.getMinutes() + 1) : this.now.getMinutes()  + 1}`
        this.state = {
            name: "",
            nameErr: false,
            nameHelper: "",
            date: this.today,
            dateErr: false,
            dateHelper: "",
            time: this.currentTime,
            timeErr: false,
            timeHelper: "",
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.name !== this.state.name ||
            prevState.date !== this.state.date ||
            prevState.time !== this.state.time) {
                this.validate();
            }
    }

    validate = () => {
        //check if name
        let nameErr = false;
        let nameHelper = "";
        let dateErr = false;
        let dateHelper = "";
        let timeErr = false;
        let timeHelper = "";
        if (!this.state.name) {
            nameErr = true;
            nameHelper = "Please set a goal";
        }
        //check if date
        if (!this.state.date) {
            dateErr = true;
            dateHelper = "Please set a date";
        }
        //check if time
        if (!this.state.time) {
            timeErr = true;
            timeHelper = "Please set a time";
        }
        //get current date and time when form submits
        const now = new Date();
        const datetime = new Date(Date.parse(this.state.date + " " + this.state.time));
        // console.log(this.state.time)
        // console.log({now, datetime});
        // console.log({now: now.getTime(), form: datetime.getTime(), diff: datetime.getTime() - now.getTime()});
        // check if time/date is > now
        if (datetime.getTime() < now.getTime()) {
            if (datetime.toDateString() !== now.toDateString()) {
                dateErr = true; 
                dateHelper = "Date must be in future";
            } else  {
                timeErr = true;
                timeHelper = "Time must be in future";
            }
        } 
        this.setState({
            nameErr,
            nameHelper,
            dateErr,
            dateHelper,
            timeErr,
            timeHelper,
        })
        if (timeErr || dateErr || nameErr) {
            return true;
        } else {
            return false;
        }
    }

    handleSubmit = () => {
        if (this.validate()) return;
        const d = new Date(Date.parse(this.state.date + " " + this.state.time))
        this.props.firebase.goalsRef.add({
            goal: this.state.name,
            date: d.getTime()
        })
        .then(() => {
            this.props.closeModal();
        })

    }

    render() {
        return (
            <Card className="goalform">
                <CardHeader
                    avatar={
                        <Avatar 
                        style={{
                            backgroundColor: this.props.theme.palette.secondary.main,
                            color: this.props.theme.palette.text.primary
                        }}>
                            <Icon />
                        </Avatar>
                    }
                    title="Add a goal"
                    // subheader="With Chocolates"
                    action={
                        <IconButton onClick={this.props.closeModal} tabIndex={-1}>
                            <CloseIcon/>
                        </IconButton>
                    }
                />
                <CardContent>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <TextField
                                label="Goal"
                                placeholder="Make it a good one!"
                                error={this.state.nameErr}
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                fullWidth
                                margin="normal"
                                helperText={this.state.nameHelper}
                                />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Due Date"
                                error={this.state.dateErr}
                                type="date"
                                value={this.state.date}
                                onChange={this.handleChange('date')}
                                margin="normal"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                helperText={this.state.dateHelper}
                                InputProps={{
                                    inputProps: {
                                        min: this.today,
                                        max: this.maxDate
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Due Time"
                                error={this.state.timeErr}
                                type="time"
                                value={this.state.time}
                                onChange={this.handleChange('time')}
                                margin="normal"
                                fullWidth
                                helperText={this.state.timeHelper}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions className="row right">
                    <Button onClick={this.handleSubmit}>Add Goal</Button>
                    <Button onClick={this.props.closeModal}>Close</Button>
                </CardActions>
            </Card>
        )
    }
}

export default withTheme()(withFirebase(Goalform));