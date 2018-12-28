import React from 'react';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Goalform from './goalform';
import CenteredModal from './centeredModal';
import { withFirebase } from '../Firebase';
import './dashboard.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goalModalOpen: true,
            goals: []
        };
    }
    componentDidMount = () => {
        const that = this;
        this.props.firebase.db.collection(`users/${this.props.user.uid}/goals`)
        .onSnapshot((snapshot) => {
            const goals = [];
            snapshot.forEach(doc => goals.push({id: doc.id, ...doc.data()}))
            // console.log(goals);
            this.setState({goals});
        })
    }
    toggleModal = () => {
        this.setState({
            goalModalOpen: !this.state.goalModalOpen
        })
    }
    render() {
        return (
            <div className="dash">
                {
                    this.state.goals.map(goal => (
                        <Typography key={goal.id} variant={"h6"} align="center">
                            {`${goal.goal}, ${goal.date}, ${goal.id}`}
                        </Typography>
                    ))
                }
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

export default withFirebase(Dashboard);