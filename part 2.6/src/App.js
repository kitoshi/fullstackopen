import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personsObject = {
      content: newName,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1,
    }
  
    setPersons(persons.concat(personsObject))
    setNewName('')
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const personlist = (persons) => {
    return (
      <ul key={persons.id}>{persons.content}</ul>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(personlist)}
    </div>
  )
}

export default App