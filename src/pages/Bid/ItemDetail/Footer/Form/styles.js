import styled from 'styled-components'

export const Container = styled.div`
  form {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;

    div {
      margin-left: 10px;
      margin-right: 10px;
    }

    padding: 20px;
    border-radius: 0px 0px 8px 8px;

    button {
      background: #1d3198;
      color: #fff;
      padding: 10px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      transition: 0.1s;
      width: 120px;
      height: 44px;

      svg {
        color: #3d3d4d;
      }

      & + button {
        margin-left: 6px;
      }
    }

    .submitBtn {
      background-color: #39b100;
    }

    input {
      background-color: #fff;
      border: 0;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      color: #452d0a;

      &::placeholder {
        color: #d9d4d4;
      }
    }
`
