import React from 'react';
import 'typeface-roboto';
import Header from './header'
import Footer from './footer'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Parcours from "../pages/Parcours";
import Subscriptions from "../pages/Subscriptions";
import Resultats from "../pages/Resultats";
import Apropos from "../pages/APropos";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import '../CSS/App.css'
import Hidden from "@material-ui/core/Hidden";
import DesktopHeader from './DesktopHeader'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#6327cd',
        },
        secondary: {
            main: '#cd8976',
        },
    },
});


class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Router>
                    <Hidden lgUp>
                        <Header/>
                    </Hidden>
                    <Hidden mdDown>
                        <DesktopHeader/>
                    </Hidden>

                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/parcours' component={Parcours}/>
                        <Route exact path='/inscriptions' component={Subscriptions}/>
                        <Route exact path='/resultats' component={Resultats}/>
                        <Route exact path='/a-propos' component={Apropos}/>
                    </Switch>
                <Footer/>
                </Router>
            </MuiThemeProvider>
        )
    }
}

export default App;
