import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Verify from './pages/auth/Verify';
import About from './pages/About';
import Footer from './components/Footer';
import Account from './pages/Account';
import Courses from './pages/Courses';
import { UserData } from './context/userContext';
import Loading from './components/Loading';
function App() {
    
    const { isAuth, loading } = UserData();
    
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <BrowserRouter>
                    <Header isAuth={isAuth} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/login"
                            element={isAuth ? <Home /> : <Login />}
                        />
                        <Route
                            path="/register"
                            element={isAuth ? <Home /> : <Register />}
                        />
                        <Route
                            path="/verify"
                            element={isAuth ? <Home /> : <Verify />}
                        />
                        <Route
                            path="/account"
                            element={isAuth ? <Account /> : <Login />}
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/courses" element={<Courses />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            )}
        </>
    );
}

export default App
