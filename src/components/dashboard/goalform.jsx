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
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withTheme } from '@material-ui/core/styles'
import { withFirebase } from '../Firebase';
import './goalform.css';

class GoalForm extends Component {
    constructor(props) {
        super(props);
        this.now = new Date();
        const addSixtySeconds = new Date(this.now.getTime() + 60000)
        this.today = `${this.now.getFullYear()}-${this.now.getMonth() + 1}-${this.now.getDate()}`
        this.maxDate = `${this.now.getFullYear() + 10}-${this.now.getMonth() + 1}-${this.now.getDate()}`
        const hour = addSixtySeconds.getHours() < 10 ? '0' + addSixtySeconds.getHours() : addSixtySeconds.getHours();
        const minute = addSixtySeconds.getMinutes() < 10 ? '0' + addSixtySeconds.getMinutes() : addSixtySeconds.getMinutes();
        this.currentTime = `${hour}:${minute}`;
        let initialState;
        if (this.props.initialState){
            const milliseconds = this.props.initialState.date;
            let date = this.today;
            let time = this.currentTime;
            if (milliseconds > this.now.getTime()) {
                const d = new Date(milliseconds);
                date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
                time = `${d.getHours()}:${d.getMinutes()}`
            }
            initialState = {
                name: this.props.initialState.goal,
                nameErr: false,
                nameHelper: "",
                date,
                dateErr: false,
                dateHelper: "",
                time,
                timeErr: false,
                timeHelper: "",
            }
        } else {
            initialState = {
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
        this.state = initialState;
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
        const dateArgs = `${this.state.date} ${this.state.time}`.split(/[- :]/).map(str => Number(str));
        dateArgs[1]--; //month is 0 indexed
        const datetime = new Date(...dateArgs);
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
        const dateArgs = `${this.state.date} ${this.state.time}`.split(/[- :]/).map(str => Number(str));
        dateArgs[1]--; //month is 0 indexed
        const d = new Date(...dateArgs);
        if (this.props.initialState) {
            this.props.firebase.goalsRef.doc(this.props.initialState.id)
            .update({
                goal: this.state.name,
                date: d.getTime(),
                completed: false
            })
            .then(() => {
                this.props.toggleModal();
                this.props.initialState.closeMenu();
            })
        } else {
            this.props.firebase.goalsRef.add({
                goal: this.state.name,
                date: d.getTime(),
                completed: false
            })
            .then(() => {
                this.props.toggleModal();
            })
        }

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
                        <IconButton onClick={this.props.toggleModal} tabIndex={-1}>
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
                    <Button onClick={this.props.toggleModal}>Close</Button>
                </CardActions>
            </Card>
        )
    }
}

export default withTheme()(withFirebase(GoalForm));