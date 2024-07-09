import React, { useEffect } from "react";
import { auth, provider, signInWithPopup, signInWithRedirect, getRedirectResult } from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";

const Login = ({ onClose }) => {
  const handleGoogleSignIn = async () => {
    try {
      if (window.innerWidth <= 768) {
        // Use signInWithRedirect for mobile devices
        await signInWithRedirect(auth, provider);
      } else {
        // Use signInWithPopup for desktop devices
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log('User signed in:', user);
        onClose(); // Close modal or perform other actions
      }
    } catch (error) {
      console.error('Error during sign in:', error);
    }
  };

  useEffect(() => {
    const fetchRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          const user = result.user;
          console.log('User signed in via redirect:', user);
          onClose(); // Close modal or perform other actions
        }
      } catch (error) {
        if (error.code !== 'auth/no-current-user') {
          console.error('Error during sign in:', error);
        }
      }
    };

    fetchRedirectResult();
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="relative bg-white shadow-lg p-8 rounded-lg w-11/12 max-w-md mx-auto">
        <button onClick={onClose} className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h1>

        <div className="mb-6 text-center">
          <p className="text-gray-600">Blog author</p>
          <p className="text-xl font-bold">RaAj Aryan</p>
          <p className="text-gray-500 text-sm">Subscribe to my newsletter</p>
          <p className="text-gray-500">Stay in the loop! Get new articles from RaAj Aryan delivered straight to your inbox.</p>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-500 text-white p-3 rounded-lg flex items-center justify-center hover:bg-red-600 transition duration-300 mb-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.16 0 5.8 1.09 7.94 3.19L37.6 5.1C33.52 1.99 28.23 0 24 0 14.49 0 6.73 5.92 3.36 14.55l8.22 6.35C13.34 14.09 18.32 9.5 24 9.5z"/>
            <path fill="#34A853" d="M48 24.5c0-1.62-.15-3.18-.44-4.68H24v9.68h13.42c-.58 3.1-2.21 5.74-4.7 7.44l7.46 5.78c4.34-3.96 6.82-9.8 6.82-16.22z"/>
            <path fill="#4A90E2" d="M3.36 14.55c-1.08 2.66-1.68 5.57-1.68 8.45s.6 5.79 1.68 8.45l8.22-6.35C9.2 23.35 9 21.7 9 20s.2-3.35.58-4.9L3.36 14.55z"/>
            <path fill="#FBBC05" d="M24 48c6.48 0 11.89-2.15 15.86-5.85l-7.46-5.78c-2.26 1.53-5.13 2.44-8.4 2.44-5.68 0-10.56-3.59-12.3-8.65l-8.22 6.35C6.73 42.08 14.49 48 24 48z"/>
          </svg>
          Continue with Google
        </button>

        <div className="text-center">
          <p className="text-gray-500">More options</p>
          {/* Add more login options here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Login;
