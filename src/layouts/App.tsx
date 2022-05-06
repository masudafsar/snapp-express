import React from 'react';
import styles from './App.module.scss';
import Router from "../routes/Router";

function App() {
  return (
    <div className={styles.App}>
      <Router/>
    </div>
  );
}

export default App;
