import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ServicesPage = () => (
  <div>
    <header>
      <Navbar />
    </header>
    <main style={{ backgroundImage: `url('/back.jpg')` }}>
      <section className="content">
        <p>I am open to accepting project proposals on software engineering projects, particularly leaning towards Data and ML.</p>
      </section>
    </main>
    <Footer />
  </div>
);


export default ServicesPage;