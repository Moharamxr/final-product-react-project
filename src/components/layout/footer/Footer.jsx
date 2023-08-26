import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f8f9fa", padding: "20px", textAlign: "center" }}>
      <div style={{ color: "#9c757d" }}>
        &copy; {new Date().getFullYear()} Products Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;