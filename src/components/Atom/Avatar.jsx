import React from 'react';
import PropTypes from 'prop-types';

export default function Avatar(props) {
  const { Auth } = props;

  return (
    <img
      src={Auth.src}
      alt={Auth.name}
    />
  );
}

Avatar.propTypes = {
  Auth: PropTypes.oneOfType([PropTypes.string]).isRequired,
};
