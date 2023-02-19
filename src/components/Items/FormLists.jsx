import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormItem from '../Atom/FormItem';
import { InputType } from '../../utils/constants';
import { VALIDATOR } from '../../utils/validator';

export default function FormLists(props) {
  const { formLists } = props;
  const [formValues, setFormValues] = useState({});

  const handleValueChange = ({
    name,
    value,
  }) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const lists = formLists.map((item) => (
    <FormItem
      title={item.title}
      type={item.type}
      name={item.name}
      handleValueChange={handleValueChange}
    />
  ));

  return (
    <form>
      {lists}
    </form>
  );
}

FormLists.propTypes = {
  formLists: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    validator: PropTypes.arrayOf(PropTypes.string),
  })),
};

FormLists.defaultProps = {
  formLists: [
    {
      title: '表头',
      type: InputType.text,
      name: '表单名称，passwd',
      validator: [
        VALIDATOR.checkPhoneNum,
        VALIDATOR.maxNum6,
      ],
    },
  ],
};
