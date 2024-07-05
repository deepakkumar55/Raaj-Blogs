import React from "react";

const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white shadow-lg p-8 rounded-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Login</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-800">Email</label>
                        <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-800">Password</label>
                        <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;