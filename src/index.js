import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App2 from './App2';
import NotFound from './components/404page';




ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="form" element={<App2 />} />
      <Route
          path="*"
          element={
            <NotFound/>
          }
        />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
