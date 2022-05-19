import HomePage from "./components/home/Home";
import "./App.css";
import { useState } from "react";
import AboutPage from "./components/about/About";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "about":
        return <AboutPage />
      case "home":
        return <HomePage />
    }
  }
  return (
    <div className="tinas-app-container">
      <div className="tinas-navbar">
        <img
          className="tinas-navbar-logo"
          src="https://i.ibb.co/dBV00c1/logo-white.png"
          alt="logo-white"
        />
        <div
          className={
            "tinas-navbar-item" +
            (currentPage === "home" ? " tinas-navbar-item-selected" : "")
          }
          onClick={() => setCurrentPage("home")}
        >
          home
        </div>
        <div
          className={
            "tinas-navbar-item" +
            (currentPage === "about" ? " tinas-navbar-item-selected" : "")
          }
          onClick={() => setCurrentPage("about")}
        >
          about
        </div>
        <div
          className={
            "tinas-navbar-item" +
            (currentPage === "contact" ? " tinas-navbar-item-selected" : "")
          }
          onClick={() => setCurrentPage("contact")}
        >
          contact
        </div>
      </div>
      {renderPage()}
    </div>
  );
}

export default App;
