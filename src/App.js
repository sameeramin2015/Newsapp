import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const [getNews,setNews] =useState([])
  useEffect(()=>{
    const fetchItems = async()=>{
      let res = await fetch('/v2/everything?q=tesla&from=2022-03-01&sortBy=publishedAt&apiKey=ac8165351ca14f20a473e28e7492c919')
      let data = await res.json()
      setNews(data)

    }
    fetchItems()
  })
  return (
    <div className="App">
     
     {console.log(getNews)}
     
    </div>
  );
}

export default App;
