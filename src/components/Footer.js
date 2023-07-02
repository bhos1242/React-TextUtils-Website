import React from "react";

function Foot() {
  return (
    <footer className="">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>Copyright © 2023 
            <a href="https://www.example.com/"> Example.com</a></p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="/">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="/">Terms of Use</a></li>
              <li className="list-inline-item"><a href="/">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Foot;