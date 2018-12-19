import { configure } from '@storybook/react';
import { configure as config } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
config({ adapter: new Adapter() });
// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
