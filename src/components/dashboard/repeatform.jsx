import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Chip from '@material-ui/core/Chip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AlarmIcon from '@material-ui/icons/Alarm'
import CloseIcon from '@material-ui/icons/Close';
import ReplayIcon from '@material-ui/icons/Replay';
import { withTheme } from '@material-ui/core/styles';
import { withFirebase } from '../Firebase';
import TimeDue from './timedue';
import Timer from './timer';
import './repeatform.css'

class RepeatForm extends Component {
    constructor(props) {
        super(props)
        const d = new Date();
        this.state = {
            now: d.getTime(),
            value: (1000 * 60 * 60 * 24).toString(),
            chip: true
        }
    }

    handleChange = event => {
        const d = new Date();
        const value = event.target.value;
        this.setState({ 
            value,
            now: d.getTime()
        });
    };

    getMonth = months => {
        const d = new Date();
        const plusMonth = new Date();
        plusMonth.setMonth(d.getMonth() + months);
        let value = plusMonth.getTime() - d.getTime();
        value = value.toString();
        return value;
    }

    handleSubmit = () => {
        const goal = this.props.initialState;
        const collectionRef = goal.subgoal
            ? this.props.firebase.goalsRef.doc(goal.parentGoalId).collection('subgoals')
            : this.props.firebase.goalsRef
        collectionRef.add({
            goal: goal.goal,
            date: (+this.state.value) + this.state.now,
            multigoal: goal.multigoal,
            subgoal: goal.subgoal,
            completed: false,
            createdAt: this.state.now,
            updatedAt: this.state.now
        })
        .then(() => {
            this.props.toggleRepeatModal();
        })
    }

    toggleChip = () => {
        this.setState({chip: !this.state.chip})
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
                            <ReplayIcon />
                        </Avatar>
                    }
                    title="Repeat Goal:"
                    // subheader="With Chocolates"
                    action={
                        <IconButton onClick={this.props.toggleRepeatModal} tabIndex={-1}>
                            <CloseIcon />
                        </IconButton>
                    }
                />
                <CardContent>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <RadioGroup className="repeatform-buttonGrp"
                                row={true}
                                aria-label="Repeat Time"
                                name="repeatTime"
                                value={this.state.value}
                                onChange={this.handleChange}>
                                <FormControlLabel value={(1000 * 60 * 60 * 12).toString()} control={<Radio />} label="12 Hours" />
                                <FormControlLabel value={(1000 * 60 * 60 * 24).toString()} control={<Radio />} label="24 Hours" />
                                <FormControlLabel value={(1000 * 60 * 60 * 36).toString()} control={<Radio />} label="36 Hours" />
                                <FormControlLabel value={(1000 * 60 * 60 * 48).toString()} control={<Radio />} label="48 Hours" />
                                <FormControlLabel value={(1000 * 60 * 60 * 24 * 7).toString()} control={<Radio />} label="One Week" />
                                <FormControlLabel value={(1000 * 60 * 60 * 24 * 14).toString()} control={<Radio />} label="Two Weeks" />
                                <FormControlLabel value={this.getMonth(1)} control={<Radio />} label="One Month" />
                                <FormControlLabel value={this.getMonth(12)} control={<Radio />} label="One Year" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12} className="repeatform-chipWrapper">
                            <Chip tabIndex={-1}
                                color={this.state.chip ? "primary" : "secondary"}
                                icon={<AlarmIcon/>}
                                onClick={this.toggleChip}
                                label={
                                    this.state.chip
                                    ? <TimeDue date={this.state.now + (+this.state.value)}/>
                                    : <Timer date={this.state.now + (+this.state.value)}/> 
                                    }
                                />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions className="row right">
                    <Button onClick={this.handleSubmit}>
                        Submit
                    </Button>
                    <Button onClick={this.props.toggleRepeatModal}>Cancel</Button>
                </CardActions>
            </Card>
        )
    }
}

export default withTheme()(withFirebase(RepeatForm));