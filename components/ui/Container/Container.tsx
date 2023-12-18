import React,{ReactNode} from 'react';

import styles from './Container.module.css';

interface Props {
  className?: string;
  children?:ReactNode
}

const Container: React.FC<Props> = ({ children, className }) => {
  const classNames = `${styles.container} ${className ? className : ''}`;

  return <div className={classNames}>{children}</div>;
};

export default Container;
