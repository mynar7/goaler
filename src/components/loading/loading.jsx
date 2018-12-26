import React, { Component } from 'react';
import './loading.css';
import CircularProgress from '@material-ui/core/CircularProgress';

class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <CircularProgress color="secondary" size={200}/>
            </div>
        )
    }
}

export default Loading;