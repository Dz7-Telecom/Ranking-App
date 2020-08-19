import React from 'react';

import GlobalStyle from './styles/globalStyles';
import Board from './Components/Board';
import Head from './Components/Head'
function App() {
  return (
    <>
      <Board />
      <Head />
     <GlobalStyle />
    </>
  );
}

export default App;
