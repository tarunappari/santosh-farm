import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Lottie from 'lottie-react'
import leaf from '../../../public/lottie/leaf.json'
import sun from '../../../public/lottie/sun.json'
import house from '../../../public/lottie/home.json'
import customer from '../../../public/lottie/customer.json'
import seedling from '../../../public/lottie/seedling.json'
import recycle from '../../../public/lottie/recycle.json'
import { motion as m } from "framer-motion";

const ChooseUs = () => {

    return (
        <Container>
            <div className='chooseUs-title'>
                <h2>WHY SANTOSH FARMS - WHY CHOOSE US</h2>
            </div>
            <ChooseUsContainer>
                <div className="left-container">
                    <m.h1
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', duration: 1, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }}>Bringing Nature to Every Space</m.h1>
                    <m.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', duration: 1, delay: 0.5 }}
                        viewport={{ once: true, amount: 0.5 }}>With over 20 years of expertise, we’ve grown from 2 to 250 acres, driven by 
                        quality, innovation, and sustainability. Using advanced machinery, automated 
                        irrigation, and precision farming, we ensure efficiency and eco-friendly 
                        practices while prioritizing customer satisfaction.</m.p>
                </div>
                <div className="right-container">
                    <div>
                        <div>
                            <div className='chooseUs-animation'
                            >
                                <Lottie animationData={leaf} loop={true} />
                            </div>
                            <h2>Premium Quality Grass</h2>
                        </div>
                        <div>
                            <div className='chooseUs-animation'>
                                <Lottie loop={true} animationData={recycle} />
                            </div>
                            <h2>Sustainable Farming </h2>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='chooseUs-animation'><Lottie loop={true} animationData={seedling} /></div>
                            <h2>Expertly Cultivated</h2>
                        </div>
                        <div>
                            <div className='chooseUs-animation'>
                                <Lottie loop={true} animationData={house} />
                            </div>
                            <h2>Versatile Solutions</h2>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='chooseUs-animation'>
                                <Lottie loop={true} animationData={sun} />
                            </div>
                            <h2>Year-Round Greenery</h2>
                        </div>
                        <div>
                            <div className='chooseUs-animation'>
                                <Lottie loop={true} animationData={customer} />
                            </div>
                            <h2>Customer Satisfaction</h2>
                        </div>
                    </div>
                </div>
            </ChooseUsContainer>
        </Container>
    )
}

export default ChooseUs;

let Container = styled.div`
    min-height: 100vh;
    background-color: #fafafa;
    position: relative;
    .chooseUs-title{
        position: absolute;
        top: 4rem;
        min-width: 98vw;
        h2{
            text-align: center;
            color: var(--headings);
            font-size: 2rem;
            font-weight: 600;
        }
    }

    @media (min-width: 1800px) and (max-width: 3000px){
        h2{
            font-size: 2rem;
        }
    }

    @media only screen and (max-width:955px){
        grid-template-columns: 1fr;
        min-height: auto;
    }

    @media only screen and (max-width:575px){
        .chooseUs-title{
        h2{
            font-size: 1.5rem !important;
        }
    }
    }
`

let ChooseUsContainer = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    .left-container{
        padding: 1.5rem;
        position: relative;
        h3{
            color: var(--headings);
            font-size: 1.2rem;
            font-weight: 600;
        }
        h1{
            font-size: 2rem;
            font-weight: 600;
        }
        p{
            padding-top: 0.8rem;
            color: var(--para);
            font-size:1rem;
        }
    }
    .right-container{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        &>div{
            display: grid;
            grid-template-columns: 1fr 1fr;
            &>div{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex-direction: column;
                h2{
                    font-size: 1.1rem;
                    font-weight: 600;
                }
            }
        }
    }
    .chooseUs-animation{
        width: 5rem;
    }

    @media (min-width: 1800px) and (max-width: 3000px){
        grid-template-columns: 1fr;
        .left-container{
        padding: 1.5rem 5rem;
        padding-top: 7rem;
        h1{
            font-size: 2.5rem;
            text-align: center;
        }
        p{
            font-size:1.3rem;
            text-align: center;
        }
    }
    .right-container{
        gap: 0.5rem;
        &>div{
            grid-template-columns: 1fr 1fr;
            &>div{
                h2{
                    font-size: 1.5rem;
                }
            }
        }
    }
    .chooseUs-animation{
        width: 7.5rem;
    }
    }

    @media only screen and (max-width:955px){
        grid-template-columns: 1fr;
        min-height: auto;
        padding-top: 8rem;
        padding-bottom: 4rem;
    }

    @media only screen and (max-width:575px){
        .left-container{
            h1{
                font-size: 1.4rem;
                text-align: center;
            }
            p{
                font-size: 0.9rem;
                text-align: center;
            }
        }

        .right-container{
        gap: 1rem;
        &>div{
            display: grid;
            grid-template-columns: 1fr 1fr;
            &>div{
                h2{
                    font-size: 1rem;
                }
            }
        }
    }
    .chooseUs-animation{
        width: 3rem;
    }
    }

    @media only screen and (max-width:350px){
        .right-container{
        &>div{
            grid-template-columns: 1fr ;
        }
    }
    .right-container{
        &>div{
            &>div{
                gap: 1rem;
            }
        }
    }
    .chooseUs-animation{
        width: 5rem;
    }
    }
`