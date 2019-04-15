/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Task from "./Task";

AppRegistry.registerComponent(appName, () => App);

Task.doAnotherStuff();