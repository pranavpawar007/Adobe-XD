import React from 'react';
import './AppContainer.css'; // Import CSS file for styling

const AppContainer = ({ children }) => {
  return <div className="app-container">{children}</div>;
};

export default AppContainer;
