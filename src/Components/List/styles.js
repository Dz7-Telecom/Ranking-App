import styled from 'styled-components';

export const Container = styled.div`
  text-align:center;
  background:#d8dfe7;
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  border-radius:5px;
  padding:15px;
  box-shadow:0 1px 4px 0 rgba(192,208,230,0.8);
  border-top: 20px solid rgba(230,236,245,0.4);

  & + div {
      border-left: 1px solid rgba(0,0,0,0.05)
  }
  h2 {
      text-align:center;
      font-weight: bold;
      color:#005385;
      font-size:16px;
      padding: 0 10px;
  }

    ul {
        margin-top: 30px;
    }
`;

export const Column = styled.div`

  float: left;
  width: 25%;
  padding: 1%;
  height: 100%;


`;