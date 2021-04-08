import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  
  const addAll = (event) =>{
      addPerson(event)
      addNumber(event)
  }
    
  
    const addPerson = (event) => {
    event.preventDefault()
    const personsObject = {
        content: newName,
        id: persons.length + 1,
      }
      const isDuplicate = persons.map(person => person.content)
      if (isDuplicate.includes(newName)) {
          return (
              window.alert(`${newName} is already added to phonebook`)
            )
        }
      else 
    setPersons(persons.concat(personsObject))
    setNewName('')
    }

    const addNumber = (event) => {
      event.preventDefault()
      const numberObject = {
          content: newName,
          number: newNumber,
          id: persons.length + 1,
        }
        const isDuplicate = persons.map(person => person.number)
        if (isDuplicate.includes(newNumber)) {
            return (
                window.alert(`${newNumber} is already added to phonebook`)
              )
          }
        else 
      setPersons(persons.concat(numberObject))
      setNewNumber('')
      }
  
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const personlist = (persons) => {
    return (
      <ul key={persons.content}>{persons.content} {persons.number}</ul>
    )
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addAll}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange}
                />
        </div>
        <div>
          number: <input value={newNumber} 
                  onChange={handleNumberChange}
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