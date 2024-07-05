import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white text-gray-800  text-center p-4">
            <div className="md:flex md:justify-center md:items-center">
                <p className="md:mr-4">&copy; {currentYear} Raaj Blog. All Rights Reserved</p>
                <a href="/privacy-policy" className="md:ml-4 text-blue-800 hover:text-blue-500">Privacy Policy</a>
            </div>
        </footer>
    );
}

export default Footer;
