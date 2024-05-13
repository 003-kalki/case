import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Courses from './pages/Courses';
import JoinForFree from './pages/JoinForFree';
import Login from './pages/Login';
import About from './pages/About'; // Assuming you have an About component
import Header from './components/Header';
import Footer from './components/Footer';
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        {/* Ensure correct casing for the Home route */}
        <Route path="/home" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />  // Corrected typo
        <Route path="/courses" element={<Courses />} />
        <Route path="/joinforfree" element={<JoinForFree />} />  // Corrected typo
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
