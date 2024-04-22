import React from 'react';
import ReactDOM  from "react-dom/client";
import { motion } from 'framer-motion';
import '/index.css'

const BirthdayInvitation = () => {
    return ( 
      <div className="center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="invitation"
        >
          <h1>Special birthday Invitation</h1>
          <p>You're invited to celebrate</p>
          <h2>Deepanshu's 27th Birthday!</h2>
          <p>Date: April 27th, 2024</p>
          <p>Location: Reset/wherelse</p>
          <p>Let’s make some amazing memories!</p>
        </motion.div>
      </div>
    );
  };
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<imageBackground/>);

root2.render(<BirthdayInvitation/>);


export default BirthdayInvitation;
