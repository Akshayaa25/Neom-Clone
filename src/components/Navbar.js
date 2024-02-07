import React from 'react';
import './Styles/Navbar.css';
import { FiSearch } from 'react-icons/fi';
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
    window.onscroll = function () { changeColor() };
    
    function changeColor() {
        const Navbar = document.querySelector('.nav-bar');
        if (document.documentElement.scrollTop) {
            Navbar.style.backgroundColor = '#1d1f22';
        }
        else {
            Navbar.style.backgroundColor = 'transparent';
        }
    }

    function defaultNavColor() {
        const Navbar = document.querySelector('.nav-bar');
        Navbar.style.backgroundColor = 'black';
    }

    function displayLang() {
        const arrow = document.querySelector('.lang-link .main-link svg')
        const subLang = document.querySelector('.sub-nav-lang');
        const NavLinkAside = document.querySelector('.nav-links-aside .main-link');
        if(subLang.style.display !== 'block') {
            subLang.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)';
            NavLinkAside.style.zIndex = 999;
        } else {
            subLang.style.display = 'none';
            arrow.style.transform = 'rotate(0deg)';
        }
    }

    return (
        <div className='nav-bar' onMouseEnter={defaultNavColor} onMouseLeave={changeColor}>
            <div className='logo'>
                <img src='https://neom.scene7.com/is/image/neom/logo-neom-en-spaced?fmt=png-alpha&scl=1' />
            </div>
            <div className='nav-links-section'>
                <div className='nav-links'>
                    <div className='link-item'>
                        <div className='main-link'>
                            About
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xmlSpace="preserve"><path d="M15.4,3.7c-0.2-0.2-0.4-0.2-0.7-0.1L8,8.1L1.3,3.6C1.1,3.4,0.8,3.5,0.6,3.7c-0.2,0.2-0.2,0.5,0,0.7l7,8c0.1,0.1,0.2,0.2,0.4,0.2s0.3-0.1,0.4-0.2l7-8C15.5,4.1,15.5,3.9,15.4,3.7z"></path></svg>
                        </div>
                        <div className='sub-nav'>
                            <div className='sub-content'>
                                <ul>
                                    <li>
                                        <p>01</p>
                                        <h1>What is neom</h1>
                                    </li>
                                    <li>
                                        <p>02</p>
                                        <h1>Neom leadership team</h1>
                                    </li>
                                    <li>
                                        <p>03</p>
                                        <h1>CSR Initiatives</h1>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='link-item'>
                        <div className='main-link'>
                            Regions
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xmlSpace="preserve"><path d="M15.4,3.7c-0.2-0.2-0.4-0.2-0.7-0.1L8,8.1L1.3,3.6C1.1,3.4,0.8,3.5,0.6,3.7c-0.2,0.2-0.2,0.5,0,0.7l7,8c0.1,0.1,0.2,0.2,0.4,0.2s0.3-0.1,0.4-0.2l7-8C15.5,4.1,15.5,3.9,15.4,3.7z"></path></svg>
                        </div>
                        <div className='sub-nav'>
                            <div className='sub-content'>
                                <ul>
                                    <li>
                                        <p>01</p>
                                        <h1>Gulf of Aqaba</h1>
                                    </li>
                                    <li>
                                        <p>02</p>
                                        <h1>Oxagon</h1>
                                    </li>
                                    <li>
                                        <p>03</p>
                                        <h1>Sindalah</h1>
                                    </li>
                                    <li>
                                        <p>04</p>
                                        <h1>The line</h1>
                                    </li>
                                    <li>
                                        <p>05</p>
                                        <h1>Trojena</h1>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='link-item'>
                        <div className='main-link'>
                            Our Business
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xmlSpace="preserve"><path d="M15.4,3.7c-0.2-0.2-0.4-0.2-0.7-0.1L8,8.1L1.3,3.6C1.1,3.4,0.8,3.5,0.6,3.7c-0.2,0.2-0.2,0.5,0,0.7l7,8c0.1,0.1,0.2,0.2,0.4,0.2s0.3-0.1,0.4-0.2l7-8C15.5,4.1,15.5,3.9,15.4,3.7z"></path></svg>
                        </div>
                        <div className='sub-nav'>
                            <div className='sub-content'>
                                <ul>
                                    <li>
                                        <p>01</p>
                                        <h1>Sectors</h1>
                                    </li>
                                    <li>
                                        <p>02</p>
                                        <h1>Partners</h1>
                                    </li>
                                    <li>
                                        <p>03</p>
                                        <h1>Suppliers</h1>
                                    </li>
                                    <li>
                                        <p>04</p>
                                        <h1>Neom Hotel Development</h1>
                                    </li>
                                    <li>
                                        <p>05</p>
                                        <h1>Port of Neom</h1>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='link-item'>
                        <div className='main-link'>
                            News
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xmlSpace="preserve"><path d="M15.4,3.7c-0.2-0.2-0.4-0.2-0.7-0.1L8,8.1L1.3,3.6C1.1,3.4,0.8,3.5,0.6,3.7c-0.2,0.2-0.2,0.5,0,0.7l7,8c0.1,0.1,0.2,0.2,0.4,0.2s0.3-0.1,0.4-0.2l7-8C15.5,4.1,15.5,3.9,15.4,3.7z"></path></svg>
                        </div>
                        <div className='sub-nav'>
                            <div className='sub-content'>
                                <ul>
                                    <li>
                                        <p>01</p>
                                        <h1>NewsRoom</h1>
                                    </li>
                                    <li>
                                        <p>02</p>
                                        <h1>Media Gallery</h1>
                                    </li>
                                    <li>
                                        <p>03</p>
                                        <h1>Contact us</h1>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='link-item'>
                        <div className='main-link'>
                            Invest
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xmlSpace="preserve"><path d="M15.4,3.7c-0.2-0.2-0.4-0.2-0.7-0.1L8,8.1L1.3,3.6C1.1,3.4,0.8,3.5,0.6,3.7c-0.2,0.2-0.2,0.5,0,0.7l7,8c0.1,0.1,0.2,0.2,0.4,0.2s0.3-0.1,0.4-0.2l7-8C15.5,4.1,15.5,3.9,15.4,3.7z"></path></svg>
                        </div>
                        <div className='sub-nav'>
                            <div className='sub-content'>
                                <ul>
                                    <li>
                                        <p>01</p>
                                        <h1>Invest in Neom</h1>
                                    </li>
                                    <li>
                                        <p>02</p>
                                        <h1>Neom Investment Fund</h1>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='link-item'>
                        <div className='main-link'>
                            Careers
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xmlSpace="preserve"><path d="M15.4,3.7c-0.2-0.2-0.4-0.2-0.7-0.1L8,8.1L1.3,3.6C1.1,3.4,0.8,3.5,0.6,3.7c-0.2,0.2-0.2,0.5,0,0.7l7,8c0.1,0.1,0.2,0.2,0.4,0.2s0.3-0.1,0.4-0.2l7-8C15.5,4.1,15.5,3.9,15.4,3.7z"></path></svg>
                        </div>
                        <div className='sub-nav'>
                            <div className='sub-content'>
                                <ul>
                                    <li>
                                        <p>01</p>
                                        <h1>Working at Neom</h1>
                                    </li>
                                    <li>
                                        <p>02</p>
                                        <h1>Job Search</h1>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='nav-links-aside'>
                    <FiSearch />
                    <div className='link-item lang-link' onClick={displayLang}>
                        <div className='main-link'>
                            English
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xmlSpace="preserve"><path d="M15.4,3.7c-0.2-0.2-0.4-0.2-0.7-0.1L8,8.1L1.3,3.6C1.1,3.4,0.8,3.5,0.6,3.7c-0.2,0.2-0.2,0.5,0,0.7l7,8c0.1,0.1,0.2,0.2,0.4,0.2s0.3-0.1,0.4-0.2l7-8C15.5,4.1,15.5,3.9,15.4,3.7z"></path></svg>
                        </div> 
                        <div className='sub-nav-lang'>
                                <div className='sub-content-lang'>
                                    <ul>
                                        <li>
                                            <p>English</p>
                                        </li>
                                        <li>
                                            <p>العربية</p>        
                                        </li>
                                        <li>
                                            <p>中文 (中国)</p>
                                        </li>
                                        <li>
                                            <p>日本語</p>
                                        </li>
                                        <li>
                                            <p>Deutsch</p>
                                        </li>
                                        <li>
                                            <p>français</p>
                                        </li>
                                        <li>
                                            <p>русский</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>  
                    </div>
                    <div className='link-btn'>Invest in Neom</div>
                    <div className='menu-bar'>
                        <RxHamburgerMenu/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;