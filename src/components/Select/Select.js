import React from 'react';

import './Select.css';

const Select = ({ ...rest }) => {
  const { value, children } = rest;  

  const selected = children.flat().find(({ props }) => props?.value === parseInt(value, 10)) || {};

  console.log()

  return (
    <div className="select-container">
      <select className={`select-input ${rest.className}`} {...rest} />
      {selected?.props?.children && <div className="select-tooltip">{selected?.props?.children}</div>}
    </div>
  );
};

export default Select;
