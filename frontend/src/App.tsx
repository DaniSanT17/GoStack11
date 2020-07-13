import React from 'react';

import GlobaStyle from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      <GlobaStyle />
    </>
  );
}

export default App;
