import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Viajes from './pages/Viajes';
import Restaurantes from './pages/Restaurantes';
import Cupones from './pages/Cupones';
import Mensajes from './pages/Mensajes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/viajes" element={<Viajes />} />
        <Route path="/restaurantes" element={<Restaurantes />} />
        <Route path="/cupones" element={<Cupones />} />
        <Route path="/mensajes" element={<Mensajes />} />
      </Routes>

    </Router>
  );
}

export default App;
