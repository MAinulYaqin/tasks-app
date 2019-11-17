import React, { PureComponent } from 'react';
import { View, StatusBar } from 'react-native';
import Constans from 'expo-constants';
import pt from 'prop-types';

/* CONSTANTS
============================================================================*/
const { statusBarHeight } = Constans;

/**
 * ReactElement <CustomStatusBar />
 * ----------------------------------------------------------------------------
 * @param {?string}     backgroundColor     statusBar custom backgroundColor.
 * @param {?string}     barStyle            barStyle type `'light-content' | 'dark-content'`. Default value is 'default'
 * @param {?object}     style            	custom style
 * @return {ReactElement}
 */
export default class CustomStatusBar extends PureComponent {
	render() {
		const { backgroundColor = '#fff', barStyle = 'dark-content', style = null } = this.props;
		return (
			<View style={{ height: statusBarHeight, backgroundColor: backgroundColor, ...style }}>
				<StatusBar barStyle={barStyle} />
			</View>
		);
	}
}

/* PROPTYPES
============================================================================*/
CustomStatusBar.propTypes = {
	backgroundColor: pt.string,
	barStyle: pt.oneOf([
		'light-content',
		'dark-content',
		'default'
	]),
	style: pt.object
};
