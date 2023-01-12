import styled from "styled-components";

export const CartArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding-top: 6rem;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        width: 60%;
        height: 80%;
        padding: 1rem;

        overflow-y: scroll;
    }

    li{
        width: 800px;

        button{
            background-color: #D92938;
            color: #F2F2F2;

            font-size: 20px;

            padding: 0.5rem;
            border: none;

            &:hover {
                background-color: #F2385A;
            }
        }
    }

    .tatal-container {
        background-color: #F2F2F2;
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 40%;
        height: 100%;
        padding: 4rem 0;
    }

`