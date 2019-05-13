import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/divider'
import List from '@material-ui/core/list'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {ListItemIcon} from "@material-ui/core";
import {Assignment, Home, InsertDriveFile, Person, Place} from '@material-ui/icons'

class Menu extends React.Component {
    render() {
        const list = (
            <List component='nav'>
                <ListItem button key='accueil'>
                    <ListItemIcon><Home/></ListItemIcon>
                    <ListItemText primaryTypographyProps={{FontWeight: 'FontWeightMedium'}} primary='Accueil'/>
                </ListItem>
                <ListItem button component='nav'>
                    <ListItemIcon><Assignment/></ListItemIcon>
                    <ListItemText primary='Inscriptions'/>
                </ListItem>
                <ListItem button component='nav'>
                    <ListItemIcon><Place/></ListItemIcon>
                    <ListItemText primary='Parcours' fontWeight='fontWeightMedium'/>
                </ListItem>
                <ListItem button component='nav'>
                    <ListItemIcon><InsertDriveFile/></ListItemIcon>
                    <ListItemText primary='Résultats'/>
                </ListItem>
                <ListItem button component='nav'>
                    <ListItemIcon><Person/></ListItemIcon>
                    <ListItemText primary='À propos'/>
                </ListItem>
            </List>);

        return (
            <React.Fragment>
                <SwipeableDrawer onOpen={(e) => this.handleDrawer(true)} anchor='left'
                                 onClose={(e) => this.handleDrawer(false)} open={this.props.open}>

                    <div style={{width: 250}}>
                        <IconButton onClick={(e) => this.handleDrawer(false)}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    {list}
                </SwipeableDrawer>

            </React.Fragment>

        )
    }

    handleDrawer(open) {
        this.props.drawerOpening(open)
    }
}

export default Menu