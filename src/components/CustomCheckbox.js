import React, { PureComponent } from 'react';
import { Checkbox } from 'react-native-paper';
import * as config from '../../config';

export default class CustomCheckbox extends PureComponent {
	state = {
		isChecked: false
	};

	render() {
		const { isChecked } = this.state;
		return (
			<Checkbox
				color={config.grey600}
				onPress={() => this.setState({ isChecked: !isChecked })}
				status={isChecked ? 'checked' : 'unchecked'}
			/>
		);
	}
}
