import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/fixed-components/footer';

describe('Footer', () => {
    test("should render", () => {
        render(<Footer />);
        expect(screen.getByRole('footer')).toBeVisible();
    
    });
})