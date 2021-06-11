import React, { useState, useEffect } from 'react'
import axios from 'axios'

//importing components
import AddForm from './components/AddForm.js'

const App = () => {

  const [worlds, setWorlds] = useState([])

  const getAllWorlds = () => {
    axios
      .get('https://concoction.herokuapp.com/api/worlds')
      .then((response) => {

        //add the data to state
        setWorlds(response.data)
      })
      .catch(error => console.error(`Error: ${error}`))
  }

  const addWorld = (world) => {
    axios
      .post('https://concoction.herokuapp.com/api/worlds', world)
      .then((response) => {
        setWorlds([...worlds, world])
      })

  }

  const deleteWorld = (id) => {
    axios
      .delete('https://concoction.herokuapp.com/api/worlds/' + id)
      .then((response) => {
        setWorlds(worlds.filter((world) => {
          return world.id !== id
        }))
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
          <button onClick={() => deleteWorld(world.id)}>X</button>
          </>
        )
      })}
    </div>
  )
}

export default App;
