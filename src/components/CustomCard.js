import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import * as config from '../../config';

const { height, width } = Dimensions.get('window');

export default class CustomCard extends PureComponent {
	state = {
		selected: false
	};

	_onPress = (data) => {
		this.props.onPress(data);
	};

	_onLongPress = (data) => {
		this.props.onLongPress(data);
		this.setState({ selected: true });
	};

	render() {
		const { data } = this.props;
		return (
			<Card
				onPress={() => this._onPress(data)}
				onLongPress={() => this._onLongPress(data)}
				key={data.id}
				style={{
					margin: 5,
					height: 200,
					width: width / 2 - 30,
					backgroundColor: data.bacol || config.white,
					borderWidth: 1,
					borderColor: this.state.selected ? config.red400 : 'transparent'
				}}>
				<Card.Title title={data.title} />
				<Card.Content>
					<Paragraph>{data.content}</Paragraph>
				</Card.Content>
			</Card>
		);
	}
}
