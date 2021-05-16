import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button/>', () => {
  it('should render a button with a text property', () => {
    render(<Button text="Load More" />);

    expect.assertions(1);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should have to execute a function when the component is clicked', () => {
    const fn = jest.fn();
    render(<Button text="Load More" action={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when this property is set as true', () => {
    render(<Button text="Load More" disabled={true} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
  });

  it('should be enabled when the property disabled is set as false', () => {
    render(<Button text="Load More" disabled={false} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const { container } = render(<Button text="Load More" disabled={false} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
