import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import {App} from './App'

test('renders this app with a button,a quote and an author', () => {
  render(<App />);

  const buttonEl = screen.getByRole('button');
  const imageEl = screen.getByRole('img');
  const textEl = screen.getByText(/Speaker/);

  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
});