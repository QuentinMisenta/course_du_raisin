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
import green from "@material-ui/core/colors/green";
import purple from "@material-ui/core/colors/purple";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import '../CSS/App.css'

const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: purple,
    },
});


class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Router>
                    <Header/>
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
