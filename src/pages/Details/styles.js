import styled from "styled-components";

export const DetailsArea = styled.section`
    background-color: #F5F5F5;

    display: flex;
    justify-content: space-between;
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
        margin-left: 3rem;
    }

    @media(max-width: 980px) {
        flex-direction: column;
        padding-top: 7rem;

        img {
            width: 100%;
            max-width: 320px;
            padding-bottom: 0;
            margin: 0;
        }
    }
`

export const DetailsContent = styled.div`
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100vh;
    margin-left: 5rem;
    padding: 2.5rem;

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
        margin-left: 0;
        height: 50vh;
    }

`
