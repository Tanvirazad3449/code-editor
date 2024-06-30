import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/atoms/Button'; // adjust the import path as necessary
import '@testing-library/jest-dom'

describe(
    'Button', () => {

        it('renders Button component with provided label', () => {
            render(<Button label="Click Me" onClick={() => { }} />);
            const e = screen.getByText('Click Me')
            expect(e).toBeInTheDocument();
        });

        it('calls onClick function when button is clicked', () => {
            const handleClick = jest.fn();
            render(<Button label="Click Me" onClick={handleClick} />);
            fireEvent.click(screen.getByText('Click Me'));
            expect(handleClick).toHaveBeenCalledTimes(1);
        });

    }
)