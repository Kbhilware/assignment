import React, { useState } from 'react'

const Header = () => {
    const toggleNav=()=>{
        let element = document.getElementById("navbarCollapse");
            element.classList.toggle("show");
    }
    return (
        <>
            <header className="navbar-light navbar-sticky header-static">
                <nav className="navbar navbar-expand-xl">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img className="light-mode-item navbar-brand-item" src="images/froctify.svg" alt="logo" />
                        </a>
                        <button onClick={toggleNav} className="navbar-toggler ms-auto" type="button">
                            <span className="navbar-toggler-animation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                        <div className="navbar-collapse collapse justify-content-center" id="navbarCollapse">
                            <ul className="navbar-nav navbar-nav-scroll mx-auto  ">
                                <li className="nav-item">
                                    <a  href="/" className="nav-link active" >Products</a>
                                </li>
                                <li className="nav-item">
                                    <a  href="/" className="nav-link" >Invest</a>
                                </li>
                                <li className="nav-item">
                                    <a  href="/" className="nav-link" >Community</a>
                                </li>
                                <li className="nav-item">
                                    <a  href="/" className="nav-link" >About</a>
                                </li>
                            </ul>
                            <div>
                                <button className="btn btn-primary">Early Access</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
