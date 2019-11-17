import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import * as config from '../../../config';
import { Appbar, Title, Subheading, FAB, Searchbar } from 'react-native-paper';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import Container from '../Container';
import CustomStatusBar from '../CustomStatusBar';

/* CONSTANTS
============================================================================*/
const { grey600, grey800, blue600 } = config;
const IMAGE_SQUARE_SIZE = 250;

export default class Tasks extends Component {
	static navigationOptions = {
		drawerIcon: ({ tintColor }) => <Icon name="playlist-edit" size={25} color={tintColor} />
	};

	_openDrawer = () => {
		this.props.navigation.openDrawer();
	};

	_addTodo = () => {};

	render() {
		return (
			<Container>
				<CustomStatusBar />
				<View style={{ padding: 15 }}>
					<Searchbar
						placeholder="Search your notes"
						icon="menu"
						selectionColor={config.grey700}
						onIconPress={this._openDrawer}
					/>
				</View>
				<View style={styles.container}>
					<Image source={require('../../../assets/illustrations/home.png')} style={styles.image} />
					<Title style={styles.title}>A fresh start</Title>
					<Subheading style={styles.subheading}>Anything to add ?</Subheading>
					<FAB icon="plus" style={styles.fab} onPress={this._addTodo} />
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
	},
	header: {
		backgroundColor: 'white'
	},
	headerTitle: {
		color: grey800
	},
	image: {
		width: IMAGE_SQUARE_SIZE,
		height: IMAGE_SQUARE_SIZE
	},
	title: {
		color: grey800
	},
	subheading: {
		color: grey600
	},
	fab: {
		backgroundColor: blue600,
		position: 'absolute',
		margin: 16,
		bottom: 0,
		right: 0
	}
});
