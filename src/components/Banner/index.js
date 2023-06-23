import styled from "styled-components";

export const BannerArea = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%; 
    padding: 8rem 50px 4rem 50px;
    
    box-shadow: inset #F2AA6B 0 -0.2rem;

    div {
        color: #393E59;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 45%;
        padding: 30px;
    }

    h2 {
        font-size: 3.3rem;
        font-weight: 900;
        margin-bottom: 10px;
    }

    p {
        font-size: 1.2rem;
    }

    @media(max-width: 980px){
        flex-direction: column;
        padding: 8rem 0 3rem 0;

        div {
            width: 100%;
        }

        h2 {
            font-size: 2.5rem;
        }
    }
`

export const ProductImage = styled.img`
    width: 40%;
    transition: 1s;

    &:hover {
        animation: rotation 1.5s;
    }

    @media(max-width: 980px){
        width: 70%;
    }

    @keyframes rotation {
        0% {
            transform: rotate(${props => props.rot ? `${props.rot}` : "0deg"})
        }
        50% {
            transform: rotate(${props => props.rot ? `${props.rot}` : "-8deg"})
        }
        100% {
            transform: rotate(${props => props.rot ? `${props.rot}` : "0deg"})
        }
    }
`
