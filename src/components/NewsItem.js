import React from 'react'
import "./newsitem.css"


const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className='container'>
       
    <div className='news-app'>
        <div id="news-item">
            <img className='new-img' src={urlToImage} alt={urlToImage}/>
            <h3><a href={url} target="_blank">{title}</a></h3>
            <p id="dec">{description}</p>
            
        </div>
    
    </div>
    
    </div>
  )
}

export default NewsItem
