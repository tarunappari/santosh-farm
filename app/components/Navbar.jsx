import React from 'react'
import styled from 'styled-components';
// import logo from '../../../public/bimal-logo.png'
// import Image from 'next/image';
// import call from '../../../public/assests/nav/call.svg'
// import yt from '../../../public/assests/nav/youtube.svg'
// import insta from '../../../public/assests/nav/insta.svg'

const Navbar = () => {
    return (
        <NavbarContainer>
            <div className="bottom-section">
                <div>
                    {/* <Image src={logo} alt='logo' width={80} /> */}
                    logo
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
    position: absolute;
    z-index: 999;
    margin-top: 0.5rem;
    .bottom-section{
        min-width: 98vw;
        overflow: hidden;
        padding: 0.2rem 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--white);
        div{
            display: flex;
            gap: 1rem;
            padding: 0.2rem;
            button{
                font-weight: 500;
                transition: all 0.2s;
                padding: 0.8rem;
            }
            button:hover{
                font-size: 1.05rem;
                color: #d1d1d1;
            }
        }
    }

    @media only screen and (max-width:530px){
    .bottom-section{
        padding: 0.2rem 0.3rem;
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