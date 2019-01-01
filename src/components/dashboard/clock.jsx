import React, {Component} from 'react'
import Chip from '@material-ui/core/Chip';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.d = new Date();
        this.state = {
            time: this.d.toLocaleString()
        }
    }

    componentDidMount() {
        this.update();
    }

    componentWillUnmount() {
        this.unmounting = true;
    }

    update = () => {
        if(this.unmounting) return;
        const d = new Date();
        const newTime = d.toLocaleString();
        if(newTime !== this.state.time) {
            this.setState({
                time: newTime
            })
        }
        requestAnimationFrame(this.update);
    }

    render() {
        return (
            <Chip color="secondary" label={this.state.time} />
        )
    }
}

export default Clock;