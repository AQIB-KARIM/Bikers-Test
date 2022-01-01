import { Input, Row, Col } from 'antd'
import React from 'react'
import Photogallery from '../Assets/Images/Bikers-1-11.png'
import { images } from '../Assets'

// import allimages from '../Assets/Images/.png.jpeg.jpg';


const GridImage = () => {

    // console.log(images)


   



    return (

        <div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div>
                            <h3>PHOTO GALLERY</h3>
                            <img style={{ marginTop: '-35px' }} src={Photogallery} width={250} />

                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <div>
                                <label>Sort by</label>
                            </div>

                            <Input placeholder="Venue:" bordered={false} type='text' />

                            <Input placeholder="Date:" bordered={false} type='text' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid System */}

            <div className='container'>

                {images.map((item, index) => (


                    <div className="row grid-container" key={index}>
                        <div className="col">

                            <img src={item} height='210px' width={220} />



                        </div>



                        <div className="col">

                            <div class="row subitems1">
                                <div style={{}} class="col-6 col-sm-3">

                                    <img src={images[1]} height='100px' />

                                </div>
                                <div style={{}} class="col-6 col-sm-3">
                                    <img src={images[2]} height='100px' />
                                </div>


                                <div class="w-100"></div>

                                <div style={{}} class="col-6 col-sm-3">
                                    <img src={images[3]} height='100px' />
                                </div>
                                <div style={{}} class="col-6 col-sm-3">
                                    <img src={images[4]} height='100px' />
                                </div>
                            </div>

                        </div>


                        <div style={{}} className="col">

                            <img src={item} height='210px' width={220} />

                        </div>

                        <div className="col">

                            <div class="row subitems1">
                                <div style={{}} class="col-6 col-sm-3">
                                    <img src={images[5]} height='100px' />
                                </div>
                                <div style={{}} class="col-6 col-sm-3">
                                    <img src={images[6]} height='100px' />
                                </div>


                                <div class="w-100"></div>

                                <div style={{}} class="col-6 col-sm-3">
                                    <img src={images[7]} height='100px' />
                                </div>
                                <div style={{}} class="col-6 col-sm-3">
                                    <img src={images[8]} height='100px' />
                                </div>
                            </div>

                        </div>




                    </div>

                ))}
                <br></br>



            </div>


        </div>
    )
}

export default GridImage
