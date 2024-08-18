import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Verify from './pages/auth/Verify';
import About from './pages/About';
import Footer from './components/Footer';
function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/verify" element={<Verify />} />
                    <Route path="/account" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Verify />} />
                </Routes>
            <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App
