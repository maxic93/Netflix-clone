import React from 'react';
import './App.css';
import Row from './Row.js'
import request from './request.js'
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row 
      title="Netflix original" 
      fetchUrl={request.fetchLastest} 
      largeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Tv" fetchUrl={request.fetchTV} />
      <Row title="Top rated" fetchUrl={request.fetchTop} />
      <Row title="Upcoming" fetchUrl={request.fethcUpcoming} />
      <Row title="Pupular" fetchUrl={request.fetchPopular} />
      
    </div>
  );
}

export default App;
