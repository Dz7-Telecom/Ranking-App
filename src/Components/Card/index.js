import React from 'react';

import { Container } from './styles';

function Card({ position, data , pontuation}) {
    return (
        <>
            <Container>
                <p> {position} </p>
                <span><img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="User Avatar"/></span>
                <span>{data} </span>
                <span>Points: {pontuation}</span>
            </Container>
        </>
    )
}

export default Card;