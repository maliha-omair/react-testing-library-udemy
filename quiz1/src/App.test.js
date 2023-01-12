import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';

test('check button is enabled and checbox is unchecked', () => {
  render(<App />);
  //button is enabled
  const buttonElement = screen.getByRole('button',{ name: 'button'});
  expect(buttonElement).toBeEnabled();

  //checkbox is unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('check button is disabled on checkbox checked', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button',{ name: 'button'});
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);
  expect(buttonElement).toBeDisabled();

  fireEvent.click(checkbox);
  expect(buttonElement).toBeEnabled();

});