import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  

  const addAll = (event) =>{
      addPerson(event)
      addNumber(event)
  }
    
  
    const addPerson = (event) => {
    event.preventDefault()
    const personsObject = {
        name: newName,
        id: persons.length + 1,
      }
      const isDuplicate = persons.map(person => person.name)
      if (isDuplicate.includes(newName)) {
          return (
              window.alert(`${newName} is already added to phonebook`)
            )
        }
      else {
    setPersons(persons.concat(personsObject))
    setNewName('')
      }
    }

    const addNumber = (event) => {
      event.preventDefault()
      const numberObject = {
          name: newName,
          number: newNumber,
          id: persons.length + 1,
        }
        const isDuplicate = persons.map(person => person.number)
        if (isDuplicate.includes(newNumber)) {
            return (
                window.alert(`${newNumber} is already added to phonebook`)
              )
          }
        else {
      setPersons(persons.concat(numberObject))
      setNewNumber('')
        }
      }

      
      

  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const filterItems = persons.filter(person => person.name.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1)
  console.log(filterItems)

  const filterList = (filterItems) => {
    return (
      <ul key={filterItems.id}>{filterItems.name} {filterItems.number}</ul>
    )
  }

  

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <form>
        filter shown with: <input value={newFilter} onChange={handleFilterChange} type='text'/>
        </form>
      </div>
      <h2>Add a New</h2>
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
      {filterItems.map(filterList)}
    </div>
  )
  }

export default App