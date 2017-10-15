import React from 'react'
import { create as render } from 'react-test-renderer'
import Foo from './index'

it('renders', () => {
  const component = render(<Foo />)
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})