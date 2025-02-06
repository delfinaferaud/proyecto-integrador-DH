import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from '../../src/components/Footer';

describe('Test on <Footer />', () => {
  test('should render component', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/home']}>
        <Footer />
      </MemoryRouter>
    );

    const footer = container.querySelector('footer');

    expect(footer).toBeTruthy();
  });

  test('should have 100% width', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/home']}>
        <Footer />
      </MemoryRouter>
    );

    const footer = container.querySelector('footer');

    expect(footer.classList).toContain('w-full');
  });

  test('should have logo, year and copyright', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <Footer />
      </MemoryRouter>
    );

    const copyright = 'Copyright © 2023 SoundStock';
    const copyrightSpan = screen.getByLabelText('copyright');
    const logo = screen.getByLabelText('logo');

    expect(logo).toBeTruthy();
    expect(copyrightSpan.textContent).toMatch(copyright);
  });
});
