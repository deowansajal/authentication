import React from "react";

const InputField = ({
	type,
	name,
	placeholder,
	changeHandler,
	error,
	value
}) => {
	return (
		<div className="form-group mb-4">
			<input
				className={`form-control ${error && "is-invalid"}`}
				type={type}
				name={name}
				placeholder={placeholder}
				onChange={changeHandler}
				defaultValue={value}
			/>
			{error && <div className="invalid-feedback">{error}</div>}
		</div>
	);
};

export default InputField;
