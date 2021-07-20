import React, { useState } from "react";
import PropTypes from "prop-types";

FormInput.propTypes = {
  onSubmit: PropTypes.func,
};

FormInput.defaultProps = {
  onSubmit: null,
};

function FormInput(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleValueChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    const formValues = {
      title: value,
    };
    onSubmit(formValues);
    setValue("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleValueChange} />
      </form>
    </div>
  );
}

export default FormInput;
