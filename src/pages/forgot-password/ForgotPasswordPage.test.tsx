import React from 'react';
import { render } from '@testing-library/react';
import LoginPage from "./ForgotPasswordPage";

test('renders learn react link', () => {
  const { getByText } = render(<LoginPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
