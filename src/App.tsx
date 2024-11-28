import { Home } from "./components/Home";
import "./App.css";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact-us";
import About from "./components/About";
import Testimonials from "./components/testimonials";
import Partners from "./components/Partners";
import Team from "./components/Team";
import Opportunities from "./components/Opportunities";

function App() {
  return (
    <>
      <div id="home" className="  font-poppins overflow-x-hidden ">
        <Home />
      </div>
      <div id="about" className="font-poppins bg-white">
        <div className="w-full">
          <About />
        </div>
        <div id="partners" className="w-full">
          <Partners />
        </div>
        <div id="team" className="w-full">
          <Team />
        </div>
        <div id="testimonials" className="">
          <Testimonials />
        </div>
        <div id="opportunities" className="w-full">
          <Opportunities />
        </div>
        <div id="contact" className="">
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
