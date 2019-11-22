import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, ScrollView, Dimensions, FlatList, AsyncStorage } from 'react-native';
import * as config from '../../../config';
import { Title, Subheading, FAB, Searchbar } from 'react-native-paper';
import { addTask, removeTask } from '../../redux/actions/tasks';
import { connect } from 'react-redux';

import Container from '../Container';
import CustomStatusBar from '../CustomStatusBar';
import CustomCard from '../CustomCard';

/* CONSTANTS
============================================================================*/
const { grey600, grey800, blue600 } = config;
const { height, width } = Dimensions.get('window');
const IMAGE_SQUARE_SIZE = 250;

class Tasks extends Component {
	state = {
		selected: false,
		keys: [],
		selectedData: []
	};

	async getItems() {
		await AsyncStorage.getAllKeys().then((keys) => {
			this.setState({ keys });
		});

		await this.state.keys.map((e) => {
			AsyncStorage.getItem(e).then((data) => {
				this.props.addTask(JSON.parse(data));
			});
		});
	}

	componentDidMount() {
		if (this.props.tasks.length === 0) {
			this.getItems();
		}
	}

	_removeTask(data) {
		this.props.removeTask(data);
		AsyncStorage.removeItem(`@data${data}`);
	}

	_onCustomCardPress = (data) => {
		this.props.navigation.navigate('AddTasks', {
			...data
		});
	};

	_onCustomCardLongPress = (data) => {
		this.state.selectedData.push(data);
		this.setState({ selected: true });
	};

	_onFabPress = async () => {
		if (this.state.selected) {
			let data = this.state.selectedData;

			if (data.length > 1) {
				for (let i = 0; i < data.length; i++) {
					await this._removeTask(data[i].id);
				}
			} else {
				await this._removeTask(data[0].id);
			}
			this.setState({ selectedData: [], selected: false });
		} else {
			this.props.navigation.navigate('AddTasks');
		}
	};

	_renderCards() {
		if (this.props.tasks.length === 0) {
			return (
				<View style={styles.header}>
					<Image source={require('../../../assets/illustrations/home.png')} style={styles.image} />
					<Title style={styles.title}>A fresh start</Title>
					<Subheading style={styles.subheading}>Anything to add ?</Subheading>
				</View>
			);
		}

		return (
			<FlatList
				style={styles.listWrapepr}
				contentContainerStyle={styles.listContainer}
				numColumns={2}
				data={this.props.tasks}
				keyExtractor={(e) => JSON.stringify(e.id)}
				renderItem={({ index, item }) => {
					return (
						<CustomCard
							data={item}
							onPress={(data) => this._onCustomCardPress(data)}
							onLongPress={(data) => this._onCustomCardLongPress(data)}
						/>
					);
				}}
			/>
		);
	}

	render() {
		return (
			<Container>
				<CustomStatusBar />
				<View style={styles.container}>
					<Searchbar
						importantForAccessibility="yes"
						placeholder="Search your notes"
						icon="magnify"
						selectionColor={config.grey700}
						style={styles.searchbar}
					/>
					{this._renderCards()}
					<FAB icon={this.state.selected ? 'delete' : 'plus'} style={styles.fab} onPress={this._onFabPress} />
				</View>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		tasks: state.tasks
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTask: (data) => addTask(data, dispatch),
		removeTask: (data) => removeTask(data, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	searchbar: {
		position: 'absolute',
		top: 0,
		margin: 15,
		zIndex: 1
	},
	header: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
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
	listWrapepr: {
		flex: 1
	},
	listContainer: {
		padding: 20,
		paddingTop: 76
	},
	fab: {
		backgroundColor: blue600,
		position: 'absolute',
		margin: 16,
		bottom: 0,
		right: 0
	}
});
