import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  
  return (
    <div className='home'>
        <h1>FoodCorner</h1>
        <h2>Explore a best food from our menu</h2>
        <button onClick={() => { navigate("/Menu") }}>Our Menu</button>
    </div>
  )
}

export default Home