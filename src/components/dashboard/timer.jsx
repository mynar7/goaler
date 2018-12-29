import React from 'react';
import './timer.css';
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.classes = "";
        const future = this.props.date;
        const now = Date.now();
        const timeRemaining = future - now;
        let counting;
        timeRemaining > 0 ? counting = true : counting = false;
        this.state = {
            time: {},
            counting: counting
        }
    }

    componentDidMount() {
        if (this.props.date && this.state.counting) {
            this.updateTime();
        }
    }

    updateTime = () => {
        // var future = Date.parse("December 31, 2019");
        const future = this.props.date;
        const now = Date.now();
        const timeRemaining = future - now;
        if (timeRemaining < 1000) {
            this.classes = "timer-strike_animate";
            return this.setState({
                time: {
                    days: "00",
                    hours: "00",
                    minutes: "00",
                    seconds: "00"
                }
            });
        }
        let seconds = Math.floor(timeRemaining / 1000) % 60;
        let minutes = Math.floor((timeRemaining / 1000) / 60) % 60;
        let hours = Math.floor((timeRemaining / 1000) / 3600) % 24;
        let days = Math.floor(((timeRemaining / 1000) / 3600) / 24);
        days = days < 10 ? '0' + days : days.toString();
        hours = hours < 10 ? '0' + hours : hours.toString();
        minutes = minutes < 10 ? '0' + minutes : minutes.toString();
        seconds = seconds < 10 ? '0' + seconds : seconds.toString();
        this.setState({
            time: {
                days, hours, minutes, seconds
            }
        });
        requestAnimationFrame(this.updateTime);
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.counting
                    ? <span className={this.classes}>
                        {`${this.state.time.days}:` +
                            `${this.state.time.hours}:` +
                            `${this.state.time.minutes}:` +
                            `${this.state.time.seconds}`}
                    </span>
                    : <span className="timer-strike">00:00:00:00</span>
                }
            </React.Fragment>
        )
    }
}

export default Timer;