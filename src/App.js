import React from 'react';
import 'typeface-roboto';
import Header from './header'
import Footer from './footer'
import Main from './main'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
                <Header/>
                <Main/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default App;
