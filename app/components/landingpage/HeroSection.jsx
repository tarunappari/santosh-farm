"use client"
import React from 'react'
import styled from 'styled-components';
import Lottie from 'lottie-react'
import grass from '../../../public/lottie/grass.json'
import { motion as m } from "framer-motion";

const HeroSection = () => {
    return (
        <HeroSectionContainer className='herosection'>
            <div>
                <m.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}>Santhosh Grass Farm</m.h2>
            </div>
            <div>
                <m.h1
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}>Premium Grass for Beautiful and Lush Landscapes</m.h1>
            </div>
            <div>
                <m.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}>Transform your spaces with our high-quality grass, grown to bring elegance, durability, and sustainability to every corner of your home or garden. Let us help you create the lush green environment you’ve always dreamed of.</m.p>
            </div>
            <div className='landing-animation'>
                <Lottie loop={true} animationData={grass} />
            </div>
        </HeroSectionContainer>
    )
}

export default HeroSection;

const HeroSectionContainer = styled.div`
    background-color: rgb(0, 0, 0,0.3);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    .landing-animation{
        width: 45%;
        height: 5rem;
    }
    h2,h1,p{
        z-index: 9;
        position: relative;
    }
    h2{
        color: var(--headings);
        font-size: 1.8rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
    }
    h1{
        font-size: 4rem;
        font-weight: 600;
        text-align: center;
        color: var(--white);
    }
    p{
        color: var(--parawhite);
        text-align: center;
        padding: 0 5rem;
        font-size: 1.1rem;
    }

    @media only screen and (max-width:780px){
        padding: 1rem;
        h1{
            font-size: 3.5rem;
        }
        p{
            padding: 0 2rem;
        }
    }

    @media only screen and (max-width:555px){
        padding: 0.4rem;
        gap: 2rem;
        h1{
            font-size: 2rem;
        }
        p{
            padding: 0 0.5rem;
        }
    }
`