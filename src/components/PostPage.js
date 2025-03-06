import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/home.css";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const [content, setContent] = useState('Loading...');
  const { postId } = useParams(); // This will get 'blog1' from the URL

  useEffect(() => {
    fetch(`/posts/${postId}.md`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Post not found');
        }
        return response.text();
      })
      .then(text => setContent(text))
      .catch(error => setContent('Sorry, this post does not exist.'));
  }, [postId]);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main style={{ backgroundImage: `url('/back.jpg')` }}>
        <section className="content">
          <p>{content}</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PostPage;