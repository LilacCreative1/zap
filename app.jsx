// app.jsx

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import NotificationProvider from './components/NotificationManager';
import NetworkStatusIndicator from './components/NetworkStatusIndicator';

import Home from './pages/Home';
import Login from './pages/Login';
import Scenarios from './pages/Scenarios';
import Simulation from './pages/Simulation';
import Evaluation from './pages/Evaluation';
import Progress from './pages/Progress';
import Resources from './pages/Resources';
import AdminSettings from './pages/AdminSettings';

// Import your utilities
import { initAuth, getCurrentUser } from './utils/auth';

initAuth();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(getCurrentUser() !== null);

  useEffect(() => {
    const checkAuthStatus = () => {
      setIsAuthenticated(getCurrentUser() !== null);
    };

    checkAuthStatus();
    window.addEventListener('login', checkAuthStatus);
    window.addEventListener('logout', checkAuthStatus);

    return () => {
      window.removeEventListener('login', checkAuthStatus);
      window.removeEventListener('logout', checkAuthStatus);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar isAuthenticated={isAuthenticated} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/scenarios"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Scenarios />
                </ProtectedRoute>
              }
            />
            <Route
              path="/scenarios/:id"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Simulation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/evaluation"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Evaluation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/progress"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Progress />
                </ProtectedRoute>
              }
            />
            <Route
              path="/resources"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Resources />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/settings"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <AdminSettings />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function GlobalErrorHandler({ children }) {
  return (
    <NotificationProvider>
      <NetworkStatusIndicator />
      {children}
    </NotificationProvider>
  );
}

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalErrorHandler>
      <App />
    </GlobalErrorHandler>
  </React.StrictMode>
);
