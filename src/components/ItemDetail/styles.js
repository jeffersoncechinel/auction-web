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

  header {
    background: #452d0a;
    border-radius: 8px 8px 0px 0px;
    height: 300px;
    overflow: hidden;
    transition: 0.3s opacity;
    text-align: center;
    width: 100%;

    img {
      pointer-events: none;
      user-select: none;
      width: 100%;
    }
  }

  .winTrue {
    color: #39b100;
  }

  .winFalse {
    color: red;
  }

  section.body {
    padding: 30px;
    background: #f0f0f5;

    & > div:nth-of-type(1) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .slider-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    h2 {
      color: #3d3d4d;
    }

    p {
      color: #3d3d4d;
      margin-top: 16px;
    }

    .price {
      font-style: normal;
      font-size: 24px;
      line-height: 34px;
      color: #39b100;

      b {
        font-weight: 600;
      }

    }

    .countdown {
      display: flex;
      flex-direction: row;

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 5px;
        background: #d9d4d4;
        border-radius: 8px;
        color: #452d0a;
        padding: 5px;
      }
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 88px;
      height: 32px;
      margin-top: 5px;

      & input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #c72828;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 16px;

        &:before {
          position: absolute;
          content: '';
          height: 20px;
          width: 40px;
          left: 8px;
          bottom: 6px;
          background-color: white;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          border-radius: 10px;
        }
      }

      input:checked + .slider {
        background-color: #39b100;
      }

      input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
      }

      input:checked + .slider:before {
        -webkit-transform: translateX(32px);
        -ms-transform: translateX(32px);
        transform: translateX(32px);
      }
    }
  }

  section.footer {
    background: #e4e4eb;

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
    }
  }
`

export const History = styled.div`
  margin-top: 32px;
  width: 100%;

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

