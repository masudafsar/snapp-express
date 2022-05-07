import React from 'react';
import styles from './App.module.scss';
import Router from "../routes/Router";
import MarketContextProvider from "../providers/MarketContextProvider";

function App() {
  return (
    <MarketContextProvider>
      <div className={styles.App}>
        <Router/>
      </div>
    </MarketContextProvider>
  );
}

export default App;
