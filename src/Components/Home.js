import React from 'react';
import bakeryHero from './images/bakery-hero.jpg';


const Home = () => (
  <main>
   <section className="bg-cover bg-center text-white py-32 text-center" style={{ backgroundImage: `url(${bakeryHero})` }}>

      <h2 className="text-4xl font-bold">Welcome to Our Bakery!</h2>
      <p className="mt-4 text-xl">Delicious treats and fresh bakes just for you.</p>
    </section>

    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Hot Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Cakes</h3>
            <img src="/images/cake.jpg" alt="Cakes" className="mt-4 rounded-lg"/>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Cookies</h3>
            <img src="/images/cookies.jpg" alt="Cookies" className="mt-4 rounded-lg"/>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Pastries</h3>
            <img src="/images/pastries.jpg" alt="Pastries" className="mt-4 rounded-lg"/>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Breads</h3>
            <img src="/images/breads.jpg" alt="Breads" className="mt-4 rounded-lg"/>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
