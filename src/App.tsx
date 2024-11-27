

import { Home } from './components/Home'
import './App.css'
import Footer from './components/Footer'
import ContactForm from './components/Contact-us'
import About from './components/About'
import Testimonials from './components/testimonials'
import Partners from './components/Partners'
import Team from './components/Team'
import Opportunities from './components/Opportunities'

function App() {
  return (
    <>
   <div className='  font-poppins '>
    <Home/>
   </div>
   <div className="font-poppins">
      <div className="w-full">
        <About />
      </div>
      <div className="w-full">
        <Partners />
      </div>
      <div className="w-full">
        <Team />
      </div>
      <div className="">
        <Testimonials />
      </div>
      <div className="w-full">
        <Opportunities />
      </div>
      <div className="">
        <ContactForm />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
