import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AdminPanel from "./Components/AdminPanel";
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";
import FullDetails from "./Components/FullDetails";
import HappyClients from "./Components/HappyClients";
import Header from "./Components/Header";
import JoiningPlans from "./Components/JoiningPlans";
import OurStory from "./Components/OurStory";
import Login from "./Components/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("isAuthenticated")
  );

  // Sync localStorage with state
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("isAuthenticated"));
    };

    // Listen for changes in localStorage
    window.addEventListener("storage", handleStorageChange);

    // Cleanup listener
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  console.log("isAuthenticated:", isAuthenticated); // Debugging

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <JoiningPlans />
              <Clients />
              <FullDetails />
              <OurStory />
              <HappyClients />
              <Footer />
            </>
          }
        />

        {/* Protected Admin Route */}
        <Route
          path="/admin"
          element={isAuthenticated ? <AdminPanel /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
      </Routes>
    </Router>
  );
}

export default App;