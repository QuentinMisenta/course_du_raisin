import React from 'react'
import Home from './Home'
import Inscriptions from './Subscriptions'
import Parcours from './Parcours'
import Resultats from './Resultats'
import APropos from './APropos'

class Main extends React.Component {
    render() {
        const {page} = this.props;
        let Page;
        switch (page) {
            case 'Home':
                Page = <Home/>;
                break;
            case 'Subscriptions':
                Page = <Inscriptions/>;
                break;
            case 'Parcours':
                Page = <Parcours/>;
                break;
            case 'Résultats':
                Page = <Resultats/>;
                break;
            case 'À propos':
                Page = <APropos/>;
                break;
            default:
        }

        return (
            <div>
                {Page}

            </div>
        )
    }
}

export default Main