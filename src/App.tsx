import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import ContactForm from './components/Contact-us'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='  font-poppins '>
   <ContactForm/>
    <Footer/>
   </div>
      
    </>
  )
}

export default App
