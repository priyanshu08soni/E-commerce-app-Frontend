import React from "react";

const CustomInput = (props) => {
    const {type,name,placeholder,className,value,onChange,OnBlur}=props;
  return (
    <div className="mt-1">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`'form-control' ${className}`}
        value={value}
        onChange={onChange}
        onBlur={OnBlur}
      />
    </div>
  );
};

export default CustomInput;
