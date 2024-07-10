import React from "react";
import BlogCard from "./BlogCard";

const BlogList = () => {
    // Example data (replace with actual data fetched from API)
    const blogPosts = [
        { id: 1, title: "Introduction to React Hooks", description: "Learn how to use React Hooks to manage state and side effects." },
        { id: 2, title: "Building Responsive UIs with Tailwind CSS", description: "Explore techniques for creating responsive user interfaces using Tailwind CSS." },
        { id: 3, title: "Optimizing Performance in React Applications", description: "Tips and best practices for improving performance in React applications." },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
                <BlogCard key={post.id} title={post.title} description={post.description} />
            ))}
        </div>
    );
};

export default BlogList;
