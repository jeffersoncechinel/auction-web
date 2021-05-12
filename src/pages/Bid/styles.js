import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 0;

   @media (max-width: 600px) {
    display: block;
    grid-template-columns: none;
    grid-template-rows: none;
    margin: 0;
    padding: 0;
    grid-gap: 0;
  }
`
