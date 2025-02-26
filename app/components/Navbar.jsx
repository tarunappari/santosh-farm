import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

// Corrected image paths (public folder usage in Next.js)
import logo from '../../public/logo.png'
const call = "/assests/nav/call.svg";
const yt = "/assests/nav/youtube.svg";
const insta = "/assests/nav/insta.svg";

const Navbar = () => {
    return (
        <NavbarContainer>
            <div className="topsection">
                <div>
                    <img src={call} alt='call' width={20} height={20} /> 9618461188 / 9949151188
                </div>
                <div>
                    <Link href="https://youtube.com" target='_blank' rel="noopener noreferrer">
                        <Image src={yt} alt='YouTube' width={20} height={20} />
                    </Link>
                    <Link href="https://instagram.com" target='_blank' rel="noopener noreferrer">
                        <Image src={insta} alt='Instagram' width={20} height={20} />
                    </Link>
                    <Link href="#contact">
                        <button>BOOK NOW!</button>
                    </Link>
                </div>
            </div>
            <div className="bottom-section">
                <div>
                    <img src='/logo.png' alt="logo" width={80} height={80}/>
                </div>
                <div className='links'>
                    <Link href="#aboutus"><button>About Us</button></Link>
                    <Link href="#products"><button>Services</button></Link>
                    <Link href="#contact"><button>Contact Us</button></Link>
                </div>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;

const NavbarContainer = styled.div`
    position: relative;
    z-index: 999;
    .topsection {
        background-color: #0a0a0a;
        color: #ededed;
        padding: 0.5rem 2rem;
        display: flex;
        justify-content: space-between;
        
        div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
            color: var(--parawhite);

            button {
                padding: 0.5rem 1rem;
                margin: 0.5rem;
                font-size: 0.85rem;
                background-color: var(--headings);
                border-radius: 0.3rem;
            }
        }
    }

    .bottom-section {
        position: absolute; /* Changed from absolute */
        width: 100%; /* Changed from min-width: 98vw */
        padding: 0rem 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--white);

        div {
            display: flex;
            gap: 1rem;
            padding: 0rem;

            button {
                font-weight: 500;
                transition: all 0.2s;
                padding: 0rem 0.5rem;
            }

            button:hover {
                font-size: 1.05rem;
                color: #d1d1d1;
            }
        }
    }

    @media only screen and (max-width: 530px) {
        .topsection {
            padding: 0.5rem;
            
            div {
                font-size: 0.8rem;

                button {
                    padding: 0.3rem 1rem;
                }
            }
        }

        .bottom-section {
            padding: 0rem 0.3rem;
            
            div {
                gap: 0.5rem;

                button {
                    font-weight: 500;
                    font-size: 0.9rem;
                    padding: 0;
                }
            }

            .links{
                display: none;
            }
        }
    }
`;
