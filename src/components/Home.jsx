
import styled from 'styled-components';
import imageBG from '../assets/image/home.jpg';

export default function Home() {
    return <Section id="home">
        <div class="slogan">
            <div className="row">
                <h1>Freshfood</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quam eos eveniet harum accusamus eum nisi, libero quae magni, 
                    dolorem impedit reprehenderit molestiae, maxime itaque voluptatum? 
                    Quam, eos? Alias, qui voluptate!
                </p>
                <div>
                    <button>Order now</button>
                </div>
            </div>
        </div>
    </Section>
}

const Section = styled.section`
    width: 100%;
    height: 100vh;
    padding: 9rem 0;
    background: url(${imageBG});
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    .slogan {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        .row {
            display: flex;
            flex-wrap: wrap;
            width: 50%;
            padding: 1rem;
            h1 {
                text-align: left;
                font-size: 7rem;
                color: #0f9d58;
                margin-left: -8px;
            }
            p {
                text-align: left;
            }
            div {
                text-align: left;
                button {
                    padding: 1rem 5rem;
                    outline: none;
                    border: none;
                    background-color: #fff;
                    border: 0.125rem solid #0f9d58;
                    border-radius: 2rem;
                    color: #0f9d58;
                    margin: 3rem 0;
                    cursor: pointer;
                    font-weight: 600;
                    transition: 0.5s ease-in-out;
                    &:hover {
                        background-color: #0f9d58;
                        color: #fff;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 600px) {
        .slogan {
            .row {
                width: 100%;
                h1 {
                    font-size: 3rem;
                    font-weight: 800;
                    margin-left: 0;
                }
            }
        }
    }
`;