import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer/index';
import IconButton from '@material-ui/core/IconButton/index';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider/index'
import List from '@material-ui/core/List/index'
import ListItem from '@material-ui/core/ListItem/index';
import ListItemText from '@material-ui/core/ListItemText/index';
import {ListItemIcon} from "@material-ui/core/index";
import {Assignment, Home, InsertDriveFile, Person, Place} from '@material-ui/icons/index'
import {Link} from 'react-router-dom';

const style = {
    header: {
        width: 250,
        backgroundColor: '#cd2790',
    }
};

class Menu extends React.Component {

    handleDrawer(open) {
        this.props.drawerOpening(open)
    }

    render() {
        const list = (
            <List component='nav'>
                <ListItem button key='accueil' component={Link} to='/'>
                    <ListItemIcon><Home/></ListItemIcon>
                    <ListItemText primaryTypographyProps={{fontWeight: 'FontWeightMedium'}} primary='Accueil'/>
                </ListItem>
                <ListItem button component={Link} to='/inscriptions'>
                    <ListItemIcon><Assignment/></ListItemIcon>
                    <ListItemText primary='Inscriptions'/>
                </ListItem>
                <ListItem button component={Link} to='/parcours'>
                    <ListItemIcon><Place/></ListItemIcon>
                    <ListItemText primary='Parcours' fontWeight='fontWeightMedium'/>
                </ListItem>
                <ListItem button component={Link} to='resultats'>
                    <ListItemIcon><InsertDriveFile/></ListItemIcon>
                    <ListItemText primary='Résultats'/>
                </ListItem>
                <ListItem button component={Link} to='/a-propos'>
                    <ListItemIcon><Person/></ListItemIcon>
                    <ListItemText primary='À propos'/>
                </ListItem>
            </List>);

        return (
            <div>
                <SwipeableDrawer onOpen={(e) => this.handleDrawer(true)} anchor='left'
                                 onClose={(e) => this.handleDrawer(false)} open={this.props.open}>

                    <div style={style.header}>
                        <IconButton onClick={(e) => this.handleDrawer(false)}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    {list}
                </SwipeableDrawer>

            </div>

        )
    }


}

export default Menu