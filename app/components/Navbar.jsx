import React from 'react'
import styled from 'styled-components';
import logo from '../../public/logo.png'
import Image from 'next/image';
import call from '../../public/assests/nav/call.svg'
import yt from '../../public/assests/nav/youtube.svg'
import insta from '../../public/assests/nav/insta.svg'

const Navbar = () => {
    return (
        <NavbarContainer>
            <div className="topsection">
                <div><Image src={call} alt='call' width={20} /> 9618461188 / 9949151188</div>
                <div>
                    <a href="" target='_blank'><Image src={yt} alt='call' width={20} /></a>
                    <a href="" target='_blank'><Image src={insta} alt='call' width={20} /></a>
                    <a href="#contact"><button>BOOK NOW!</button></a>
                </div>
            </div>
            <div className="bottom-section">
                <div>
                    <Image src={logo} alt='logo' width={100} />
                </div>
                <div>
                    <button>About Us</button>
                    <button>Services</button>
                    <button>Contact Us</button>
                </div>
            </div>
        </NavbarContainer>
    )
}

export default Navbar;

const NavbarContainer = styled.div`
    position: relative;
    z-index: 999;
    .topsection{
        background-color: #0a0a0a;
        color: #ededed;
        padding: 0rem 2rem;
        display: flex;
        justify-content: space-between;
        div{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
            color: var(--parawhite);
            button{
                padding: 0.5rem 1rem;
                margin: 0.5rem;
                font-size: 0.85rem;
                background-color: var(--headings);
                border-radius: 0.3rem;
            }
        }
    }
    .bottom-section{
        position: absolute;
        min-width: 98vw;
        overflow: hidden;
        padding: 0rem 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--white);
        div{
            display: flex;
            gap: 1rem;
            padding: 0rem;
            button{
                font-weight: 500;
                transition: all 0.2s;
                padding: 0rem 0.5rem;
            }
            button:hover{
                font-size: 1.05rem;
                color: #d1d1d1;
            }
        }
    }

    @media (min-width: 1800px) and (max-width: 3008px){
        .bottom-section{
            img{
                width: 10rem;
            }
        div{
            button{
                font-size: 2rem;
                font-weight: 500;
                transition: all 0.2s;
                padding: 0rem 0.5rem;
            }
            button:hover{
                font-size: 2.05rem;
                color: #d1d1d1;
            }
        }
    }
    }

    @media only screen and (max-width:530px){
        .topsection{
            padding: 0.5rem;
          div{
            font-size: 0.8rem;
            button{
                padding: 0.3rem 1rem;
            }
        }
    }
    .bottom-section{
        padding: 0rem 0.3rem;
        div{
            gap: 0.5rem;
            button{
                font-weight: 500;
                font-size: 0.9rem;
                padding: 0;
            }
        }
    }
    }
`