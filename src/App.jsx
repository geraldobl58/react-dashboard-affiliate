import React from 'react';

import Routes from './routes';

import Messages from './components/Messages';
import Loading from './components/Loading';

import { useLoading } from './hooks/Loading';

const App = () => {
  const { isLoading } = useLoading();

  return (
    <>
      <Routes />
      <Loading isLoading={isLoading} />
      <Messages />
    </>
  );
};

export default App;
