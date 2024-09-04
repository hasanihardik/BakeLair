import React from 'react';

const Contact = () => (
  <main className="py-16">
    <section className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <p className="text-lg text-center mb-4">We'd love to hear from you! Feel free to reach out to us with any questions or feedback.</p>
      <form className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
        <label htmlFor="name" className="block text-lg font-semibold mb-2">Name:</label>
        <input type="text" id="name" name="name" required className="w-full p-2 mb-4 border border-gray-300 rounded-md"/>
        
        <label htmlFor="email" className="block text-lg font-semibold mb-2">Email:</label>
        <input type="email" id="email" name="email" required className="w-full p-2 mb-4 border border-gray-300 rounded-md"/>
        
        <label htmlFor="message" className="block text-lg font-semibold mb-2">Message:</label>
        <textarea id="message" name="message" rows="4" required className="w-full p-2 mb-4 border border-gray-300 rounded-md"></textarea>
        
        <button type="submit" className="bg-yellow-400 text-white py-2 px-4 rounded-lg hover:bg-yellow-300">Send</button>
      </form>
    </section>
  </main>
);

export default Contact;
