import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Beenhere';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <AppBar position="static">
                    <Toolbar className="row">
                        <Link to="/">
                            <Button color="inherit" aria-label="Menu">
                                <MenuIcon />
                                <Typography variant="h6" color="inherit">
                                    Goaler
                                </Typography>
                            </Button>
                        </Link>
                        <div>
                        {
                            this.props.user ?
                            <Button color="inherit" onClick={this.props.logout}>Sign Out</Button> :
                            <Button color="inherit" onClick={this.props.login}>Sign In</Button>
                        }
                        </div>
                    </Toolbar>
                </AppBar>
            </header>
        )
    }
}

export default Header;