import React from 'react'
import styled from 'styled-components';
import Lottie from 'lottie-react'
import quotes from '../../../public/assests/reviews/quotes.svg'
import star from '../../../public/assests/reviews/star.svg'
import couple from '../../../public/assests/reviews/itachi.jpg'
import review from '../../../public/lottie/review.json'
import Image from 'next/image';

const Testimonals = () => {
    return (
        <TestimonalsContainer>
            <div className='info'>
                <div className="left">
                    <h3>What Our Clients Say</h3>
                    <h1>Trusted by Landscapers & Homeowners Alike</h1>
                    <p>At Santosh Farms, we take pride in the trust our customers place in us. Here’s what some of them are saying: </p>
                </div>
                <div className="right">
                    <Lottie loop={true} animationData={review} />
                </div>
            </div>

            <div className="slider ">
                <div className="slider-track">
                    <div className="slide">
                        <div className="testimonal-card">
                            <div>
                                <div>
                                    <Image src={quotes} alt='quotes' width={50} className='quote' />
                                </div>
                                <div>
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                </div>
                            </div>
                            <div>
                                <p>I transformed my balcony into a green paradise with Santosh Farms’ shade-tolerant grass. It’s lush, easy to maintain, and adds so much life to my home!</p>
                            </div>
                            <div className='guest'>
                                <div>
                                    <Image src={couple} alt='guest' width={30} />
                                </div>
                                <div>
                                    <h3>Jenny Robert</h3>
                                    <p>Guest</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="testimonal-card">
                            <div>
                                <div>
                                    <Image src={quotes} alt='quotes' width={50} className='quote' />
                                </div>
                                <div>
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                </div>
                            </div>
                            <div>
                                <p>I transformed my balcony into a green paradise with Santosh Farms’ shade-tolerant grass. It’s lush, easy to maintain, and adds so much life to my home!</p>
                            </div>
                            <div className='guest'>
                                <div>
                                    <Image src={couple} alt='guest' width={30} />
                                </div>
                                <div>
                                    <h3>Jenny Robert</h3>
                                    <p>Guest</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="testimonal-card">
                            <div>
                                <div>
                                    <Image src={quotes} alt='quotes' width={50} className='quote' />
                                </div>
                                <div>
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                </div>
                            </div>
                            <div>
                                <p>I transformed my balcony into a green paradise with Santosh Farms’ shade-tolerant grass. It’s lush, easy to maintain, and adds so much life to my home!</p>
                            </div>
                            <div className='guest'>
                                <div>
                                    <Image src={couple} alt='guest' width={30} />
                                </div>
                                <div>
                                    <h3>Jenny Robert</h3>
                                    <p>Guest</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="testimonal-card">
                            <div>
                                <div>
                                    <Image src={quotes} alt='quotes' width={50} className='quote' />
                                </div>
                                <div>
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                </div>
                            </div>
                            <div>
                                <p>I transformed my balcony into a green paradise with Santosh Farms’ shade-tolerant grass. It’s lush, easy to maintain, and adds so much life to my home!</p>
                            </div>
                            <div className='guest'>
                                <div>
                                    <Image src={couple} alt='guest' width={30} />
                                </div>
                                <div>
                                    <h3>Jenny Robert</h3>
                                    <p>Guest</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="testimonal-card">
                            <div>
                                <div>
                                    <Image src={quotes} alt='quotes' width={50} className='quote' />
                                </div>
                                <div>
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                </div>
                            </div>
                            <div>
                                <p>I transformed my balcony into a green paradise with Santosh Farms’ shade-tolerant grass. It’s lush, easy to maintain, and adds so much life to my home!</p>
                            </div>
                            <div className='guest'>
                                <div>
                                    <Image src={couple} alt='guest' width={30} />
                                </div>
                                <div>
                                    <h3>Jenny Robert</h3>
                                    <p>Guest</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="testimonal-card">
                            <div>
                                <div>
                                    <Image src={quotes} alt='quotes' width={50} className='quote' />
                                </div>
                                <div>
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                </div>
                            </div>
                            <div>
                                <p>I transformed my balcony into a green paradise with Santosh Farms’ shade-tolerant grass. It’s lush, easy to maintain, and adds so much life to my home!</p>
                            </div>
                            <div className='guest'>
                                <div>
                                    <Image src={couple} alt='guest' width={30} />
                                </div>
                                <div>
                                    <h3>Jenny Robert</h3>
                                    <p>Guest</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="testimonal-card">
                            <div>
                                <div>
                                    <Image src={quotes} alt='quotes' width={50} className='quote' />
                                </div>
                                <div>
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                </div>
                            </div>
                            <div>
                                <p>I transformed my balcony into a green paradise with Santosh Farms’ shade-tolerant grass. It’s lush, easy to maintain, and adds so much life to my home!</p>
                            </div>
                            <div className='guest'>
                                <div>
                                    <Image src={couple} alt='guest' width={30} />
                                </div>
                                <div>
                                    <h3>Jenny Robert</h3>
                                    <p>Guest</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="testimonal-card">
                            <div>
                                <div>
                                    <Image src={quotes} alt='quotes' width={50} className='quote' />
                                </div>
                                <div>
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                    <Image src={star} alt='star' width={20} />
                                </div>
                            </div>
                            <div>
                                <p>I transformed my balcony into a green paradise with Santosh Farms’ shade-tolerant grass. It’s lush, easy to maintain, and adds so much life to my home!</p>
                            </div>
                            <div className='guest'>
                                <div>
                                    <Image src={couple} alt='guest' width={30} />
                                </div>
                                <div>
                                    <h3>Jenny Robert</h3>
                                    <p>Guest</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TestimonalsContainer>
    )
}

export default Testimonals;


const TestimonalsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: #f9f5f0;
    min-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    padding: 1rem 0;
    .info{
        display: grid;
        grid-template-columns: 65% 45%;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .left{
            display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.5rem;
        h3{
            color: var(--headings);
            font-size: 1.3rem;
            font-weight: 600;
            letter-spacing: 0.2rem;
        }
        h1{
            font-size: 2.5rem;
            font-weight: 600;
            text-align: center;
        }
        p{
            color: var(--para);
            text-align: center;
            font-size: 1.1rem;
            padding: 0 12rem;
        }
        }
        .right{
            width: 25rem;
            padding: 2rem;
        }
    }

    .testimonal-cards {
  display: flex;
  gap: 3rem;
  padding: 0 4rem;
  margin-bottom: 2rem;
}

.testimonal-card {
  box-shadow: 2px 1px 25px #a5a5a5;
  padding: 1rem;
  position: relative; /* Creates a stacking context for the card */
  background-color: #f9f5f0;
  z-index: 1; /* Ensures it appears above the ::before pseudo-element */
  border-radius: 0.3rem;
  min-height: 10rem;
  max-width: 35rem;
  min-width: 35rem;
  cursor: pointer;
}

.testimonal-card > div {
  display: flex;
  justify-content: space-between;
}

.testimonal-card > div div {
  display: flex;
  gap: 0.3rem;
}

.testimonal-card p {
  color: var(--para);
}

.quote {
  opacity: 0.2;
  position: relative;
  top: 1rem;
}

.testimonal-card::before {
  content: '';
  position: absolute;
  bottom: -1.2rem; /* Adjust to position below the card */
  left: 3rem;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 1.5rem solid transparent; /* Adjust width of the arrow */
  border-right: 1.5rem solid transparent;
  border-top: 1.5rem solid #f9f5f0; /* Matches card background */
}

.guest{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    justify-self: flex-start !important;
    bottom: -6rem;
    gap: 1rem;
    img{
        border-radius: 50%;
        overflow: hidden;
        width: 3rem;
        height:3rem;
    }
    div{
        display: flex;
        flex-direction: column;
        h3{
            font-weight: 600;
        }
    }
}

.slider {
    min-height: 40vh;
    display: flex;
    align-items: flex-start;
    position: relative;
    width: 100%;
    max-width: 95vw;
    overflow: hidden;
}

.slider-track {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: calc(250px * 8 * 2);
    animation: scroll 20s linear infinite;
}

.slider-track:hover {
    animation-play-state: paused;
}

.slide {
    height: 350px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding: 3rem;
    perspective: 100px;
}

.carouselCard-container:hover {
    transform: translateZ(0.3rem);
}

/* .slider::before {
    background: linear-gradient(to right, rgb(221, 218, 218) 50%, rgba(224, 224, 224, 0.5) 100%);
    content: '';
    position: absolute;
    width: 10%;
    height: 100%;
    z-index: 10;
    left: 0;
}

.slider::after {
    background: linear-gradient(to left, rgb(248, 248, 248) 50%, rgba(216, 216, 216, 0.5) 100%);
    content: '';
    position: absolute;
    width: 10%;
    height: 100%;
    z-index: 10;
    right: 0;
} */

@media only screen and (max-width:1050px){
    .info{
        grid-template-columns: 100%;
        padding-top: 2rem;
        .left{
        h1{
            font-size: 2.5rem;
        }
        p{
            font-size: 1.1rem;
            padding: 0 3rem;
        }
        }
        .right{
            margin: 0 auto;
        }
    }
}

@media only screen and (max-width:660px){
    .info{
        .left{
            padding: 0.5rem;
            h1{
            font-size: 1.8rem;
        }
        h3{
            font-size: 1.3rem;
        }
        p{
            padding: 0 1rem;
        }
        }
    }

    .testimonal-card {
  min-height: 10rem;
  max-width: 20rem;
  min-width: 20rem;
  cursor: pointer;
}

}

@media only screen and (max-width:340px){
    .info{
        .left{
            padding: 0.5rem;
            h1{
            font-size: 1.5rem;
        }
        h3{
            font-size: 1.2rem;
        }
        p{
            padding: 0;
        }
        }
        .right{
            width: 21rem;
        }
    }

    .testimonal-card {
  min-height: 10rem;
  max-width: 18rem;
  min-width: 18rem;
}

}

`