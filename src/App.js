import React from 'react';
import './App.css'; // Import CSS for custom styles

function App() {
  return (
    <div className="app-container">
      <div className="logo-container">
        {/* React logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="react-logo"
        />
      </div>
      <div className="content-container">
        {/* Main heading */}
        <h1>Welcome to Fullstack Development - I</h1>
        {/* Subheading */}
        <h2>React JS Programming Week09 Lab exercise</h2>
        {/* Student information */}
        <p>101435967</p>
        <p>Tanmay Nikunjbhai Panchal</p>
        <p>George Brown College, Toronto</p>
      </div>
    </div>
  );
}

export default App;
