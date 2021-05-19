import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f0f0f5;
  border-radius: 8px;
  width: 100%;
  ${props => props.isFinished &&
    css`
        opacity: 0.3;
      `};

  header {
    background: #452d0a;
    border-radius: 8px 8px 0px 0px;
    height: 192px;
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

  section.body {
    padding: 30px;

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
  }

  section.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    padding: 20px 30px;
    background: #e4e4eb;
    border-radius: 0px 0px 8px 8px;

    div.icon-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;



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

        svg {
          color: #3d3d4d;
        }

        & + button {
          margin-left: 6px;
        }
      }
    }
  }
`;
