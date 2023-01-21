import styled from "styled-components";

export const DetailsArea = styled.section`
    background-color: #FFF;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100vh;

    a {
        font-size: 2rem;
        color: #393E59;
        position: absolute;
        top: 8rem;
        left: 2rem;
        transition: 0.3s;

        &:hover {
            color: #F2AA6B;
        }
    }

    img {
        width: 500px;
    }

    @media(max-width: 980px) {
        flex-direction: column;

        img {
            width: 200px;
            padding-bottom: 4rem;
        }
    }
`

export const DetailsContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-left: 5rem;

    p {
        padding: 1rem 0;
    }

    .quantity-area {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        width: 100%;
    }

    @media(max-width: 980px) {
        width: 80%;
    }

`
