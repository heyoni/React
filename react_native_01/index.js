/**
 * @format
 */
//앱의 메인 입구
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//새로운 컴포넌트 등록
//2개의 인자 : appname, app을 시작할 때 렌더링되는 값
AppRegistry.registerComponent(appName, () => App);
