import React from 'react';

export default function NotFound(props) {
  return (
    <div>
      <div className="row">
        <div className="col text-center mb-5">
          <h3>
            Uh oh, we could not find the page you were looking for!
          </h3>
          <p className="text-muted">
            <a href="#home">Return to Home</a>
          </p>
        </div>
      </div>
    </div>
  );
}
