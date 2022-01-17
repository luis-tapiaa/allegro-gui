import React, { useEffect, useState } from 'react';
import './Auto.css';

const Auto = ({ options = [], setValue, ...rest }) => {
  const [display, setDisplay] = useState(false);
  const [focus, setFocus] = useState(false);

  const filteredOptions = options.filter(option => {
    const { value } = rest;
    return option.toLowerCase().startsWith(value.toLowerCase());
  });

  useEffect(() => {
    setTimeout(() => {
      if (!focus) {
        setDisplay(false);
      }
    }, 200);
  }, [focus]);

  return (
    <div
      className="auto-container"
      onFocus={() => {
        if (options.length !== 0) {
          setDisplay(true);
        }
        setFocus(true);
      }}
      onBlur={() => {
        setFocus(false);
      }}
    >
      <input {...rest} />
      {display && (
        <div className="auto-menu">
          {filteredOptions.map((o, i) => (
            <div
              className="auto-item"
              key={i}
              onClick={() => {
                setValue(o);
                setDisplay(false);
              }}
            >
              {o}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Auto;
