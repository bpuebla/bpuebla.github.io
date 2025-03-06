import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutPage = () => (
  <div>
    <header>
      <Navbar />
    </header>
    <main style={{ backgroundImage: `url('/back.jpg')` }}>
      <section className="content">
        <p>This is the about page</p>
      </section>
    </main>
    <Footer />
  </div>
);


export default AboutPage;