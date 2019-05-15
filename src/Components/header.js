import React from 'react';
import AppBar from '@material-ui/core/AppBar/index';
import Toolbar from '@material-ui/core/Toolbar/index';
import Typography from '@material-ui/core/Typography/index';
import IconButton from '@material-ui/core/IconButton/index';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './menu'
import CssBaseline from '@material-ui/core/CssBaseline/index';

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
    printPage = (page) => {
        this.props.printPage(page)
    };

    render() {
        const open = this.state.open;
        return (
            <React.Fragment>
                <CssBaseline/>
                <AppBar
                    position="sticky"
                    style={{background: '#2E7D32'}}
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
                <Menu open={open} printPage={this.printPage} drawerOpening={this.handleDrawer}/>

            </React.Fragment>
        )
    }
}

export default Header

