import React from 'react';

const Products = () => (
  <main className="py-16">
    <section className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="/images/cake.jpg" alt="Cake" className="rounded-lg"/>
          <h3 className="text-xl font-semibold mt-4">Chocolate Cake</h3>
          <p className="mt-2 text-lg font-bold">$20.00</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="/images/cookies.jpg" alt="Cookies" className="rounded-lg"/>
          <h3 className="text-xl font-semibold mt-4">Chocolate Chip Cookies</h3>
          <p className="mt-2 text-lg font-bold">$10.00</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="/images/pastries.jpg" alt="Pastries" className="rounded-lg"/>
          <h3 className="text-xl font-semibold mt-4">Fruit Pastries</h3>
          <p className="mt-2 text-lg font-bold">$15.00</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="/images/breads.jpg" alt="Breads" className="rounded-lg"/>
          <h3 className="text-xl font-semibold mt-4">Sourdough Bread</h3>
          <p className="mt-2 text-lg font-bold">$8.00</p>
        </div>
      </div>
    </section>
  </main>
);

export default Products;
