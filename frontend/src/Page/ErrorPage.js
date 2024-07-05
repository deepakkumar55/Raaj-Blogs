import React from "react";

const Error = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center p-4 md:p-8">
                <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-lg md:text-2xl text-gray-600 mb-6">Page Not Found</p>
                <a
                    href="/"
                    className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded hover:bg-blue-600 transition duration-300"
                >
                    Go Home
                </a>
            </div>
        </div>
    );
};

export default Error;
