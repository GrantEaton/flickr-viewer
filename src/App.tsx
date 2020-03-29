import React from "react";
import logo from "./logo.svg";
import { connect } from "react-redux";
import "./App.css";
import { State } from "./types";
import { selectImages } from "./reducers/image-reducers";
import { fetchRecentImagesAction } from "./actions/image-actions";
import ImageDashboard from "./components/ImageDashboard";

const mapStateToProps = (state: State) => {
  images: selectImages(state);
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchRecentImages: () => dispatch(fetchRecentImagesAction)
});

function App() {
  return (
    <div className="App">
      <ImageDashboard></ImageDashboard>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
