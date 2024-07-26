import React from "react";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Reservation from "../components/Reservation";

function Home() {
  return (
    <main>
      <section id="hero" className="hero bg-primary text-white text-center py-5">
        <div className="container">
          <h1>Welcome to Tenton Ramen N Tonkatsu</h1>
          <p>Experience the best dining in West Vancouver</p>
        </div>
      </section>
      <Menu />
      <Gallery />
      <Reservation />
    </main>
  );
}

export default Home;
