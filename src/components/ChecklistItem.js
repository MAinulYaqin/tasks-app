import React, { PureComponent } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { IconButton } from 'react-native-paper';
import * as config from '../../config';

import CustomCheckbox from './CustomCheckbox';

const { height, width } = Dimensions.get('window');

export default class ChecklistItem extends PureComponent {
	render() {
		return (
			<View style={styles.listWrapper}>
				<CustomCheckbox />
				<TextInput
					placeholder="Add task"
					accessibilityRole="text"
					accessibilityTraits="text"
					style={styles.taskInput}
				/>
				<IconButton icon="close" onPress={() => this.props.onClose()} color={config.grey600} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	listWrapper: {
		flexDirection: 'row',
		marginVertical: 2.5,
		width: width - 40,
		alignItems: 'center'
	},
	taskInput: {
		flex: 1,
		lineHeight: 36,
		width: null
	}
});
