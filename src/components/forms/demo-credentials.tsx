"use client"
import React from 'react';
import { FaCopy } from 'react-icons/fa';

const DemoCredentials = () => {
    const demoEmail = process.env.DEMO_EMAIL || 'projects.vishalsharma@gmail.com';
    const demoPassword = process.env.DEMO_PASSWORD || 'demoPassword123';
  
    const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
      
   
  };

  return (
    <div className="demo-credentials bg-white text-black p-4 rounded-md w-[50vh] shadow-md ">
      <h3 className="text-lg font-semibold mb-7">Demo Account Credentials</h3>
      <div className="credential-item flex justify-between items-center mb-4">
        <span>Email:</span>
        <div className="flex items-center">
          
          <button onClick={() => copyToClipboard(demoEmail)} className="copy-button text-blue-500 hover:text-blue-300">
            <FaCopy />
          </button>
        </div>
      </div>
      <div className="credential-item flex justify-between items-center">
        <span>Password:</span>
        <div className="flex items-center">
          
          <button onClick={() => copyToClipboard(demoPassword)} className="copy-button text-blue-500 hover:text-blue-300">
            <FaCopy />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoCredentials;
