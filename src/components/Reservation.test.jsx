import React from 'react';
import { render, screen } from '@testing-library/react';
import Reservation from './Reservation';
import '@testing-library/jest-dom';

describe('Reservation Component', () => {
  beforeEach(() => {
    // Mock window.alert to prevent jsdom error
    window.alert = jest.fn();
  });

  it('renders the reservation form with all fields', () => {
    render(<Reservation />);
    expect(screen.getByText('Book A Table')).toBeInTheDocument();
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of People')).toBeInTheDocument();
    expect(screen.getByLabelText('Date and Time')).toBeInTheDocument();
    expect(screen.getByLabelText('Your Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('has empty fields initially', () => {
    render(<Reservation />);
    expect(screen.getByLabelText('First Name').value).toBe('');
    expect(screen.getByLabelText('Email Address').value).toBe('');
    expect(screen.getByLabelText('Number of People').value).toBe('');
    expect(screen.getByLabelText('Date and Time').value).toBe('');
    expect(screen.getByLabelText('Your Message').value).toBe('');
  });
});

