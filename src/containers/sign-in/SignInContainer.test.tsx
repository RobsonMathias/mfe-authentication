import React from 'react';
import { render } from '@testing-library/react';
import SignInContainer from "./SignInContainer";

test('renders learn react link', () => {
  const { getByText } = render(<SignInContainer />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
