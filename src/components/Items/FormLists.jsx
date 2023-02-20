import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import FormItem from '../Atom/FormItem';
import { InputType, MessageStatus } from '../../utils/constants';
import { getValidate, VALIDATOR, ValidatorHooks } from '../../utils/validator';
import { messageAsyncAdded } from '../../features/message/MessageSlice';

function FormLists(props) {
  const { formLists, handleSubmit } = props;
  const [formValues, setFormValues] = useState({});
  const [normalizr, setNormalizr] = useState({});
  const dispatch = useDispatch();

  setNormalizr(formLists.reduce((prev, cur) => {
    const tmp = prev;
    if (Object.hasOwn(cur, 'name')) {
      tmp.ids.push(cur.name);
      tmp.entities[cur.name] = cur;
    }
    return tmp;
  }, {
    ids: [],
    entities: {},
  }));

  const handleValueChange = ({
    name,
    value,
  }) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const lists = normalizr.entities.map((item) => (
    <FormItem
      key={nanoid()}
      title={item.title}
      type={item.type}
      name={item.name}
      verify={item.verify}
      handleValueChange={handleValueChange}
    />
  ));

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(formValues)) {
      const item = normalizr.entities[key];
      if (item.hooks === ValidatorHooks.validateOnSubmit) {
        // 如果是function则传入所有value，如果为字符串则传入当前value
        if (!(
          typeof item.verify.validator === 'function'
            ? item.verify.validator(formValues)
            : getValidate(item.verify.validator, value)
        )) {
          dispatch(messageAsyncAdded({
            message: item.verify.errMsg,
            status: MessageStatus.ERROR,
          }));
          return;
        }
      }
    }
    handleSubmit(formValues);
  };

  return (
    <form onSubmit={onHandleSubmit}>
      {lists}
    </form>
  );
}

FormLists.propTypes = {
  formLists: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    verify: PropTypes.shape({
      validator: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
      hooks: PropTypes.string,
      errMsg: PropTypes.string,
    }),
  })),
  handleSubmit: PropTypes.func.isRequired,
};

FormLists.defaultProps = {
  formLists: [
    {
      title: '表头',
      type: InputType.text,
      name: '表单名称，passwd',
      verify: {
        validator: [
          VALIDATOR.checkPhoneNum,
          VALIDATOR.maxNum6,
        ],
        hooks: ValidatorHooks.validateOnSubmit,
        errMsg: '发生错误',
      },
    },
  ],
};

export default FormLists;
