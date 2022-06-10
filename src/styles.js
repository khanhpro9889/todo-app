import styled from 'styled-components';

export const Parents = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  min-height: 100vh;
  width: 100vw;
`

export const Box = styled.div`
    max-width: 20rem;
    min-width: 30rem;
    padding: 2rem;
    box-shadow: 1px 1px 10px silver;
    border-radius: 10px;
    > div {
      margin-bottom: 16px;
    }
`

export const Title = styled.h3`
    text-align: center;
    font-size: 2rem;
`

export const AddBox = styled.div`
  input {
    padding: 0.5rem;
    width: 100%;
    font-size: 1rem;
    border-radius: 3px;
  }
`

export const ListBox = styled.div`
  margin-top: 16px;
`

export const FlexRow = styled.div`
  display: flex;
`

export const Flex5 = styled.div`
  flex: 5;
  padding-right: 8px;
`

export const Flex1 = styled.div`
  flex: 1;
`