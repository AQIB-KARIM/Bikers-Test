import React from 'react'
import Logo from '../Assets/Images/Bikers-1-03.png'

const Navbar = () => {
    return (
        <div>

            <div className='col-24'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <img className="navbar-brand" src={Logo} width={100} />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="#">PHOTO GALLERY</a>
                                <a className="nav-link" href="#">FIND BIKERS EVENTS</a>
                                <a className="nav-link" href="#">ABOUT BIKERS</a>

                            </div>
                            <div className='col-3 nav-signup'>
                                Sign Up
                            </div>
                        </div>

                    </div>
                </nav>
            </div>

        </div>
    )
}

export default Navbar
