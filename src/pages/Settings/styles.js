import styled from 'styled-components'

export const Container = styled.div`
  max-width: 300px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    p {
      margin-bottom: 16px;
      font-size: 16px;
    }

    label {
      margin-bottom: 10px;
    }

    button {
      background: #1d3198;
      color: #fff;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      transition: 0.1s;
      width: 100%;
      margin-left: 0;
      min-height: 49px;
      margin-top: 10px;
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

export const ItemList = styled.div`
  margin-top: 40px;

  ul {
    padding: 10px;
    background-color: white;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      background-color: #ffffff;
      border-bottom: 1px solid #d9d4d4;

      .winTrue {
        color: green;
      }

      .winFalse {
        color: red;
      }
    }
  }
`
