import styled from "styled-components";

export const Item = styled.div`
    margin-bottom: 8px;
    border: 1px solid #111;
    padding: 0.5rem;
`

export const FlexRow = styled.div`
    display: flex;
`

export const Right = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    div:nth-child(1) {
        margin-right: 8px;
    }
`

export const Left = styled.div`
    flex: 5;
    padding-right: 8px;
    font-size: 1.2rem;
`

export const Time = styled.div`
    font-size: 0.7rem;
    margin-top: 0.5rem;
`

export const Text = styled.div`
    ::first-letter {
        text-transform: capitalize;
    }
    ${({status}) => {
        return status && `
            text-decoration: line-through;
            text-decoration-thickness: 2px
        `
    }}
`