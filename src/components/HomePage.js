import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/home.css";

const HomePage = () => (
  <div>
    <header>
      <Navbar />
    </header>
    <main style={{ backgroundImage: `url('/back.jpg')` }}>
      <section className="content">
        <p>hola soy bape</p>
      </section>
    </main>
    <Footer />
  </div>
);

export default HomePage;