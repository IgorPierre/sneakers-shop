import styled from "styled-components";

export const Button = styled.button`    
    background-color: #393E59;
    color: #FFF;

    font-size: 1rem;
    font-weight: 700;

    border: none;

    padding: 8px 2rem;
    margin-top: 15px;

    cursor: pointer;
    transition: 0.3s;

    &:hover {
        box-shadow: inset #F2AA6B 12rem 0;
    }
`

export const Quantity = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: #F2F2F2;
    color: #393E59;
    text-align: center;
    border: #393E59 2px solid;
    padding: 4px;

    width: 40%;

    span {
        margin-left: 2px;
    }

    input {
        background-color: #F2F2F2;
        color: #393E59;
        font-size: 1.2rem;
        font-weight: 700;

        max-width: 50px;
        text-align: center;
        border: none;
    }

    span {
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            color: #F2AA6B;
        }
    }
`