import './App.css';

// My pages
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';


// Navigation
import NavBar from "./NavBar"
import Footer from "./Footer"


// Bootstrap stuff
import 'bootstrap/dist/css/bootstrap.css'; 
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

// routing stuff
import {
  BrowserRouter,
      Routes,
  Route
  } from 'react-router-dom';

function App() {
  return (
    // <div className="container">
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<HomePage/>} exact />
          <Route path="/Home/Privacy" element={<PrivacyPage />} exact />
          <Route path="*" element={<NotFoundPage/>}  />
        </Routes>

        <Footer />
      </BrowserRouter>
    // </div>
  );
}

export default App;
