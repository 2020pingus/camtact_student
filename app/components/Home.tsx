import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import BasicFrame from './BasicFrame';

export default function Home(): JSX.Element {
  return (
    <>
      <BasicFrame />
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
        <br />
        <Link to={routes.LOGIN}>to Login</Link>
        <br />
        <Link to={routes.SIGNUP}>to SignUp</Link>
      </div>
    </>
  );
}
