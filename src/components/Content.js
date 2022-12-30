import React, { useState } from 'react'
import api from '../api'
import './ContentStyles.css'

const Content = () => {
// STATE STUFF
const [plants, setPlants] = useState([])

//HELPER FUNCTIONS
  const fetchData = async () => {
    try {
      const response = await api.get("/")
      // console.log(response.data)
      setPlants(response.data)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className='content'>
      <button onClick={fetchData}>plants</button>
        <div>
          {plants.map((plant) => (
            <div>
              <h1>{plant.common_name}</h1>
              <h2>{plant.latin_name}</h2>
              <img src={plant.img} alt="" />
            </div>
          ))}
        </div>
    // </div>
  )
}

export default Content