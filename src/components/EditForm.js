import React, {useState} from 'react'

const EditForm = (props) => {

  const newWorld = {id: props.world.id, name: '', creation: '', notes: ''}
  const [world, setWorld] = useState(newWorld)

  const handleChange = (e) => {
    setWorld({...world, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    props.editWorld(world)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <br />
      <input id="name" type="text" name="name" onChange={handleChange}/>
      <br />
      <br />
      <label htmlFor="creation">Creation:</label>
      <br />
      <textarea id="creation" type="text" name="creation" onChange={handleChange} placeholder="How was the world created?" rows="3" required></textarea>
      <br />
      <br />
      <label htmlFor="notes">Notes:</label>
      <br />
      <textarea id="notes" type="text" name="notes" onChange={handleChange}
            placeholder="Important world features to note..." rows="3" required>
            </textarea>
      <br />
      <br />
      <input type="submit" value="Edit World" />
    </form>
  )
}

export default EditForm
