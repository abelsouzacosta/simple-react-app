import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from '.';

describe('<Input />', () => {
  it('should render input', () => {
    render(<Input />);
  });

  it('should have a value on searchValue', () => {
    const fn = jest.fn();
    render(<Input searchValue="test" handleChange={fn} />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search...').value).toBe('test');
  });

  it('should call render function on each key pressed', () => {
    const fn = jest.fn();
    render(<Input handleChange={fn} />);

    const input = screen.getByPlaceholderText('Search...');
    const value = `value`;

    userEvent.type(input, value);
    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });
});
