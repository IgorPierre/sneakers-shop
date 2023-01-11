import styled from "styled-components";

export const DetailsArea = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    

    width: 100%;
    min-height: 100vh;
    padding: 8rem 4rem 3rem 4rem;
    img {
        max-width: 400px;
    }
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: justify;
    width: 40%;

    padding: 0.5rem 3rem;

    p {
        margin: 1rem 0;
    }

    input {
        background-color: #F2F2F2;
        color: #393E59;
        font-size: 18px;
        font-weight: 700;

        border: none;
        padding: 5px;
        max-width: 50px;
        text-align: center;
    }
`