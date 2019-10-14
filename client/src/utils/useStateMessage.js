import { useState } from "react";
import _ from "lodash";

const useSetMessages = messages => {
	const [msg, setMessages] = useState({});
	if (messages && !_.isEqual(messages, msg)) {
		setMessages(messages);
	}

	return [msg, setMessages];
};

export default useSetMessages;
