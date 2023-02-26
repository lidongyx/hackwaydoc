import React from 'react';
import styles from './Img.module.css';
import clsx from 'clsx';

function transformImgClassName(className) {
  return clsx(className, styles.img);
}

export default function MDXImg(props) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      loading="lazy"
      {...props}
      className={transformImgClassName(props.className)}
    />
  );
}
