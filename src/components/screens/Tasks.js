import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, ScrollView, Dimensions } from 'react-native';
import * as config from '../../../config';
import { Appbar, Title, Subheading, FAB, Searchbar } from 'react-native-paper';
import { connect } from 'react-redux';

import Container from '../Container';
import CustomStatusBar from '../CustomStatusBar';

/* CONSTANTS
============================================================================*/
const { grey600, grey800, blue600 } = config;
const { height, width } = Dimensions.get('window');
const IMAGE_SQUARE_SIZE = 250;

class Tasks extends Component {
	_addTodo = () => {
		this.props.navigation.navigate('AddTasks');
	};

	render() {
		return (
			<Container>
				<CustomStatusBar />
				<ScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps="handled">
					<View style={{ padding: 15 }}>
						<Searchbar placeholder="Search your notes" icon="magnify" selectionColor={config.grey700} />
					</View>
					<View style={styles.container}>
						<Image source={require('../../../assets/illustrations/home.png')} style={styles.image} />
						<Title style={styles.title}>A fresh start</Title>
						<Subheading style={styles.subheading}>Anything to add ?</Subheading>
						<FAB icon="plus" style={styles.fab} onPress={this._addTodo} />
					</View>
				</ScrollView>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		tasks: state.tasks
	};
};

export default connect(mapStateToProps, null)(Tasks);

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
