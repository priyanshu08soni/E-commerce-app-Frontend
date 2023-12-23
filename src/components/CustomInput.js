import React from "react";

const CustomInput = (props) => {
    const {type,name,placeholder,className}=props;
  return (
    <div className="mt-1">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`'form-control' ${className}`}
      />
    </div>
  );
};

export default CustomInput;
