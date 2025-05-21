import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Internships from './pages/Internships';
import Contact from './pages/Contact';
import Login from './components/Auth/Login';
//import CreateAccount from './components/Auth/CreateAccount';
import Signup from './components/Auth/Signup';
import CreateAccount from './components/Auth/CreateAccount';
import CourseDetail from './pages/courseDetail';

import ProtectedRoute from './routes/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
          <Route path="/internships" element={<ProtectedRoute><Internships /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />

          { }
          <Route path="/courses/:id" element={<ProtectedRoute><CourseDetail /></ProtectedRoute>} />
        </Routes>
      </main>
    </>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <AppContent />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
