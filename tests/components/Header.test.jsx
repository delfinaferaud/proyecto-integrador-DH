import { render, screen } from '@testing-library/react';
import { Header } from '../../src/components/Header';
import { MemoryRouter } from 'react-router-dom';

describe('Test on <Header />', () => {
  test('should render component correctly', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/home']}>
        <Header />
      </MemoryRouter>
    );

    const header = container.querySelector('header');

    expect(header).toBeTruthy();
  });

  test('should have 100% width and be fixed on top ', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/home']}>
        <Header />
      </MemoryRouter>
    );

    const header = container.querySelector('header');

    expect(header.classList).toContain('w-full');
    expect(header.classList).toContain('fixed');
    expect(header.classList).toContain('top-0');
  });

  test('should render logo', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <Header />
      </MemoryRouter>
    );

    const logo = screen.getByLabelText('logo');

    expect(logo).toBeTruthy();
  });

  test('should render create account and login buttons', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <Header />
      </MemoryRouter>
    );

    const createAccountButton = screen.getByText('Crear cuenta');
    const loginButton = screen.getByText('Iniciar Sesión');

    expect(createAccountButton).toBeTruthy();
    expect(loginButton).toBeTruthy();
  });
});
