import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobsList";

ReactDOM.render(
        <IntlProvider locale="en">
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
        );