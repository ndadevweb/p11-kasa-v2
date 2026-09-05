import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, describe, expect, it } from 'vitest';
import Navigation from './Navigation';
import styles from './Navigation.module.css';

describe('Navigation Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should Renders navigation links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'Accueil' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'A Propos' })).toHaveAttribute('href', '/about');
  });

  it('Should "Accueil" link active on "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navigation />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'Accueil' })).toHaveClass(styles.active);
    expect(screen.getByRole('link', { name: 'A Propos' })).not.toHaveClass(styles.active);
  });

  it('Should "A Propos" link active on "/about"', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Navigation />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'Accueil' })).not.toHaveClass(styles.active);
    expect(screen.getByRole('link', { name: 'A Propos' })).toHaveClass(styles.active);
  });
});
