import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 2px solid #fff;
  padding: 0 16px 0 16px;
  min-height: 36px;
  display: flex;
  align-items: center;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      color: #c53030;
      border-color: #c53030;
    `};

  ${props =>
    props.isFocused &&
    css`
      color: blue;
      border-color: blue;
    `};

  ${props =>
    props.isFilled &&
    css`
      color: blue;
    `};

  input {
    flex: 1;
    border: 0;
    min-height: 20px;
    color: #f4ede8;
    background: #fff;
    width: 130px;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
