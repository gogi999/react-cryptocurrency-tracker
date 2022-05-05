import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import CoinPage from './pages/CoinPage';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh"
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/coins/:id" component={CoinPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
