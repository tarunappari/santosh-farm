"use client"
import React from 'react'
import styled from 'styled-components';

const HeroSection = () => {
    return (
        <HeroSectionContainer className='herosection'>
            <div>
                <h2>Santhosh Grass Farm</h2>
            </div>
            <div>
                <h1>Premium Grass for Beautiful and Lush Landscapes</h1>
            </div>
            <div>
                <p>Transform your spaces with our high-quality grass, grown to bring elegance, durability, and sustainability to every corner of your home or garden. Let us help you create the lush green environment you’ve always dreamed of.</p>
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
    h2,h1,p{
        z-index: 9;
        position: relative;
    }
    h2{
        color: var(--headings);
        font-size: 1.5rem;
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