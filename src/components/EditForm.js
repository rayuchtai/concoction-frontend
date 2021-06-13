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
    <div className="edit-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group" id="edit-name">
          <label htmlFor="name">Name:</label>
          <input id="name" className="form-control" type="text" name="name" onChange={handleChange}/>
        </div>
        <div className="form-group" id="edit-creation">
          <label htmlFor="creation">Creation:</label>
          <textarea id="creation" className="form-control" type="text" name="creation" onChange={handleChange} placeholder="How was the world created?" rows="3" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes:</label>
          <textarea id="notes" className="form-control" type="text" name="notes" onChange={handleChange}
                placeholder="Important world features to note..." rows="3" required>
                </textarea>
        </div>
        <input type="submit" className="btn btn-primary" value="Edit World" />
      </form>
    </div>
  )
}

export default EditForm
