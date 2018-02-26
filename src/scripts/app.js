//import * as _ from 'lodash';
import { sayHello } from './utils';
import './shared';
import '../styles/appStyles.scss';

sayHello();

_.each([1,2,3], val => console.log(`Hello from Lodash: ${val}`));