import React,{useState,useEffect} from 'react'
import "../css/index.css";
import dance from "../img/dance1.jpg"

import dance2 from "../img/dance3.jpg"
import Cards from './Cards';

function Entertainment() {
    // news get request
    const [data, setData] = useState([]);
    //const[articles,setarticles]=useState([])
    
  useEffect (() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=bd21a406a18442f684b1bfd1f3bad0df");
        const status = response.status;
        const isSuccess = response.ok;
        const result = await response.json();
        setData(result)
      } catch (error) {
        console.log(error);
        
      }
    };
    getProducts()
  }, []);
  console.log(data)
  return (
    <>
      <>
        <div className="container my-4">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={dance} className="d-block" alt="img is loading...." />
            <div className="carousel-caption d-none d-md-block">
            </div>
            </div>
            <div className="carousel-item">
            <img src="https://c8.alamy.com/comp/DM570B/celebrity-news-drawn-on-a-blackboard-in-chalk-with-news-crossed-out-DM570B.jpg" className="d-block" alt="img is loading..." />
            <div className="carousel-caption d-none d-md-block">

            </div>
            </div>
            <div className="carousel-item">
            <img src={dance2} className="d-block" alt="img is loading..." />
            <div className="carousel-caption d-none d-md-block">
            </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </a>
        </div>
        </div>
        <div class = "wrapper">
            <div className="container">
                    <div className="row">
        {/* map function */}
        {data?.articles?.map((item) => (
                        <Cards articles={item} />
         ))} 
                    </div>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    </>  
    </>
  )
}

export default Entertainment