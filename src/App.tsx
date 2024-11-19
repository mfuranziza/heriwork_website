import { useState } from 'react'
import { Home } from './components/Home'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='  font-poppins '>
    <Home/>
   </div>
      
    </>
  )
}

export default App
