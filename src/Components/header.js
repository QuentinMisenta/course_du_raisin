import React from 'react';
import AppBar from '@material-ui/core/AppBar/index';
import Toolbar from '@material-ui/core/Toolbar/index';
import Typography from '@material-ui/core/Typography/index';
import IconButton from '@material-ui/core/IconButton/index';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './menu'

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
            <div>
                <AppBar
                    position="sticky"
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
            </div>
        )
    }
}

export default Header

