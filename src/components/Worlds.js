import React, {useState} from 'react'

import EditForm from './EditForm.js'

const Worlds = (props) => {

  return (
    <div className="display">
          <>
          <h3>{props.world.name}</h3>
          <h4>Creation: {props.world.creation}</h4>
          <h4>Notes: {props.world.notes}</h4>
          <details>
            <summary>Edit World</summary>
            <EditForm world={props.world} editWorld={props.editWorld} />
          </details>
          <button onClick={() => props.deleteWorld(props.world.id)}>X</button>
          </>
    </div>
  )
}

export default Worlds
