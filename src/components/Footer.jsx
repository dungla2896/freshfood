
import styled from 'styled-components';
import imageBG from '../assets/image/footer.jpg'

export default function Footer() {
    return <Section>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1>Freshfood</h1>
                    <br/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quae sequi voluptates ad est delectus. Blanditiis quasi molestiae at, velit, 
                        nam rem natus nostrum nesciunt officia accusamus eligendi expedita adipisci libero?
                    </p>
                    <br/>
                    <p>Email: example@gmail.com</p>
                    <p>Phone: +00 123 456 789</p>
                    <p>Website: freshfood.com</p>
                </div>
                <div className="col-2">
                    <h1>About us</h1>
                    <br/>
                    <p>
                        <a href="/">Chefs</a>
                    </p>
                    <p>
                        <a href="/">Menu</a>
                    </p>
                    <p>
                        <a href="/">Testimonials</a>
                    </p>
                    <p>
                        <a href="/">Lorem ipsum</a>
                    </p>
                </div>
                <div className="col-4">
                    <h1>Subscribe & media</h1>
                    <br/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laudantium voluptas dolorem totam id ratione atque voluptatibus dicta, 
                        animi tenetur expedita corporis quod maxime odio, nesciunt dolore. 
                        Non, voluptatem? Corrupti, est?
                    </p>
                    <div className="input-group">
                        <input type="text" placeholder="Enter your email ..."/>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </Section>
}

const Section = styled.section`
    background-image: url(${imageBG});
    color: #fff;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 9rem 0;
    .container {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        .row {
            display: flex;
            flex-wrap: wrap;
            .col-6 {
                width: 50%;
                padding: 1rem;
                h1 {
                    color: #0f9d58;
                }
            }
            .col-2 {
                width: 16.66%;
                padding: 1rem;
                h1 {
                    color: #0f9d58;
                }
                p {
                    a {
                        color: unset;
                        text-decoration: none;
                    }
                }
            }
            .col-4 {
                width: 33.33%;
                padding: 1rem;
                h1 {
                    color: #0f9d58;
                }
                .input-group {
                    padding: 1rem;
                    border: 0.125rem solid #0f9d58;
                    border-radius: 2rem;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 2rem;
                    input {
                        flex: auto;
                        outline: none;
                        border: none;
                        color: #0f9d58;
                        background-color: transparent;
                    }
                    button {
                        padding: 0.5rem 1rem;
                        outline: none;
                        border: none;
                        background-color: #0f9d58;
                        color: #fff;
                        border-radius: 1rem;
                        font-weight: 600;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 600px) {
        .container {
            .row {
                .col-6 {
                    width: 100%;
                    h1 {
                        font-size: 3rem;
                    }
                    p {
                        font-size: 1.2rem;
                    }
                }
                .col-2 {
                    width: 100%;
                    h1 {
                        font-size: 3rem;
                    }
                    p {
                        font-size: 1.2rem;
                    }
                }
                .col-4 {
                    width: 100%;
                    h1 {
                        font-size: 3rem;
                    }
                    p {
                        font-size: 1.2rem;
                    }
                    input {
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }
`;