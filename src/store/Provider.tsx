import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

interface ReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return (
    <React.Fragment>
      <Provider store={store}>{children}</Provider>
    </React.Fragment>
  );
}

export default ReduxProvider;
