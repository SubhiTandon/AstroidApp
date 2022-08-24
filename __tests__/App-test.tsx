/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Asteroiddetails from '../src/components/Hoome/Asteroiddetails';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Asteroiddetails />);
});
