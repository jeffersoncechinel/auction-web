import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  margin: 16px;

  @media (max-width: 768px) {
    display: inherit;
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
`

export const Header = styled.header`
  background: #452d0a;
  border-radius: 8px 8px 0px 0px;
  height: 300px;
  overflow: hidden;
  transition: 0.3s opacity;
  text-align: center;
  width: 100%;

`

export const Body = styled.section`
  padding: 30px;
  background: #f0f0f5;

  & > div:nth-of-type(1) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Footer = styled.footer`
  background: #e4e4eb;
`
