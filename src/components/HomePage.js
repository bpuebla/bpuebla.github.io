import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/home.css";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Assuming public/posts/index.json is an array of markdown filenames,
        // e.g., ["blog1.md", "blog2.md", "blog3.md"]
        const res = await fetch("/posts/index.json");
        const files = await res.json();

        // For each file, fetch its content and extract the title.
        const postsData = await Promise.all(
          files.map(async (file) => {
            const resFile = await fetch(`/posts/${file}`);
            const content = await resFile.text();
            // Extract the first '#' heading; if not found, fallback to "Untitled"
            const match = content.match(/^#\s*(.+)$/m);
            return {
              // Remove file extension for the id, e.g., "blog1.md" becomes "blog1"
              id: file.replace(/\.[^/.]+$/, ""),
              title: match ? match[1] : "Untitled"
            };
          })
        );
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="home-container" style={{ backgroundImage: `url('/back.jpg')` }}>
        <section className="content home-content">
          <h2 className="blogs-title">Library of Thoughts</h2>
          <div className="blog-list">
            {posts.map((post, index) => (
              <div key={post.id} className="blog-entry">
                <span className="index-number">{index + 1}.</span>
                <Link to={`/posts/${post.id}`} className="blog-link">
                  {post.title}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
