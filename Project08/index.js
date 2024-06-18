/**
 * @format
 */
import TrackPlayer from 'react-native-track-player';
import { playbackService } from './musicPlayerServices';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(...);
//its used for registering the service throughout the app
TrackPlayer.registerPlaybackService(() => playbackService);
