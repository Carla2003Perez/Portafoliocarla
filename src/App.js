import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Inicio from './components/inicio';
import Habilidad from './components/Habilidad';
import Trabajos from './components/trabajos';
import Primer from './components/Trabajos/primer'; 
import './App.css'

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Inicio />
            <Habilidad />
            <Trabajos />

            <footer>
            <p> &copy; 2025,CARLAPEREZ</p>
            </footer>
          </>
        } />
        <Route path="/primer" element={<Primer />} />
      </Routes>
    </Router>
  );
}

export default App;
