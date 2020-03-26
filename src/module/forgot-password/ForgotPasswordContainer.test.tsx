import React from 'react';
import { render } from '@testing-library/react';
import ForgotPasswordContainer from "./ForgotPasswordContainer";

test('renders learn react link', () => {
  const { getByText } = render(<ForgotPasswordContainer />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
