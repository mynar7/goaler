import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import GoalForm from './goalform';
import GoalItem from './goalitem';
import CenteredModal from './centeredModal';
import { withFirebase } from '../Firebase';
import './dashboard.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goalModalOpen: false,
            modalState: undefined,
            goals: []
        };
    }
    componentDidMount = () => {
        this.props.firebase.db.collection(`users/${this.props.user.uid}/goals`)
        .onSnapshot((snapshot) => {
            const goals = [];
            snapshot.forEach(doc => goals.push({id: doc.id, ...doc.data()}))
            this.setState({goals});
        })
    }
    toggleModal = modalState => {
        this.setState({
            goalModalOpen: !this.state.goalModalOpen,
            modalState: modalState && modalState.id ? modalState : null
        })
    }
    render() {
        return (
            <div className="dash">
                <List>
                    {
                        this.state.goals
                        .sort((goalA, goalB) => goalA.date - goalB.date)
                        .map((goal, index) => (
                            <GoalItem key={index} goal={goal} toggleModal={this.toggleModal}/>
                        ))
                    }
                </List>
                <CenteredModal open={this.state.goalModalOpen} 
                    onClose={this.toggleModal}
                >
                    <GoalForm toggleModal={this.toggleModal} initialState={this.state.modalState}/>
                </CenteredModal>
                <br/>
                <br/>
                <br/>
                <br/>
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