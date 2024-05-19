import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state

  // State
  const [peopleData, setPeopleData] = useState([]);
  const [planetsData, setPlanetsData] = useState([]);

  // Fetching API
  useEffect(() => {
    function getAPI() {
      const people = axios.get(urlPeople)
      .then(res => {
        // console.log(res.data);
        setPeopleData(res.data);
      })
      .catch(err => console.err(err));

      const planet = axios.get(urlPlanets)
      .then(res => {
        // console.log(res);
        setPlanetsData(res.data);
      })
      .catch(err => console.err(err));
    }
    getAPI();
  }, []);
  

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */
      peopleData.map((person) => {
        return (
            <Character key={person.id} peopleData={person} planetsData={planetsData}/>
        )
      })
      }
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
