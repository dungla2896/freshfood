
import styled from 'styled-components';
import { BsFillStarFill } from "react-icons/bs";
import avatar1 from '../assets/image/avatar-1.jpg';
import avatar2 from '../assets/image/avatar-2.jpg';
import avatar3 from '../assets/image/avatar-3.jpg';

export default function Testimonial() {
    const data = [
        {img: avatar1},
        {img: avatar2},
        {img: avatar3},
    ]
    return <Section id="testimonial">
        <div className="container">
            <div className="row">
                {data.map((item, index) => {
                    return(
                        <div className="col">
                            <div className={`review-wrap ${index === 1 ? 'active' : ''}`}>
                                <div className="review-content">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Laudantium eius veritatis commodi aliquam blanditiis eum excepturi doloribus, 
                                        quibusdam quo voluptate, provident vitae ratione, 
                                        qui tempora inventore quia aspernatur nostrum accusamus!
                                    </p>
                                    <div className="review-img" style={{backgroundImage: `url(${item.img})`}}></div>
                                </div>
                                <div className="review-info">
                                    <h3>Lorem Ipsum Dolor</h3>
                                    <div className="rating">
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </Section>
}

const Section = styled.section`
    padding: 9rem 0;
    background-color: #f0f3f7;
    .container {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        .row {
            display: flex;
            flex-wrap: wrap;
            .col {
                width: 33.33%;
                padding: 1rem;
                .active {
                    transform: scale(1.2);
                }
                .review-wrap {
                    width: 100%;
                    padding: 1rem;
                    border-radius: 3rem;
                    background-color: #fff;
                    box-shadow: rgb(100 100 111 / 20%) 0 7px 29px 0;
                    transition: .6s ease-in-out;
                    .review-content {
                        padding: 3rem;
                        border-bottom: 0.125rem solid #7a7a7b;
                        position: relative;
                        text-align: center;
                        .review-img {
                            position: absolute;
                            background-position: center;
                            background-size: cover;
                            background-repeat: no-repeat;
                            left: 50%;
                            transform: translateX(-50%);
                            bottom: -2.5rem;
                            width: 5rem;
                            height: 5rem;
                            border-radius: 2rem;
                            box-shadow: rgb(100 100 111 / 20%) 0 7px 29px 0;
                        }
                    }
                    .review-info {
                        padding: 3rem;
                        text-align: center;
                        h3 {}
                        .rating {
                            margin-top: 2rem;
                            color: #0f9d58;
                        }
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 600px) {
        .container {
            .row {
                .col {
                    width: 100%;
                    .active {
                    transform: scale(1);
                }
                }
            }
        }
    }
`;