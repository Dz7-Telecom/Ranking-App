import React from 'react';

import { Container } from './styles';
import List from '../List'
function Board() {
  return (
      <>
        <Container>
            <List title={'intern calleds'}/>
            <List title={'extern calleds'}/>
            <List title={'sales'}/>
            <List title={'Quality'}/>
        </Container>
      </>
  );
}

export default Board;