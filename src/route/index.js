import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromRight } from 'react-navigation-transitions';

import Intro from '../components/screens/Intro';

const AppNavigator = createStackNavigator(
	{
		Intro: Intro
	},
	{
		initialRouteName: 'Intro',
		headerMode: 'none',
		transitionConfig: () => fromRight()
	}
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
