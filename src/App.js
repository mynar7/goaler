import React, { Component } from 'react';
import { withFirebase } from './components/Firebase';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './components/login/login';
import Loading from './components/loading/loading';
import Header from './components/header/header';
import Dashboard from './components/dashboard/';
import './App.css';

const PrivateRoute = ({component: Component, user, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => user
        ? <Component {...props} {...rest} user={user} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
        // : <Redirect to='/login' />}
    />
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      from: null
    }
  }

  componentDidMount = () => {
    this.props.firebase.auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user, loading: false })
        this.props.firebase.initializeUser(user.uid);
      } else {
        this.setState({ user: null, loading: false });
      }
    })
  }

  // writeTestData = () => {
  //   this.props.firebase.goalsRef.add({name: "banana Johnson"})
  // }

  signIn = async () => {
    const result = await this.props.firebase.signIn();
    this.setState({ user: result.user });
  }

  signOut = () => {
    this.props.firebase.logout();
  }

  render() {
    return (
      <Router basename="/Goaler">
        <Loading status={this.state.loading}>
          <div className="App">
          <Header user={this.state.user} login={this.signIn} logout={this.signOut}/>
          <Route path="/login" render={(props)=> <Login {...props} user={this.state.user} />} />
          <PrivateRoute user={this.state.user} exact path='/' component={Dashboard}/>
          {/* <Link to="/private">Banana</Link>
          <Link to="/private/2">Banana2</Link>
          <PrivateRoute user={this.state.user} exact path='/private' component={Banana} text="React Router"/>
          <PrivateRoute user={this.state.user} path='/private/:num' component={Banana} text="React Router" /> */}
          </div>
        </Loading>
      </Router>
    );
  }
}

export default withFirebase(App);
