import React,{useState,useEffect} from 'react'
import "../css/index.css";
import science from "../img/science.jpg"
import science1 from "../img/science2.jpg"
import science2 from "../img/science3.jpg"
import Cards from './Cards';

function Sceince() {
    // news get request
    const [data, setData] = useState([]);
    //const[articles,setarticles]=useState([])
    
  useEffect (() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://newsapi.org/v2/top-headlines?country=in&apiKey=16b2973603f04e4eac23d452bc0d40fb");
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
            <img src={science} className="d-block" alt="img is loading...." />
            <div className="carousel-caption d-none d-md-block">
            </div>
            </div>
            <div className="carousel-item">
            <img src={science1} className="d-block" alt="img is loading..." />
            <div className="carousel-caption d-none d-md-block">

            </div>
            </div>
            <div className="carousel-item">
            <img src={science2} className="d-block" alt="img is loading..." />
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

export default Sceince