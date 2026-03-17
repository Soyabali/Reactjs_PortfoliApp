import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Projects from './Projects';

describe('Projects Component', () => {
  it('renders the projects section', () => {
    render(<Projects />);
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });

  it('displays the section subtitle', () => {
    render(<Projects />);
    expect(screen.getByText('My Featured Work')).toBeInTheDocument();
  });

  it('renders all project cards', () => {
    render(<Projects />);
    expect(screen.getByText('HRMS Synergy')).toBeInTheDocument();
    expect(screen.getByText('Banking Portal')).toBeInTheDocument();
  });

  it('contains the projects-section class', () => {
    const { container } = render(<Projects />);
    expect(container.querySelector('.projects-section')).toBeInTheDocument();
  });
});
