import React, {useState} from 'react'

const AddForm = (props) => {

  const newWorld = {id: null, name: '', creation: '', notes: ''}
  const [ world, setWorld] = useState([newWorld])

  const handleChange = (e) => {
    setWorld({...world, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addWorld(world)
  }

  return (
    <div className="add-form">
      <form onSubmit={handleSubmit} id="add">
        <div className="form-group" id="add-name" >
          <label htmlFor="name">Name:</label>
          <input id="name" className="form-control" type="text" name="name" placeholder="Name of World" value={world.name} onChange={handleChange}/>
        </div>
        <div className="form-group" id="add-creation">
          <label htmlFor="creation">Creation:</label>
          <textarea id="creation" className="form-control" type="text" name="creation" placeholder="How was the world created?" rows="3" value={world.creation} onChange={handleChange}/>
        </div>
        <div className="form-group" id="add-textarea">
          <label htmlFor="notes">Notes:</label>
          <textarea id="notes" className="form-control" type="text" name="notes" onChange={handleChange} value={world.notes}
                placeholder="Important World Features to note..." rows="3" required>
                </textarea>
        </div>
          <input id="add-btn" type="submit" value="Create New World" className="btn btn-primary" />
      </form>
    </div>
  )
}

export default AddForm
