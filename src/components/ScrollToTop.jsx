import React, {useState} from 'react';
import styled from 'styled-components';
import { BsShift } from "react-icons/bs";

export default function ScrollToTop() {
    const [scrollState, setScrollState] = useState(false);

    const toTop  = () => {
        window.scrollTo({ top: 0 });
    }

    window.addEventListener('scroll', () => {
        window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
    })
    return(
        <ToTop scrollState={scrollState} onClick={toTop}>
            <BsShift />
        </ToTop>
    )
}

const ToTop = styled.a`
    position: fixed;
    bottom: 70px;
    right: 70px;
    border-radius: 10px;
    background-color: #0f9d58;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    padding: 0.5rem;
    z-index: 99;
    text-decoration: none;
    cursor: pointer;
    display: ${({scrollState}) => (scrollState ? "flex" : "none")};
    @media only screen and (max-width: 600px) {
        bottom: 6rem;
        right: 1rem;
    }
`