import React from 'react';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Goalform from './goalform';
import CenteredModal from './centeredModal';
import './dashboard.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goalModalOpen: false
        };
    }
    toggleModal = () => {
        this.setState({
            goalModalOpen: !this.state.goalModalOpen
        })
    }
    render() {
        return (
            <div className="dash">
                <Typography variant={"h6"} align="center">
                    Dashboard
                </Typography>
                <CenteredModal open={this.state.goalModalOpen} 
                    onClose={this.toggleModal}
                >
                    <Goalform closeModal={this.toggleModal}/>
                </CenteredModal>
                <Fab color="secondary" 
                    variant="extended" 
                    aria-label="Add" 
                    id="dash-addBtn"
                    onClick={this.toggleModal}
                >
                    <AddIcon />
                </Fab>
            </div>
        );
    }
}

export default Dashboard;