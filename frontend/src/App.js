import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/HomePage";
import About from "./Page/AboutPage";
import Contact from "./Page/ContactPage";
import Error from "./Page/ErrorPage";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Login from "./Component/Login"; // Adjust the path as necessary
import { auth } from "./firebase"; // Adjust the path as necessary

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
        setShowLogin(false); // Close the login popup if open
      } else {
        // No user is signed in
        setShowLogin(true); // Show the login popup
        setUser(null);
      }
    });

    // Clean up subscription
    return () => unsubscribe();
  }, []);

  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      {showLogin && <Login onClose={closeLogin} />}
    </Router>
  );
};

export default App;
