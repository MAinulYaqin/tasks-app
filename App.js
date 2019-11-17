import React from 'react';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/redux/index';
import AppContainer from './src/route/index';

import CustomStatusBar from './src/components/CustomStatusBar';

export default class App extends React.Component {
	state = {
		isReady: false
	};

	async _cacheResourcesAsync() {
		const images = [
			require('./assets/illustrations/home.png'),
			require('./assets/illustrations/intro.png'),
			require('./assets/illustrations/task-700x500.png')
		];

		const cacheImages = images.map((e) => {
			return Asset.fromModule(e).downloadAsync();
		});

		await Promise.all(cacheImages);
	}

	_setReady = () => {
		this.setState({ isReady: true });
	};

	render() {
		if (this.state.isReady) {
			return (
				<StoreProvider store={store}>
					<PaperProvider>
						<AppContainer />
					</PaperProvider>
				</StoreProvider>
			);
		}

		return <AppLoading startAsync={this._cacheResourcesAsync} onFinish={this._setReady} />;
	}
}
