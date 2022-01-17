import React from 'react';

import './Textarea.css';

const Textarea = ({ className, ...rest }) => {
  return <textarea className={`text-autosize ${className}`} rows={4} {...rest} />;
};

export default Textarea;
