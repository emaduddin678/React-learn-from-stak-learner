import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/profile/profile.style.css';
// import App from './components/app';
// import MainApp from './components/mainapp';
import reportWebVitals from './reportWebVitals';
// import Count from './components/counter';
import Timer from './components/timer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MainApp /> */}
    {/* <App /> */}
    {/* <Count /> */}
    <Timer />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();