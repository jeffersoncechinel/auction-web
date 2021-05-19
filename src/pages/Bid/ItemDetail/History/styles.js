import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 32px;
  width: 100%;
  padding-bottom: 16px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 16px;
    background: #fff;
    border-radius: 8px;
    padding-bottom: 16px;
    max-height: 516px;
    margin-bottom: 36px;

    .title {
      font-size: 20px;
      margin-bottom: 20px;
      font-weight: bold;
    }
  }

  ul {

    width: 100%;
    overflow: auto;
    padding: 16px;

    hr {
      margin-right: 4px;
      opacity: 0.1;
    }
  }
`

export const HistoryItem = styled.li`
`
