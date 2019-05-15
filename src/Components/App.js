import React from 'react';
import 'typeface-roboto';
import Header from './header'
import Footer from './footer'
import Main from './main'
import {Grid} from "@material-ui/core";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page: 'Home'}
    }


    printPage = (page) => {
        this.setState({page: page})
    };
    render() {
        return (
            <React.Fragment>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Header printPage={this.printPage}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Main style={{}} page={this.state.page}/>
                    </Grid>
                    <Grid item xs={12}>
                <Footer/>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

export default App;
