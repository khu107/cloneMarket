import './App.css';
import Navbar from './component/Navber';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import NamjaSang from './pages/NamjaSang';
import NotFound from './pages/NotFound';
import DetailCard from './pages/DetailCard';
function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {!location?.pathname?.includes('/home/') && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/namjesang" element={<NamjaSang />} />
        <Route path="/home/:id" element={<DetailCard />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
