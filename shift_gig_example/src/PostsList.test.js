import React from 'react';
import PostList from './components/Posts/PostList'
import renderer from 'react-test-renderer';

it('Jest - PostList snapshop renders correctly', () => {
  const tree = renderer
    .create(<PostList/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

