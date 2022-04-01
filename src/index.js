import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


import App from './App'




ReactDOM.render(
  <BrowserRouter>
    {/* <Header /> */}
    <Routes>

    <Route path="/" element={<App />} />
    {/* <Route path="/weatherlist" element={<WeatherList/>}/>
    <Route path="/sportlist" element={<SportList />} />
    <Route path="/technologylist" element={<Technologylist />} />
    <Route path="/travellist" element={<TravelList />} /> */}
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>,
  document.getElementById('root')
);

