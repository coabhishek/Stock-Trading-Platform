import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5 text-muted">
      <div className="row p-5">
        <div className="col">
          <div className="text-center">
            <h3 className="text-center pt-5">404 Not Found</h3>
            <p className="p-3">
             Sorry the page not Looking for Doe's Not Exist
            </p>

            <Link to='/' className="btn btn-primary">Go Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
