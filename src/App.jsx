import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Inicio from './components/Home'
import AboutUs from './components/AboutUs'
import Message from './components/Message'
import Rent from './components/Rent'
import User from './components/User';


function App() {
  return (
    <Router>

      <div className='Container'>
        <nav className='navbar'>
          <h1 className='title'>BiblioMania</h1>
          <div className='seccions'>
            <Link to="/" className='seccion'>Inico</Link>
            <Link to="QuienesSomos" className='seccion'>Quienes Somos</Link>
            <Link to="Mensaje" className='seccion'>Mensaje</Link>
            <Link to="Prestamo" className='seccion'>Prestamo</Link>
          </div>
        </nav>


        <Routes>
          <Route path='QuienesSomos/:id' element={<User />} />
          <Route path='/' element={<Inicio />} />
          <Route path='QuienesSomos' element={<AboutUs />} />
          <Route path='Mensaje' element={<Message />} />
          <Route path='Prestamo' element={<Rent />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
