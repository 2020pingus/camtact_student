import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { History } from 'history';
import { Store } from '../../store';
import Routes from '../../Routes';

type Props = {
  store: Store;
  history: History;
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#253053',
    },
    secondary: {
      main: '#F2C94C',
    },
    error: {
      main: '#FF5E57',
    },
    info: {
      main: '#9EA0A5',
    },
    success: {
      main: '#47B881',
    },
  },
  typography: {
    h1: {
      fontSize: 26,
      fontWeight: 700,
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
    },
    h3: {
      fontSize: 18,
    },
    h4: {
      fontSize: 16,
    },
    h5: {
      fontSize: 14,
    },
  },
});

const Root = ({ store, history }: Props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
);

export default hot(Root);
