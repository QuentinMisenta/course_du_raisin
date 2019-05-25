import React from 'react'
import {Typography} from "@material-ui/core/index";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
    title: {
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,

    },
    container: {},
    textField: {},

});

class Inscriptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            birthDate: '',
            category: '',

        }

    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    };
    handleSubmit = (event) => {

    };
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Typography variant='h3' className={classes.title}>
                    Inscriptions
                </Typography>
                <form className={classes.container} onSubmit={this.handleSubmit}>
                    <TextField
                        id="name"
                        name="name"
                        label="Nom"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange}
                        margin='normal'
                    />
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(Inscriptions)