
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FileItem from '.';

// Mock the styles module
jest.mock('./FileItem.module.css', () => ({
    container: 'mocked-container',
    icon: 'mocked-icon',
}));

// Mock the react-icons library
jest.mock('react-icons/cg', () => ({
    CgFile: jest.fn(() => <span data-testid="mocked-icon" />),
}));

describe('FileItem', () => {
    it('renders the title correctly', () => {
        const title = 'Test File';
        const { getByText } = render(<FileItem title={title} />);

        expect(getByText(title)).toBeInTheDocument();
    });

    it('renders the icon correctly', () => {
        const title = 'Test File';
        const { getByTestId } = render(<FileItem title={title} />);

        expect(getByTestId('mocked-icon')).toBeInTheDocument();
    });

    it('applies the correct styles', () => {
        const title = 'Test File';
        const { container } = render(<FileItem title={title} />);

        expect(container.firstChild).toHaveClass('mocked-container');
    });
});
