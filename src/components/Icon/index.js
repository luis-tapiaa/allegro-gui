import React from 'react';

import './Icon.css';

const Icon = ({ className, icon = 'add', ...rest }) => {
  const backgroundImage = `url(https://luis-tapiaa.github.io/icons-host/icons/${icon}.png)`;
  return <i className={`icon ${className}`} {...rest} style={{ backgroundImage }} />;
};

export default Icon;
