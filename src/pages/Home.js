import React from 'react'
import {Grid, Hidden, Paper, Typography} from "@material-ui/core/index";
import {withStyles} from '@material-ui/core/styles/index'

const styles = theme => ({
    sideContent: {
        padding: theme.spacing(2),
        marginTop: 20,
        marginRight: 20,

    },
    mainContent: {
        [theme.breakpoints.down('sm')]: {
            marginLeft: 15,
            marginRight: 15,
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: 20,
        },
        padding: theme.spacing(2),
        marginTop: 20,

    }
});

class Home extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8} md={9}>
                        <Paper className={classes.mainContent}>
                            <Typography variant='h1'>
                                Home
                            </Typography>
                            <Typography>
                                Voici la page d'accueil du site web de la course du raisin.
                                Planks are the swabbies of the lively pestilence.
                                Shields up, ancient nuclear flux!
                                Cur glos favere?
                                Nunquam talem palus.
                                Freedom captures when you fear with politics.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Hidden xsDown>
                        <Grid item sm={4} md={3}>
                            <Paper className={classes.sideContent}>
                                <Typography variant='h3' style={{paddingLeft: 20}}>
                                    Side
                                </Typography>
                                <Typography>
                                    Cum sensorem mori, omnes nixes amor primus, audax idoleumes.
                                    The sorrow of your samadhis will preach cosmically when you capture that living is
                                    the cow.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Hidden>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Home)