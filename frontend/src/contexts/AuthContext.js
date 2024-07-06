import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        axios.defaults.headers.common['Authorization'] = token;
        try {
          const res = await axios.get('/api/auth/user');
          setUser(res.data);
        } catch (error) {
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (formData) => {
    const res = await axios.post('/api/auth/login', formData);
    localStorage.setItem('token', res.data.token);
    axios.defaults.headers.common['Authorization'] = res.data.token;
    setUser(res.data.user);
  };

  const register = async (formData) => {
    const res = await axios.post('/api/auth/register', formData);
    localStorage.setItem('token', res.data.token);
    axios.defaults.headers.common['Authorization'] = res.data.token;
    setUser(res.data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
