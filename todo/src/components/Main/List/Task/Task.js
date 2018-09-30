import React from "react";
import './Task.css';

import { connect } from "react-redux";
import { completeTask, deleteTask } from '../../../../ducks/tasks';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Task( { id, title, completed, completeTask, deleteTask } ) {
  return (
      <div className="Task__container row">
        <Link className={"Task__link columns small-6 medium-6 " + (completed ? 'complete' : '') } to={ `details/${id}` }>
          <span> { title } </span>
        </Link>
        <div className="columns small-3 medium-3">
            <Button variant="contained" id="Task__complete" onClick={ () => completeTask( id ) }>TOGGLE COMPLETE</Button>
        </div>
        <div className="columns small-3 medium-3">
             <Button variant="contained" color="secondary" id="Task__delete" onClick={ () => deleteTask( id ) }> DELETE </Button>
        </div>
    
      </div>
  )
}

export default connect( state => state, { completeTask, deleteTask } )( Task );



