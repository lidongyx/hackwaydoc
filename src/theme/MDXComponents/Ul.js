import React from 'react';
import clsx from 'clsx';

function transformUlClassName(className) {
  return clsx(
    className, // This class is set globally by GitHub/MDX
    // We keep the global class, but add Infima class to get list without styling
    // See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
    className?.includes('contains-task-list') && 'clean-list',
  );
}

export default function MDXUl(props) {
  return <ul {...props} className={transformUlClassName(props.className)} />;
}
