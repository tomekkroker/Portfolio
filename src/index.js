import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from "./components/Form";
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="form" element={<Form />} />
      <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
