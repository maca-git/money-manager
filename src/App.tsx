import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Charts from './pages/Charts';
import Categories from './pages/Categories';
import Planing from './pages/Planing';
import Settings from './pages/Settings';

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/charts" element={<Charts />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/planing" element={<Planing />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
