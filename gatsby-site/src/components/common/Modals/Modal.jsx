import React from 'react';
import { Container } from 'react-bootstrap';

const Modal = (props) => {
  return <Container>{props.children}</Container>;
};

export default Modal;
