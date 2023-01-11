import styled from "styled-components";

export const BannerArea = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%; 
    padding: 8rem 50px 4rem 50px;
    
    box-shadow: inset #F2AA6B 0 -0.3rem;

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
`

export const ProductImage = styled.img`
    width: 40%;
    transition: 0.6s;

    &:hover {
        transform: rotate(${props => props.rot ? `${props.rot}` : "-8deg"});
    }
`
