"use client"
import React from 'react'
import styled from 'styled-components';
import Lottie from 'lottie-react'
import grass from '../../../public/lottie/landing.json'
import { motion as m } from "framer-motion";

const HeroSection = () => {
    return (
        <HeroSectionContainer className='herosection'>
            <div className="left-container">
                <div>
                    <m.h2
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', duration: 1, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }}>Santhosh Farm</m.h2>
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
                        viewport={{ once: true, amount: 0.5 }}> Welcome to Santosh Farms & Nursery, a leader in premium grass and plant
                        cultivation. From 2 acres in 2004 to 250 acres today, we’ve set industry
                        benchmarks in innovation, sustainability, and quality. Trusted by landscapers,
                        builders, and homeowners, we bring nature closer—one green patch at a time.</m.p>
                </div>
            </div>
            <div className='landing-animation'>
                <div className="lottie-animation">
                    <Lottie loop={true} animationData={grass} />
                </div>
            </div>
        </HeroSectionContainer>
    )
}

export default HeroSection;

const HeroSectionContainer = styled.div`
    background-color: rgb(0, 0, 0);
    min-height: 95vh;
    display: grid;
    grid-template-columns: 65% 35%;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
    .left-container{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        gap: 1rem;
    }
    .landing-animation{
        .lottie-animation{
            width: 80%;
        }
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
        font-size: 3.5rem;
        font-weight: 600;
        color: var(--white);
    }
    p{
        color: var(--parawhite);
        font-size: 1rem;
    }

    @media (min-width: 1800px) and (max-width: 3008px){
        h2{
        font-size: 2.2rem;
    }
    h1{
        font-size: 3.5rem;
    }
    p{
        font-size: 1.2rem;
    }
    }

    @media only screen and (max-width:780px){
        padding: 1rem;
        grid-template-columns: 100%;
        h2,h1,p{
        text-align: center;
        }
        h1{
            font-size: 2rem;
        }
        .left-container{
            align-items: center;
        }
        .landing-animation{
            display: flex;
            align-items: center;
            justify-content: center;
        .lottie-animation{
            width: 50%;
        }
    }
    }

    @media only screen and (max-width:555px){
        padding: 0.4rem;
        gap: 2rem;
        h1{
            font-size: 1.6rem;
        }
        p{
            padding: 0 0.5rem;
        }
        .landing-animation{
        .lottie-animation{
            margin-top: -6rem;
            width: 80%;
        }
    }
    }
`