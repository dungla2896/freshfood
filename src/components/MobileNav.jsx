import { useState } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { AiFillSmile } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import styled from 'styled-components';

export default function MobileNav() {
    const navMobile = [
        {
            menu: <AiTwotoneHome/>,
            href: "#home"
        },
        {
            menu: <AiFillSmile />,
            href: "#about"
        },
        {
            menu: <BiFoodMenu />,
            href: "#food-menu"
        },
        {
            menu: <BiCommentDetail />,
            href: "#testimonial"
        },
    ]
    const [active, setActive] = useState(1);
    return <Section>
        {navMobile.map((item, index) => {
            return(
                <div 
                    className={active === index + 1 ? "active" : ""}
                    onClick={() => setActive(index + 1)}
                >
                    <a href={item.href} >
                        {item.menu}
                    </a>
                </div>
            )
        })}
    </Section>
}

const Section = styled.section`
    display: none;
    @media only screen and (max-width: 600px) {
        position: fixed;
        bottom: 0;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        z-index: 90;
        overflow: hidden;
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        box-shadow: rgb(100 100 111 / 20%) 0 7px 29px 0;
        div {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 25%;
            padding: 1rem 0;
            background-color: #fff;
            transition: 0.5s ease-in-out;
            a {
                font-size: 2rem;
                color: #9da2ad;
                z-index: 2;
                transition: 0.3s ease-in-out;
                display: block;
                svg {
                    font-size: 2rem;
                    z-index: 2;
                    transition: 0.3s ease-in-out;
                }
            }
        }
        .active {
            background-color: #0f9d58;
            a {
                color: #fff;
            }
        }
    }
`;