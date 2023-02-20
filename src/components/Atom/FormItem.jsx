import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getValidate, ValidatorHooks } from '../../utils/validator';

const StyledInputItem = styled.div`
  display: flex;
  flex-direction: column;
`;

function FormItem(props) {
  const {
    title, type, name, verify, handleValueChange: superChange,
  } = props;

  const [value, setValue] = useState('');

  function handleChange(e) {
    const { value: tmpValue } = e.target;
    superChange({
      name,
      value: tmpValue,
    });
    setValue(tmpValue);
    if (verify.hooks === ValidatorHooks.validateOnChange && getValidate(verify.validator, value)) {
      // 验证失败，生效失败css
    }
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
  verify: PropTypes.shape({
    validator: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    hooks: PropTypes.string,
    errMsg: PropTypes.string,
  }).isRequired,
};

export default FormItem;
