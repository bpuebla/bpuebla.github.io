import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/home.css";

const HomePage = () => {
  const posts = [
    { id: "blog1", title: "Example Blog Post" },
    { id: "blog2", title: "Another Arcane Entry" },
    { id: "blog3", title: "Lost Writings of the Stars" }
  ];

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="home-container" style={{ backgroundImage: `url('/back.jpg')`}}>
        <section className="content home-content">
        <h2 className="blogs-title">Library of Thoughts</h2>
        <div className="blog-list">
          {posts.map((post, index) => (
            <div key={post.id} className="blog-entry">
              <span className="index-number">{index + 1}.</span>
              <Link to={`/posts/${post.id}`} className="blog-link">{post.title}</Link>
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
