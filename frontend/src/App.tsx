import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import GlobaStyle from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
          <Routes />
      </AppProvider>

      <GlobaStyle />
    </Router>
  );
}

export default App;
