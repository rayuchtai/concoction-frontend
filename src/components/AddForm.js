import React, {useState} from 'react'

const AddForm = (props) => {

  const newWorld = {id: null, name: '', creation: '', notes: ''}
  const [world, setWorld] = useState(newWorld)

  const handleChange = (e) => {
    setWorld({...world, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addWorld(world)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" name="name" value={world.name} onChange={handleChange}/>

      <label htmlFor="creation">Creation:</label>
      <input id="creation" type="text" name="creation" value={world.creation} onChange={handleChange}/>

      <label htmlFor="notes">Notes:</label>
      <textarea id="notes" type="text" name="notes" onChange={handleChange} value={world.notes}
            placeholder="extra info???" rows="3" required>
            </textarea>

      <input type="submit" value="Create New World" />
    </form>
  )
}

export default AddForm
