import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	Image,
	TextInput,
	KeyboardAvoidingView,
	ScrollView,
	Alert
} from 'react-native';
import { Appbar, Headline, Paragraph, Subheading, List, Checkbox, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions/tasks';
import * as config from '../../../config';

import Container from '../Container';
import ChecklistItem from '../ChecklistItem';
import Checklist from '../Checklist';

/* CONSTANTS
============================================================================*/
const { height, width } = Dimensions.get('window');
const { grey500, grey600, grey800, grey700, blue600 } = config;

class AddTasks extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showCheckbox: false,
			title: null
		};
	}

	_backAndSave = async () => {
		const data = {
			id: this.props.tasks.length,
			title: this.state.title
		};

		await this.props.addTask(data);
		this.props.navigation.goBack();
	};

	_showChecklist = () => {
		this.setState({ showCheckbox: !this.state.showCheckbox });
	};

	_focusNote = () => {
		if (!this.state.showCheckbox) {
			this.noteRef.focus();
		}
	};

	_renderNote() {
		if (this.state.showCheckbox) {
			return <Checklist />;
		}

		return (
			<TextInput
				ref={(noteReft) => (this.noteRef = noteReft)}
				multiline={true}
				placeholder="Note"
				placeholderTextColor={grey600}
				accessibilityTraits="text"
				accessibilityRole="text"
				style={styles.note}
			/>
		);
	}

	render() {
		return (
			<Container>
				<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
					<Appbar.Header style={styles.appbarHeader}>
						<Appbar.BackAction onPress={this._backAndSave} color={grey700} />
					</Appbar.Header>
					<View style={{ flex: 1, height: height }}>
						<ScrollView
							style={{
								flex: 1
							}}
							keyboardShouldPersistTaps="handled"
							contentContainerStyle={{ padding: 20 }}>
							<TextInput
								placeholder="Title"
								autoFocus={true}
								numberOfLines={1}
								autoCorrect={false}
								placeholderTextColor={grey600}
								returnKeyType="next"
								accessibilityTraits="text"
								accessibilityRole="text"
								onChangeText={(title) => this.setState({ title })}
								onSubmitEditing={this._focusNote}
								style={styles.title}
							/>
							{this._renderNote()}
						</ScrollView>
						<Appbar style={styles.appbarBottom}>
							<Appbar.Action
								icon="checkbox-marked-outline"
								color={config.white}
								onPress={this._showChecklist}
							/>
						</Appbar>
					</View>
				</KeyboardAvoidingView>
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
		addTask: (data) => addTask(data, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTasks);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	appbarHeader: {
		backgroundColor: config.white
	},
	title: {
		fontWeight: 'normal',
		textAlign: 'left',
		writingDirection: 'ltr',
		fontSize: 24,
		lineHeight: 32,
		marginVertical: 2,
		letterSpacing: 0,
		color: grey800
	},
	note: {
		fontWeight: 'normal',
		textAlign: 'left',
		writingDirection: 'ltr',
		fontSize: 16,
		lineHeight: 24,
		marginVertical: 15,
		letterSpacing: 0.5,
		color: grey800
	},
	appbarBottom: {
		position: 'relative',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: config.blue400
	}
});
