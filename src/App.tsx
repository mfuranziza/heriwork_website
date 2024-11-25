
import { Home } from './components/Home'
import './App.css'
import Footer from './components/Footer'
import ContactForm from './components/Contact-us'
import About from './components/About'
import Testimonials from './components/testimonials'
import Partners from './components/Partners'
import Team from './components/Team'

function App() {

  return (
    <>
   <div className='  font-poppins '>
    <Home/>
   </div>
   <div className="font-poppins bg-gray-50">
      <div className="w-full">
        <About />
      </div>
      <div className="w-full mt-12">
        <Partners />
      </div>
      <div className="mt-12">
        <Testimonials />
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
