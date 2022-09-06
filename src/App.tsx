import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import PowerCard from './components/powerCard';
import styles from './styles/homepage.module.scss';
import classNames from 'classnames';

export default function App() {
  return (
    <div className={classNames("container mx-auto py-5 px-4 flex gap-8 flex-wrap flex-col justify-center items-center", styles.homeContainer)}>

      <PowerCard text="About" destination="/about" />
      <PowerCard text="Projects" destination="/projects"/>
      <PowerCard text="Experience" destination="/experience"/>
      <PowerCard text="Contact" destination="/contact"/>

      {/* <Link to="/invoices">Invoices</Link> |{" "}
          <Link to="/expenses">Expenses</Link>*/}

    </div>
  );
}

