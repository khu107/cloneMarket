import './App.css';
import Navbar from './component/Navber';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NamjaSang from './pages/NamjaSang';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/namjesang" element={<NamjaSang />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
