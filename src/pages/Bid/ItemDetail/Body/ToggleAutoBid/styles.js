import styled from 'styled-components'

export const Container = styled.div`
  .slider-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
`
