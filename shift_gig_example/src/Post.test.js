import React from 'react';
import Post from './components/Posts/Post'
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// strategy for testing connected components - creare a store and pass it to our connected component
// create any initial state needed
const initialState = {}; 
// here it is possible to pass in any middleware if needed into configureStore
const mockStore = configureStore();
let wrapper;
let store;
beforeEach(() => {
  //creates the store with any initial state or middleware needed  
  store = mockStore(initialState)
  wrapper = shallow(<Post store={store}/>)
 })


it('Jest - Post snapshop renders correctly', () => {
  const tree = renderer
    .create(<wrapper/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

