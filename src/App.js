import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import axios from 'axios'

//importing components
import AddForm from './components/AddForm.js'
import Worlds from './components/Worlds.js'
import Home from './components/Home.js'

const App = () => {

  const [worlds, setWorlds] = useState([])

//getting the data
  const getAllWorlds = () => {
    axios
      .get('http://localhost:8000/api/worlds')
      .then((response) => {

        //add the data to state
        console.log(response.data);
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
        return updatedWorld
      })
  }

  useEffect(() => {
    getAllWorlds()
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/worlds">Worlds</Link>
          </div>
          <div>
            <Link to="/create">Create a World</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/worlds">
            <h1>Worlds</h1>
            {worlds.reverse().map((world) => {
              return (
                <Worlds
                  world={world}
                  worlds={worlds}
                  editWorld={editWorld}
                  deleteWorld={deleteWorld}
                />
              )
            })}
          </Route>
          <Route path="/create">
            <AddForm
              addWorld={addWorld}
            />
          </Route>
        </Switch>
      </BrowserRouter>


    </div>

  )
}

export default App;
