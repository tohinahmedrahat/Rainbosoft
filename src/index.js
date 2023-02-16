import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
    const targetSection = e.target.getAttribute("data-section");
    const section = document.querySelector(targetSection);
    targetSection !== "#about"
        ? card.classList.add("is-active")
        : card.classList.remove("is-active");
    card.setAttribute("data-state", targetSection);
    sections.forEach((s) => s.classList.remove("is-active"));
    buttons.forEach((b) => b.classList.remove("is-active"));
    e.target.classList.add("is-active");
    section.classList.add("is-active");
};

buttons.forEach((btn) => {
    btn.addEventListener("click", handleButtonClick);
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
