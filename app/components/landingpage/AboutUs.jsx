import React from 'react'
import styled from 'styled-components';
import { motion as m } from "framer-motion";

const Aboutus = () => {
    return (
        <Aboutusontainer id='aboutus'>
            <div className="left-container">
                <div className="grass3">
                    <img src='/assests/tracktor (2).jpg' width={290} alt='img' loading="lazy"  />
                </div>
                <div className="farmhouse">
                    <img src='/assests/spray2.jpg' alt='img' width={290} loading="lazy"  />
                </div>
                <div className="experience">
                    <div style={{ color: 'var(--headings)', fontSize: '1.4rem' }}>20+</div>
                    <div>Years of </div>
                    <div>Experience</div>
                </div>
                <div className="grass2">
                    <img src='/assests/rolls.jpg' alt='img' width={290} loading="lazy" />
                </div>
            </div>
            <div className="right-container">
                <m.h3
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}>OUR STORY</m.h3>
                <m.h1
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}>We Provide the Green That Brings Comfort to Your Space</m.h1>
                <m.p
                    initial={{ x: 150, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.7 }}
                    viewport={{ once: true, amount: 0.5 }}>Santosh Farms & Nursery began with a vision for quality and sustainability. With 
                    advanced farming techniques and cutting-edge machinery, we’ve grown into a 
                    large-scale operation. Looking ahead, we plan to introduce new grass varieties, 
                    expand landscaping projects, and integrate smart farming technologies.</m.p>
            </div>
        </Aboutusontainer>
    )
}

export default Aboutus;

const Aboutusontainer = styled.div`
    min-height: 100vh;
    max-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    padding: 2rem;
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: center;
    align-items: center;
    .left-container{
        position: relative;
        padding-top: 1.5rem;
        .grass3{
            border: 6px solid #fff;
            position: absolute;
            width: 10rem;
            height: 8rem;
            z-index: 2;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .farmhouse{
            position: relative;
            left: 7rem;
            top: 3rem;
            position: relative;
        }
        .experience{
            border-radius: 50%;
            padding: 1.3rem;
            background-color: var(--background);
            position: absolute;
            left: 2rem;
            bottom: 5rem;
            display: flex;
            justify-content: center;
            align-items:center;
            flex-direction: column;
            /* border: 6px solid var(--white); */
            div{
                color: var(--parawhite);
                font-size: 0.9rem;
            }
        }
    }
    .right-container{
        padding: 1.5rem;
        position: relative;
        h3{
            color: var(--headings);
            font-size: 1.4rem;
            font-weight: 600;
        }
        h1{
            font-size: 2.1rem;
            font-weight: 600;
        }
        p{
            padding-top: 0.8rem;
            color: var(--para);
            font-size: 0.9rem;
        }
    }

    .grass2{
        width: 15rem;
        position: relative;
        left: 20rem;
        top: -9rem;
        border: 6px solid var(--white);
    }

    @media (min-width: 1800px) and (max-width: 3008px){
        .left-container{
            padding-left: 15rem;
            .experience{
                left: 8rem;
            }
            .farmhouse{
                width: 28rem;
                height: 40rem;
                img{
                    width: 100%;
                }
            }
            .grass3{
                width: 15rem;
                height: 13rem;
                background: none;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .grass2{
            width: 20rem;
            left: 28rem;
            img{
                width: 100%;
            }
        }
        .right-container{
        padding: 1.5rem;
        h3{
            font-size: 2rem;
        }
        h1{
            font-size: 3rem;
        }
        p{
            padding-top: 0.8rem;
            font-size: 1.2rem;
        }
    }
    }

    @media (min-width: 1800px) and (max-width: 2240px){
        .left-container{
            padding-left: 5rem;
        }
    }

    @media only screen and (max-width:1100px){
        display: flex;
        flex-direction: column-reverse;
        gap: 1rem;
        max-height: 100vh;
        padding: 0rem;
        .left-container{
            min-width: 100vw;
            padding-top: -1rem;
            padding-left: 8rem;
            .experience{
            left: 10rem;
        }
        }
    }

    @media only screen and (max-width:620px){
        padding: 1.5rem 0.7rem;
        gap: 1rem;
        max-height: none;
        .right-container{
            padding: 0;
            h3{
                font-size: 1.3rem;
                text-align: center;
            }
            h1{
            font-size: 1.5rem;
            text-align: center;
        }
        p{
            text-align: center;
        }
        }
        .left-container{
            padding-left: 0rem;
            .grass3{
                display: none;
            }
            .farmhouse{
                left: 3rem;
            }
            .grass2{
                width: 10rem;
                top: -28rem;
                left: 15rem;
            }
            .experience{
            left: 0.5rem;
        }
        }
    }

    @media only screen and (max-width:410px){
        .left-container{
            .farmhouse{
                left: 1.5rem;
            }
            .grass2{
                width: 10rem;
                top: -28rem;
                left: 13rem;
            }
            .experience{
            left: 0.5rem;
        }
        }
    }
`