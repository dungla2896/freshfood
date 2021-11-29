import {useState} from 'react';
import styled from 'styled-components';
import { BsCart3 } from 'react-icons/bs';

export default function Navigation() {
    const [active, setActive] = useState(1);
    const nav = [
        {
            menu: "Home",
            href:  "#home"
        },
        {
            menu: "About",
            href: "#about"
        },
        {
            menu: "Menu",
            href: "#food-menu"
        },
        {
            menu: "Testmonials",
            href: "#testimonial"
        },
    ];
    return<>
        <Nav>
            <div className="nav">
                <a href="#home">
                    <div className="logo">
                        Freshfood
                    </div>
                </a>
                <div className="menu">
                    {nav.map((item, index) => {
                        return(
                            <a href={item.href}>
                                <div 
                                    className={active === index + 1 ? "active" : ""}
                                    onClick={() => setActive(index + 1)}
                                >{item.menu}</div>
                            </a>
                        )
                    })}
                </div>
                <div class="cart-btn">
                    <BsCart3 />
                </div>
            </div>
        </Nav>
    </>
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    background-color: #fff;
    box-shadow: rgb(99 99 99 / 20%) 0 2px 8px 0;
    .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1280px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        a {
            text-decoration: none;
            .logo {
                font-size: 2rem;
                font-weight: 800;
                color: #0f9d58;
            }
        }
        .menu {
            display: flex;
            a {
                div {
                    margin-left: 1rem;
                    padding: 0.6rem 1.5rem;
                    font-weight: 700;
                    color: #7a7a7b;
                    transition: 0.5s ease-in-out;
                    cursor: pointer;
                    line-height: 1.4rem;
                    &:hover {
                        color: #fff;
                        background-color: #0f9d58;
                        border-radius: 1rem;
                    }
                }
                .active {
                    color: #fff;
                    background-color: #0f9d58;
                    border-radius: 1rem;
                }
            }
        }
        .cart-btn {
            width: 3rem;
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #0f9d58;
            font-size: 1.8rem;
            cursor: pointer;
            transition: 0.5s ease-in-out;
            &:hover {
                color: #fff;
                background-color: #0f9d58;
                border-radius: 1rem;
            }
        }
    }
    @media only screen and (max-width: 600px) {
        .nav {
            height: 65px;
            .menu {
                display: none;
            }
            .cart-btn {
                svg {
                    font-size: 2rem;
                }
            }
        }
    }
`;