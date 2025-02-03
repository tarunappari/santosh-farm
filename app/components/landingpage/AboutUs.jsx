import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import grass1 from '../../../public/assests/spray.jpg'
import grass2 from '../../../public/assests/rolls.jpg'
import grass3 from '../../../public/assests/tracktor.jpg'
import { motion as m } from "framer-motion";

const Aboutus = () => {
    return (
        <Aboutusontainer>
            <div className="left-container">
                <div className="grass3">
                    <Image src={grass3} alt='img' width={320} loading="lazy" />
                </div>
                <div className="farmhouse">
                    <Image src={grass1} alt='img' width={320} loading="lazy" />
                </div>
                <div className="experience">
                    <div style={{ color: 'var(--headings)', fontSize: '1.4rem' }}>20+</div>
                    <div>Years of </div>
                    <div>Experience</div>
                </div>
                <div className="grass2">
                    <Image src={grass2} alt='img' width={320} loading="lazy" />
                </div>
            </div>
            <div className="right-container">
                <m.h3
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}>ABOUT US</m.h3>
                <m.h1
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}>We Provide the Green That Brings Comfort to Your Space</m.h1>
                <m.p
                    initial={{ x: 150, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.7 }}
                    viewport={{ once: true, amount: 0.5 }}>Your destination for premium-quality grass solutions. We specialize in diverse grass varieties to transform any space into a lush green haven, whether it’s a balcony, garden, or terrace. With sustainable practices and a passion for greenery, we provide vibrant, durable, and eco-friendly grass tailored to your needs. At Santosh Farms, we don’t just grow grass—we cultivate beauty, comfort, and happiness in every corner of your life.</m.p>
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
            height: 10rem;
            z-index: 2;
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
            font-size: 1.5rem;
            font-weight: 600;
        }
        h1{
            font-size: 2.4rem;
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
                left: 17rem;
            }
            .farmhouse{
                width: 30rem;
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
            width: 22rem;
            left: 28rem;
            img{
                width: 100%;
            }
        }
        .right-container{
        padding: 1.5rem;
        h3{
            font-size: 3rem;
        }
        h1{
            font-size: 4rem;
        }
        p{
            padding-top: 0.8rem;
            font-size: 1.9rem;
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
            }
            h1{
            font-size: 2rem;
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