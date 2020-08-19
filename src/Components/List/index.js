import React from 'react';

import { Container, Column } from './styles';
import Card from '../Card';

function List({ title }) {
  return (
    <>
      <Column>
        <Container>

          <header>
            <h2>{title}</h2>

            <ul>

              <Card data={'Victor '} position={1} pontuation={114} />
              <Card data={'Eric '} position={2} pontuation={90} />
              <Card data={'Vinicius '} position={3} pontuation={70} />
              <Card data={'Pamela'} position={4} pontuation={57} />
              <Card data={'Niedson '} position={5} pontuation={41} />
              <Card data={'Felipe '} position={6} pontuation={20} />
              <Card data={'Juliana'} position={7} pontuation={19} />
              <Card data={'Luana'} position={8} pontuation={16} />
              <Card data={'Diogo S'} position={9} pontuation={1} />

            </ul>
          </header>

        </Container>
      </Column>
    </>
  );
}

export default List;