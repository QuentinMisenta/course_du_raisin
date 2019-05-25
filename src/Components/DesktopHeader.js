import React, {Component} from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    button: {
        marginLeft: 5,
        paddingLeft: 30,
    },
    grid: {
        marginRight: 20,
    },
});

class DesktopHeader extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <AppBar
                    position="sticky"
                >
                    <Toolbar>
                        <Grid container styles={classes.grid} spacing={10} alignItems='center' justify='center'>
                            <Grid item>
                                <Typography styles={classes.title} variant="h6" color='inherit' noWrap>
                                    La Course Du Raisin
                                </Typography>
                            </Grid>
                            <Grid item styles={classes.button}>
                                <Button component={Link} to='/' variant='contained' color='secondary'>
                                    Accueil
                                </Button>
                            </Grid>
                            <Grid item styles={classes.button}>
                                <Button component={Link} to='/inscriptions' variant='contained' color='secondary'>
                                    Inscriptions
                                </Button>
                            </Grid>
                            <Grid item styles={classes.button}>
                                <Button component={Link} to='/parcours' variant='contained' color='secondary'>
                                    Parcours
                                </Button>
                            </Grid>
                            <Grid item styles={classes.button}>
                                <Button component={Link} to='/resultats' variant='contained' color='secondary'>
                                    Résultats
                                </Button>
                            </Grid>
                            <Grid item styles={classes.button}>
                                <Button component={Link} to='/a-propos' variant='contained' color='secondary'>
                                    A propos
                                </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(DesktopHeader);