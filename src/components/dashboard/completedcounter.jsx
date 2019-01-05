import React, {Component} from 'react'
import Chip from '@material-ui/core/Chip';
import { withFirebase } from '../Firebase';
class CompletedCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {completeCount: ""}
        // console.log(props)
    }

    componentDidMount() {
        const completedRef = this.props.firebase.db.collection(`users/${this.props.uid}/settings`)
        .doc('completedCount');

        completedRef.onSnapshot(snapshot => {
            if (snapshot.exists) {
                const data = snapshot.data()
                this.setState({ completeCount: data.count })
            } else {
                completedRef.set({ count: 0 })
            }
        })
    }

    render() {
        return (
            <Chip color="primary" label={`Completed Goals: ${this.state.completeCount}`} />
        )
    }
}

export default withFirebase(CompletedCounter);