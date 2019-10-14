import { useState } from "react";
import _ from "lodash";

const useStateError = err => {
	const [error, setError] = useState({});

	if (err && !_.isEqual(error, error)) {
		setError(error);
	}

	return error;
};

export default useStateError;
