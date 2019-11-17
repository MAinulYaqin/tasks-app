import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { fromRight } from 'react-navigation-transitions';

import Intro from '../components/screens/Intro';
import Tasks from '../components/screens/Tasks';
import Archives from '../components/screens/Archives';

const TasksStack = createDrawerNavigator({
	Tasks: Tasks,
	Archives: Archives
}, {
	initialRouteName: 'Tasks'
});

const AppNavigator = createStackNavigator(
	{
		Intro: Intro,
		Tasks: TasksStack
	},
	{
		initialRouteName: 'Intro',
		headerMode: 'none',
		transitionConfig: () => fromRight()
	}
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
