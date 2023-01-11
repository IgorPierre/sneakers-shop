import styled from "styled-components";

export const Button = styled.button`    
    background-color: #393E59;
    color: #FFF;

    font-size: 1rem;
    font-weight: 700;

    border: none;

    padding: 10px 2rem;
    margin-top: 15px;

    cursor: pointer;
    transition: 0.3s;

    &:hover {
        box-shadow: inset #F2AA6B 12rem 0;
    }
`

export const Quantity = styled.div`
    background-color: #F2F2F2;
    color: #393E59;
    display: inline;

    border: #393E59 1px solid;
    padding: 6px 2rem;
    margin-right: 1rem;

    span {
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            color: #F2AA6B;
        }
    }
`