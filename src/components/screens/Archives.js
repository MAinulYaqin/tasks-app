import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import * as config from '../../../config';

import Container from '../Container';
import CustomStatusBar from '../CustomStatusBar';

export default class Archives extends Component {
	static navigationOptions = {
		drawerIcon: ({ tintColor }) => <Icon name="package-down" size={25} color={tintColor} />
	};

	_openDrawer = () => {
		this.props.navigation.openDrawer();
	};

	render() {
		return (
			<Container>
				<CustomStatusBar />
				<View style={{ padding: 15 }}>
					<Searchbar
						placeholder="Search archived tasks"
						icon="menu"
						selectionColor={config.grey700}
						onIconPress={this._openDrawer}
					/>
				</View>
				<View style={styles.container}>
					<Text>Archives</Text>
				</View>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
