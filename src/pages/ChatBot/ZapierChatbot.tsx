import React, { useState } from "react";

const ZapierChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      
      <button
        onClick={toggleChatbot}
        style={{
          position: "fixed",
          bottom: "40px",
          right: "20px",
          zIndex: 1000,
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          fontSize: "24px",
        }}
      >
        💬
      </button>
     
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "110px",
            right: "20px",
            zIndex: 1000,
            width: "400px",
            height: "600px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <iframe
            src="https://interfaces.zapier.com/embed/chatbot/cm5w0n53y002e5k7ygwbrptdw"
            height="100%"
            width="100%"
            allow="clipboard-write *"
            style={{
              border: "none",
              borderRadius: "8px",
            }}
          ></iframe>
        </div>
      )}
    </>
  );
};

export default ZapierChatbot;