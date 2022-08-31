import styled from "styled-components";


export const TitleContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: flex-start;
    align-items:center;
    margin:1.5rem 0px 0px;
`

export const Title = styled.p`
    font-size:2rem;
    font-weight:700;

    @media(max-width: 800px) {
        font-size:1.2rem;
    }
`

export const Subtitle = styled.p`
    font-size:1rem;
    font-weight:200;
`

