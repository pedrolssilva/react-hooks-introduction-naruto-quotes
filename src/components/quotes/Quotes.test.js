import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react';
import {Quotes} from './Quotes';

const quote = 'test quote';
const speaker = 'random speaker';

test('Renders received quote, Speaker and a button', () => {
  render(<Quotes quote={quote} speaker={speaker} />);

  const quoteEl = screen.getByText(quote);
  const speakerEl = screen.getByText(`- ${speaker}`);
  const buttonEl = screen.getByRole('button');

  expect(quoteEl).toBeInTheDocument();
  expect(speakerEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
})