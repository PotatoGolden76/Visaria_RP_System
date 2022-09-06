import classNames from 'classnames';
import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/homepage.module.scss';

export default function PowerCard(props: any) {
  const nav = useNavigate();
  const handle = useCallback(() => nav(props.destination, { replace: false }), [nav]);

  return (
    <div className={classNames(styles.powerCard)} onClick={handle}>
      <p className={classNames(styles.powerTitle)}>{props.text}</p>
    </div>
  );
}

