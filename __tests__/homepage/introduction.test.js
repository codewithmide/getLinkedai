/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Introduction from '../../src/components/Introduction';
import '@testing-library/jest-dom/extend-expect';

test('Introduction image must be present', () => {
  render(<Introduction />);

  // Test for the presence of the introduction image
  const introImage = screen.queryAllByAltText('star');
  expect(introImage).toBeInTheDocument();
});

test('Introduction heading must be present', () => {
  render(<Introduction />);

  // Test for the presence of the introduction heading
  const introHeading = screen.getByText('Introduction to getlinked tech Hackathon 1.0');
  expect(introHeading).toBeInTheDocument();
});

test('Introduction paragraph must be present', () => {
  render(<Introduction />);

  // Test for the presence of the introduction paragraph
  const introParagraph = screen.getByText(/Our tech hackathon is a melting pot of visionaries/);
  expect(introParagraph).toBeInTheDocument();
});
