import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Splash from './pages/Splash';
import Home from './pages/Home';
import Auth from './pages/Auth';
import RestaurantDetails from './pages/RestaurantDetails';
import Cart from './pages/Cart';
import OrderSuccess from './pages/OrderSuccess';
import Profile from './pages/Profile';

const AppLayout = () => {
  const location = useLocation();
  const hideNavFooter = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/success';

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavFooter && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Auth type="login" />} />
          <Route path="/signup" element={<Auth type="signup" />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      {!hideNavFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
      <ToastContainer position="bottom-right" />
    </Router>
  );
}

export default App;
