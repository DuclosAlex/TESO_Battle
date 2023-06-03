import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Game from '@/app/game/page';

describe('Describe game page', () => {
    it('should render properly', () => {
        render(<Game />);

        const header = screen.getByRole('heading');
        const headerText = 'Hello'

        expect(header).toHaveTextContent(headerText)
    })
})