import styled from "styled-components";

export const ProductsArea = styled.section`
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    padding: 3rem;

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        column-gap: 1rem;
        row-gap: 3rem;
        justify-items: center;
        width: 100%;
        padding: 3rem 0;
    }

`

export const Product = styled.li`
    background-color: #F5F5F5;
    display: flex;
    flex-direction: ${props => props.row ? "row" : "column"};
    justify-content: space-evenly;
    align-items: center;
    max-width: 700px;
    height: 360px;
    padding: 30px 20px;
    transition: 0.3s;

    &:hover {
       box-shadow: inset #393E59 0 -0.3rem;
    }

    img {
        width: 100%;
        max-width: 320px;
    }

    h3 {
        font-size: 1rem;
        padding: 20px 0;
        text-decoration: none;
    }
`

export const Title = styled.h2`
    color: ${props => props.primary ? "#F2F2F2" : "#393E59"};
    font-size: 2rem;
`

export const DetailsArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5rem;
`

export const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: justify;
    width: 100%;

    .description-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 40%;
        
        p {
        margin: 1rem 0;
        }

        span {
            margin: 1rem 0;
        }

        input {
            background-color: #F2F2F2;
            color: #393E59;
            font-size: 18px;
            font-weight: 700;
            border: none;
            padding: 5px;
            text-align: center;
        }
    }

`