import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Filter from './components/Filter'
import Country from './components/Country';


const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')


  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response)
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const filterItems = countries.filter(country => country.name.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1)

  const filterList = (filterItems) => {
    return (
      <ul key={filterItems.numericCode}>{filterItems.name} {filterItems.number}</ul>
    )
  }



  return (
    <div>
      <Filter
        handleFilterChange={handleFilterChange} newFilter={newFilter}
      />
      <Country
        filterItems={filterItems} filterList={filterList}
      />
    </div>
  );
}

export default App;
