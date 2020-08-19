import styled from 'styled-components';

export const Container = styled.div`
    
    position:relative;
    background:#fff;
    border-radius:5px;
    margin-bottom:10px;
    padding:15px;
    box-shadow:0 1px 4px 0 rgba(192,208,230,0.8);
    border-top: 20px solid rgba(230,236,245,0.4);

    display: grid;
    grid-template-areas:
    'header header header header header header'
    'menu main main main right right'
    'menu footer footer footer footer footer';
    grid-gap: 10px;
    padding: 10px;

    p{
        margin-top: 5%;
    }

    img{
        width: 24px;
        height:24px;
        border-radius:7px;
        /* margin-top:1px; */
    }

`;
