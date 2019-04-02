import React from 'react';
import {FormattedDate} from 'react-intl';
import {FormattedRelative} from 'react-intl';
import {FormattedNumber} from 'react-intl';
import {FormattedMessage} from 'react-intl';

export default class Job extends React.Component {

  	render() {
  		return (
  			<tr>
  				<th scope="row">{this.props.offer.id}</th>
      			<td><FormattedMessage id={this.props.offer.name}/></td>
  				<td>{this.props.offer.company}</td>
      			<td>{navigator.language.split('-')[0] === "es" && <FormattedMessage
                    id="salary"
    defaultMessage='{name,number} {name, plural,
                      one {millon}
                      other {millones}
                    }'
    values={{
        name: this.props.offer.salary
    }}
                />}{navigator.language.split('-')[0] === "en" && <FormattedMessage
                    id="salary"
    defaultMessage='{name,number} {name, plural,
                      one {million}
                      other {millions}
                    }'
    values={{
        name: this.props.offer.salary
    }}
                />}</td>
      			<td>{this.props.offer.city}</td>
      			<td>  <FormattedDate
    value={new Date(this.props.offer.date)}
    year='numeric'
    month='long'
    day='numeric'
    weekday='long'
  /> (<FormattedRelative value={new Date(this.props.offer.date)}/>)</td>
          <td><FormattedNumber value={this.props.offer.views}/></td>
  			</tr>
  		);
	}
}