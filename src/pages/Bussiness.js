import React,{useState,useEffect} from 'react'
import "../css/index.css";
import bussiness from "../img/bussiness_news1.jpg"
// import bussiness1 from ""
import Cards from './Cards';

function Bussiness() {
  const [data, setData] = useState([]);
  //const[articles,setarticles]=useState([])
  
useEffect (() => {
  const getProducts = async () => {
    try {
      const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bd21a406a18442f684b1bfd1f3bad0df");
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
         
        <div className="container my-4">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={bussiness} className="d-block" alt="img is loading...." />
            <div className="carousel-caption d-none d-md-block">
            </div>
            </div>
            <div className="carousel-item">
            <img src="https://media.istockphoto.com/photos/crisis-in-news-picture-id147036034?b=1&k=20&m=147036034&s=170667a&w=0&h=AwPgqLUXvbBfH_WI_rzpVc1VNfaFCPJmvDrgourmMbE=" className="d-block" alt="img is loading..." />
            <div className="carousel-caption d-none d-md-block">

            </div>
            </div>
            <div className="carousel-item">
            <img src="https://media.istockphoto.com/photos/news-picture-id638044390?b=1&k=20&m=638044390&s=170667a&w=0&h=gtt010LBvPOQt012gml2KMlE2ouUXvNtzFZ7uPKVyRY=" className="d-block" alt="img is loading..." />
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
  )
}

export default Bussiness