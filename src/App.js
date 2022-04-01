import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const [getNews,setNews] =useState([])
  useEffect(()=>{
    const fetchItems = async()=>{
      let res = await fetch('/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=46cb6a30-7b16-428c-833a-0f1a4642c3dc&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=USD')
      let data = await res.json()
      setNews(data)

    }
    fetchItems()
  },[])
  return (
    <div className="App">
     
     {console.log(getNews)}
     
    </div>
  );
}

export default App;
