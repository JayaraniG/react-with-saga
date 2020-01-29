import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

export default props => (
  <div>
 
    <Container>
      {props.children}
    </Container>
  </div>
);
