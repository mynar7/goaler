import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './goalform.css';

class Goalform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            date: "1970-01-01",
            time: "",
            dateTime: ""
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }

    convertDate = (d = new Date(this.state.date)) => d.getTime()
    convertDateTime = (d = new Date(this.state.date + "T" + this.state.time + ":00Z")) => d.getTime()
    convertDateTime2 = (d = new Date(this.state.dateTime + ":00Z")) => d.getTime()


    render() {
        return (
            <Card className="goalform">
                <TextField
                    label="Name"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Due Date"
                    type="date"
                    value={this.state.date}
                    onChange={this.handleChange('date')}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                      }}
                    InputProps={{
                        
                    }}
                />
                <TextField
                    label="Due Time"
                    type="time"
                    value={this.state.time}
                    onChange={this.handleChange('time')}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                      }}
                />
                <TextField
                    label="Due Date and Time"
                    type="datetime-local"
                    value={this.state.dateTime}
                    onChange={this.handleChange('dateTime')}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                      }}
                />
                <h2>{this.state.name}</h2>
                <h2>{this.state.date && this.convertDate()}</h2>
                <h2>{this.state.time && this.state.date && this.convertDateTime()}</h2>
                <h2>{this.state.date + "T" + this.state.time + ":00Z"}</h2>
                <h2>{this.state.dateTime}</h2>
                <h2>{this.state.dateTime && this.convertDateTime2()}</h2>
                <Button onClick={this.props.closeModal}>Close</Button>
            </Card>
        )
    }
}

export default Goalform;