import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromRight, fromBottom } from 'react-navigation-transitions';

import Intro from '../components/screens/Intro';
import Tasks from '../components/screens/Tasks';
import AddTasks from '../components/screens/AddTasks';

const TasksStack = createStackNavigator(
	{
		Tasks: Tasks,
		AddTasks: AddTasks
	},
	{
		initialRouteName: 'Tasks',
		headerMode: 'none'
	}
);

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
