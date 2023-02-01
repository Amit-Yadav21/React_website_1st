import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './Pages/Home';
import {About} from './Pages/About';
import {Service} from './Pages/Service';
import {Contact} from './Pages/Contact';
import  Navbar  from './Pages/Navbar';
import { Footer } from './Pages/Footer';
import { UserDetails } from './Pages/UserDetails';
import { Routes, Route } from "react-router-dom"; 


const App = ()=> {
  return (
    <>
    <div className='bg'>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/service" element={<Service />} />
        <Route  path="/contact" element={<Contact />} /> 
        <Route  path='/userdetails' element={<UserDetails />} />
      </Routes>
      <Footer />

    </div>
    </>
  );
}

export default App;