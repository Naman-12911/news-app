import React,{useState} from 'react'
import { Link } from "react-router-dom";
function Cards({articles}) {
  console.log({articles})
  return (
    <>
        <div className="col-md-6 col-lg-4">
                <div className="card mx-30">
                <img src={articles.urlToImage} height="250" className="card-img-top" alt="img is loading" />
                    <div className="card-body">
                    <h4 className="card-title">{articles.title?articles.title.slice(0,20):""}</h4>
                <p className="card-text">{articles.description?articles.description.slice(0, 88):""}</p>
                <Link to={articles.url} target="_blank" className="btn btn-primary">Read more</Link>
                 </div>
            </div>
        </div>
    </>
  )
}

export default Cards