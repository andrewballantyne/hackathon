import React from 'react';
import logo from './logo.svg';
import { AppContainer, AppLink, Header, Logo } from './styles';

const App: React.FC = () => {
  return (
    <AppContainer bg="green">
      <Header>
        <Logo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          color="green"
        >
          Learn React
        </AppLink>
      </Header>
    </AppContainer>
  );
}

export default App;
