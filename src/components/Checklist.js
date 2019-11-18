import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { blue600 } from '../../config';

import ChecklistItem from './ChecklistItem';

class Checklist extends Component {
	_addChecklist = () => {};

	render() {
		return (
			<View style={styles.ChecklistWrapper}>
				{this.props.tasks.map((e) => <ChecklistItem key={e.id} onClose={() => {}} />)}
				<View>
					<Button
						mode="text"
						icon="plus"
						color={blue600}
						onPress={this._addChecklist}
						style={styles.addChecklist}>
						Add checklist
					</Button>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	ChecklistWrapper: {
		marginVertical: 15
	},
	addChecklist: {
		padding: 5
	}
});
