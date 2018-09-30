import React, { Component } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";
import { addTask } from '../../../ducks/tasks';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
	marginBottom: 16,
  },  
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    }
    this.handleChange = this.handleChange.bind( this );
    this.add = this.add.bind( this );
  }

  handleChange( event ) {
    this.setState({ title: event.target.value });
  }

  add() {
    const { title } = this.state;
    const { addTask } = this.props;
    if ( title.length !== 0 ) {
      addTask( title );
      this.setState({ title: '' });
    }
  }  
  
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="filled-dense"
          label="What needs to be done?"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
		  fullWidth
		  onChange={this.handleChange}
        />
		<Button variant="contained" color="primary" onClick={ this.add } className={classNames(classes.button, classes.dense)} >Add new To-do</Button>
      </form>
    );
  }
}

AddTask.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect( state => state, { addTask } )( withStyles(styles)(AddTask) );