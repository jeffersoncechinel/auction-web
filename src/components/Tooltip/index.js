import React from 'react';
import { Container } from './styles';

const Tooltip = (props) => {
  return (
    <Container className={props.className}>
      {props.children}
      <span>{props.title}</span>
    </Container>
  );
};

export default Tooltip;
