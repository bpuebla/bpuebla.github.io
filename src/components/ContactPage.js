import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactPage = () => (
  <div>
    <header>
      <Navbar />
    </header>
    <main style={{ backgroundImage: `url('/back.jpg')` }}>
      <section className="content">
        <p>This is the contact page</p>
      </section>
    </main>
    <Footer />
  </div>
);


export default ContactPage;