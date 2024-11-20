import { useState } from 'react'
import { Home } from './components/Home'
import './App.css'
import Footer from './components/Footer'
import ContactForm from './components/Contact-us'
import About from './components/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='  font-poppins '>
    <Home/>
   </div>
   <div className="font-poppins bg-gray-50">
      <div className="w-full">
        <About />
      </div>
      <div className="mt-12">
        <ContactForm />
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
      
    </>
  )
}

export default App
