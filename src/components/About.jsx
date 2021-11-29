
import styled from 'styled-components';
import image from '../assets/image/content-1.jpg'

export default function About() {
    return <Section id="about">
        <div className="container">
            <div className="aboutImage">
                <img src={image} alt="about" />
            </div>
            <div className="aboutTitle">
                <div className="aboutSlogan">
                    <h3>
                        <span>We </span>create
                        <span>delicious </span>memories for
                        <span> you</span>
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quia, culpa. Totam nulla in rem deleniti, commodi corrupti doloremque error dolor ducimus! 
                        Sequi est temporibus ad maiores? Quibusdam fugiat architecto sed.
                    </p>
                </div>
            </div>
        </div>
    </Section>
}

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    background-color: #f0f3f7;
    .container {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        .aboutImage {
            width: 58.33%;
            padding: 1rem;
            z-index: 10;
            img {
                width: 100%;
                border-radius: 2rem;
                box-shadow: rgb(17 17 26 / 10%) 0 8px 24px, rgb(17 17 26 / 10%) 0 16px 56px, rgb(17 17 26 / 10%) 0 24px 80px;
            }
        }
        .aboutTitle {
            width: 41.66%;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            transform: translateX(-10rem);
            z-index: 50;
            .aboutSlogan {
                padding: 4rem;
                background-color: #fff;
                border-radius: 2rem;
                box-shadow: rgb(0 0 0 / 15%) 0 2px 8px;
                h3 {
                    font-size: 2rem;
                    margin-bottom: 3rem;
                    color: #7a7a7b;
                    span {
                        color: #0f9d58;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 600px) {
        background-image: url(${image});
        background-attachment: fixed;
        .container {
            .aboutImage {
                display: none;
            }
            .aboutTitle {
                width: 100%;
                transform: translateX(0);
                .aboutSlogan {
                    h3 {
                        span {
                            font-size: inherit;
                        }
                    }
                }
            }
        }
    }
`;