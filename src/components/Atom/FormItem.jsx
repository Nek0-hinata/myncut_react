import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInputItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function FormItem(props) {
  const {
    title, type, name, handleValueChange: superChange,
  } = props;

  const [value, setValue] = useState('');

  function handleChange(e) {
    superChange({
      name,
      value: e.target.value,
    });
    setValue(e.target.value);
  }

  return (
    <StyledInputItem>
      <label className="title" htmlFor={name}>
        {title}
      </label>
      <input type={type} id={name} onChange={handleChange} value={value} name={name} />
    </StyledInputItem>
  );
}

FormItem.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleValueChange: PropTypes.func.isRequired,
};
