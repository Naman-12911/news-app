import React,{useState,useEffect} from 'react'
import "../css/index.css";
import news from  "../img/news2.jpg"
import news1 from "../img/news 2.jpg"
import Cards from './Cards';

function Home() {
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
            <img src={news} className="d-block" alt="img is loading...." />
            <div className="carousel-caption d-none d-md-block">
            </div>
            </div>
            <div className="carousel-item">
            <img src={news1} className="d-block" alt="img is loading..." />
            <div className="carousel-caption d-none d-md-block">

            </div>
            </div>
            <div className="carousel-item">
            <img src="https://images.moneycontrol.com/static-mcnews/2017/07/Breaking-770x433.jpg?impolicy=website&width=400&height=225" className="d-block" alt="img is loading..." />
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

export default Home