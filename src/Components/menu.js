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

class Menu extends React.Component {

    handleDrawer(open) {
        this.props.drawerOpening(open)
    }

    handleClick(page) {
        this.props.printPage(page)
    }

    render() {
        const list = (
            <List component='nav'>
                <ListItem button key='accueil' onClick={(e) => this.handleClick('Home')}>
                    <ListItemIcon><Home/></ListItemIcon>
                    <ListItemText primaryTypographyProps={{FontWeight: 'FontWeightMedium'}} primary='Accueil'/>
                </ListItem>
                <ListItem button component='nav' onClick={(e) => this.handleClick('Subscriptions')}>
                    <ListItemIcon><Assignment/></ListItemIcon>
                    <ListItemText primary='Inscriptions'/>
                </ListItem>
                <ListItem button component='nav' onClick={(e) => this.handleClick('Parcours')}>
                    <ListItemIcon><Place/></ListItemIcon>
                    <ListItemText primary='Parcours' fontWeight='fontWeightMedium'/>
                </ListItem>
                <ListItem button component='nav' onClick={(e) => this.handleClick('Résultats')}>
                    <ListItemIcon><InsertDriveFile/></ListItemIcon>
                    <ListItemText primary='Résultats'/>
                </ListItem>
                <ListItem button component='nav' onClick={(e) => this.handleClick('À propos')}>
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


}

export default Menu