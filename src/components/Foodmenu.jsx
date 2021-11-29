import { useState } from 'react';
import styled from 'styled-components';
import imageBG from '../assets/image/content-2.jpg'
import { BsCart3 } from 'react-icons/bs';
import imgProduct1 from '../assets/image/product-1.jpg';
import imgProduct2 from '../assets/image/product-2.jpg';
import imgProduct3 from '../assets/image/product-3.jpg';
import imgProduct4 from '../assets/image/product-4.jpg';

export default function FoodMenu() {
    const data = [
        {
            category: "Salad",
            img: imgProduct1
        },
        {
            category: "Lorem",
            img: imgProduct2
        },
        {
            category: "Ipsum",
            img: imgProduct3
        },
        {
            category: "Dolor",
            img: imgProduct4
        },
    ]
    const btns = [
        {
            btn: "All food",
        },
        {
            btn: "Salad",
        },
        {
            btn: "Lorem",
        },
        {
            btn: "Ipsum",
        },
        {
            btn: "Dolor",
        },
    ]
    const [active, setActive] = useState(1);
    const [items, setItems] = useState(data);
    const filterItem = (categItem) => {
        const updateItem = data.filter((item) => {
            return item.category === categItem
        })
        setItems(updateItem)
    }
    return <Section id="food-menu">
        <div className="container">
            <div className="food-menu">
                <h1>
                    What will <span className="primary-color">you</span> eat today?
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Odit nisi assumenda temporibus quibusdam autem. 
                    Et quas nulla laborum voluptatum sit, vitae, eligendi saepe recusandae, est deserunt hic neque. 
                    Quidem, repellendus!
                </p>
                <div className="food-category">
                    <div className="zoom">
                        {btns.map((item, index) => {
                            return (
                                <button
                                    className={active === index + 1 ? "active" : ""}
                                    onClick={() => {
                                        setActive(index + 1)
                                        item.btn === 'All food' ? setItems(data) : filterItem(item.btn)
                                    }}
                                >
                                    {item.btn}
                                </button>
                            )
                        })}
                    </div>
                </div>
                <div className="food-item-wrap">
                    {items.map((item) => {
                        return (
                            <div className="food-item">
                                <div className="item-wrap">
                                    <div className="item-img">
                                        <div className="img-holder" style={{backgroundImage: `url(${item.img})`}}></div>
                                    </div>
                                    <div className="item-info">
                                        <div>
                                            <h3>Lorem ipsum</h3>
                                            <span>120$</span>
                                        </div>
                                        <div className="cart-btn">
                                            <BsCart3 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {items.map((item) => {
                        return (
                            <div className="food-item">
                                <div className="item-wrap">
                                    <div className="item-img">
                                        <div className="img-holder" style={{backgroundImage: `url(${item.img})`}}></div>
                                    </div>
                                    <div className="item-info">
                                        <div>
                                            <h3>Lorem ipsum</h3>
                                            <span>120$</span>
                                        </div>
                                        <div className="cart-btn">
                                            <BsCart3 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </Section>
}

const Section = styled.section`
    background-image: url(${imageBG});
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 9rem 0;
    .container {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        .food-menu {
            padding: 4rem;
            background-color: #fff;
            border-radius: 2rem;
            box-shadow: rgb(100 100 111 / 20%) 0 7px 29px 0;
            h1 {
                color: #7a7a7b;
                .primary-color {
                    color: #0f9d58;
                }
            }
            p {
                margin: 2rem 0;
            }
            .food-category {
                display: flex;
                .zoom {
                    transform: unset;
                    transition: .6s ease-in-out;
                    button {
                        padding: 0.6rem 2.5rem;
                        margin: 0 1rem;
                        outline: none;
                        border: 1px solid #0f9d58;
                        background-color: transparent;
                        color: #0f9d58;
                        font-weight: 600;
                        border-radius: 1rem;
                        cursor: pointer;
                        transition: 0.3s ease-in-out;
                        &:hover {
                            background-color: #0f9d58;
                            color: #fff;
                        }
                    }
                    .active {
                        background-color: #0f9d58;
                            color: #fff;
                    }
                }
            }
            .food-item-wrap {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                margin-top: 3rem;
                .food-item {
                    width: 25%;
                    height: 30rem;
                    padding: 1rem;
                    .item-wrap {
                        height: 100%;
                        transition: 0.4s ease-in-out;
                        cursor: pointer;
                        border-radius: 2rem;
                        &:hover {
                            box-shadow: rgb(14 30 37 / 12%) 0 2px 4px 0, rgb(14 30 37 / 32%) 0 2px 16px 0;
                        }
                        .item-img {
                            height: 60%;
                            position: relative;
                            overflow: hidden;
                            border-radius: 2rem;
                            .img-holder {
                                background-position: center;
                                background-size: cover;
                                background-repeat: no-repeat;
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                transition: 0.5s ease-in-out;
                                border-radius: 2rem;
                                &:hover {
                                    transform: scale(2) rotate(45deg);
                                }
                            }
                        }
                        .item-info {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            margin-top: 3rem;
                            padding: 0 1rem;
                            div {
                                text-align: left;
                            }
                            .cart-btn {
                                width: 3rem;
                                height: 3rem;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                color: #0f9d58;
                                font-size: 2rem;
                                cursor: pointer;
                                transition: 0.5s ease-in-out;
                                &:hover {
                                    color: #fff;
                                    background-color: #0f9d58;
                                    border-radius: 1rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 600px) {
        .container {
            .food-menu {
                padding: 4rem 0;
                h1 {
                    font-size: 3rem;
                    span {
                        font-size: inherit;
                    }
                }
                .food-category {
                    .zoom {
                        overflow-y: scroll;
                        button {
                            margin-top: 0.8rem;
                        }
                    }
                }
                .food-item-wrap {
                    .food-item {
                        width: 50%;
                        height: 25rem;
                        .item-wrap {
                            .item-info {
                                .cart-btn {
                                    svg {
                                        font-size: 2rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;