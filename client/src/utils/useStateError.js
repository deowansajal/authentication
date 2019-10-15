import { useState } from "react";
import _ from "lodash";

const useStateError = err => {
	const [error, setError] = useState({});

	if (err && !_.isEqual(err, error)) {
		setError(err);
	}

	return error;
};

export default useStateError;
