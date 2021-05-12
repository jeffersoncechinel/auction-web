import styled from 'styled-components'

export const Container = styled.div`

  form {
    button {
      background: #1d3198;
      color: #fff;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      transition: 0.1s;
      width: 315px;
      margin-left: 0;
      min-height: 49px;
    }

    input {
      background-color: transparent;
      min-height: 45px;
      border: 0;
      border-radius: 4px;
      // padding: 0 15px;
      color: #452d0a;
      margin: 0;

      &::placeholder {
        color: #d9d4d4;
      }
    }
  }
`
