import React, {useState} from 'react'

import EditForm from './EditForm.js'

const Worlds = (props) => {

  return (
    <div className="display">
    <h1>Worlds</h1>
      <h1>Concoction</h1>
      {props.worlds.map((world) => {
        return (
          <>
          <h3>{world.name}</h3>
          <h4>Creation: {world.creation}</h4>
          <h4>Notes: {world.notes}</h4>
          <details>
            <summary>Edit World</summary>
            <EditForm world={world} editWorld={props.editWorld} />
          </details>
          <button onClick={() => props.deleteWorld(world.id)}>X</button>
          </>
        )
      })}
    </div>
  )
}

export default Worlds
