import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Message from './components/Message'
import Rent from './components/Rent'
import User from './components/User';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='QuienesSomos/:id' element={<User />} />
        <Route path='/' element={<Home />} />
        <Route path='QuienesSomos' element={<AboutUs />} />
        <Route path='Mensaje' element={<Message name='Janns' lastname='Patino Saucedo' note='Espero y disfrute de todos nuestros productos' />} />
        <Route path='Prestamo' element={<Rent />} />
      </Routes>
    </Router>
  )
}

export default App;
