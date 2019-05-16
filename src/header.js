import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './menu'
import CssBaseline from '@material-ui/core/CssBaseline';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }


    }

    handleDrawer = (bool) => {
        if (!bool === this.state.open) {
            this.setState({open: bool})
        }
    };

    render() {
        const open = this.state.open;
        return (
            <React.Fragment>
                <CssBaseline/>
                <AppBar
                    position="fixed"
                    style={{background: '#228B22'}}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            aria-label="Open drawer"
                            onClick={(e) => this.handleDrawer(true)}
                            color='inherit'
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color='inherit' noWrap>
                            Menu
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Menu open={open} drawerOpening={this.handleDrawer}/>

            </React.Fragment>
        )
    }
}

export default Header

