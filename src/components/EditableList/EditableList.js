import React, { useEffect, useState } from 'react';

import Icon from '../Icon';
import Auto from '../Auto/Auto';
import './EditableList.css';

const EditableList = ({
  width = '400px',
  options,
  title,
  items,
  onEdit,
  onAdd,
  header,
  onDelete,
  label
}) => {
  const [value, setValue] = useState('');
  const [values, setValues] = useState(items);

  useEffect(() => {
    setValues(items);
  }, [items]);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setValues(prev =>
      prev.map(item => (item.id === parseInt(name, 10) ? { ...item, nombre: value } : item))
    );
  };

  const actions = item => (
    <div className="editable-actions">
      <button className="action-edit" onClick={onEdit(item)}>
        <Icon icon="check" />
      </button>
      <button onClick={onDelete(item)}>
        <Icon icon="delete" />
      </button>
    </div>
  );

  return (
    <div className="editable-container">
      <h1>{title}</h1>
      <table style={{ width }} className="editable-list">
        <thead>
          <tr className="editable-header">
            <th colSpan="2">{header}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Auto
                autoComplete="off"
                className="editable-item"
                name="nombre"
                placeholder={label}
                setValue={setValue}
                value={value}
                options={options}
                onChange={e => setValue(e.target.value)}
              />
            </td>
            <td>
              <div className="editable-actions">
                <button
                  className="action-add"
                  onClick={() => {
                    const response = onAdd(value);

                    if (response) {
                      response.then(() => setValue(''));
                    }
                  }}
                >
                  <Icon icon="add" />
                </button>
              </div>
            </td>
          </tr>
          {values.map((item, index) => (
            <tr key={`item-${index}`}>
              <td>
                <input
                  className="editable-item"
                  name={item.id}
                  value={item.nombre}
                  onChange={onChange}
                />
              </td>
              <td>{actions(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableList;
