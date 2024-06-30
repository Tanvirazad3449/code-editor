import { fireEvent, render, screen } from '@testing-library/react';
import HoverableButton from '@/components/atoms/HoverableButton'; // adjust the import path as necessary
import '@testing-library/jest-dom'

describe(
    'HoverableButton', () => {
        it('renders HoverableButton component with provided title', () => {
            // Mock functions for props
            const mockOnAddFile = jest.fn();
            const mockOnAddFolder = jest.fn();
            const mockToggleExpand = jest.fn();

            render(
                <HoverableButton
                    title="Click Me"
                    onAddFile={mockOnAddFile}
                    onAddFolder={mockOnAddFolder}
                    toggleExpand={mockToggleExpand}
                    isExpanded={false}
                />
            );

            // Assert that the title text is rendered
            const titleElement = screen.getByText('Click Me');
            expect(titleElement).toBeInTheDocument();
        });

        it('toggles expand/collapse on click', () => {
            // Mock functions for props
            const mockOnAddFile = jest.fn();
            const mockOnAddFolder = jest.fn();
            const mockToggleExpand = jest.fn();

            render(
                <HoverableButton
                    title="Click Me"
                    onAddFile={mockOnAddFile}
                    onAddFolder={mockOnAddFolder}
                    toggleExpand={mockToggleExpand}
                    isExpanded={false}
                />
            );

            // Click the component to toggle expand
            fireEvent.click(screen.getByText('Click Me'));
            expect(mockToggleExpand).toHaveBeenCalledTimes(1);

            // Click again to toggle collapse
            fireEvent.click(screen.getByText('Click Me'));
            expect(mockToggleExpand).toHaveBeenCalledTimes(2);
        });

        it('shows IconButton components on hover', () => {
            // Mock functions for props
            const mockOnAddFile = jest.fn();
            const mockOnAddFolder = jest.fn();
            const mockToggleExpand = jest.fn();

            render(
                <HoverableButton
                    title="Click Me"
                    onAddFile={mockOnAddFile}
                    onAddFolder={mockOnAddFolder}
                    toggleExpand={mockToggleExpand}
                    isExpanded={false}
                />
            );

            // Hover over the component to show IconButton components
            fireEvent.mouseEnter(screen.getByText('Click Me'));
            expect(screen.getByRole('button', { name: 'Add File' })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Add Folder' })).toBeInTheDocument();

            // Move mouse out of the component
            fireEvent.mouseLeave(screen.getByText('Click Me'));
            expect(screen.queryByRole('button', { name: 'Add File' })).not.toBeInTheDocument();
            expect(screen.queryByRole('button', { name: 'Add Folder' })).not.toBeInTheDocument();
        });

        it('calls onAddFile and onAddFolder functions on IconButton click', () => {
            // Mock functions for props
            const mockOnAddFile = jest.fn();
            const mockOnAddFolder = jest.fn();
            const mockToggleExpand = jest.fn();

            render(
                <HoverableButton
                    title="Click Me"
                    onAddFile={mockOnAddFile}
                    onAddFolder={mockOnAddFolder}
                    toggleExpand={mockToggleExpand}
                    isExpanded={false}
                />
            );
            fireEvent.mouseEnter(screen.getByText('Click Me'));

           // Click on Add File button
    fireEvent.click(screen.getByRole('button', { name: 'Add File' }));
    expect(mockOnAddFile).toHaveBeenCalledTimes(1);

    // Click on Add Folder button
    fireEvent.click(screen.getByRole('button', { name: 'Add Folder' }));
    expect(mockOnAddFolder).toHaveBeenCalledTimes(1);
        });
    }
)