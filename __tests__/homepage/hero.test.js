import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../../src/components/Hero';
import { BrowserRouter as Router } from 'react-router-dom';

test('All images, svgs, and icons must be present', () => {
  render(
    <Router>
      <Hero />
    </Router>
  );

  // Test for the presence of images, svgs, and icons
  const heroImages = screen.getAllByAltText(/.*/);
  expect(heroImages).toHaveLength(12);
});

test('All background flares must be present', () => {
  render(
    <Router>
      <Hero />
    </Router>
  );

  // Test for the presence of background flares
  const backgroundFlares = screen.getAllByAltText('purple flare');
  expect(backgroundFlares).toHaveLength(3);
});

