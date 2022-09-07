import classNames from 'classnames';
import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/homepage.module.scss';

import '/node_modules/rpg-awesome/css/rpg-awesome.min.css' //NOTE: all components that need icons use this

export default function MenuCard(props: any) {
  const nav = useNavigate();
  const handle = useCallback(() => nav(props.destination, { replace: false }), [nav]);

  const tailwindStyle = [
    "flex",
    "flex-col",
    "gap-5",
    "drop-shadow-xl"
  ]

  return (
    <div className={classNames(styles.menuCard, props.small ? styles.cardSmall : styles.cardBig, tailwindStyle)} onClick={handle}>
      <i className={classNames("ra ra-2x", props.icon ? props.icon : "")}></i>
      <p>{props.text}</p>
    </div>
  );
}

