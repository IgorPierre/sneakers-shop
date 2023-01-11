import styled from "styled-components";

export const ProductsArea = styled.section`
    background-color: #F2F2F2;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    min-height: 100vh;
    padding: 3rem;

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        column-gap: 1rem;
        row-gap: 3rem;
        justify-items: center;

        width: 100%;
        padding: 3rem 0;
    }

    li {
        background-color: #FFF;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 50px 20px;

        img {
            width: 300px;
        }

        h3 {
            font-size: 1rem;
            padding: 20px 0;
        }
    }
`

export const Title = styled.h2`
    color: ${props => props.primary ? "#F2F2F2" : "#393E59"};
    font-size: 2rem;
`