import React from 'react';

export default function CreateTicket() {
  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm border-0 p-4">
        <h3 className="h5 fw-bold mb-3">Create a Support Ticket</h3>
        
        <form>
          <div className="mb-3">
            <label className="form-label text-muted small">Your Email</label>
            <input type="email" className="form-control" placeholder="name@example.com" />
          </div>

          <div className="mb-3">
            <label className="form-label text-muted small">Issue Category</label>
            <select className="form-select">
              <option>Select a category</option>
              <option>Account & Login</option>
              <option>Billing & Payments</option>
              <option>Technical Bug</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label text-muted small">Description</label>
            <textarea className="form-control" rows="3" placeholder="Describe your issue..."></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit Ticket</button>
        </form>
      </div>
    </div>
  );
}