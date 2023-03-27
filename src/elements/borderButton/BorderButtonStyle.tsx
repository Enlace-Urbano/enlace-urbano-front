import styled from "styled-components";

export const BorderButtonStyle =styled.button`
    color: var(--color-white);
    background-color: transparent;
    height: 60px;
    width: 177px;
    border: 3px solid var(--color-white);
    border-radius: 5px;
    font-size: 18px;

    
    &:hover {
    font-weight: bold;
    background-color: var(--color-green);
    }
    
    @media screen and (max-width: 768px) {
    height: 60px;
    width: 50%;
    font-size: 16px;
    }
    `  