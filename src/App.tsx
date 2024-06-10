import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import { useEffect, useState } from 'react'
import { Destination } from './Pages/Destination'
import { Crew } from './Pages/Crew'
import { Technology } from './Pages/Technology'

function App() {
  const [ destinations, setDestinations ] = useState([])
  const [ crew, setCrew ] = useState([])
  const [ technology, setTechnology ] = useState([])

  useEffect(() => {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
      setDestinations(data.destinations)
      setCrew(data.crew)
      setTechnology(data.technology)
      console.log(data, data.crew)
    })
  }, [])
  return (
    
    <div className= 'text-[#fff] h-screen' >
      <BrowserRouter>
          <Routes>
            <Route index element={<Home />}/>
            <Route path='destination' element={<Destination destinations={destinations}/>}/>
            <Route path='crew' element={<Crew crew={crew}/>}/>
            <Route path='technology' element={<Technology technology={technology}/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
