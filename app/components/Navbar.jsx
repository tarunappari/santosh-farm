import React from 'react'
import styled from 'styled-components';
import logo from '../../public/logo.png'
import Image from 'next/image';
// import call from '../../../public/assests/nav/call.svg'
// import yt from '../../../public/assests/nav/youtube.svg'
// import insta from '../../../public/assests/nav/insta.svg'

const Navbar = () => {
    return (
        <NavbarContainer>
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
    position: absolute;
    z-index: 999;
    .bottom-section{
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

    @media only screen and (max-width:530px){
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