import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import {addLocaleData} from 'react-intl';
import localeEsMessages from "./locales/es";

import JobsList from "./components/jobsList";

const possibleLocale = navigator.language.split('-')[0] || 'en';
addLocaleData(require(`react-intl/locale-data/${possibleLocale}`));

if (possibleLocale.localeCompare("es") === 0)
{
ReactDOM.render(
        <IntlProvider locale={possibleLocale} messages={localeEsMessages}>
            <JobsList/>
        </IntlProvider>, document.getElementById("root")
        );
}
else{
    ReactDOM.render(
        <IntlProvider locale="en">
            <JobsList/>
        </IntlProvider>, document.getElementById("root")
        );
}
