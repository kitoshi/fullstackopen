import React, { useState, useEffect } from 'react';
import Add from './components/Add';
import Filter from './components/Filter';
import Persons from './components/Persons'
import personsService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  
  useEffect(() => {
    personsService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
          personsService
          .create(numberObject)
          .then(response => {
            setPersons(persons.concat(response.data))
            setNewNumber('')
          })
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
  

  const filterList = (filterItems) => {
    const removeNumber = () => {
      if (window.confirm("Remove Number?"))
      personsService
        .remove(filterItems.id)
      .then(
        setTimeout(() => {}, 5000),
        personsService
          .getAll()
          .then(response => {
            setPersons(response.data)
            console.log(response.data)
          }))
    }
    return (
      <ul key={filterItems.id}>{filterItems.name} {filterItems.number} <button onClick={removeNumber} id={filterItems.id}>Remove</button></ul>
    )
  }

  

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
      handleFilterChange={handleFilterChange} newFilter={newFilter}
      />
      <h2>Add a New</h2>
      <Add 
      handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addAll={addAll}
      />
      <h2>Numbers</h2>
      <Persons
      filterList={filterList} filterItems={filterItems}
      />
    </div>
  )
  }

export default App