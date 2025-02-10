import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/home.css";

const HomePage = () => (
  <div className="font-[Apple_Chancery] text-[24px] leading-[1.6] text-[#ffffed] bg-[#ffffed] min-h-screen flex flex-col">
    <Navbar />
    <main
      className="flex-grow mx-auto p-5 bg-cover bg-center bg-no-repeat border-10 border-[#382222]"
      style={{ backgroundImage: "url('../assets/back.jpg')" }}
    >
      <section className="mx-auto max-w-[50%] p-5 bg-[#402F25] text-[#ffffed] border-double border-5 border-[#aaaa9d] rounded-tr-none rounded-br-none rounded-bl-[10px] rounded-tl-[10px] shadow-inner shadow-black flex justify-center">
        <p>hola soy bape</p>
      </section>
    </main>
    <Footer />
  </div>
);

export default HomePage;