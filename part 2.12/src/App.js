import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Country from './components/Country';


const App = () => {
  const [countries, setCountries] = useState([])
  const [weatherapi, setWeatherapi] = useState([])
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
      <ul key={filterItems.numericCode}>{filterItems.name}</ul>
    )
  }

  useEffect(() => {
    if (filterItems.length === 1 && weatherapi.length === 0) {
      const api_key = process.env.REACT_APP_API_KEY
      const params = {
        access_key: api_key,
        query: filterItems[0].capital
      }


      axios.get('http://api.weatherstack.com/current', { params })
        .then(response => {
          console.log(response)
          setWeatherapi(response.data)
        });
    };
  }, [filterItems, weatherapi])

  

  return (
    <div>
      <Filter
        handleFilterChange={handleFilterChange} newFilter={newFilter}
      />
      <Country
        filterItems={filterItems} filterList={filterList} weatherapi={weatherapi} setWeatherapi={setWeatherapi}
      />
    </div>
  );
}

export default App;
