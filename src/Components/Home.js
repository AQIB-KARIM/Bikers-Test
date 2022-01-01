import React from 'react'
import '../Assets/Css/Home.css'
import Cover1 from '../Assets/Images/icon-01.png'
import Cover2 from '../Assets/Images/background-biker.jpg'
import Navbar from './Navbar'
import UploadImage from './UploadImage'
import GridImage from './GridImage'
import Footer from './Footer'



const Home = () => {
    return (
        <div>
            <div className='col-24'>

                <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">

                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img src={Cover1} className="d-block w-100  bg-image" alt="..." />

                            <div className='carousel-caption row'>
                                <div className='col ride-pride'>
                                    <span className='ride'>RIDE WITH PRIDE </span>
                                    <blockquote style={{ fontSize: "20px" }}>"Bikers struggle to enjoy their hobbies,we create special <br></br> events,so they can RIDE WITH PRIDE in Saudia Arabia"</blockquote>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Cover2} className="d-block w-100 bg-image" alt="..." />
                        </div>

                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                <div className='nav-overlay'>
                    <Navbar />
                </div>



            </div>

            <div className='col-12  upload-image text-center'>

                <UploadImage />

            </div>

            <div className='container-fluid'>
                <GridImage/>
            </div>

            <div>
                <Footer/>
            </div>


        </div>
    )
}

export default Home
