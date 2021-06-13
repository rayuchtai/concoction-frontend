import React, {useState} from 'react'

import EditForm from './EditForm.js'

const Worlds = (props) => {

  return (
    <div className="world">
          <>
          <h3>{props.world.name}</h3>
          <h4>Creation: {props.world.creation}</h4>
          <h4>Notes: {props.world.notes}</h4>
          <details>
            <summary>Edit World</summary>
            <EditForm world={props.world} editWorld={props.editWorld} />
          </details>
          <button className="btn btn-danger" id="delete-btn" onClick={() => props.deleteWorld(props.world.id)}>Delete World</button>
          </>
    </div>
  )
}

export default Worlds
