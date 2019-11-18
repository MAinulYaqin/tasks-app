import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import pt from 'prop-types';

/**
 * ReactElement <Container />
 * ----------------------------------------------------------------------------
 * @param {?ReactElement}	children
 * @param {?object} 		style		container custom style
 * @return {ReactElement}
 */
export default class Container extends Component {
	render() {
		return <SafeAreaView style={{ ...styles.container, ...this.props.style }}>{this.props.children}</SafeAreaView>;
	}
}

/* PROPTYPES
============================================================================*/
Container.propTypes = {
	children: pt.oneOfType([ pt.element, pt.arrayOf(pt.element) ]),
	style: pt.object
};

/* STYLES
============================================================================*/
const styles = {
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
};
