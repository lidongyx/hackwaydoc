import React from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {useThemeConfig} from '@docusaurus/theme-common';
import styles from './styles.module.css';
export default function Heading({as: As, id, ...props}) {
  const {
    navbar: {hideOnScroll},
  } = useThemeConfig(); // H1 headings do not need an id because they don't appear in the TOC.

  if (As === 'h1' || !id) {
    return <As {...props} id={undefined} />;
  }

  return (
    <As
      {...props}
      className={clsx(
        'anchor',
        hideOnScroll
          ? styles.anchorWithHideOnScrollNavbar
          : styles.anchorWithStickyNavbar,
      )}
      id={id}>
      {props.children}
      <a
        className="hash-link"
        href={`#${id}`}
        title={translate({
          id: 'theme.common.headingLinkTitle',
          message: 'Direct link to heading',
          description: 'Title for link to heading',
        })}>
        &#8203;
      </a>
    </As>
  );
}
