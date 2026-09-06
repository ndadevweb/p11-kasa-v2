import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { afterEach, describe, expect, it } from 'vitest';

import Dropdown from './Dropdown';
import styles from './Dropdown.module.css';

describe('Dropdown', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should displaying title and children', () => {
    render(
      <Dropdown title="Description">
        <p>Dropdown content</p>
      </Dropdown>,
    );

    expect(screen.getByRole('heading', { name: /Description/ })).toBeInTheDocument();
    expect(screen.getByText('Dropdown content')).toBeInTheDocument();
  });

  it('Should is closed by default', () => {
    render(
      <Dropdown title="Description">
        <p>Dropdown content</p>
      </Dropdown>,
    );

    expect(screen.getByAltText('open')).toBeInTheDocument();
  });

  it('Should is expanded by default when isDefaultExpanded is true', () => {
    render(
      <Dropdown isDefaultExpanded title="Description">
        <p>Dropdown content</p>
      </Dropdown>,
    );

    expect(screen.getByAltText('close')).toBeInTheDocument();
  });

  it('Should toggles dropdown state when button is clicked', async () => {
    const user = userEvent.setup();

    render(
      <Dropdown title="Description">
        <p>Dropdown content</p>
      </Dropdown>,
    );

    const button = screen.getByRole('button');

    expect(screen.getByAltText('open')).toBeInTheDocument();

    await user.click(button);

    expect(screen.getByAltText('close')).toBeInTheDocument();

    await user.click(button);

    expect(screen.getByAltText('open')).toBeInTheDocument();
  });

  it('Should uses thin style by default', () => {
    const { container } = render(
      <Dropdown title="Description">
        <p>Dropdown content</p>
      </Dropdown>,
    );

    expect(container.querySelector('section')).toHaveClass(styles.thin);
  });

  it('Should uses large style when optionStyle is large', () => {
    const { container } = render(
      <Dropdown title="Description" optionStyle="large">
        <p>Dropdown content</p>
      </Dropdown>,
    );

    expect(container.querySelector('section')).toHaveClass(styles.large);
  });
});
