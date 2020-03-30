import React from "react";
import "./App.css";
import ImageDashboard from "./components/ImageDashboard";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flickr Images!</h1>
      </header>
      <ImageDashboard></ImageDashboard>
    </div>
  );
}
