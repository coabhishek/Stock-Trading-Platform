import React from 'react';

export default function Hero() {
  return (
    <section className="bg-primary text-white py-5 text-center">
      <div className="container" style={{ maxWidth: '600px' }}>
        <h1 className="fw-bold fs-3 mb-2">How can we help you?</h1>
        <p className="text-white-50 mb-4 fs-6">Search for answers or create a support ticket below.</p>
        
        {/* Simple Search Bar */}
        <div className="input-group shadow-sm">
          <input 
            type="text" 
            className="form-control form-control-lg fs-6" 
            placeholder="Search for help..." 
          />
          <button className="btn btn-dark px-4" type="button">Search</button>
        </div>
      </div>
    </section>
  );
}