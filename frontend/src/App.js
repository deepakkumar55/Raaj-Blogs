import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/HomePage";
import About from "./Page/AboutPage";
import Contact from "./Page/ContactPage";
import Error from "./Page/ErrorPage";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Login from "./Component/Login"; 
import AdminPage from './Page/AdminPage';
import AdminDashboard from './Component/AdminDashboard';
import CreatePost from './Component/CreatePost';
import EditPost from './Component/EditPost';
import BlogManagement from './Component/BlogManagement';
import MarkdownEditor from './Component/MarkdownEditor';
import { auth } from "./firebase";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
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

  return (
    <Router>
      <Header />
      <Routes>
        {/* User interface routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Admin interface routes */}
        <Route path="/admin/*">
          <AdminPage>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="create" element={<CreatePost />} />
            <Route path="edit/:id" element={<EditPost />} />
            <Route path="manage" element={<BlogManagement />} />
            <Route path="editor" element={<MarkdownEditor />} />
          </AdminPage>
        </Route>

        {/* Catch-all route for 404 */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      {showLogin && <Login onClose={closeLogin} />}
    </Router>
  );
};

export default App;
