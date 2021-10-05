import react from 'react'
import './App.css';


export default function TT()
{
return(
     <>  
 <div >
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src="/public\logo192.png" className="d-block w-100" alt="..." height="600px" width="200px" />
          </div>
          <div className="carousel-item">
            <img src="public\logo192.png" className="d-block w-100" alt="..." height="600px" width="200px" />
          </div>
          <div className="carousel-item">
            <img src="public\logo192.png" className="d-block w-100" alt="..." height="600px" width="200px" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


</>
);
}

