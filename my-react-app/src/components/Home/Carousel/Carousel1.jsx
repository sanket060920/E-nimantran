import '../Carousel/Carousel1.css'
import Img1 from '../Images/Img1.jpg'
import Img2 from '../Images/Img2.jpg'
import Img3 from '../Images/Img3.jpg'
// import Img4 from '../Images/Img4.jpg'
// import Img5 from '../Images/Img5.jpg'

const Carousel1 = () => {
    return (
                <div id="carouselExampleControls" className="carousel slide w-100" data-bs-ride="carousel">
                    <div className="carousel-inner w-100">
                        <div className="carousel-item active">
                            <img src={Img1} className="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Customer 1</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit sunt cum! Nisi deleniti ea non eum reprehenderit deserunt eius.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Img2} className="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Customer 2</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis aliquam voluptatem dolore, facere ea culpa numquam necessitatibus sint quas!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Img3} className="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Customer 3</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam eligendi quisquam explicabo quis cum fuga dolor repellendus rerum enim. Incidunt.</p>
                            </div>
                        </div>
                    </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
  
    )
  };
  
  
  export default Carousel1;
  