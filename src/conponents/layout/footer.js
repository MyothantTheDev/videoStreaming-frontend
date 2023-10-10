import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2023 Your Company Name</p>
        <div className="social-icons">
          <a href="#" className="icon-link">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="icon-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="icon-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;