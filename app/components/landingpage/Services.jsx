
import React from 'react'
import styled from 'styled-components';
import { motion as m } from "framer-motion";

const Services = () => {
    return (
        <ServiceContainer>
            <div className='info'>
                <m.h3
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.2 }}
                    viewport={{ once: true, amount: 1 }}>OUR PRODUCTS</m.h3>
                <m.h1
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.5 }}
                    viewport={{ once: true, amount: 1 }}>Sustainably Grown, Beautifully Green</m.h1>
                <m.p
                    initial={{ y: -150, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.8 }}
                    viewport={{ once: true, amount: 1 }}>At Santosh Farms, we offer a diverse range of grass varieties to suit every need and environment. Here are four of our most popular types:
                </m.p>
            </div>
            <div className="cards">
                <m.div className="card"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}>
                    <div className='card-img'>

                    </div>
                    <div className='card-info'>
                        <h2>Shade-Tolerant Grass</h2>
                        <p>  Perfect for areas with limited sunlight, this grass thrives in shaded environments, making it ideal for balconies, under trees, or indoor spaces. Its lush, green appearance adds a touch of elegance to any setting.  </p>
                        <button>e.g., Zoysia Grass</button>
                    </div>
                </m.div>
                <m.div className="card"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}>
                    <div className='card-img card-img2'>
                    </div>
                    <div className='card-info'>
                        <h2>Ornamental Grass </h2>
                        <p>Designed to enhance the aesthetic appeal of your spaces, this grass variety is perfect for decorative purposes. Its graceful, flowing blades add texture and beauty to gardens, terraces, and office spaces. </p>
                        <button>e.g., Fountain Grass</button>
                    </div>
                </m.div>
                <m.div className="card"
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}>
                    <div className='card-img card-img3'>
                    </div>
                    <div className='card-info'>
                        <h2>Outdoor Lawn Grass </h2>
                        <p> Known for its durability and resilience, Bermuda Grass is perfect for outdoor lawns, parks, and sports fields. It withstands heavy foot traffic and recovers quickly, maintaining its vibrant green color even in harsh weather conditions.</p>
                        <button>e.g., Bermuda Grass</button>
                    </div>
                </m.div>
            </div>
        </ServiceContainer>
    )
}

export default Services;

const ServiceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 100vw;
    overflow: hidden;
    min-height: 100vh;
    background-color: #f9f5f0;
    gap: 2rem;
    padding: 4rem 0;
    .info{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.5rem;
        h3{
            color: var(--headings);
            font-size: 1.4rem;
            font-weight: 600;
            letter-spacing: 0.2rem;
        }
        h1{
            font-size: 3rem;
            font-weight: 600;
        }
        p{
            color: var(--para);
            text-align: center;
            padding: 0 12rem;
            font-size: 1.1rem;
        }
    }
    .cards{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        padding: 0 8rem;
        .card{
            max-width: 30%;
            min-width: 30%;
            min-height: 27rem;
            max-height: 27rem;
            overflow: hidden;
            display: grid;
            grid-template-rows: 50% 50%;
            padding: 0.5rem;
            border-radius: 1rem;
            box-shadow: 1px 1px 25px #cfcfcf;
            .card-img{
                border-radius: 1rem;
            }
            .card-info{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 1rem;
                gap: 0.5rem;
                h2{
                    font-size: 1.1rem;
                    font-weight: 600;
                }
                p{
                    color: var(--para);
                    font-size: 0.9rem;
                    text-align: center;
                }
                button{
                    color: var(--headings);
                    font-size: 0.8rem;
                }
            }
        }
    }

    @media (min-width: 1800px) and (max-width: 3008px){
        .info{
        gap: 0.5rem;
        h3{
            font-size: 1.5rem;
        }
        h1{
            font-size: 3rem;
        }
        p{
            font-size: 1.25rem;
        }
    }
    .cards{
        
    .card{
            max-width: 30%;
            min-width: 30%;
            min-height: 40rem;
            max-height: 40rem;
            .card-info{
                h2{
                    font-size: 1.3rem;
                }
                p{
                    font-size: 1.1rem;
                    text-align: center;
                }
                button{
                    font-size: 1.2rem;
                }
            }
        }
    }
    }

    @media only screen and (max-width:955px){
        padding: 1rem 0;
        .cards{
            flex-direction: column;
            padding: 0 6rem;
            .card{
                max-width: 100%;
                min-width: 100%;
            }
        }
        .info{
            p{
                padding: 0 5rem;
            }
            h1{
                font-size: 2.5rem;
            }
        }
    }

    @media only screen and (max-width:660px){
        .info{
            padding: 0.5rem;
            h1{
                font-size: 2.5rem;
            }
            p{
                padding: 0 2rem;
            }
        }
        .cards{
            padding: 0 0.5rem;
        }
    }

    @media only screen and (max-width:490px){
        .info{
            h1{
                text-align: center;
                font-size: 1.8rem;
            }
        }
    }
`