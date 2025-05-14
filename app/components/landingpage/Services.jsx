import React, { memo } from 'react';
import styled from 'styled-components';
import { motion as m } from "framer-motion";

// Reusable animation variants
const fadeInUp = (delay = 0) => ({
    initial: { y: -50, opacity: 0 },
    whileInView: { opacity: 1, y: 0 },
    transition: { type: 'spring', duration: 1, delay },
    viewport: { once: true, amount: 1 },
});

const slideIn = (direction, delay = 0) => ({
    initial: { x: direction === "left" ? -100 : 100, opacity: 0 },
    whileInView: { opacity: 1, x: 0 },
    transition: { type: 'spring', duration: 1, delay },
    viewport: { once: true, amount: 0.5 },
});

// Card Component
const ProductCard = memo(({ title, description, example, imgClass, animation }) => (
    <m.div className="card" {...animation}>
        <div className={`card-img ${imgClass}`} />
        <div className='card-info'>
            <h2>{title}</h2>
            <p>{description}</p>
            <button>{example}</button>
        </div>
    </m.div>
));

const Products = () => {
    return (
        <ServiceContainer id='products'>
            <div className='info'>
                <m.h3 {...fadeInUp(0.2)}>OUR PRODUCTS</m.h3>
                <m.h1 {...fadeInUp(0.5)}>Sustainably Grown, Beautifully Green</m.h1>
                <m.p {...fadeInUp(0.8)}>
                    At Santosh Farms, we offer a diverse range of grass varieties to suit every need and environment. Here are four of our most popular types:
                </m.p>
            </div>
            <div className="cards">
                <ProductCard
                    title="Shade-Tolerant Grass"
                    description="Perfect for areas with limited sunlight, this grass thrives in shaded environments, making it ideal for balconies, under trees, or indoor spaces."
                    example="e.g., Zoysia Grass"
                    imgClass="card-img"
                    animation={slideIn("right", 0.2)}
                />
                <ProductCard
                    title="Ornamental Grass"
                    description="Designed to enhance the aesthetic appeal of your spaces, this grass variety is perfect for decorative purposes. Its graceful, flowing blades add texture and beauty."
                    example="e.g., Fountain Grass"
                    imgClass="card-img2"
                    animation={slideIn("left", 0.2)}
                />
                <ProductCard
                    title="Outdoor Lawn Grass"
                    description="Known for its durability, Bermuda Grass is perfect for outdoor lawns, parks, and sports fields. It withstands heavy foot traffic and harsh weather conditions."
                    example="e.g., Bermuda Grass"
                    imgClass="card-img3"
                    animation={slideIn("right", 0.2)}
                />
                <ProductCard
                    title="Paspalum Grass"
                    description="Best suited for shaded areas and sandy soils. With its soft texture and broad leaves, its a top choice for waterfront properties and shaded landscapes"
                    example="e.g., Buffalo Grass"
                    imgClass="card-img4"
                    animation={slideIn("right", 0.2)}
                />
            </div>
        </ServiceContainer>
    );
};

export default Products;

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
            font-size: 1.2rem;
            font-weight: 600;
            letter-spacing: 0.2rem;
        }
        h1{
            font-size: 2.3rem;
            font-weight: 600;
        }
        p{
            color: var(--para);
            text-align: center;
            padding: 0 12rem;
            font-size: 1rem;
        }
    }
    .cards{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 2rem;
        padding: 0 2rem;
        .card{
            max-width: 23vw !important;
            min-width: 23vw !important;
            min-height: 35rem !important;
            max-height: 35rem !important;
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

    @media (min-width: 661px) and (max-width: 1439px){
        .cards{
            display: grid;
            grid-template-columns: 1fr 1fr;
            place-items: center;
            gap: 1rem;
            padding: 0 6rem;
            .card{
                max-width: 40vw !important;
                min-width: 40vw !important;
                min-height: 25rem !important;
                max-height: 25rem !important;
            }
        }
    }

    @media only screen and (max-width:955px){
        padding: 1rem 0;
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
        .cards{
            display: grid;
            grid-template-columns: 1fr;
            place-items: center;
            gap: 1rem;
            padding: 0 6rem;
            .card{
                max-width: 90vw !important;
                min-width: 90vw !important;
                min-height: 25rem !important;
                max-height: 25rem !important;
            }
        }
        .info{
            padding: 0.5rem;
            h1{
                font-size: 2rem;
                text-align: center;
            }
            p{
                padding: 0 2rem;
            }
        }
        .cards{
            padding: 0 1rem;
        }
    }

    @media only screen and (max-width:490px){
        .info{
            padding-top: 2rem;
            h1{
                text-align: center;
                font-size: 1.3rem;
            }
            h3{
                font-size: 1rem;
            }
            p{
                font-size: 0.9rem;
                padding: 0 1rem;
            }
        }
    }
`