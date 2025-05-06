import React, { useEffect } from "react";
import Footer from "../../component/Footer/footer";

const BulkOrder: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector(
        "script[src='//embed.typeform.com/next/embed.js']"
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1 style={{ color: "#2c3e50", fontFamily: "'Arial', sans-serif", fontSize: "36px" }}>
          Bulk Order
        </h1>
        <p style={{ color: "#34495e", fontFamily: "'Arial', sans-serif" }}>
          Fill out the form below to place your bulk order:
        </p>
        <div data-tf-live="01JJNXCEGS3TCX5Z6SRAN0QKWE"></div>
      </div>
      <Footer />
    </>
  );
};

export default BulkOrder;