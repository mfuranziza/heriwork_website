import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='  font-poppins '>
    <Footer/>
   </div>
      
    </>
  )
}

export default App
