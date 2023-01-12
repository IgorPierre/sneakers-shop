import styled from "styled-components";

export const HeaderArea = styled.header`
    background-color: #F2F2F2;

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;

    width: 100%;
    padding: 10px 4rem;
`

export const Logo = styled.a`
    cursor: pointer;

    img {
        width: 150px;
    }
` 

export const SearchArea = styled.div`
    display: flex;
    align-items: center;

    width: 30%;
    max-width: 400px;

    input {
        color: #F25430;
        font-size: 17px;
        width: 85%;
        padding: 5px 10px;
        border: none;
        border-radius: 10px 0 0 10px;
    }

    a {
        background-color: #393E59;
        color: #F2F2F2;
        text-align: center;

        width: 15%;
        padding: 3px 10px;
        border: none;
        border-radius: 0 10px 10px 0;

        transition: 0.3s;
        cursor: pointer;

        &:hover {
            background-color: #F2AA6B;
        }
    }
`

export const Cart = styled.div`
    color: #393E59;
    font-size: 2rem;
    text-align: center;

    span {
        font-size: 1rem;
    }
`

export const Navigator = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 30%;

    a {
        text-decoration: none;
        font-size: 18px;
        font-weight: 400;
        color: #393E59;

        transition: 0.3s;

        &:hover {
            color: #F2AA6B;
        }
    }
`