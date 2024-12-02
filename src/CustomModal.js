// import React from "react";
// import Modal from "react-modal";

// Modal.setAppElement("#root"); 

// const CustomModal = ({ isOpen, onClose, title, message, onCopy, copyText }) => {
//   const handleCopy = () => {
//     if (copyText) {
//       navigator.clipboard.writeText(copyText);
//       if (onCopy) onCopy(); 
//     }
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel="Custom Modal"
//       style={{
//         content: {
//           top: "50%",
//           left: "50%",
//           right: "auto",
//           bottom: "auto",
//           marginRight: "-50%",
//           transform: "translate(-50%, -50%)",
//           padding: "20px",
//           borderRadius: "8px",
//           width: "400px",
//           textAlign: "center",
//         },
//       }}
//     >
//       <h2>{title}</h2>
//       <p>{message}</p>
//       {copyText && (
//         <button onClick={handleCopy} style={{ margin: "10px" }}>
//           Copy Room ID
//         </button>
//       )}
//       <button onClick={onClose} style={{ margin: "10px" }}>
//         Close
//       </button>
//     </Modal>
//   );
// };

// export default CustomModal;



import React from "react";
import Modal from "react-modal";

// إعداد العنصر الرئيسي للتطبيق لتجنب أخطاء إمكانية الوصول
Modal.setAppElement("#root");

const CustomModal = ({ isOpen, onClose, title, message, onCopy, copyText }) => {
  const handleCopy = () => {
    if (copyText) {
      navigator.clipboard.writeText(copyText);
      if (onCopy) onCopy();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Custom Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)", // تظليل الخلفية
          zIndex: 1000,
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "20px",
          borderRadius: "12px",
          width: "400px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#ffffff",
          border: "none",
        },
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "15px", fontSize: "1.5rem" }}>
        {title}
      </h2>
      <p style={{ color: "#555", fontSize: "1rem", marginBottom: "20px" }}>
        {message}
      </p>
      {copyText && (
        <button
          onClick={handleCopy}
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
        >
          انسخ كود الروم
        </button>
      )}
      <button
        onClick={onClose}
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "#6c757d",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1rem",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#5a6268")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#6c757d")}
      >
        اغلاق
      </button>
    </Modal>
  );
};

export default CustomModal;
