import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, ScrollView, Dimensions, FlatList } from 'react-native';
import * as config from '../../../config';
import { Appbar, Title, Subheading, FAB, Searchbar, Card, Paragraph } from 'react-native-paper';
import { connect } from 'react-redux';

import Container from '../Container';
import CustomStatusBar from '../CustomStatusBar';

/* CONSTANTS
============================================================================*/
const { grey600, grey800, blue600 } = config;
const { height, width } = Dimensions.get('window');
const IMAGE_SQUARE_SIZE = 250;

class Tasks extends Component {
	_renderCards() {
		if (this.props.tasks.length === 0) {
			return (
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center'
					}}>
					<Image source={require('../../../assets/illustrations/home.png')} style={styles.image} />
					<Title style={styles.title}>A fresh start</Title>
					<Subheading style={styles.subheading}>Anything to add ?</Subheading>
				</View>
			);
		}

		return (
			<FlatList
				style={{ flex: 1 }}
				contentContainerStyle={{ padding: 20, paddingTop: 76 }}
				numColumns={2}
				data={this.props.tasks}
				keyExtractor={(e) => JSON.stringify(e.id)}
				renderItem={({ index, item }) => {
					return (
						<Card key={item.id} style={{ margin: 5, height: 200, width: width / 2 - 30, backgroundColor: item.bacol }}>
							<Card.Title title={item.title} />
							<Card.Content>
								<Paragraph>{item.content}</Paragraph>
							</Card.Content>
						</Card>
					);
				}}
			/>
		);
	}

	_addTodo = () => {
		this.props.navigation.navigate('AddTasks');
	};

	render() {
		return (
			<Container>
				<CustomStatusBar />
				<View style={styles.container}>
					<Searchbar
						placeholder="Search your notes"
						icon="magnify"
						selectionColor={config.grey700}
						style={{ position: 'absolute', top: 0, margin: 15 }}
					/>
					{this._renderCards()}
					<FAB icon="plus" style={styles.fab} onPress={this._addTodo} />
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

export default connect(mapStateToProps, null)(Tasks);

const styles = StyleSheet.create({
	container: {
		flex: 1
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
