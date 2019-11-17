import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import * as config from '../../../config';
import { Appbar, Headline, Paragraph, Subheading } from 'react-native-paper';
import { MaterialCommunityIcons as Icon, MaterialCommunityIcons } from '@expo/vector-icons';

import Container from '../Container';

/* CONSTANTS
============================================================================*/
const { height, width } = Dimensions.get('window');
const { grey600, grey800, grey700, blue600 } = config;

export default class AddTasks extends Component {
	goBack = () => {
		this.props.navigation.goBack();
	};
    
    createNoteRef = (e) => (this.noteRef = e);

	_titleDone = () => {
		this.noteRef.focus();
    };
    
    _addCheckbox = () => {}


	render() {
		return (
			<Container>
				<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
					<Appbar.Header style={styles.appbarHeader}>
						<Appbar.BackAction onPress={this.goBack} color={grey700} />
					</Appbar.Header>
					<View style={styles.container}>
						<ScrollView style={{ flex: 1, height: height }}>
							<TextInput
								placeholder="Title"
								autoFocus={true}
								numberOfLines={1}
								selectionColor={grey600}
								placeholderTextColor={grey600}
								returnKeyType="next"
								accessibilityTraits="text"
								accessibilityRole="text"
								onSubmitEditing={this._titleDone}
								style={{
									fontWeight: 'normal',
									textAlign: 'left',
									writingDirection: 'ltr',
									fontSize: 24,
									lineHeight: 32,
									marginVertical: 2,
									letterSpacing: 0
								}}
							/>
							<TextInput
								ref={this.createNoteRef}
								multiline={true}
								placeholder="Note"
								selectionColor={grey600}
								placeholderTextColor={grey600}
								accessibilityTraits="text"
								accessibilityRole="text"
								style={{
									fontWeight: 'normal',
									textAlign: 'left',
									writingDirection: 'ltr',
									fontSize: 16,
									lineHeight: 24,
									marginVertical: 15,
									letterSpacing: 0.5
								}}
							/>
						</ScrollView>
						<Appbar
							style={{
								position: 'absolute',
								bottom: 0,
								left: 0,
								right: 0,
								backgroundColor: config.blue400
							}}>
							<Appbar.Action
								icon="checkbox-marked-outline"
								color={config.white}
								onPress={this._addCheckbox}
							/>
						</Appbar>
					</View>
				</KeyboardAvoidingView>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	appbarHeader: {
		backgroundColor: config.white
	}
});
