import React from 'react';
import LoginComponent from './pages/Login';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <LoginComponent />
      <GlobalStyle />
    </>
  );
}

export default App;
