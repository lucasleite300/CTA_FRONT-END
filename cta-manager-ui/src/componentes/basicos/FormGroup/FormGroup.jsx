import React from "react";

const FormGroup = (props) => {
  return (
    <>
      <div className={props.col}>
        <label className="lead" htmlFor={props.htmlFor}>
          <i className={props.icon}></i> <strong> {props.label} </strong>
        </label>
        {props.children}
       
      </div>
    </>
  );
};
export default FormGroup;
