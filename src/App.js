import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import axios from 'axios'

//importing components
import AddForm from './components/AddForm.js'
import EditForm from './components/EditForm.js'

const App = () => {

  const [worlds, setWorlds] = useState([])

//getting the data
  const getAllWorlds = () => {
    axios
      .get('http://localhost:8000/api/worlds')
      .then((response) => {

        //add the data to state
        setWorlds(response.data)
      })
      .catch(error => console.error(`Error: ${error}`))
  }

//creating a new world
  const addWorld = (world) => {
    axios
      .post('http://localhost:8000/api/worlds', world)
      .then((response) => {
        setWorlds([...worlds, world])
      })

  }

//Deleting a world
  const deleteWorld = (id) => {
    axios
      .delete('http://localhost:8000/api/worlds/' + id)
      .then((response) => {
        setWorlds(worlds.filter((world) => {
          return world.id !== id
        }))
      })
  }

//editing a world
  const editWorld = (updatedWorld, e) => {
    axios
      .put('http://localhost:8000/api/worlds/' + updatedWorld.id, updatedWorld)
      .then((response) => {
        setWorlds([response.data])
      })
  }

  useEffect(() => {
    getAllWorlds()
  }, [])

  return (
    <div>
      <h1>Concoction</h1>
      <AddForm addWorld={addWorld}/>
      {worlds.map((world) => {
        return (
          <>
          <h3>{world.name}</h3>
          <h4>Creation: {world.creation}</h4>
          <h4>Notes: {world.notes}</h4>
          <details>
            <summary>Edit World</summary>
            <EditForm world={world} editWorld={editWorld} />
          </details>
          <button onClick={() => deleteWorld(world.id)}>X</button>
          </>
        )
      })}
    </div>
  )
}

export default App;
