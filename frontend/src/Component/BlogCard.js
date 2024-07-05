import React from "react";

const BlogCard = ({ title, description }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 md:p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
            <p className="text-lg text-gray-600">{description}</p>
        </div>
    );
}

export default BlogCard;