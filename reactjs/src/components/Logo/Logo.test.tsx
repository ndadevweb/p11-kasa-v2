import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Logo from './Logo';

describe('Logo', () => {
  it('Should use "primary" type configuration when type value is invalid', () => {
    // @ts-expect-error intentional invalid value to test runtime fallback
    const { container } = render(<Logo type="this_type_does_not_exists" />);

    const svg = container.querySelector('svg');
    const path = container.querySelector('path');

    expect(svg).toHaveAttribute('width', '211');
    expect(path).toHaveAttribute('fill', '#FF6060');
  });

  it('Should use "primary" type configuration value', () => {
    const { container } = render(<Logo type="primary" />);

    const svg = container.querySelector('svg');
    const path = container.querySelector('path');

    expect(svg).toHaveAttribute('width', '211');
    expect(path).toHaveAttribute('fill', '#FF6060');
  });

  it('Should use "secondary" type configuration value', () => {
    const { container } = render(<Logo type="secondary" />);

    const svg = container.querySelector('svg');
    const path = container.querySelector('path');

    expect(svg).toHaveAttribute('width', '130');
    expect(path).toHaveAttribute('fill', '#FFF');
  });
});
