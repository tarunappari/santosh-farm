import React from 'react'
import styled from 'styled-components';
import Lottie from 'lottie-react'
import contact from '../../../public/lottie/contact.json'

const Contact = () => {
    return (
        <ContactContainer className='contactsection'>
            <div className='left-container'>
                <div className="left-info">
                    <h1>Thousands of people trust our products</h1>
                    <p>Interested in transforming your space with premium-quality grass? Fill out the form and our team will get back to you shortly.
                    </p>
                </div>
                <div className="contact-animation">
                    <Lottie loop={true} animationData={contact} />
                </div>
            </div>
            <div className='right-container'>
                <div className="input-info">
                    <h1>Contact Us</h1>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <input type="text" placeholder='YOUR NAME*' />
                        <input type="email" placeholder='YOUR EMAIL*' />
                    </div>
                    <div>
                        <input type="text" placeholder='LOCATION*' />
                    </div>
                    <div>
                        <input type="number" placeholder='PHONE NUMBER*' />
                    </div>
                    <div>
                        <textarea name="Your message" rows={3} placeholder='How Can We Help You?'></textarea>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'end' }}>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </ContactContainer>
    )
}

export default Contact;

const ContactContainer = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    background-color: rgb(0, 0, 0,0.3);
    display: grid;
    gap: 2rem;
    place-content: center;
    align-items: center;
    padding: 2rem;
    grid-template-columns: 1fr 1fr;
    background-color: #fafafa;
    z-index: 999;
    h1,p,.contact-animation,.right-container{
        z-index: 9;
        position: relative;
    }
    .left-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1rem;
        .left-info{
            h1{
            color: var(--headings);
            font-size: 1.8rem;
            font-weight: 600;
            text-align: center;
            padding-bottom: 1rem;
        }
        p{
            color: var(--parawhite);
            text-align: center;
            font-size: 1.1rem;
            padding: 0 2rem;
        }
        }
        .contact-animation{
            width: 30rem;
            margin-bottom: -5rem;
        }
    }
    .right-container{
        .input-info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 1rem;
            h1{
                font-size: 2.5rem;
                padding-bottom: 2rem;
                font-weight: 600;
                text-align: center;
                color: var(--white);
            }
            input,
            textarea {
                width: 100%;
                margin-bottom: 1rem;
                background-color: transparent;
                border-bottom: 0.1rem solid var(--parawhite);
                font-size: 1.1rem;
                padding: 0.5rem 1rem;
                color: var(--white);
            }

            input:focus,
            textarea:focus {
                outline: none;
            }

            button {
                padding: 0.6rem 2.5rem;
                background-color: var(--headings);
                border-radius: 2rem;
                font-size: 1.1rem;
                color: var(--white);

            }
        }
    }

    @media only screen and (max-width:920px){
        grid-template-columns: 1fr;
        .left-container{
            padding: 0.5rem;
            .left-info{
            h1{
            font-size: 1.5rem;
        }
        p{
            font-size: 1rem;
            padding: 0 0rem;
        }
        }
            .contact-animation{
            width: 19rem;
        }
        }

        .right-container{
            .input-info{
                h1{
                    font-size: 1.5rem;
                }
                .input,
                textarea{
                    font-size: 1rem;
                }
            }
        }
    }
`