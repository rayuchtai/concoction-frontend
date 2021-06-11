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
      <br />
      <input id="name" type="text" name="name" value={world.name} onChange={handleChange}/>
      <br />
      <br />
      <label htmlFor="creation">Creation:</label>
      <br />
      <input id="creation" type="text" name="creation" value={world.creation} onChange={handleChange}/>
      <br />
      <br />
      <label htmlFor="notes">Notes:</label>
      <br />
      <textarea id="notes" type="text" name="notes" onChange={handleChange} value={world.notes}
            placeholder="extra info???" rows="3" required>
            </textarea>
      <br />
      <input type="submit" value="Create New World" />
    </form>
  )
}

export default AddForm
