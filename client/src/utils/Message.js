import React from "react";

const Message = ({ msg }) => {
	return (
		<>
			{msg && (
				<div className="alert alert-success col-md-6 mx-auto mt-5">
					<strong>{msg}</strong>
				</div>
			)}
		</>
	);
};

export default Message;
