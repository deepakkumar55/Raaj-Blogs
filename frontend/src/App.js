import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Page/HomePage";
import About from "./Page/AboutPage";
import Contact from "./Page/ContactPage";
import ErrorPage from "./Page/ErrorPage";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Login from "./Component/Login";
import AdminPage from './Page/AdminPage';
import AdminDashboard from './Component/AdminDashboard';
import CreatePost from './Component/CreatePost';
import EditPost from './Component/EditPost';
import BlogManagement from './Component/BlogManagement';
import MarkdownEditor from './Component/MarkdownEditor';
import Blog from './Page/BlogPage'; // Assuming you have a Blog page

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setShowLogin(false);
      } else {
        setShowLogin(true);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const closeLogin = () => {
    setShowLogin(false);
  };

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      <Routes>
        {/* User interface routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<Blog />} />
        
        {/* Admin interface routes */}
        <Route path="/admin/*" element={<AdminPage />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="create" element={<CreatePost />} />
          <Route path="edit/:id" element={<EditPost />} />
          <Route path="manage" element={<BlogManagement />} />
          <Route path="editor" element={<MarkdownEditor />} />
        </Route>

        {/* Catch-all route for 404 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {!isAdminRoute && <Footer />}
      {showLogin && <Login onClose={closeLogin} />}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
