import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Home } from '../../src/pages/Home';

describe('Test on <Home />', () => {
  test('should render component', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/home']}>
        <Home />
      </MemoryRouter>
    );

    expect(container).toBeTruthy();
  });

  test('should contain search, category and recommendations sections', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <Home />
      </MemoryRouter>
    );

    const searchSection = screen.getByLabelText('search');
    const categorySection = screen.getByLabelText('category');
    const recommendationsSection = screen.getByLabelText('recommendations');

    expect(searchSection).toBeTruthy();
    expect(categorySection).toBeTruthy();
    expect(recommendationsSection).toBeTruthy();
  });

  test('should have sections with background colors corresponding to brand', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <Home />
      </MemoryRouter>
    );

    const searchSection = screen.getByLabelText('search');
    const brandSection = screen.getByLabelText('brand');
    const categorySection = screen.getByLabelText('category');
    const recommendationsSection = screen.getByLabelText('recommendations');
    const benefitsSection = screen.getByLabelText('benefits');

    expect(searchSection.classList).toContain('bg-darkGray');
    expect(brandSection.classList).toContain('bg-mainBlack');
    expect(categorySection.classList).toContain('bg-white');
    expect(recommendationsSection.classList).toContain('bg-darkGray');
    expect(benefitsSection.classList).toContain('bg-mainYellow');
  });
});
