import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import WeatherList from './components/WeatherList';
import SportList from './components/SportList';
import NewsList from "./components/NewsList";
import Technologylist from "./components/TechnologyList";
import TravelList from "./components/TravelList";






ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>

    <Route path="/" element={<NewsList />} />
    <Route path="/weatherlist" element={<WeatherList/>}/>
    <Route path="/sportlist" element={<SportList />} />
    <Route path="/technologylist" element={<Technologylist />} />
    <Route path="/travellist" element={<TravelList />} />
    </Routes>
    <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);

