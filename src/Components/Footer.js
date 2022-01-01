import React from 'react'
import '../Assets/Css/Footer.css'
import Logo from '../Assets/Images/icon-10.png'
import buildingImage from '../Assets/Images/Bikers-1-12.png'
import SignUpImage from '../Assets/Images/Bikers-1-01.png'
import Fbicon from '../Assets/Images/icon-12.png'
import Twittericon from '../Assets/Images/icon-13.png'
import Instaicon from '../Assets/Images/icon-14.png'

const Footer = () => {
    return (
        <div>

            <footer className="footer-section">
                <div className="container">

                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="#"><img src={Logo} width={200}  className="img-fluid" alt="logo" /></a>
                                    </div>

                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="https://www.facebook.com" target= '_blank'><img className='img-fluid' src = {Fbicon} width={10}/></a>
                                        <a href="https://www.twitter.com" target= '_blank'><img className='img-fluid' src =  {Twittericon} width={20}/></a>
                                        <a href="https://www.instagram.com" target= '_blank'><img className='img-fluid' src = {Instaicon} width={20}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <img src={SignUpImage} width={150} />
                                    </div>
                                    <div className='mt-4' style={{ color: "white" }}>
                                        <div className='col'><span >PHOTO GALLERY</span></div>
                                        <div className='col'><span >FIND BIKERS BOOTH</span></div>
                                        <div className='col'><span >FIND BIKERS EVENT</span></div>
                                        <div ><span >ABOUT BIKERS</span></div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">

                                <img src={buildingImage} width='450px' className='img-fluid' />


                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class="col text-center text-lg-left">
                                <div class="copyright-text">
                                    <p>Copyright &copy; 2021, Linkinsoft it solution</p>
                                </div>
                            </div>
                            <div class="col d-none d-lg-block text-right">
                                <div class="footer-menu">
                                    <ul>
                                        <li><a href="#">Privacy</a></li>
                                       
                                    </ul>
                                </div>
                            </div>

                            <div class="col d-none d-lg-block text-right">
                                <div class="footer-menu">
                                    <ul> 
                                        <li><a href="#">Terms</a></li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
