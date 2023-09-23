import React from 'react';
import Navbar from '../../src/components/navbar'
import { render, screen, fireEvent } from '@testing-library/react';

test('Logo must be visible', () => {
  render(<Navbar />);
});

test('Logo must route to the homepage', () => {
  // Mock the Next.js router (you may need to customize this part based on your setup)
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');
  useRouter.mockImplementation(() => ({
    push: jest.fn(),
  }));

  render(<Navbar />);
});

test('Necessary links must be present and clickable', () => {
  render(<Navbar />);
  const timelineLink = screen.getByText('Timeline');
  const overviewLink = screen.getByText('Overview');
  const faqsLink = screen.getByText('FAQs');
  const contactLink = screen.getByText('Contact');

  fireEvent.click(timelineLink);
  // Add assertions to verify that the timeline link works

  fireEvent.click(overviewLink);
  // Add assertions to verify that the overview link works

  fireEvent.click(faqsLink);
  // Add assertions to verify that the FAQs link works

  fireEvent.click(contactLink);
  // Add assertions to verify that the contact link works
});

test('A call to action button that routes to the Register page', () => {
  // Mock the Next.js router (you may need to customize this part based on your setup)
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');
  useRouter.mockImplementation(() => ({
    push: jest.fn(),
  }));

  render(<Navbar />);
  const registerButton = screen.getByText('Register');
  fireEvent.click(registerButton);
});
